
import React, { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminAddAnnouncement from "./pages/AdminAddAnnouncement";


// Layout
import { AppLayout } from "./components/layout/AppLayout";

// Pages
import Index from "./pages/Index";
import HR from "./pages/HR";
import Policies from "./pages/Policies";
import FAQs from "./pages/FAQs";
import LearningDevelopment from "./pages/LearningDevelopment";
import Products from "./pages/Products";
import EmployeeEngagement from "./pages/EmployeeEngagement";
import Repositories from "./pages/Repositories";
import InternalJobs from "./pages/InternalJobs";
import Talentacquisition from "./pages/Talentacquisition";
import Holidays from "./pages/Holidays";
import NotFound from "./pages/NotFound";
import OrgStructure from "./pages/orgstructure";
import Performance from "./pages/Performance";

// Login System
import LoginPage from "./pages/LoginPage";

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      fetch("/data/users.json")
        .then((res) => res.json())
        .then((data) => {
          const found = data.find((u) => u.id === userId);
          if (found) setUser(found);
        });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {!user ? (
              <Route path="*" element={<LoginPage onLogin={setUser} />} />
            ) : (
              <>
                <Route element={<AppLayout user={user} />}>

                  <Route path="/" element={<Index />} />
                  <Route path="/hr" element={<HR />} />
                  <Route path="/policies" element={<Policies />} />
                  <Route path="/holidays" element={<Holidays />} />
                  <Route path="/faqs" element={<FAQs />} />
                  <Route path="/learning" element={<LearningDevelopment />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/engagement" element={<EmployeeEngagement />} />
                  <Route path="/repositories" element={<Repositories />} />
                  <Route path="/jobs" element={<InternalJobs />} />
                  <Route path="/talent" element={<Talentacquisition />} />
                  <Route path="/org" element={<OrgStructure />} />
                  <Route path="/performance" element={<Performance />} />
                  <Route
  path="/admin/add-announcement"
  element={<AdminAddAnnouncement user={user} />}
/>

                </Route>
                <Route path="*" element={<NotFound />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
