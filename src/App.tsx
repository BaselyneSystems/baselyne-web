import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import CDCPlatform from "./pages/blog/CDCPlatform";
import Bulkhead from "./pages/blog/Bulkhead";
import GateKeeper from "./pages/blog/GateKeeper";
import RobotDataLake from "./pages/blog/RobotDataLake";
import TrainingPipeline from "./pages/blog/TrainingPipeline";
import PhysicalAI from "./pages/industries/PhysicalAI";
import Solutions from "./pages/Solutions";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<PhysicalAI />} />
          <Route path="/physical-ai" element={<PhysicalAI />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/cdc-platform" element={<CDCPlatform />} />
          <Route path="/blog/bulkhead" element={<Bulkhead />} />
          <Route path="/blog/gatekeeper" element={<GateKeeper />} />
          <Route path="/blog/robot-data-lake" element={<RobotDataLake />} />
          <Route path="/blog/training-pipeline" element={<TrainingPipeline />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
