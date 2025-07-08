import React from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";
import { useUser } from "../../hooks/useUser"; // Note: Updated path for your folder structure

export function AppLayout() {
  const { user, loading, error } = useUser();

  // Show loading state while fetching user
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-2"></div>
          <p>Loading user data...</p>
        </div>
      </div>
    );
  }

  // Show error state if user fetch failed
  if (error && !user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center text-red-600 max-w-md">
          <h2 className="text-xl font-bold mb-2">Error Loading User</h2>
          <p className="mb-4">Error: {error}</p>
          <div className="space-x-2">
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Retry
            </button>
            <button 
              onClick={() => console.log('Check browser console for detailed logs')}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Check Console
            </button>
          </div>
        </div>
      </div>
    );
  }

  // If we have a user, render the app
  if (user) {
    return (
      <div className="flex h-screen overflow-hidden">
        <AppSidebar user={user} />
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

  // Fallback - should not normally reach here
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <p>Something went wrong. Please refresh the page.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Refresh
        </button>
      </div>
    </div>
  );
}