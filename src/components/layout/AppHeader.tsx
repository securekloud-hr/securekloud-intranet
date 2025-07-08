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

interface User {
  name?: string;
  fullName?: string;
}

export function AppHeader({ user }: { user: User }) {
  const initial = user?.name?.charAt?.(0)?.toUpperCase?.() || "U";

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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>New update available</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2" size="sm">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-skcloud-purple text-white">
                  {initial}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start text-left leading-tight">
                <span className="font-medium">{user?.name || "Unknown"}</span>
                <span className="text-sm text-muted-foreground">👤 {user?.fullName || "No info"}</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                localStorage.removeItem("userId");
                window.location.reload();
              }}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
