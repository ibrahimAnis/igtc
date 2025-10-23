import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { 
  BarChart3, 
  Users, 
  Globe, 
  MousePointer, 
  Cookie,
  Eye,
  X
} from "lucide-react";
import { analytics } from "@/lib/analytics";

// This is a debugging component to view analytics data
// Add ?debug=analytics to URL to show this dashboard

const AnalyticsDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [summary, setSummary] = useState<any>(null);
  const [location, setLocation] = useState<any>(null);

  useEffect(() => {
    // Check if debug mode is enabled via URL parameter
    const params = new URLSearchParams(window.location.search);
    if (params.get("debug") === "analytics") {
      setIsVisible(true);
      loadAnalyticsData();
    }
  }, []);

  const loadAnalyticsData = () => {
    const data = analytics.getAnalyticsSummary();
    setSummary(data);

    const locationData = sessionStorage.getItem("userLocation");
    if (locationData) {
      setLocation(JSON.parse(locationData));
    }
  };

  const refreshData = () => {
    loadAnalyticsData();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div className="container mx-auto py-8 px-4">
        <Card className="max-w-6xl mx-auto">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-6 w-6 text-primary" />
              <CardTitle>Analytics Dashboard (Debug Mode)</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsVisible(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Status Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className={summary?.consent ? "border-green-500" : "border-red-500"}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Cookie className="h-5 w-5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Cookie Consent</p>
                      <p className="text-xl font-bold">
                        {summary?.consent ? "Accepted" : "Declined"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={summary?.gaInitialized ? "border-green-500" : "border-gray-300"}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Google Analytics</p>
                      <p className="text-xl font-bold">
                        {summary?.gaInitialized ? "Active" : "Inactive"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={summary?.awsRumInitialized ? "border-green-500" : "border-gray-300"}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5" />
                    <div>
                      <p className="text-sm text-muted-foreground">AWS RUM</p>
                      <p className="text-xl font-bold">
                        {summary?.awsRumInitialized ? "Active" : "Inactive"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* User Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  User Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Visitor Type</p>
                    <p className="font-semibold capitalize">{summary?.visitorType || "Unknown"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">First Visit</p>
                    <p className="font-semibold">
                      {summary?.firstVisit 
                        ? new Date(summary.firstVisit).toLocaleString() 
                        : "Just now"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Traffic Source */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MousePointer className="h-5 w-5" />
                  Traffic Source
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold capitalize">
                  {summary?.trafficSource?.replace("_", " ") || "Unknown"}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Where this visitor came from
                </p>
              </CardContent>
            </Card>

            {/* Geolocation */}
            {location && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Geolocation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">IP Address</p>
                      <p className="font-semibold">{location.ip}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="font-semibold">
                        {location.city}, {location.region}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Country</p>
                      <p className="font-semibold">{location.country}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Timezone</p>
                      <p className="font-semibold">{location.timezone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Cookie className="h-5 w-5" />
                  Active Cookies
                </CardTitle>
              </CardHeader>
              <CardContent>
                {summary?.cookies && Object.keys(summary.cookies).length > 0 ? (
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {Object.entries(summary.cookies).map(([key, value]: [string, any]) => (
                      <div key={key} className="flex justify-between items-start p-2 bg-gray-50 rounded">
                        <span className="font-mono text-sm font-semibold">{key}</span>
                        <span className="font-mono text-xs text-muted-foreground ml-2 break-all max-w-md">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No cookies found</p>
                )}
              </CardContent>
            </Card>

            {/* Recent Visits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Page Visits</CardTitle>
              </CardHeader>
              <CardContent>
                {summary?.visits && summary.visits.length > 0 ? (
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {summary.visits.slice(-10).reverse().map((visit: any, index: number) => (
                      <div key={index} className="p-3 bg-gray-50 rounded">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-semibold">{visit.title}</span>
                          <span className="text-xs text-muted-foreground">
                            {new Date(visit.timestamp).toLocaleTimeString()}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{visit.path}</p>
                        {visit.trafficSource && (
                          <p className="text-xs text-primary mt-1 capitalize">
                            Source: {visit.trafficSource.replace("_", " ")}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No visits recorded yet</p>
                )}
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex gap-3">
              <Button onClick={refreshData} className="flex-1">
                Refresh Data
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  localStorage.clear();
                  sessionStorage.clear();
                  window.location.reload();
                }}
                className="flex-1"
              >
                Clear All Data & Reload
              </Button>
            </div>

            <div className="text-sm text-muted-foreground bg-blue-50 p-4 rounded">
              <strong>Debug Mode:</strong> To hide this dashboard, remove <code>?debug=analytics</code> from the URL.
              <br />
              To view it again, add <code>?debug=analytics</code> to any page URL.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;

