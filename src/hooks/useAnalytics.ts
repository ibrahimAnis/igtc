import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { analytics } from "@/lib/analytics";
import { analyticsConfig } from "@/config/analytics.config";

export const useAnalytics = () => {
  const location = useLocation();

  // Initialize analytics on mount
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    
    if (consent === "accepted") {
      // Initialize Google Analytics
      if (analyticsConfig.googleAnalytics.enabled) {
        analytics.initGA(analyticsConfig.googleAnalytics.measurementId);
      }

      // Initialize AWS RUM
      if (analyticsConfig.awsRum.enabled) {
        analytics.initAWSRum(analyticsConfig.awsRum);
      }

      // Track visitor type
      analytics.trackVisitorType();

      // Get user location
      analytics.getUserLocation().then((location) => {
        if (location) {
          console.log("User location:", location);
          // Store location for analytics
          sessionStorage.setItem("userLocation", JSON.stringify(location));
        }
      });
    }
  }, []);

  // Track page views on route change
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    
    if (consent === "accepted" && analyticsConfig.features.trackPageViews) {
      analytics.trackPageView({
        path: location.pathname,
        title: document.title,
        referrer: document.referrer,
      });
    }
  }, [location]);

  // Return tracking functions
  const trackEvent = useCallback((category: string, action: string, label?: string, value?: number) => {
    analytics.trackEvent({ category, action, label, value });
  }, []);

  const trackClick = useCallback((elementName: string, url?: string) => {
    analytics.trackClick(elementName, url);
  }, []);

  const getAnalyticsSummary = useCallback(() => {
    return analytics.getAnalyticsSummary();
  }, []);

  return {
    trackEvent,
    trackClick,
    getAnalyticsSummary,
  };
};

export default useAnalytics;

