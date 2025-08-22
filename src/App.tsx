import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { QueryProvider } from "./providers/QueryProvider";
import { preloadCriticalImages } from "./utils/imagePreloader";
import * as serviceWorker from "./serviceWorker";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#050609]">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-white/60">Loading...</p>
    </div>
  </div>
);

const App = () => {
  useEffect(() => {
    // Register service worker for offline caching
    serviceWorker.register({
      onSuccess: () => console.log("Service worker registered successfully"),
      onUpdate: () => console.log("New content available, please refresh"),
    });

    // Preload critical images
    preloadCriticalImages()
      .then(() => console.log("Critical images preloaded"))
      .catch((err) => console.error("Failed to preload images:", err));

    // Performance monitoring
    if ("PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // Log performance metrics
          console.log(`${entry.name}: ${entry.duration}ms`);
        });
      });
      observer.observe({ entryTypes: ["navigation", "resource"] });
    }
  }, []);

  return (
    <QueryProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryProvider>
  );
};

export default App;
