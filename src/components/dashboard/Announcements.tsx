
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Announcement = {
  title: string;
  date: string;
  content: string;
  category: string;
};

export function Announcements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
useEffect(() => {
  const localData = JSON.parse(localStorage.getItem("announcements") || "[]");

  if (localData.length > 0) {
    // If there are announcements added by admin (from localStorage)
    setAnnouncements(localData);
  } else {
    // Otherwise, use default announcements from announcements.json
    fetch("/data/announcements.json")
      .then((res) => res.json())
      .then((data) => setAnnouncements(data));
  }
}, []);


  const getCategoryColor = (category: string): string => {
    switch (category) {
      case "HR":
        return "bg-blue-100 text-blue-800";
      case "Policies":
        return "bg-amber-100 text-amber-800";
      case "Employee Engagement":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="sk-card">
      <CardHeader className="pb-3">
        <CardTitle>Announcements</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {announcements.map((announcement, index) => (
          <div key={index} className="flex flex-col space-y-2 border-b pb-3 last:border-b-0 last:pb-0">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold">{announcement.title}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">{announcement.date}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColor(announcement.category)}`}>
                    {announcement.category}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm">{announcement.content}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
