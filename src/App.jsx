
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Analytics from "./pages/Analytics";
import Trainers from "./pages/Trainers";
import Classes from "./pages/Classes";
import Finances from "./pages/Finances";
import NotFound from "./pages/NotFound";

// Add framer-motion for animations
import { motion, AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="members" element={<Members />} />
              <Route path="trainers" element={<Trainers />} />
              <Route path="classes" element={<Classes />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="finances" element={<Finances />} />
              <Route path="settings" element={<NotFound />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
