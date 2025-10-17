import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { AppLayout } from "./components/layout/AppLayout";
import Index from "./Pages/Index";
import HR from "./Pages/HR";
import Policies from "./Pages/Policies";
import FAQs from "./Pages/FAQs";
import LearningDevelopment from "./Pages/LearningDevelopment";
import Products from "./Pages/Products";
import EmployeeEngagement from "./Pages/EmployeeEngagement";
import InternalJobs from "./Pages/InternalJobs";
import Talentacquisition from "./Pages/Talentacquisition";
import Holidays from "./Pages/Holidays";
import NotFound from "./Pages/NotFound";
import OrgStructure from "./Pages/orgstructure";
import Performance from "./Pages/Performance";
import MySkills from "./Pages/MySkills";
import MyCertifications from "./Pages/MyCertifications";
import AdminDashboard from "./Pages/AdminDashboard";
import LoginPage from "./Pages/LoginPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import MyCourses from "./Pages/MyCourses";
import ResetPassword from "./Pages/ResetPassword";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => {
  // ✅ Get the logged-in user from localStorage
  const storedUser = localStorage.getItem("user");
const user = storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* ✅ Public Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />

            {/* ✅ Protected Routes inside Layout */}
            <Route element={<AppLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/hr" element={<HR />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/holidays" element={<Holidays />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/learning" element={<LearningDevelopment />} />
              <Route path="/my-courses" element={<MyCourses />} />
              <Route path="/products" element={<Products />} />
              <Route path="/engagement" element={<EmployeeEngagement />} />
              <Route path="/jobs" element={<InternalJobs />} />
              <Route path="/talent" element={<Talentacquisition />} />
              <Route path="/org" element={<OrgStructure />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/my-skills" element={<MySkills />} />
              <Route path="/my-certifications" element={<MyCertifications />} />

              {/* ✅ Admin Only Route */}
              <Route
                path="/admin"
                element={
                  user?.type === "admin" ? (
                    <AdminDashboard />
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />
            </Route>

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
