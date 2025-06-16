
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";



// Layout
import { AppLayout } from "./components/layout/AppLayout";

// Pages
import Index from "./pages/Index";
import HR from "./pages/HR";
import Policies from "./pages/Policies";
import FAQs from "./pages/FAQs";
import LearningDevelopment from "./pages/LearningDevelopment";
import Products from "./pages/Products";//EmployeeEngagement 
import EmployeeEngagement from "./pages/EmployeeEngagement";//repositories
import Repositories from "./pages/Repositories";//Internal-jobs
import Internaljobs from "./pages/Internaljobs";   //Talent-acquisition
import Talentacquisition from "./pages/Talentacquisition"; 


import Holidays from "./pages/Holidays";
import NotFound from "./pages/NotFound";
import OrgStructure from "./pages/orgstructure";





const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/hr" element={<HR />} />
            <Route path="/policies" element={<Policies />} />
            
             <Route path="/holidays" element={<Holidays />} />
             <Route path="/faqs" element={<FAQs />} />
             <Route path="/learning" element={<LearningDevelopment />} /> 
             <Route path="/Products" element={<Products />} />
             <Route path="/engagement" element={<EmployeeEngagement />} />
             <Route path="/repositories" element={<Repositories />} />
             <Route path="/jobs" element={< Internaljobs/>} />   
           
             <Route path="/talent" element={< Talentacquisition/>} />
             <Route path="/org" element={<OrgStructure />} />


              
            {/* Additional routes will be added as the application expands   talent  */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
