// Analytics Configuration
// Replace these with your actual IDs from Google Analytics and AWS

export const analyticsConfig = {
  // Google Analytics 4 Configuration
  // Get this from: https://analytics.google.com/
  // Format: G-XXXXXXXXXX
  googleAnalytics: {
    measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || "G-XXXXXXXXXX",
    enabled: true,
  },

  // AWS CloudWatch RUM Configuration
  // Get these from AWS Console: CloudWatch > RUM > Create App Monitor
  awsRum: {
    applicationId: import.meta.env.VITE_AWS_RUM_APP_ID || "your-app-id",
    applicationVersion: "1.0.0",
    region: import.meta.env.VITE_AWS_REGION || "us-east-1",
    identityPoolId: import.meta.env.VITE_AWS_IDENTITY_POOL_ID || "us-east-1:xxxxx",
    enabled: false, // Set to true when you have configured AWS
  },

  // Feature flags
  features: {
    trackPageViews: true,
    trackClicks: true,
    trackGeolocation: true,
    trackTrafficSource: true,
    trackVisitorType: true,
  },
};

export default analyticsConfig;

