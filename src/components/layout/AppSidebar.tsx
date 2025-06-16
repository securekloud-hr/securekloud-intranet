
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  FileText,
  BookOpen,
  Users,
  Calendar,
  HelpCircle,
  Briefcase,
  Settings,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Building,
  BarChart3,
  Search,
  Network
   
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

const mainNavItems: NavItem[] = [
  //{ title: "Home", href: "/", icon: Home },//
  { title: "HR", href: "/hr", icon: Users },
  { title: "Policies", href: "/policies", icon: FileText },
  { title: "Products", href: "/products", icon: Briefcase },
  { title: "Repositories", href: "/repositories", icon: BookOpen },
  
  { title: "Holidays", href: "/holidays", icon: Calendar },
  { title: "Employee Engagement", href: "/engagement", icon: Users },
  { title: "Learning & Development", href: "/learning", icon: GraduationCap },
  { title: "Internal Jobs", href: "/jobs", icon: Building },
  { title: "Talent Acquisition", href: "/talent", icon: Users },
  { title: "Performance", href: "/performance", icon: BarChart3 },
  { title: "Org Structure", href: "/org", icon: Network  },
  { title: "FAQs", href: "/faqs", icon: HelpCircle },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-sidebar transition-all duration-300 ease-in-out border-r border-sidebar-border",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
        <Link to="/" className="flex items-center space-x-2">
  {/* <img src="/SecureKloud_Technologies_Limited_Logo (1) - Copy.jpg" alt="SecureKloud Logo" className="h-6" /> */}
  <Home size={20} className="text-white" />
  <span className="text-xl font-bold text-white">SecureKloud</span>
</Link>

        )}
        <Button
          variant="ghost"
          size="icon"
          className="text-sidebar-foreground hover:bg-sidebar-accent ml-auto"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>
      
     {/* {!collapsed && (
        <div className="p-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-8 bg-sidebar-accent text-sidebar-foreground border-sidebar-border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      )} */}
      
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {mainNavItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-sidebar-accent hover:text-sidebar-foreground",
                "text-sidebar-foreground transition-all"
              )}
            >
              <item.icon className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
              {!collapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t border-sidebar-border">
       {/* <Link  
          to="/settings"
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-sidebar-accent hover:text-sidebar-foreground text-sidebar-foreground"
        >
          <Settings className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
          {!collapsed && <span>Settings</span>}
        </Link> */}{/*settings in side bar  just remove commenting lines*/}
            
      </div>
    </div>
  );
}
