# Analytics Quick Start Guide 🚀

Get your website analytics up and running in 5 minutes!

## ✅ What's Already Set Up

Your website now has:
- ✅ Cookie consent banner (GDPR compliant)
- ✅ Google Analytics 4 integration
- ✅ AWS CloudWatch RUM integration
- ✅ Geolocation tracking
- ✅ Traffic source tracking (social media, search engines)
- ✅ Click tracking on CTAs
- ✅ Form submission tracking
- ✅ New vs returning visitor tracking

## 🎯 Quick Setup (5 Minutes)

### Step 1: Get Google Analytics ID (3 minutes)

1. Go to https://analytics.google.com/
2. Sign in with your Google account
3. Click "Start measuring" → Fill in account details
4. Create a property (choose "Web")
5. Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`)

### Step 2: Add to Your Project (2 minutes)

1. **Create environment file:**
   ```bash
   # In your project root, copy the template
   cp env.template .env.local
   ```

2. **Add your Google Analytics ID:**
   ```bash
   # Edit .env.local
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   Replace `G-XXXXXXXXXX` with your actual Measurement ID

3. **Run your site:**
   ```bash
   npm run dev
   ```

4. **Test it:**
   - Visit your site at http://localhost:5173
   - Accept cookies when the banner appears
   - Open browser console - you should see "Google Analytics initialized"
   - Check Google Analytics Realtime reports (may take a few minutes)

## 🎉 That's It!

Your analytics are now tracking:
- 📊 Page views
- 🖱️ Button clicks
- 📍 User locations
- 🌐 Traffic sources
- 📝 Form submissions
- ⏱️ Time on site

## 📊 View Your Data

### Google Analytics Dashboard

1. Go to https://analytics.google.com/
2. Click on your property
3. View reports:
   - **Realtime:** See visitors right now
   - **Engagement:** View page views and events
   - **Acquisition:** See where traffic comes from
   - **Demographics:** See user locations

### Debug Dashboard (For Testing)

Visit your site with `?debug=analytics` in the URL:
```
http://localhost:5173?debug=analytics
```

This shows:
- ✅ Analytics status (active/inactive)
- 📍 User geolocation
- 🍪 Active cookies
- 📊 Recent page visits
- 🌐 Traffic source

## 🔧 Optional: AWS CloudWatch RUM

For advanced monitoring (optional):

1. Go to AWS Console → CloudWatch → RUM
2. Create an app monitor
3. Add credentials to `.env.local`:
   ```bash
   VITE_AWS_RUM_APP_ID=your-app-id
   VITE_AWS_REGION=us-east-1
   VITE_AWS_IDENTITY_POOL_ID=your-pool-id
   ```
4. Enable in `src/config/analytics.config.ts`:
   ```typescript
   awsRum: {
     enabled: true, // Change to true
   }
   ```

## 🐛 Troubleshooting

**Analytics not working?**
- ✅ Check cookie banner was accepted
- ✅ Verify `.env.local` has correct Measurement ID
- ✅ Check browser console for errors
- ✅ Disable ad blockers
- ✅ Wait 24-48 hours for data in GA4

**Not seeing realtime data?**
- It can take 1-2 minutes for data to appear
- Try opening in incognito mode
- Check GA4 Realtime reports

**Cookie banner not appearing?**
- Clear localStorage: `localStorage.clear()` in browser console
- Refresh the page

## 📝 What Gets Tracked

### Automatically Tracked
- ✅ Every page view
- ✅ Session duration
- ✅ Traffic source (Facebook, Google, Twitter, etc.)
- ✅ User location (city, country)
- ✅ Device and browser type
- ✅ New vs returning visitors

### Manually Tracked (Already Added)
- ✅ WhatsApp button clicks
- ✅ Contact form submissions
- ✅ Email/phone clicks
- ✅ All CTA button clicks

## 🎨 Adding Custom Tracking

Want to track more buttons or events?

```typescript
import { analytics } from "@/lib/analytics";

// Track any button click
const handleClick = () => {
  analytics.trackClick("Button Name");
  // your code
};

// Track custom events
analytics.trackEvent({
  category: "user_action",
  action: "download",
  label: "product_brochure"
});
```

## 🚀 Deploy to Production

1. **Set environment variables in your hosting platform:**
   - **Vercel:** Settings → Environment Variables
   - **Netlify:** Site settings → Environment variables
   - **AWS Amplify:** App settings → Environment variables

2. **Add your production Measurement ID:**
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. **Build and deploy:**
   ```bash
   npm run build
   ```

## 📚 Full Documentation

For detailed setup instructions, see [ANALYTICS_SETUP.md](./ANALYTICS_SETUP.md)

## ❓ Questions?

- Check browser console for error messages
- Verify environment variables are set correctly
- Make sure cookies were accepted
- Check Google Analytics Help Center

---

**Built with:** React + TypeScript + Google Analytics 4 + AWS CloudWatch RUM
**Privacy:** GDPR compliant with cookie consent

