# Analytics & Tracking Setup Guide

This guide will help you set up comprehensive analytics and tracking for your website.

## 🚀 Features Implemented

✅ **Cookie Consent Banner** - GDPR compliant banner with accept/decline options
✅ **Google Analytics 4** - Track page views, events, traffic sources, and CTR
✅ **AWS CloudWatch RUM** - Monitor performance, errors, and user behavior
✅ **Geolocation Tracking** - Identify user location via IP address
✅ **Traffic Source Tracking** - Know which social media or search engine brings visitors
✅ **Click Tracking** - Monitor CTR on important buttons and links
✅ **New vs Returning Visitors** - Track visitor types
✅ **Cookie Monitoring** - View all cookies stored by the site

## 📋 Setup Instructions

### 1. Google Analytics 4 Setup

1. **Create a Google Analytics account:**
   - Go to https://analytics.google.com/
   - Click "Start measuring"
   - Fill in Account details
   - Create a Property (Web)
   - Accept terms and conditions

2. **Get your Measurement ID:**
   - In GA4, go to Admin (bottom left)
   - Under Property, click "Data Streams"
   - Click on your web stream
   - Copy the "Measurement ID" (format: G-XXXXXXXXXX)

3. **Add to your project:**
   ```bash
   # Create .env.local file in project root
   echo "VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX" >> .env.local
   ```

4. **Enable in config:**
   - The tracking is already enabled by default in `src/config/analytics.config.ts`

### 2. AWS CloudWatch RUM Setup (Optional but Recommended)

1. **Create AWS Account:**
   - Sign up at https://aws.amazon.com/
   - Free tier includes 100,000 RUM events per month

2. **Create App Monitor:**
   ```bash
   # Using AWS Console:
   # 1. Go to CloudWatch > Application Monitoring > RUM
   # 2. Click "Create app monitor"
   # 3. Enter app name (e.g., "igtc-website")
   # 4. Choose "Create new Identity Pool" for authentication
   # 5. Note down the Application ID and Identity Pool ID
   ```

3. **Configure Cognito Identity Pool:**
   - The wizard will create this automatically
   - Ensure "Enable access to unauthenticated identities" is checked

4. **Add to your project:**
   ```bash
   # Add to .env.local
   echo "VITE_AWS_RUM_APP_ID=your-app-id" >> .env.local
   echo "VITE_AWS_REGION=us-east-1" >> .env.local
   echo "VITE_AWS_IDENTITY_POOL_ID=us-east-1:xxxxx" >> .env.local
   ```

5. **Enable AWS RUM:**
   ```typescript
   // In src/config/analytics.config.ts
   awsRum: {
     // ... existing config
     enabled: true, // Change this to true
   }
   ```

### 3. Environment Variables Setup

Create a `.env.local` file in the project root:

```bash
# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# AWS CloudWatch RUM (optional)
VITE_AWS_RUM_APP_ID=your-app-id-here
VITE_AWS_REGION=us-east-1
VITE_AWS_IDENTITY_POOL_ID=us-east-1:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

**Important:** Add `.env.local` to your `.gitignore` to keep keys secret!

## 📊 What Gets Tracked

### Automatic Tracking

1. **Page Views**
   - Path, title, and referrer for every page
   - Tracked on route changes

2. **Traffic Sources**
   - Social media platforms (Facebook, Twitter, Instagram, LinkedIn, etc.)
   - Search engines (Google, Bing, Yahoo)
   - Direct visits
   - Referral sites

3. **User Information**
   - IP address (for geolocation only)
   - City, region, and country
   - Browser and device type
   - New vs returning visitor

4. **Performance Metrics** (via AWS RUM)
   - Page load times
   - JavaScript errors
   - HTTP request performance
   - User session duration

### Manual Event Tracking

The following interactions are tracked:

- ✅ WhatsApp button clicks
- ✅ Contact form submissions
- ✅ Phone, email, and location clicks
- ✅ All external link clicks

## 🔧 How to Add Custom Tracking

### Track a Button Click

```typescript
import { analytics } from "@/lib/analytics";

const handleClick = () => {
  analytics.trackClick("Button Name", "optional-url");
  // Your button logic
};
```

### Track a Custom Event

```typescript
import { analytics } from "@/lib/analytics";

analytics.trackEvent({
  category: "user_engagement",
  action: "video_play",
  label: "hero_video",
  value: 1
});
```

### Track Form Submission

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  analytics.trackEvent({
    category: "form",
    action: "submit",
    label: "newsletter_signup"
  });
  
  // Your form logic
};
```

### Use Analytics Hook

```typescript
import { useAnalytics } from "@/hooks/useAnalytics";

function MyComponent() {
  const { trackEvent, trackClick } = useAnalytics();
  
  const handleAction = () => {
    trackClick("My Button");
  };
  
  return <button onClick={handleAction}>Click Me</button>;
}
```

## 🍪 Cookie Consent

The cookie consent banner:
- Appears on first visit
- Shows details about what data is collected
- Allows accept or decline
- Stores preference in localStorage
- Only initializes tracking after acceptance

### Managing Cookie Consent

Users can change their preference by clearing localStorage:

```javascript
// In browser console
localStorage.removeItem('cookieConsent');
// Refresh page to see banner again
```

## 📈 Viewing Analytics Data

### Google Analytics Dashboard

1. Go to https://analytics.google.com/
2. Select your property
3. View real-time data in Reports > Realtime
4. View detailed reports:
   - **Traffic sources:** Reports > Acquisition > Traffic acquisition
   - **User behavior:** Reports > Engagement > Pages and screens
   - **Events:** Reports > Engagement > Events
   - **Demographics:** Reports > User > Demographics

### AWS CloudWatch Dashboard

1. Go to AWS Console > CloudWatch
2. Navigate to Application Monitoring > RUM
3. Select your app monitor
4. View:
   - Performance metrics
   - Error tracking
   - User sessions
   - Page load times
   - JavaScript errors

## 🔍 Debugging Analytics

### Check if Analytics is Working

Open browser console and look for:
- "Google Analytics initialized"
- "AWS CloudWatch RUM initialized"
- "Analytics initialized successfully"

### View Analytics Summary

```javascript
// In browser console
import { analytics } from './src/lib/analytics';
console.log(analytics.getAnalyticsSummary());
```

### Common Issues

1. **Analytics not loading:**
   - Check cookie consent is accepted
   - Verify environment variables are set
   - Check browser console for errors

2. **GA4 not receiving data:**
   - Verify Measurement ID is correct (starts with G-)
   - Check that ad blockers are disabled
   - Wait 24-48 hours for data to appear in GA4

3. **AWS RUM errors:**
   - Verify Identity Pool ID is correct
   - Check IAM permissions for unauthenticated users
   - Ensure region matches Identity Pool region

## 🛡️ Privacy & GDPR Compliance

This implementation is GDPR compliant:

✅ Cookie consent required before tracking
✅ Clear explanation of what data is collected
✅ Users can decline optional cookies
✅ No tracking without consent
✅ Data collection is transparent

### Required Additions for Full Compliance

1. Add Privacy Policy page
2. Add Terms of Service
3. Link to both from cookie banner
4. Allow users to delete their data (contact form)
5. Document data retention policies

## 📝 Data Collected

### With User Consent

- IP address (for geolocation)
- Browser and device information
- Pages visited and time spent
- Button and link clicks
- Form submissions
- Traffic source/referrer
- Geographic location (city, country)

### Without Consent

- None (only essential site functionality)

## 🚀 Production Deployment

1. **Set environment variables in hosting platform:**
   - Vercel: Settings > Environment Variables
   - Netlify: Site settings > Build & deploy > Environment
   - AWS Amplify: App settings > Environment variables

2. **Build and deploy:**
   ```bash
   npm run build
   ```

3. **Verify tracking:**
   - Visit your site
   - Accept cookies
   - Check Google Analytics Realtime reports
   - Check AWS CloudWatch RUM (if enabled)

## 📞 Support

For issues or questions:
- Check browser console for errors
- Review this documentation
- Check Google Analytics Help Center
- Review AWS CloudWatch RUM documentation

---

**Last Updated:** October 2025
**Version:** 1.0.0

