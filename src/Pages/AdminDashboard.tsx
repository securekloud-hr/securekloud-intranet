import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

// ✅ Reusable fetch API wrapper
const api = async (url: string, options?: RequestInit) => {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

// ✅ Types
interface Announcement {
  _id: string;
  title: string;
  content: string;
}

interface Event {
  _id: string;
  title: string;
  date: string;
}

export default function AdminDashboard() {
  const queryClient = useQueryClient();

  const [newAnnouncement, setNewAnnouncement] = useState({ title: "", content: "" });
  const [newEvent, setNewEvent] = useState({ title: "", date: "" });
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // ✅ Fetch announcements
  const { data: announcements = [] } = useQuery<Announcement[]>({
    queryKey: ["announcements"],
    queryFn: () => api("http://192.168.26.103:8000/api/admin/announcements"),
  });

  // ✅ Fetch events
  const { data: events = [] } = useQuery<Event[]>({
    queryKey: ["events"],
    queryFn: () => api("http://192.168.26.103:8000/api/admin/events"),
  });

  // ✅ Add announcement
  const addAnnouncement = useMutation({
    mutationFn: (announcement: { title: string; content: string }) =>
      api("http://192.168.26.103:8000/api/admin/announcements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(announcement),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["announcements"]);
      setNewAnnouncement({ title: "", content: "" });
      toast({ title: "✅ Announcement added successfully" });
    },
    onError: (err: any) => {
      toast({ title: "❌ Failed to add announcement", description: err.message });
    },
  });

  // ✅ Delete announcement
  const deleteAnnouncement = useMutation({
    mutationFn: (id: string) =>
      api(`http://192.168.26.103:8000/api/admin/announcements/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["announcements"]);
      toast({ title: "🗑️ Announcement deleted" });
    },
    onError: (err: any) => {
      toast({ title: "❌ Failed to delete announcement", description: err.message });
    },
  });

  // ✅ Add event
  const addEvent = useMutation({
    mutationFn: (event: { title: string; date: string }) =>
      api("http://192.168.26.103:8000/api/admin/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["events"]);
      setNewEvent({ title: "", date: "" });
      toast({ title: "✅ Event added successfully" });
    },
    onError: (err: any) => {
      toast({ title: "❌ Failed to add event", description: err.message });
    },
  });

  // ✅ Delete event
  const deleteEvent = useMutation({
    mutationFn: (id: string) =>
      api(`http://192.168.26.103:8000/api/admin/events/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["events"]);
      toast({ title: "🗑️ Event deleted" });
    },
    onError: (err: any) => {
      toast({ title: "❌ Failed to delete event", description: err.message });
    },
  });

  // ✅ Upload Employee Directory Excel
  const handleEmployeeUpload = async () => {
    if (!selectedFile) {
      toast({ title: "⚠️ Please select an Excel file first." });
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    setUploading(true);

    try {
      const res = await fetch("http://192.168.26.103:8000/api/employeedirectory/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        toast({ title: "✅ Employee Directory updated successfully!" });
      } else {
        toast({ title: "❌ Upload failed", description: data.error });
      }
    } catch (err: any) {
      toast({ title: "❌ Error uploading Excel", description: err.message });
    } finally {
      setUploading(false);
      setSelectedFile(null);
    }
  };

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      {/* ✅ Announcements Section */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Announcements</h2>
        <div className="flex flex-col md:flex-row gap-2 mb-4">
          <input
            className="border p-2 rounded w-full"
            placeholder="Title"
            value={newAnnouncement.title}
            onChange={(e) =>
              setNewAnnouncement({ ...newAnnouncement, title: e.target.value })
            }
          />
          <input
            className="border p-2 rounded w-full"
            placeholder="Content"
            value={newAnnouncement.content}
            onChange={(e) =>
              setNewAnnouncement({ ...newAnnouncement, content: e.target.value })
            }
          />
          <Button onClick={() => addAnnouncement.mutate(newAnnouncement)}>Add</Button>
        </div>

        <ul className="space-y-2">
          {announcements.map((a) => (
            <li
              key={a._id}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <div className="font-semibold">{a.title}</div>
                <div className="text-sm text-muted-foreground">{a.content}</div>
              </div>
              <Button
                variant="destructive"
                onClick={() => deleteAnnouncement.mutate(a._id)}
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </section>

      {/* ✅ Events Section */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Upcoming Events</h2>
        <div className="flex gap-2 mb-4">
          <input
            className="border p-2 rounded w-full"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />
          <input
            type="date"
            className="border p-2 rounded"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          />
          <Button onClick={() => addEvent.mutate(newEvent)}>Add</Button>
        </div>

        <ul className="space-y-2">
          {events.map((e) => (
            <li
              key={e._id}
              className="flex justify-between items-center border-b py-2"
            >
              <span>
                {e.title} — {new Date(e.date).toLocaleDateString()}
              </span>
              <Button variant="destructive" onClick={() => deleteEvent.mutate(e._id)}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </section>

      {/* ✅ Employee Directory Upload Section */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Employee Directory Upload</h2>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
            className="border p-2 rounded w-full"
          />
          <Button onClick={handleEmployeeUpload} disabled={uploading}>
            {uploading ? "Uploading..." : "Upload"}
          </Button>
        </div>
        {selectedFile && (
          <p className="text-sm text-gray-600 mt-2">
            Selected file: <strong>{selectedFile.name}</strong>
          </p>
        )}
      </section>
    </div>
  );
}
