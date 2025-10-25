// Analytics utility for tracking user activity and events

interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

interface PageViewData {
  path: string;
  title: string;
  referrer?: string;
}

class Analytics {
  private gaInitialized = false;
  private awsRumInitialized = false;
  private consentGiven = false;

  constructor() {
    this.checkConsent();
  }

  private checkConsent(): boolean {
    const consent = localStorage.getItem("cookieConsent");
    this.consentGiven = consent === "accepted";
    return this.consentGiven;
  }

  // Initialize Google Analytics 4
  initGA(measurementId: string) {
    if (!this.checkConsent() || this.gaInitialized) return;

    try {
      // Load GA4 script
      const script1 = document.createElement("script");
      script1.async = true;
      console.log("measurementId", measurementId);
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script1);

      // Initialize dataLayer
      window.dataLayer = window.dataLayer || [];
      
      // Define gtag function
      const gtag = (...args: any[]) => {
        window.dataLayer.push(args);
      };
      window.gtag = gtag;

      gtag("js", new Date());
      gtag("config", measurementId, {
        send_page_view: true,
        cookie_flags: "SameSite=None;Secure",
      });

      this.gaInitialized = true;
      console.log("Google Analytics initialized");
    } catch (error) {
      console.error("Error initializing Google Analytics:", error);
    }
  }

  // Initialize AWS CloudWatch RUM
  initAWSRum(config: {
    applicationId: string;
    applicationVersion: string;
    region: string;
    identityPoolId: string;
  }) {
    if (!this.checkConsent() || this.awsRumInitialized) return;

    try {
      // AWS RUM initialization script
      const script = document.createElement("script");
      script.innerHTML = `
        (function(n,i,v,r,s,c,x,z){
          x=window.AwsRumClient={q:[],n:n,i:i,v:v,r:r,c:c};
          window[n]=function(c,p){x.q.push({c:c,p:p});};
          z=document.createElement('script');
          z.async=true;
          z.src=s;
          document.head.insertBefore(z,document.head.getElementsByTagName('script')[0]);
        })(
          'cwr',
          '${config.applicationId}',
          '${config.applicationVersion}',
          '${config.region}',
          'https://client.rum.us-east-1.amazonaws.com/1.x/cwr.js',
          {
            sessionSampleRate: 1,
            identityPoolId: '${config.identityPoolId}',
            endpoint: "https://dataplane.rum.${config.region}.amazonaws.com",
            telemetries: ["performance","errors","http"],
            allowCookies: true,
            enableXRay: false
          }
        );
      `;
      document.head.appendChild(script);

      this.awsRumInitialized = true;
      console.log("AWS CloudWatch RUM initialized");
    } catch (error) {
      console.error("Error initializing AWS RUM:", error);
    }
  }

  // Track page views
  trackPageView(data: PageViewData) {
    if (!this.checkConsent()) return;

    try {
      // Google Analytics
      if (window.gtag) {
        window.gtag("event", "page_view", {
          page_path: data.path,
          page_title: data.title,
          page_referrer: data.referrer || document.referrer,
        });
      }

      // Custom tracking - store locally for analytics dashboard
      this.storePageView(data);

      console.log("Page view tracked:", data.path);
    } catch (error) {
      console.error("Error tracking page view:", error);
    }
  }

  // Track custom events (button clicks, form submissions, etc.)
  trackEvent(event: AnalyticsEvent) {
    if (!this.checkConsent()) return;

    try {
      // Google Analytics
      if (window.gtag) {
        window.gtag("event", event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
        });
      }

      // AWS RUM custom event
      if (window.cwr) {
        window.cwr("recordEvent", event.action, {
          category: event.category,
          label: event.label,
          value: event.value,
        });
      }

      console.log("Event tracked:", event);
    } catch (error) {
      console.error("Error tracking event:", error);
    }
  }

  // Track button/link clicks (CTR)
  trackClick(elementName: string, url?: string) {
    this.trackEvent({
      category: "engagement",
      action: "click",
      label: elementName,
    });

    if (url) {
      this.trackEvent({
        category: "navigation",
        action: "outbound_click",
        label: url,
      });
    }
  }

  // Track traffic source and social media
  getTrafficSource(): string {
    const referrer = document.referrer.toLowerCase();
    
    if (!referrer) return "direct";
    
    const socialPlatforms = {
      facebook: ["facebook.com", "fb.com"],
      twitter: ["twitter.com", "t.co", "x.com"],
      instagram: ["instagram.com"],
      linkedin: ["linkedin.com"],
      youtube: ["youtube.com"],
      pinterest: ["pinterest.com"],
      reddit: ["reddit.com"],
      tiktok: ["tiktok.com"],
      whatsapp: ["whatsapp.com", "wa.me"],
    };

    for (const [platform, domains] of Object.entries(socialPlatforms)) {
      if (domains.some((domain) => referrer.includes(domain))) {
        return `social_${platform}`;
      }
    }

    if (referrer.includes("google")) return "search_google";
    if (referrer.includes("bing")) return "search_bing";
    if (referrer.includes("yahoo")) return "search_yahoo";

    return "referral";
  }

  // Get user's IP and geolocation info
  async getUserLocation() {
    if (!this.checkConsent()) return null;

    try {
      // Using ipapi.co for geolocation (free tier available)
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      
      return {
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country_name,
        countryCode: data.country_code,
        timezone: data.timezone,
        latitude: data.latitude,
        longitude: data.longitude,
      };
    } catch (error) {
      console.error("Error fetching geolocation:", error);
      return null;
    }
  }

  // Store page view locally for custom analytics
  private storePageView(data: PageViewData) {
    try {
      const visits = JSON.parse(localStorage.getItem("siteVisits") || "[]");
      const trafficSource = this.getTrafficSource();
      
      visits.push({
        ...data,
        timestamp: new Date().toISOString(),
        trafficSource,
        userAgent: navigator.userAgent,
      });

      // Keep only last 100 visits to avoid storage bloat
      if (visits.length > 100) {
        visits.shift();
      }

      localStorage.setItem("siteVisits", JSON.stringify(visits));
    } catch (error) {
      console.error("Error storing page view:", error);
    }
  }

  // Track new vs returning visitor
  trackVisitorType() {
    const firstVisit = localStorage.getItem("firstVisit");
    const now = new Date().toISOString();

    if (!firstVisit) {
      localStorage.setItem("firstVisit", now);
      this.trackEvent({
        category: "visitor",
        action: "new_visitor",
        label: now,
      });
      return "new";
    } else {
      this.trackEvent({
        category: "visitor",
        action: "returning_visitor",
        label: firstVisit,
      });
      return "returning";
    }
  }

  // Get all cookies for monitoring
  getAllCookies() {
    const cookies: Record<string, string> = {};
    document.cookie.split(";").forEach((cookie) => {
      const [name, value] = cookie.split("=").map((c) => c.trim());
      if (name) cookies[name] = value || "";
    });
    return cookies;
  }

  // Get analytics summary
  getAnalyticsSummary() {
    return {
      consent: this.consentGiven,
      gaInitialized: this.gaInitialized,
      awsRumInitialized: this.awsRumInitialized,
      trafficSource: this.getTrafficSource(),
      cookies: this.getAllCookies(),
      visits: JSON.parse(localStorage.getItem("siteVisits") || "[]"),
      firstVisit: localStorage.getItem("firstVisit"),
      visitorType: localStorage.getItem("firstVisit") ? "returning" : "new",
    };
  }
}

// Export singleton instance
export const analytics = new Analytics();

// Type declarations for window objects
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    cwr: (command: string, ...args: any[]) => void;
    AwsRumClient: any;
  }
}

export default analytics;

