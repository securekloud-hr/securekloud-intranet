import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { AppLayout } from "./components/layout/AppLayout";
import Index from "./pages/Index";
import HR from "./pages/HR";
import Policies from "./pages/Policies";
import FAQs from "./pages/FAQs";
import LearningDevelopment from "./pages/LearningDevelopment";
import Products from "./pages/Products";
import EmployeeEngagement from "./pages/EmployeeEngagement";
import InternalJobs from "./pages/InternalJobs";
import Talentacquisition from "./pages/Talentacquisition";
import Holidays from "./pages/Holidays";
import NotFound from "./pages/NotFound";
import OrgStructure from "./pages/orgstructure";
import Performance from "./pages/Performance";
import MySkills from "./pages/MySkills";
import MyCertifications from "./pages/MyCertifications";
import AdminDashboard from "./pages/AdminDashboard";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import MyCourses from "./pages/MyCourses";
import ResetPassword from "./pages/ResetPassword";

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
