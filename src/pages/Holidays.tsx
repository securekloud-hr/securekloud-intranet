import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon } from "lucide-react";
import React, { useState } from 'react';

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
    name: "Christmas", // Corrected the key name
    date: new Date(2025, 11, 25), // December 25, 2025
    description: "Christmas celebration"
  }
];

const Holidays = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  
  // Array of all 12 month names for ordering the list and setting up the map
  const ALL_MONTHS = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
  ];

  // --- Calendar Initial Month Logic ---
  const sortedHolidays = holidays.sort((a, b) => a.date.getTime() - b.date.getTime());
  const currentMonthHolidays = sortedHolidays.filter(h => h.date.getMonth() === today.getMonth() && h.date.getFullYear() === today.getFullYear());
  const lastCurrentMonthHoliday = currentMonthHolidays.length > 0 ? currentMonthHolidays[currentMonthHolidays.length - 1].date : null;

  let initialCalendarMonth = today; 

  if (lastCurrentMonthHoliday && today.getTime() > lastCurrentMonthHoliday.getTime()) {
      // If today is AFTER the last holiday of the current month (e.g., Oct 21st), jump to the NEXT holiday month.
      const nextUpcomingHoliday = sortedHolidays.find(h => h.date.getTime() > today.getTime());
      
      if (nextUpcomingHoliday) {
          initialCalendarMonth = nextUpcomingHoliday.date; 
      }
  }

  // CALENDAR STATE: Use state to manage the displayed month, allowing standard navigation (Nov, Dec, Jan, etc.)
  // The 'defaultMonth' will ensure it starts on the correct month (Oct or Dec based on date).
  // We remove the custom 'onMonthChange' to restore normal sequential month navigation.
  const [month, setMonth] = useState<Date | undefined>(initialCalendarMonth);


  // --- Holiday List Processing ---
  
  const isHoliday = (day: Date) => {
    return holidays.some(holiday => 
      day.getDate() === holiday.date.getDate() && 
      day.getMonth() === holiday.date.getMonth() && 
      day.getFullYear() === holiday.date.getFullYear()
    );
  };

  // Group holidays by month
  const holidaysByMonth: Record<string, Holiday[]> = {};
  ALL_MONTHS.forEach(m => { holidaysByMonth[m] = []; }); // Initialize all months
  
  holidays.forEach(holiday => {
    const month = holiday.date.toLocaleString('default', { month: 'long' });
    if (holiday.date.getFullYear() === currentYear) {
        holidaysByMonth[month].push(holiday);
    }
  });

  // Sort holidays within each month
  Object.keys(holidaysByMonth).forEach(monthName => {
      holidaysByMonth[monthName].sort((a, b) => a.date.getDate() - b.date.getDate());
  });


  // Reorder ALL_MONTHS to start from the current month for the scrolling list
  const currentMonthName = today.toLocaleString('default', { month: 'long' });
  const startIndex = ALL_MONTHS.indexOf(currentMonthName);

  let orderedMonths: string[] = ALL_MONTHS;
  if (startIndex !== -1) {
    const monthsFromCurrent = ALL_MONTHS.slice(startIndex);
    const monthsBeforeCurrent = ALL_MONTHS.slice(0, startIndex);
    orderedMonths = [...monthsFromCurrent, ...monthsBeforeCurrent];
  }
  
  return (
    
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Company Holidays</h1>
          <p className="text-muted-foreground">Official holidays and time off schedule for {currentYear}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{currentYear} Holiday Calendar</CardTitle>
              <CardDescription>View all company holidays</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar 
                mode="default"
                month={month} 
                onMonthChange={setMonth} // Allows standard sequential month navigation (Oct -> Nov -> Dec)
                defaultMonth={initialCalendarMonth} // Sets the initial view based on the upcoming holiday
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
              <CardDescription>Complete list of company holidays for {currentYear}</CardDescription>
            </CardHeader>
            {/* max-h-[400px] and overflow-y-auto enables scrolling */}
            <CardContent className="max-h-[400px] overflow-y-auto">
              {orderedMonths.map(month => {
                const monthHolidays = holidaysByMonth[month];
                
                // Only render the month if it contains holidays
                if (!monthHolidays || monthHolidays.length === 0) {
                    return null; 
                }
                
                return (
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
                )
              })}
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
