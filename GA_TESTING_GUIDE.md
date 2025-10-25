# Google Analytics Testing Guide

## ✅ What Was Fixed

### **Problem:** Google Analytics tag was not loading properly

### **Solution Applied:**

1. **Added GA4 script directly to `index.html`** (Line 19-27)
   - Loads immediately when page opens
   - Runs before React initializes
   - More reliable than dynamic loading

2. **Updated `analytics.ts`** 
   - Fixed gtag function definition
   - Added script detection to avoid duplicates
   - Better error handling and logging

3. **Dual Loading Strategy**
   - Script in HTML (fast, early load)
   - React configuration after cookie consent (privacy compliant)

## 🧪 Test Google Analytics (RIGHT NOW)

### **Step 1: Clear Cache & Reload**
```bash
1. Open your site in browser
2. Press: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
3. This forces a fresh reload
```

### **Step 2: Open Browser Console**
```bash
# Chrome/Edge/Firefox
Press F12 or Right-click → Inspect → Console tab
```

### **Step 3: Accept Cookie Consent**
```bash
1. Cookie banner should appear
2. Click "Accept All Cookies"
3. Watch console for these messages:
```

**Expected Console Output:**
```
✅ Google Analytics script already loaded from HTML
✅ Google Analytics configured with ID: G-5Y2Q093Z0Q
✅ Analytics initialized successfully
```

### **Step 4: Check GA Script Loaded**
```javascript
// In browser console, type:
window.gtag

// Should show: function gtag(){dataLayer.push(arguments);}
// If it shows "undefined", script didn't load
```

### **Step 5: Check DataLayer**
```javascript
// In browser console, type:
window.dataLayer

// Should show an array with entries like:
// [["js", Date], ["config", "G-5Y2Q093Z0Q", {...}]]
```

### **Step 6: Check Network Tab**
```bash
1. Open DevTools (F12)
2. Go to Network tab
3. Filter by: "google"
4. Reload page
5. Should see requests to:
   ✅ googletagmanager.com/gtag/js?id=G-5Y2Q093Z0Q
   ✅ google-analytics.com/g/collect
```

### **Step 7: Test Event Tracking**
```bash
1. Click WhatsApp button
2. Click contact links
3. Check console for:
   "Event tracked: {action: 'whatsapp_click', ...}"
```

### **Step 8: Check Google Analytics Realtime**
```bash
1. Visit: https://analytics.google.com
2. Select your property (G-5Y2Q093Z0Q)
3. Go to: Reports → Realtime
4. You should see: "1 user active now"
5. See your current page
6. Within 30-60 seconds!
```

## 🔧 If Still Not Working

### **Check 1: Verify Measurement ID**
```bash
# In browser console:
console.log("GA ID:", import.meta.env.VITE_GA_MEASUREMENT_ID);

# Should show: "G-5Y2Q093Z0Q"
# If undefined, environment variable not set
```

### **Check 2: Cookie Consent**
```javascript
// In browser console:
localStorage.getItem('cookieConsent')

// Should return: "accepted"
// If "declined" or null, GA won't initialize
```

### **Check 3: Ad Blockers**
```bash
# Ad blockers often block Google Analytics
1. Disable browser extensions
2. Try in Incognito/Private mode
3. Test on different browser
```

### **Check 4: View HTML Source**
```bash
1. Right-click page → View Page Source
2. Search for: "googletagmanager.com"
3. Should find the script tag at line 19:
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-5Y2Q093Z0Q"></script>
```

### **Check 5: Script Loading Error**
```javascript
// In browser console, look for errors like:
❌ "Failed to load resource: net::ERR_BLOCKED_BY_CLIENT"
   → Ad blocker is blocking it

❌ "Failed to load resource: 404"
   → Wrong measurement ID

❌ "Refused to load the script"
   → CSP (Content Security Policy) issue
```

## 🎯 Quick Test Checklist

Run through this quickly:

```bash
□ Open browser console (F12)
□ Clear cache and reload (Ctrl+Shift+R)
□ Accept cookie consent banner
□ Check console for "Google Analytics configured"
□ Type: window.gtag in console (should be a function)
□ Type: window.dataLayer in console (should be an array)
□ Go to Network tab → Filter "google" → See requests
□ Click WhatsApp button (check console for event)
□ Visit GA4 Realtime reports (see yourself)
```

## 📊 Expected Results

### **Browser Console:**
```
Google Analytics script already loaded from HTML
Google Analytics configured with ID: G-5Y2Q093Z0Q
Analytics initialized successfully
Page view tracked: /
Event tracked: {category: "visitor", action: "new_visitor"}
User location: {city: "...", country: "..."}
```

### **Network Tab:**
```
✅ GET googletagmanager.com/gtag/js?id=G-5Y2Q093Z0Q - Status 200
✅ POST google-analytics.com/g/collect - Status 204
✅ Multiple collect requests (page views, events)
```

### **Google Analytics Realtime:**
```
✅ Active users: 1 (or more)
✅ Page views: / (homepage)
✅ Events: page_view, new_visitor, etc.
✅ Location: Your city/country
✅ Traffic source: direct (or social if from link)
```

## 🐛 Common Issues & Solutions

### **Issue 1: "window.gtag is undefined"**
**Solution:**
```bash
1. View page source
2. Confirm script tag exists in HTML
3. Check for JavaScript errors in console
4. Try hard refresh (Ctrl+Shift+R)
```

### **Issue 2: "No data in Realtime"**
**Solution:**
```bash
1. Wait 2 minutes (can take time)
2. Check cookie consent was accepted
3. Disable ad blockers
4. Try incognito mode
5. Check Network tab for blocked requests
```

### **Issue 3: "Script blocked by ad blocker"**
**Solution:**
```bash
1. Disable uBlock Origin / AdBlock
2. Add site to whitelist
3. Test in different browser
4. Use browser with no extensions
```

### **Issue 4: "Wrong measurement ID"**
**Solution:**
```bash
# Verify in index.html (line 19):
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5Y2Q093Z0Q"></script>

# Should match your GA4 property
# Get correct ID from: analytics.google.com → Admin → Data Streams
```

### **Issue 5: "Events not showing"**
**Solution:**
```bash
1. Check Realtime → Events (not main reports)
2. Custom events take 24-48 hours for full reports
3. Use DebugView for immediate event testing
4. Install Google Analytics Debugger extension
```

## 🚀 Deploy & Test in Production

### **Step 1: Build with correct GA ID**
```bash
# Ensure env.template has correct ID
VITE_GA_MEASUREMENT_ID=G-5Y2Q093Z0Q

# Build
npm run build
```

### **Step 2: Verify in dist/index.html**
```bash
# Check built file has GA script
cat dist/index.html | grep "googletagmanager"

# Should output:
# <script async src="https://www.googletagmanager.com/gtag/js?id=G-5Y2Q093Z0Q"></script>
```

### **Step 3: Deploy to Firebase**
```bash
firebase deploy
```

### **Step 4: Test Live Site**
```bash
1. Visit: https://igtc-be04a.web.app
2. Open console (F12)
3. Accept cookies
4. Check for GA messages
5. Visit GA4 Realtime reports
6. Should see yourself within 2 minutes
```

## 📱 Test on Multiple Devices

```bash
□ Desktop Chrome (your main test)
□ Desktop Firefox
□ Desktop Safari (Mac)
□ Mobile Chrome (Android)
□ Mobile Safari (iPhone)
□ Incognito/Private mode
□ Without ad blockers
```

## ✅ Success Indicators

You'll know it's working when:

1. ✅ **Console shows:** "Google Analytics configured with ID: G-5Y2Q093Z0Q"
2. ✅ **Network tab shows:** Requests to googletagmanager.com and google-analytics.com
3. ✅ **window.gtag** is a function (not undefined)
4. ✅ **window.dataLayer** is an array with data
5. ✅ **GA4 Realtime** shows you as active user
6. ✅ **Events appear** in Realtime → Events
7. ✅ **No errors** in browser console

## 📞 Still Having Issues?

### **Debug Commands:**
```javascript
// In browser console, run these:

// 1. Check if GA loaded
console.log('gtag exists:', typeof window.gtag);
console.log('dataLayer exists:', Array.isArray(window.dataLayer));

// 2. Check cookie consent
console.log('Cookie consent:', localStorage.getItem('cookieConsent'));

// 3. Get analytics summary
// (requires debug dashboard: ?debug=analytics)

// 4. Check measurement ID
console.log('GA ID in HTML:', document.querySelector('script[src*="googletagmanager"]')?.src);

// 5. Manually fire test event
if (window.gtag) {
  window.gtag('event', 'test_event', {
    event_category: 'testing',
    event_label: 'manual_test'
  });
  console.log('Test event fired');
}
```

## 🎉 Expected Timeline

- **Right now (0 min):** Console shows "GA configured"
- **Within 30-60 seconds:** Appears in GA4 Realtime
- **Within 2-5 minutes:** Events show in Realtime → Events
- **Within 24 hours:** Full reports populated
- **Within 48 hours:** All historical data available

---

**Your Google Analytics 4 Measurement ID:** `G-5Y2Q093Z0Q`

**Test URL:** https://igtc-be04a.web.app

**GA4 Dashboard:** https://analytics.google.com

**Status:** ✅ Script added to HTML + React configuration updated

