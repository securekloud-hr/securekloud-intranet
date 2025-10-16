import React from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

interface User {
  name?: string;
  fullName?: string;
}

export function AppHeader({ user }: { user: User }) {
  const navigate = useNavigate();
  const initial = user?.name?.charAt?.(0)?.toUpperCase?.() || "U";

  const handleLogout = () => {
    // ✅ Clear all authentication data
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    // ✅ Redirect to login page
    navigate("/login");

    // Optional: reload to reset any app state
    window.location.reload();
  };

  return (
    <header className="h-16 border-b flex items-center justify-between px-4 bg-white">
      <div>
        <img
          src="/SecureKloud_Logo.jpg"
          alt="SecureKloud Logo"
          className="h-8 w-auto"
        />
      </div>

      <div className="flex items-center space-x-2">
        {/* 🔔 Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>No new notifications</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* 👤 User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center space-x-2"
              size="sm"
            >
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-skcloud-purple text-white">
                  {initial}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start text-left leading-tight">
                <span className="font-medium">{user?.name || "Unknown"}</span>
                <span className="text-sm text-muted-foreground">
                  👤 {user?.fullName || "No info"}
                </span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/settings")}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
