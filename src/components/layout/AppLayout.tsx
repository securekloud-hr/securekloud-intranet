
import React from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";

export function AppLayout({ user }: { user: any }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar user={user} /> {/* ✅ Correctly passes user to Sidebar */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <AppHeader user={user} />
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <div className="container mx-auto fade-in">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
