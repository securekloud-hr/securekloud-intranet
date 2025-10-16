import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";

export function AppLayout() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("No token found");
      setLoading(false);
      navigate("/login");
      return;
    }

    console.log("🟡 Sending token:", token);

    fetch("http://localhost:8000/api/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        const text = await res.text();
        if (!res.ok) throw new Error(text || "Failed to fetch user");

        const data = JSON.parse(text);
        console.log("✅ User fetched:", data);

        // ✅ Map backend fields (username, type) to frontend format (name, fullName)
        setUser({
          name: data.username,
          fullName: data.type,
          email: data.email,
          userid: data.userid,
        });
      })
      .catch((err) => {
        console.error("❌ User fetch error:", err);
        setError(err.message);

        if (err.message.includes("invalid") || err.message.includes("token")) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading user data...</p>
      </div>
    );

  if (error && !user)
    return (
      <div className="flex h-screen items-center justify-center text-center">
        <div>
          <p className="text-red-600 mb-2">Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );

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
