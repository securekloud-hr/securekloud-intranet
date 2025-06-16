

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon } from "lucide-react";

interface Holiday {
  id: string;
  name: string;
  date: Date;
  description?: string;
}

const holidays: Holiday[] = [
  {
    id: "1",
    name: "New Year's Day",
    date: new Date(2025, 0, 1), // January 1, 2025
    description: "First day of the year"
  },
  {
    id: "2",
    name: "Pongal",
    date: new Date(2025, 0, 14), // January 14, 2025
    description: "Harvest festival celebrated in Tamil Nadu"
  },
  {
    id: "3",
    name: "Republic Day",
    date: new Date(2025, 0, 26), // January 26, 2025
    description: "Celebration of India's Constitution"
  },
  {
    id: "4",
    name: "Ramzan",
    date: new Date(2025, 2, 31), // March 31, 2025
    description: "Islamic festival marking the end of Ramadan"
  },
  {
    id: "5",
    name: "Tamil New Year's Day",
    date: new Date(2025, 3, 14), // April 14, 2025
    description: "Traditional New Year for Tamil people"
  },
  {
    id: "6",
    name: "May Day",
    date: new Date(2025, 4, 1), // May 1, 2025
    description: "International Workers' Day"
  },
  {
    id: "7",
    name: "Independence Day",
    date: new Date(2025, 7, 15), // August 15, 2025
    description: "Celebration of India's independence"
  },
  {
    id: "8",
    name: "Vinayagar Chathurthi",
    date: new Date(2025, 7, 27), // August 27, 2025
    description: "Hindu festival celebrating Lord Ganesha"
  },
  {
    id: "9",
    name: "Ayutha Pooja",
    date: new Date(2025, 9, 1), // October 1, 2025
    description: "Hindu festival honoring tools and weapons"
  },
  {
    id: "10",
    name: "Gandhi Jayanthi",
    date: new Date(2025, 9, 2), // October 2, 2025
    description: "Birth anniversary of Mahatma Gandhi"
  },
  {
    id: "11",
    name: "Deepavali",
    date: new Date(2025, 9, 20), // October 20, 2025
    description: "Hindu festival of lights"
  },
  {
    id: "12",
    nameragon: "Christmas",
    date: new Date(2025, 11, 25), // December 25, 2025
    description: "Christmas celebration"
  }
];

const Holidays = () => {
  // Function to highlight holiday dates on calendar
  const isHoliday = (day: Date) => {
    return holidays.some(holiday => 
      day.getDate() === holiday.date.getDate() && 
      day.getMonth() === holiday.date.getMonth() && 
      day.getFullYear() === holiday.date.getFullYear()
    );
  };

  // Group holidays by month for display
  const holidaysByMonth: Record<string, Holiday[]> = {};
  
  holidays.forEach(holiday => {
    const month = holiday.date.toLocaleString('default', { month: 'long' });
    if (!holidaysByMonth[month]) {
      holidaysByMonth[month] = [];
    }
    holidaysByMonth[month].push(holiday);
  });

  return (
    
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Company Holidays</h1>
          <p className="text-muted-foreground">Official holidays and time off schedule for 2025</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>2025 Holiday Calendar</CardTitle>
              <CardDescription>View all company holidays</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar 
                mode="default"
                modifiers={{
                  holiday: isHoliday
                }}
                modifiersClassNames={{
                  holiday: "bg-red-100 text-red-900 font-bold"
                }}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Holiday List</CardTitle>
              <CardDescription>Complete list of company holidays for 2025</CardDescription>
            </CardHeader>
            <CardContent className="max-h-[400px] overflow-y-auto">
              {Object.entries(holidaysByMonth).map(([month, monthHolidays]) => (
                <div key={month} className="mb-6 last:mb-0">
                  <h3 className="font-semibold text-lg mb-3">{month}</h3>
                  <div className="space-y-3">
                    {monthHolidays.map(holiday => (
                      <div key={holiday.id} className="flex items-start gap-4 border-l-2 border-red-400 pl-4 py-1">
                        <div className="min-w-[45px] text-sm font-medium">
                          {holiday.date.getDate()}
                        </div>
                        <div>
                          <div className="font-medium flex items-center gap-2">
                            {holiday.name}
                            <Badge variant="outline" className="bg-red-50 text-red-800 hover:bg-red-100">Holiday</Badge>
                          </div>
                          {holiday.description && (
                            <div className="text-sm text-muted-foreground">{holiday.description}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Holiday Policy Highlights</CardTitle>
            <CardDescription>Key points from our company holiday policy</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 list-disc pl-6">
              <li>
                <span className="font-medium">Observed Holidays:</span> SecureKloud observes the 12 holidays listed above.
              </li>
              
             
             
            </ul>
            <div className="mt-4 p-4 bg-securekloud-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CalendarIcon className="h-5 w-5 text-securekloud-700" />
                <h3 className="font-medium">Time Off Requests</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                For additional time off requests, please submit your request through the HR Portal.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    
  );
};

export default Holidays;