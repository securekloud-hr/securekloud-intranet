import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Repositories from "./pages/Repositories";
import InternalJobs from "./pages/InternalJobs";
import Talentacquisition from "./pages/Talentacquisition";
import Holidays from "./pages/Holidays";
import NotFound from "./pages/NotFound";
import OrgStructure from "./pages/orgstructure";
import Performance from "./pages/Performance";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ 
          v7_relativeSplatPath: true,
          v7_startTransition: true 
        }}>
          <Routes>
            <Route element={<AppLayout />}>
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
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;