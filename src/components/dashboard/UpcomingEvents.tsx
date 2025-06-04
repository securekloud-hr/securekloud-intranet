
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

type Event = {
  title: string;
  date: string;
  time: string;
  type: string;
};

export function UpcomingEvents() {
  const events: Event[] = [
    {
      title: "Monthly All-Hands Meeting",
      date: "June 20, 2025",
      time: "10:00 AM - 11:30 AM",
      type: "Meeting",
    },
    {
      title: "Product Launch Webinar",
      date: "June 22, 2025",
      time: "2:00 PM - 3:30 PM",
      type: "Webinar",
    },
    {
      title: "Leadership Training",
      date: "June 30, 2025",
      time: "9:00 AM - 5:00 PM",
      type: "Training",
    },
  ];

  const getEventIcon = (type: string) => {
    return <Calendar className="h-4 w-4 text-skcloud-purple" />;
  };

  return (
    <Card className="sk-card">
      <CardHeader className="pb-3">
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {events.map((event, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="mt-1">{getEventIcon(event.type)}</div>
              <div>
                <h4 className="font-medium">{event.title}</h4>
                <div className="text-sm text-muted-foreground">
                  {event.date} · {event.time}
                </div>
                <div className="mt-1">
                  <span className="text-xs bg-skcloud-purple bg-opacity-10 text-skcloud-purple px-2 py-0.5 rounded-full">
                    {event.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
