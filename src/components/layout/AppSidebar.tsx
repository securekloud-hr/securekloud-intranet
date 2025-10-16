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
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Building,
  BarChart3,
  Network,
  PlusCircle,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

export function AppSidebar({ user }: { user?: any }) {
  const [collapsed, setCollapsed] = useState(false);

  // ✅ Safely get user data from localStorage
  const storedUser = React.useMemo(() => {
    try {
      const data = localStorage.getItem("user");
      return data && data !== "undefined" ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }, []);

  // ✅ Determine if user is admin
  const isAdmin =
  user?.fullName === "admin" ||
  storedUser?.fullName === "admin" ||
  user?.type === "admin" ||
  storedUser?.type === "admin";
  // ✅ Base navigation
  const mainNavItems: NavItem[] = [
    { title: "HR", href: "/hr", icon: Users },
    { title: "Policies", href: "/policies", icon: FileText },
    { title: "Products", href: "/products", icon: Briefcase },
    { title: "Holidays", href: "/holidays", icon: Calendar },
    { title: "Employee Engagement", href: "/engagement", icon: Users },
    { title: "Learning & Development", href: "/learning", icon: GraduationCap },
    { title: "Internal Jobs", href: "/jobs", icon: Building },
    { title: "Talent Acquisition", href: "/talent", icon: Users },
    { title: "Performance", href: "/performance", icon: BarChart3 },
    { title: "Org Structure", href: "/org", icon: Network },
    { title: "FAQs", href: "/faqs", icon: HelpCircle },
  ];

  // ✅ Add admin dashboard dynamically
  if (isAdmin) {
    mainNavItems.push({
      title: "Admin Dashboard",
      href: "/admin",
      icon: Shield,
    });
  }

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-sidebar border-r border-sidebar-border",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Sidebar header */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <Link to="/" className="flex items-center space-x-2">
            <Home size={20} className="text-white" />
            <span className="text-xl font-bold text-white">SecureKloud</span>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto text-white"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>

      {/* Sidebar content */}
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {mainNavItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-sidebar-accent transition-all"
            >
              <item.icon className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
              {!collapsed && <span>{item.title}</span>}
            </Link>
          ))}

          {/* ✅ Optional: Extra admin-only button */}
          {isAdmin && (
            <Link
              to="/admin/add-announcement"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 mt-2"
            >
              <PlusCircle className="h-5 w-5" />
              {!collapsed && <span>Add Announcement</span>}
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}
