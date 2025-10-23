import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";
import { analytics } from "./lib/analytics";
import { analyticsConfig } from "./config/analytics.config";

const queryClient = new QueryClient();

const App = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    // Check if user has already made a cookie consent choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowCookieConsent(true);
    } else if (consent === "accepted") {
      initializeAnalytics();
    }
  }, []);

  const initializeAnalytics = () => {
    // Initialize Google Analytics
    if (analyticsConfig.googleAnalytics.enabled) {
      analytics.initGA(analyticsConfig.googleAnalytics.measurementId);
    }

    // Initialize AWS CloudWatch RUM
    if (analyticsConfig.awsRum.enabled) {
      analytics.initAWSRum(analyticsConfig.awsRum);
    }

    // Track visitor type (new vs returning)
    analytics.trackVisitorType();

    // Track traffic source
    const trafficSource = analytics.getTrafficSource();
    analytics.trackEvent({
      category: "traffic",
      action: "source",
      label: trafficSource,
    });

    // Get user geolocation
    analytics.getUserLocation().then((location) => {
      if (location) {
        analytics.trackEvent({
          category: "geolocation",
          action: "detected",
          label: `${location.city}, ${location.country}`,
        });
        sessionStorage.setItem("userLocation", JSON.stringify(location));
      }
    });

    console.log("Analytics initialized successfully");
  };

  const handleAcceptCookies = () => {
    setShowCookieConsent(false);
    initializeAnalytics();
  };

  const handleDeclineCookies = () => {
    setShowCookieConsent(false);
    console.log("User declined cookies - analytics disabled");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {showCookieConsent && (
          <CookieConsent
            onAccept={handleAcceptCookies}
            onDecline={handleDeclineCookies}
          />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;