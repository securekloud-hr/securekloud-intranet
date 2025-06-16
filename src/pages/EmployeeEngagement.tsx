
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, Users, Trophy, Heart } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type: 'Wellness' | 'Holidays/Festivals' | 'Sports/Entertainment' | 'BOM-Birthdays of the Month';
  registrationOpen?: boolean;
}

const events: Event[] = [
  {
    id: "1",
    title: "Life Balance on Work-from-Home Session",
    date: "April 10, 2025",
    location: "",
    description: "Session on maintaining work-life balance while working from home.",
    type: "Wellness",
    registrationOpen: true
  },
  {
    id: "2",
    title: "Tamil New Year's Day",
    date: "April 15, 2025",
    location: "",
    description: "Celebration of the traditional Tamil New Year.",
    type: "Holidays/Festivals"
  },
  {
    id: "3",
    title: "Carrom Competition",
    date: "April 18, 2025",
    location: "",
    description: "Carrom tournament for employees.",
    type: "Sports/Entertainment",
    registrationOpen: true
  },
  {
    id: "4",
    title: "BOM: Sriram",
    date: "April 30, 2025",
    location: "",
    description: "Celebrating Sriram's birthday.",
    type: "BOM-Birthdays of the Month"
  },
  {
    id: "5",
    title: "Yoga Session",
    date: "May 23, 2025",
    location: "",
    description: "Yoga session for employee wellness.",
    type: "Wellness",
    registrationOpen: true
  },
  {
    id: "6",
    title: "Summer Kickoff Day",
    date: "May 2, 2025",
    location: "",
    description: "Celebrating the start of summer with fun activities.",
    type: "Holidays/Festivals"
  },
  {
    id: "7",
    title: "Chess Competition",
    date: "May 16, 2025",
    location: "",
    description: "Chess tournament for employees.",
    type: "Sports/Entertainment",
    registrationOpen: true
  },
  {
    id: "8",
    title: "BOM: Sathya",
    date: "May 30, 2025",
    location: "",
    description: "Celebrating Sathya's birthday.",
    type: "BOM-Birthdays of the Month"
  },
  {
    id: "9",
    title: "Wellness Boot Camp",
    date: "June 18, 2025",
    location: "",
    description: "General health check-up for employees.",
    type: "Wellness",
    registrationOpen: true
  },
  {
    id: "10",
    title: "Leave the Office Early Day",
    date: "June 2, 2025",
    location: "",
    description: "Employees can leave early to enjoy the day.",
    type: "Holidays/Festivals"
  },
  {
    id: "11",
    title: "Outdoor Cricket Tournament",
    date: "June 14, 2025",
    location: "",
    description: "Cricket tournament for employees.",
    type: "Sports/Entertainment",
    registrationOpen: true
  },
  {
    id: "12",
    title: "BOM: Karthikeyan",
    date: "June 30, 2025",
    location: "",
    description: "Celebrating Karthikeyan's birthday.",
    type: "BOM-Birthdays of the Month"
  },
  {
    id: "13",
    title: "Session on Values & Clarity in Life",
    date: "July 18, 2025",
    location: "",
    description: "Workshop on personal values and clarity.",
    type: "Wellness",
    registrationOpen: true
  },
  {
    id: "14",
    title: "Fitness Session",
    date: "July 1, 2025",
    location: "",
    description: "Fitness activities for employees.",
    type: "Holidays/Festivals"
  },
  {
    id: "15",
    title: "World Chocolate Day",
    date: "July 7, 2025",
    location: "",
    description: "Celebrating World Chocolate Day with treats.",
    type: "Holidays/Festivals"
  },
  {
    id: "16",
    title: "Int'l Joke Day",
    date: "July 1, 2025",
    location: "",
    description: "Sharing jokes to lighten the mood.",
    type: "Holidays/Festivals"
  },
  {
    id: "17",
    title: "BOM: Nivedha",
    date: "July 31, 2025",
    location: "",
    description: "Celebrating Nivedha's birthday.",
    type: "BOM-Birthdays of the Month"
  },
  {
    id: "18",
    title: "Eye Check-up Camp",
    date: "August 13, 2025",
    location: "",
    description: "Free eye check-up for employees.",
    type: "Wellness",
    registrationOpen: true
  },
  {
    id: "19",
    title: "Independence Day",
    date: "August 15, 2025",
    location: "",
    description: "Celebrating India's Independence Day.",
    type: "Holidays/Festivals"
  },
  {
    id: "20",
    title: "Friendship Day",
    date: "August 4, 2025",
    location: "",
    description: "Celebrating Friendship Day with team activities.",
    type: "Holidays/Festivals"
  },
  {
    id: "21",
    title: "World Photography Day",
    date: "August 19, 2025",
    location: "",
    description: "Photography contest and activities.",
    type: "Sports/Entertainment",
    registrationOpen: true
  },
  {
    id: "22",
    title: "Vinayagar Chathurthi",
    date: "August 27, 2025",
    location: "",
    description: "Celebrating Vinayagar Chathurthi festival.",
    type: "Holidays/Festivals"
  },
  {
    id: "23",
    title: "BOM: Omkar",
    date: "September 5, 2025",
    location: "",
    description: "Celebrating Omkar's birthday.",
    type: "BOM-Birthdays of the Month"
  },
  {
    id: "24",
    title: "Yoga Session",
    date: "September 2, 2025",
    location: "",
    description: "Yoga session for employee wellness.",
    type: "Wellness",
    registrationOpen: true
  },
  {
    id: "25",
    title: "Ayudha Pooja",
    date: "September 30, 2025",
    location: "",
    description: "Celebrating Ayudha Pooja.",
    type: "Holidays/Festivals"
  },
  {
    id: "26",
    title: "Pickle Ball Tournament",
    date: "September 20, 2025",
    location: "",
    description: "Pickleball tournament for employees.",
    type: "Sports/Entertainment",
    registrationOpen: true
  },
  {
    id: "27",
    title: "Gandhi Jayanthi",
    date: "October 2, 2025",
    location: "",
    description: "Celebrating Gandhi Jayanthi.",
    type: "Holidays/Festivals"
  },
  {
    id: "28",
    title: "BOM: Nithya",
    date: "October 31, 2025",
    location: "",
    description: "Celebrating Nithya's birthday.",
    type: "BOM-Birthdays of the Month"
  },
  {
    id: "29",
    title: "Session on Healthy Routines & Fitness",
    date: "October 10, 2025",
    location: "",
    description: "Workshop on maintaining healthy routines.",
    type: "Wellness",
    registrationOpen: true
  },
  {
    id: "30",
    title: "Deepavali",
    date: "October 9, 2025",
    location: "",
    description: "Celebrating the festival of Deepavali.",
    type: "Holidays/Festivals"
  },
  {
    id: "31",
    title: "Badminton Tournament",
    date: "October 22, 2025",
    location: "",
    description: "Badminton tournament for employees.",
    type: "Sports/Entertainment",
    registrationOpen: true
  },
  {
    id: "32",
    title: "B-E Early Morning Beach Run (with Breakfast)",
    date: "November 8, 2025",
    location: "",
    description: "Morning beach run followed by breakfast.",
    type: "Wellness",
    registrationOpen: true
  },
  {
    id: "33",
    title: "Men's Day",
    date: "November 19, 2025",
    location: "",
    description: "Celebrating Men's Day with activities.",
    type: "Holidays/Festivals"
  },
  {
    id: "34",
    title: "Bowling",
    date: "November 22, 2025",
    location: "",
    description: "Bowling event for employees.",
    type: "Sports/Entertainment",
    registrationOpen: true
  },
  {
    id: "35",
    title: "BOM: Saravanan",
    date: "November 28, 2025",
    location: "",
    description: "Celebrating Saravanan's birthday.",
    type: "BOM-Birthdays of the Month"
  },
  {
    id: "36",
    title: "Wellness Boot Camp - Bone Density",
    date: "December 10, 2025",
    location: "",
    description: "Bone density check-up for employees.",
    type: "Wellness",
    registrationOpen: true
  },
  {
    id: "37",
    title: "Christmas",
    date: "December 24, 2025",
    location: "",
    description: "Celebrating Christmas with festive activities.",
    type: "Holidays/Festivals"
  },
  {
    id: "38",
    title: "Christmas at Natesan Park",
    date: "December 24, 2025",
    location: "Natesan Park",
    description: "Christmas celebration at Natesan Park.",
    type: "Holidays/Festivals"
  },
  {
    id: "39",
    title: "BOM: Nandhini",
    date: "December 30, 2025",
    location: "",
    description: "Celebrating Nandhini's birthday.",
    type: "BOM-Birthdays of the Month"
  },
  {
    id: "40",
    title: "Outdoor Boot Camp",
    date: "January 9, 2026",
    location: "",
    description: "Outdoor fitness boot camp for employees.",
    type: "Wellness",
    registrationOpen: true
  },
  {
    id: "41",
    title: "Pongal",
    date: "January 13, 2026",
    location: "",
    description: "Celebrating the harvest festival of Pongal.",
    type: "Holidays/Festivals"
  },
  {
    id: "42",
    title: "National Handwriting Day",
    date: "January 23, 2026",
    location: "",
    description: "Handwriting activities for employees.",
    type: "Sports/Entertainment",
    registrationOpen: true
  },
  {
    id: "43",
    title: "BOM: Swetha",
    date: "January 30, 2026",
    location: "",
    description: "Celebrating Swetha's birthday.",
    type: "BOM-Birthdays of the Month"
  },
  {
    id: "44",
    title: "Session on Relationship Management",
    date: "February 6, 2026",
    location: "",
    description: "Workshop on managing relationships.",
    type: "Wellness",
    registrationOpen: true
  },
  {
    id: "45",
    title: "Valentine's Day",
    date: "February 13, 2026",
    location: "",
    description: "Celebrating Valentine's Day with team activities.",
    type: "Holidays/Festivals"
  },
  {
    id: "46",
    title: "Dumb Charades",
    date: "February 20, 2026",
    location: "",
    description: "Dumb charades game for employees.",
    type: "Sports/Entertainment",
    registrationOpen: true
  },
  {
    id: "47",
    title: "BOM: Priya",
    date: "February 27, 2026",
    location: "",
    description: "Celebrating Priya's birthday.",
    type: "BOM-Birthdays of the Month"
  },
  {
    id: "48",
    title: "Indoor Rock Climbing",
    date: "March 20, 2026",
    location: "",
    description: "Indoor rock climbing event for employees.",
    type: "Wellness",
    registrationOpen: true
  },
  {
    id: "49",
    title: "Women's Day",
    date: "March 8, 2026",
    location: "",
    description: "Celebrating Women's Day with special activities.",
    type: "Holidays/Festivals"
  },
  {
    id: "50",
    title: "Session on Anger Management",
    date: "March 27, 2026",
    location: "",
    description: "Workshop on managing anger.",
    type: "Wellness",
    registrationOpen: true
  },
  {
    id: "51",
    title: "Outdoor Picnic",
    date: "March 14, 2026",
    location: "",
    description: "Outdoor picnic for employees.",
    type: "Sports/Entertainment",
    registrationOpen: true
  },
  {
    id: "52",
    title: "BOM: Anitha",
    date: "March 31, 2026",
    location: "",
    description: "Celebrating Anitha's birthday.",
    type: "BOM-Birthdays of the Month"
  }
];

interface Recognition {
  id: string;
  recipient: string;
  department: string;
  achievement: string;
  recognizedBy: string;
  date: string;
}

const recognitions: Recognition[] = [
  {
    id: "1",
    recipient: "Emma Thompson",
    department: "Product Development",
    achievement: "Successfully led the launch of our new cloud security solution.",
    recognizedBy: "David Chen, CTO",
    date: "April 18, 2025"
  },
  {
    id: "2",
    recipient: "James Wilson",
    department: "Customer Support",
    achievement: "Received excellent feedback from clients for resolving complex issues.",
    recognizedBy: "Sarah Johnson, Support Manager",
    date: "April 15, 2025"
  },
  {
    id: "3",
    recipient: "Michael Rodriguez",
    department: "Sales",
    achievement: "Exceeded quarterly targets by 35% and secured our largest client to date.",
    recognizedBy: "Jennifer Lee, Sales Director",
    date: "April 10, 2025"
  },
  {
    id: "4",
    recipient: "Security Team",
    department: "Information Security",
    achievement: "Successfully prevented a significant cyber attack attempt on our systems.",
    recognizedBy: "Executive Leadership",
    date: "April 5, 2025"
  }
];

const EmployeeEngagement = () => {
  // Filter events by type
  const wellnessEvents = events.filter(event => event.type === 'Wellness');
  const holidaysFestivalsEvents = events.filter(event => event.type === 'Holidays/Festivals');
  const sportsEntertainmentEvents = events.filter(event => event.type === 'Sports/Entertainment');
  const bomEvents = events.filter(event => event.type === 'BOM-Birthdays of the Month');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Employee Engagement</h1>
        <p className="text-muted-foreground">Connect, participate, and grow with your colleagues</p>
      </div>
      
      {/* <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-securekloud-100 flex items-center justify-center">
              <Star className="h-5 w-5 text-securekloud-700" />
            </div>
            <div>
              <CardTitle>Employee Recognition</CardTitle>
              <CardDescription>Celebrating our outstanding team members</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {recognitions.map(recognition => (
              <div key={recognition.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-lg">{recognition.recipient}</h3>
                    <p className="text-sm text-muted-foreground">{recognition.department}</p>
                  </div>
                  <Badge className="bg-securekloud-100 text-securekloud-800 hover:bg-securekloud-200">
                    {recognition.date}
                  </Badge>
                </div>
                <p className="mb-3">{recognition.achievement}</p>
                <div className="text-sm text-muted-foreground">
                  Recognized by: {recognition.recognizedBy}
                </div>
              </div>
            ))}
            <div className="text-center">
              <Button>
                <Star className="h-4 w-4 mr-2" />
                Recognize a Colleague
              </Button>
            </div>
          </div> <TabsList className="grid w-full grid-cols-5 max-w-[600px]">
        </CardContent>
      </Card> ="flex w-full gap-4 overflow-x-auto"*/}
      
      <div>
        <div className="grid w-full grid-cols-5 max-w-[600px]">
          <div className="h-10 w-10 rounded-full bg-securekloud-100 flex items-center justify-center">
            <Calendar className="h-5 w-5 text-securekloud-700" />
          </div>
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
        </div>
        
        <Tabs defaultValue="all">
          <TabsList className="flex w-full gap-4 overflow-x-auto">
            <TabsTrigger value="all">All Events</TabsTrigger>
            <TabsTrigger value="wellness">Wellness</TabsTrigger>
            <TabsTrigger value="holidays-festivals">Holidays/Festivals</TabsTrigger>
            <TabsTrigger value="sports-entertainment">Sports/Entertainment</TabsTrigger>
            <TabsTrigger value="bom">BOM-Birthdays of the Month</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="wellness" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wellnessEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="holidays-festivals" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {holidaysFestivalsEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sports-entertainment" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sportsEntertainmentEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="bom" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bomEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-securekloud-100 flex items-center justify-center">
              <Heart className="h-5 w-5 text-securekloud-700" />
            </div>
            <div>
              <CardTitle>Employee Resources</CardTitle>
              <CardDescription>Support for your well-being and development</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Wellness Program</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Access health resources, fitness programs, and mental wellness support.
              </p>
              <Button variant="outline" size="sm">Learn More</Button>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Employee Assistance</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Confidential counseling and support services for various life challenges.
              </p>
              <Button variant="outline" size="sm">Get Support</Button>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Volunteer Opportunities</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Find ways to give back to the community with company-sponsored programs.
              </p>
              <Button variant="outline" size="sm">Browse Opportunities</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  // Determine badge color based on event type
  const getBadgeVariant = (type: string) => {
    switch(type) {
      case 'Wellness': return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case 'Holidays/Festivals': return "bg-red-100 text-red-800 hover:bg-red-200";
      case 'Sports/Entertainment': return "bg-green-100 text-green-800 hover:bg-green-200";
      case 'BOM-Birthdays of the Month': return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      default: return "";
    }
  };
  
  // Get event icon based on type
  const getEventIcon = (type: string) => {
    switch(type) {
      case 'Wellness': return Heart;
      case 'Holidays/Festivals': return Calendar;
      case 'Sports/Entertainment': return Trophy;
      case 'BOM-Birthdays of the Month': return Users;
      default: return Calendar;
    }
  };
  
  const EventIcon = getEventIcon(event.type);
  
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between">
          <Badge className={getBadgeVariant(event.type)}>
            {event.type}
          </Badge>
          {event.registrationOpen && (
            <Badge variant="outline" className="bg-green-50 text-green-800">
              Registration Open
            </Badge>
          )}
        </div>
        <div className="mt-3 flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-securekloud-100 flex items-center justify-center mt-1">
            <EventIcon className="h-5 w-5 text-securekloud-700" />
          </div>
          <div>
            <CardTitle>{event.title}</CardTitle>
            <CardDescription>{event.date} {event.location && `at ${event.location}`}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
        <Button className="w-full">
          {event.registrationOpen ? "Register Now" : "View Details"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default EmployeeEngagement;