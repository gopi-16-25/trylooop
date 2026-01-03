import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import CSyllabus from "./pages/CSyllabus";
import Careers from "./pages/Careers";
import Courses from "./pages/Courses";

import NotFound from "./pages/NotFound";
import ScrollToTopButton from "./components/ScrollToTopButton";
import CLearningPlan from "./components/CLearningPlan";  


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <ScrollToTopButton />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses/c/resources/syllabus" element={<CSyllabus />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/c/plan" element={<CLearningPlan />} />  
          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
