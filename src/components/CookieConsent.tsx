import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { X, Cookie, Shield, BarChart3 } from "lucide-react";

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
}

export const CookieConsent = ({ onAccept, onDecline }: CookieConsentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setIsVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setIsVisible(false);
    onDecline();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none">
      <div className="pointer-events-auto w-full max-w-4xl mx-4 mb-4 animate-in slide-in-from-bottom-5">
        <Card className="border-2 border-primary/20 shadow-2xl bg-white/95 backdrop-blur-sm">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Cookie className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Cookie & Privacy Consent
                </h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleDecline}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar technologies to enhance your browsing experience, 
                analyze site traffic, understand user behavior, and improve our services. 
                This includes tracking your IP address for geolocation purposes and monitoring 
                which sources bring visitors to our site.
              </p>

              {showDetails && (
                <div className="space-y-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Essential Cookies</h4>
                      <p className="text-sm text-gray-600">
                        Required for basic website functionality and security. These cannot be disabled.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <BarChart3 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Analytics & Performance</h4>
                      <p className="text-sm text-gray-600">
                        Help us understand visitor behavior, traffic sources (social media, direct, etc.), 
                        click-through rates, session duration, and geolocation data. We use Google Analytics 
                        and AWS CloudWatch for comprehensive monitoring.
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-gray-700">
                    <strong>Data We Collect:</strong> IP address (for geolocation), referrer URL, 
                    device type, browser information, page views, button clicks, time on site, 
                    and traffic source (social media platforms, search engines, direct visits).
                  </div>
                </div>
              )}

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-primary hover:text-primary/80 text-sm font-medium underline"
              >
                {showDetails ? "Hide Details" : "Show Details"}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button
                onClick={handleAccept}
                className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-2.5"
                size="lg"
              >
                Accept All Cookies
              </Button>
              <Button
                onClick={handleDecline}
                variant="outline"
                className="flex-1 border-2 font-semibold py-2.5"
                size="lg"
              >
                Decline Optional Cookies
              </Button>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              By accepting, you agree to our use of cookies for analytics and performance monitoring. 
              You can change your preferences at any time.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CookieConsent;

