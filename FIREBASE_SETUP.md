# Firebase Deployment Guide

## 📋 Firebase Files Overview

### ✅ Files to COMMIT (Already in your repo)

These files should be tracked in Git:

1. **`firebase.json`** - Firebase hosting configuration
   - Defines hosting rules
   - Sets up rewrites for SPA routing
   - Configures public directory

2. **`.firebaserc`** - Firebase project configuration
   - Links to your Firebase project: `igtc-be04a`
   - Can have multiple environments (dev, staging, prod)

### 🚫 Files to IGNORE (Updated in .gitignore)

These files should NOT be committed:

1. **`.firebase/`** - Firebase cache directory
   - Contains deployment cache
   - Build artifacts
   - Temporary files

2. **`firebase-debug.log`** - Firebase debug logs
   - Created when running Firebase emulators
   - Contains local debugging information

3. **`firebase-debug.*.log`** - Firebase debug logs with timestamps

4. **`.firebase-cache/`** - Firebase cache directory

## 🚀 Current Firebase Configuration

### Project Details
```json
{
  "projects": {
    "default": "igtc-be04a"
  }
}
```

### Hosting Configuration
- **Public Directory:** `dist/`
- **SPA Rewrites:** Enabled (all routes → `/index.html`)
- **Ignored Files:** firebase.json, hidden files, node_modules

## 📦 Deployment Commands

### Build and Deploy
```bash
# 1. Build the production bundle
npm run build

# 2. Deploy to Firebase Hosting
firebase deploy

# Or do both in one command
npm run build && firebase deploy
```

### Deploy Only Hosting
```bash
firebase deploy --only hosting
```

### Preview Before Deploy
```bash
firebase hosting:channel:deploy preview
```

## 🔐 .gitignore Configuration

Your `.gitignore` now includes:

```gitignore
# Firebase
.firebase/
firebase-debug.log
firebase-debug.*.log
.firebase-cache/

# AWS (for AWS CloudWatch RUM)
aws-exports.js
amplify/
.amplify/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build artifacts
dist
build

# Dependencies
node_modules

# Logs
*.log

# Temporary files
*.tmp
*.temp
.cache
```

## 🌐 Your Firebase Hosting URL

Based on your project ID (`igtc-be04a`), your site is likely hosted at:

**Primary URL:** `https://igtc-be04a.web.app`
**Alternative URL:** `https://igtc-be04a.firebaseapp.com`

### Custom Domain Setup

If you want to use a custom domain (e.g., `www.igtc.com`):

1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the DNS configuration steps
4. Wait for SSL certificate provisioning (can take 24-48 hours)

## 📊 Firebase + Analytics Integration

Your website uses Google Analytics 4, which integrates well with Firebase:

### Benefits
- Same Google account
- Unified reporting
- Firebase Performance Monitoring (optional)
- Firebase Analytics (optional)

### Optional: Add Firebase Analytics

If you want to use Firebase's built-in analytics alongside Google Analytics:

```bash
# Install Firebase SDK
npm install firebase
```

Then create `src/lib/firebase.ts`:
```typescript
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "igtc-be04a.firebaseapp.com",
  projectId: "igtc-be04a",
  storageBucket: "igtc-be04a.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "G-5Y2Q093Z0Q" // Your GA4 ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
```

## 🛠️ Firebase CLI Commands

### Essential Commands
```bash
# Login to Firebase
firebase login

# Initialize Firebase (if needed)
firebase init

# Deploy
firebase deploy

# View deployment history
firebase hosting:releases:list

# Rollback to previous version
firebase hosting:rollback

# Open hosting URL
firebase open hosting:site

# Check Firebase CLI version
firebase --version

# Logout
firebase logout
```

### Multi-Environment Setup

If you want separate environments (dev, staging, prod):

```bash
# Add staging project
firebase use --add

# Switch between projects
firebase use default
firebase use staging
firebase use production

# Deploy to specific project
firebase deploy --project staging
```

## 📁 File Structure

```
igtc/
├── .firebase/              # ❌ IGNORED - Cache directory
├── .firebaserc            # ✅ COMMIT - Project config
├── firebase.json          # ✅ COMMIT - Hosting config
├── firebase-debug.log     # ❌ IGNORED - Debug logs
├── dist/                  # ❌ IGNORED - Build output
├── src/                   # ✅ COMMIT - Source code
├── public/                # ✅ COMMIT - Static assets
├── .env.local            # ❌ IGNORED - Environment vars
├── env.template          # ✅ COMMIT - Env template
└── package.json          # ✅ COMMIT - Dependencies
```

## 🔄 CI/CD Setup (Optional)

### GitHub Actions Workflow

Create `.github/workflows/firebase-deploy.yml`:

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        env:
          VITE_GA_MEASUREMENT_ID: ${{ secrets.GA_MEASUREMENT_ID }}
          
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: ${{ secrets.GITHUB_TOKEN }}
          firebaseServiceAccount: ${{ secrets.FIREBASE_SERVICE_ACCOUNT }}
          channelId: live
          projectId: igtc-be04a
```

## 📊 Monitoring

After deployment, monitor your site:

1. **Firebase Console:** https://console.firebase.google.com/
   - View hosting metrics
   - Check deployment history
   - Monitor bandwidth usage

2. **Google Analytics:** https://analytics.google.com/
   - User traffic
   - Page views
   - Conversion tracking

3. **Firebase Performance:** (Optional)
   - Page load times
   - Network requests
   - Custom traces

## 🐛 Troubleshooting

### Deployment Fails
```bash
# Clear cache and rebuild
rm -rf dist .firebase
npm run build
firebase deploy
```

### 404 Errors After Deploy
- Check `firebase.json` has SPA rewrites
- Verify `dist/` folder contains `index.html`
- Clear browser cache

### Environment Variables Not Working
- Make sure variables are prefixed with `VITE_`
- Rebuild after changing `.env.local`
- Check variables are not committed (security)

### Old Version Still Showing
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check deployment in Firebase Console
- Try incognito mode

## 🎉 Quick Deploy Checklist

Before deploying:

- [ ] Build succeeds locally (`npm run build`)
- [ ] No console errors in production build
- [ ] Environment variables set (for production)
- [ ] Analytics tracking ID configured
- [ ] Test site in `dist/` folder locally
- [ ] Git changes committed
- [ ] Run `firebase deploy`
- [ ] Test deployed site
- [ ] Check analytics working
- [ ] Verify all pages load correctly

## 📞 Support

**Firebase Documentation:** https://firebase.google.com/docs/hosting
**Firebase Support:** https://firebase.google.com/support

---

**Project:** IGTC Website
**Firebase Project ID:** igtc-be04a
**Last Updated:** October 2025

