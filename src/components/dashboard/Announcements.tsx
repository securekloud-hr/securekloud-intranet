
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Announcement = {
  title: string;
  date: string;
  content: string;
  category: string;
};

export function Announcements() {
  const announcements: Announcement[] = [
    {
      title: "Quarterly Performance Reviews",
      date: "June 15, 2025",
      content: "Quarterly performance reviews will begin next week. Please complete your self-assessment by Friday.",
      category: "HR",
    },
    {
      title: "New Data Security Policy",
      date: "June 10, 2025",
      content: "A new data security policy has been implemented. All employees must complete the training by the end of the month.",
      category: "Policies",
    },
    {
      title: "Team Building Event",
      date: "June 25, 2025",
      content: "Join us for a team building event at the Grand Hotel. RSVP by June 20.",
      category: "Employee Engagement",
    },
  ];

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
