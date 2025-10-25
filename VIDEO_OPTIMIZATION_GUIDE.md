# Video Gallery Optimization & Troubleshooting Guide

## 🔧 **Issues Fixed in VideoGallery Component**

### **Problems Identified:**
1. ❌ No error handling for failed video loads
2. ❌ No loading indicators
3. ❌ Videos not stopping when modal closes
4. ❌ Missing mobile optimization attributes
5. ❌ No feedback if video file doesn't exist
6. ❌ Poor auto-play handling

### **Solutions Implemented:**

#### ✅ **1. Added Error Handling**
```typescript
const [hasError, setHasError] = useState(false);

const handleVideoError = () => {
  setIsLoading(false);
  setHasError(true);
  console.error(`Failed to load video: ${selectedVideo?.videoUrl}`);
};
```

**Shows user-friendly error message when video fails to load.**

#### ✅ **2. Added Loading State**
```typescript
const [isLoading, setIsLoading] = useState(false);

// Loading spinner shown while video loads
{isLoading && (
  <Loader2 className="h-12 w-12 text-accent animate-spin" />
)}
```

#### ✅ **3. Video Reference for Better Control**
```typescript
const videoRef = useRef<HTMLVideoElement>(null);

// Properly stop video on close
if (videoRef.current) {
  videoRef.current.pause();
  videoRef.current.currentTime = 0;
}
```

#### ✅ **4. Mobile Optimization**
```typescript
<video 
  playsInline  // Prevents fullscreen on iOS
  preload="metadata"  // Loads only metadata initially
  controls
/>
```

#### ✅ **5. Better Auto-Play**
```typescript
useEffect(() => {
  if (isPlaying && videoRef.current && !hasError) {
    videoRef.current.play().catch((error) => {
      console.error("Auto-play failed:", error);
      setHasError(true);
    });
  }
}, [isPlaying, hasError]);
```

---

## 🎬 **Video File Requirements**

### **Where to Place Videos:**

Your videos should be in the `public/` folder:
```
public/
├── processing-area.mp4
├── machinery-1.mp4
├── storage_video.mp4
├── storage-1.mp4
├── storage-5.mp4
└── storage-video-3.mp4
```

**Why public folder?**
- Videos in `public/` are served as static assets
- Accessible via `/filename.mp4` in production
- No bundling or processing by Vite

### **Recommended Video Specifications:**

| Property | Recommendation | Why |
|----------|----------------|-----|
| **Format** | MP4 (H.264) | Universal browser support |
| **Resolution** | 1920x1080 (1080p) or 1280x720 (720p) | Balance quality & file size |
| **File Size** | < 50 MB per video | Faster loading |
| **Bitrate** | 2-5 Mbps | Good quality, manageable size |
| **Frame Rate** | 30 fps | Smooth playback |
| **Audio** | AAC codec | Best compatibility |

---

## 🚀 **Video Optimization Steps**

### **1. Check If Videos Exist:**
```bash
# In your project root
ls -lh public/*.mp4

# Should show all your video files
```

### **2. Compress Large Videos:**

If your videos are too large (> 50 MB), compress them:

#### **Using FFmpeg (Recommended):**
```bash
# Install FFmpeg first
# Mac: brew install ffmpeg
# Ubuntu: sudo apt install ffmpeg

# Compress video to ~10 MB
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k output.mp4

# For web optimization (smaller size, good quality)
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -strict -2 -movflags +faststart output.mp4
```

**Explanation:**
- `-crf 28`: Quality (lower = better, range 18-28)
- `-preset slow`: Compression efficiency
- `-movflags +faststart`: Progressive loading for web

#### **Using Online Tools:**
- **HandBrake:** https://handbrake.fr/ (Free, Desktop)
- **CloudConvert:** https://cloudconvert.com/mp4-converter (Online)
- **Clipchamp:** https://clipchamp.com/ (Online, Free)

**Settings to use:**
- Codec: H.264
- Quality: 720p or 1080p
- Bitrate: 2-5 Mbps
- Format: MP4

### **3. Create Video Thumbnails:**

Generate custom thumbnails for better loading:

```bash
# Extract frame at 3 seconds as thumbnail
ffmpeg -i video.mp4 -ss 00:00:03 -frames:v 1 thumbnail.jpg
```

Then update VideoGallery to use local thumbnails:
```typescript
thumbnail: "/thumbnails/processing-area.jpg"
```

---

## 📁 **Current Video File Locations**

### **Check Your Videos:**

1. **Navigate to public folder:**
```bash
cd public
ls -lh *.mp4
```

2. **Check file sizes:**
```bash
# Should be < 50 MB each for optimal loading
du -h *.mp4
```

3. **Test video accessibility:**
```bash
# Start dev server
npm run dev

# Visit in browser:
# http://localhost:5173/processing-area.mp4
# Should download or play the video
```

---

## 🐛 **Troubleshooting Video Issues**

### **Issue 1: Videos Not Loading**

**Symptoms:**
- Modal opens but video doesn't play
- Error message appears

**Solutions:**

#### **A. Check File Paths:**
```typescript
// In VideoGallery.tsx, verify paths match your files:
videoUrl: "/processing-area.mp4"  // Must match exact filename
```

```bash
# Check what files exist in public/
ls public/*.mp4
```

#### **B. Check File Permissions:**
```bash
# Make sure files are readable
chmod 644 public/*.mp4
```

#### **C. Verify in Browser:**
```
1. Open browser DevTools (F12)
2. Go to Network tab
3. Click on a video
4. Look for video file requests
5. Check status codes (should be 200)
```

**Common errors:**
- **404:** File doesn't exist at that path
- **403:** Permission denied
- **CORS:** File blocked by CORS policy

### **Issue 2: Videos Are Too Large / Slow Loading**

**Symptoms:**
- Long loading times
- Buffering
- Poor user experience

**Solutions:**

#### **A. Enable Progressive Loading:**
Videos should have moov atom at the beginning:
```bash
ffmpeg -i input.mp4 -movflags +faststart output.mp4
```

#### **B. Use Multiple Quality Levels:**
Create different resolutions:
```bash
# 720p version
ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libx264 -crf 28 video-720p.mp4

# 480p version
ffmpeg -i input.mp4 -vf scale=854:480 -c:v libx264 -crf 28 video-480p.mp4
```

Then implement quality selection in VideoGallery.

#### **C. Lazy Loading:**
Videos already use `preload="metadata"` which only loads metadata initially.

### **Issue 3: Videos Don't Play on Mobile**

**Symptoms:**
- Videos work on desktop but not on mobile
- iOS opens fullscreen
- Android doesn't autoplay

**Solutions Implemented:**

#### **A. Added `playsInline` Attribute:**
```typescript
<video playsInline>
```
Prevents fullscreen on iOS.

#### **B. Mobile Codec Check:**
Ensure H.264 codec (universally supported):
```bash
ffmpeg -i video.mp4 -c:v libx264 -profile:v baseline -level 3.0 -c:a aac output.mp4
```

#### **C. Test on Real Devices:**
```
1. Deploy to Firebase
2. Test on actual iPhone/Android
3. Check browser console for errors
```

### **Issue 4: Autoplay Not Working**

**Symptoms:**
- Video doesn't start automatically when play is clicked
- Need to click play button twice

**Solution:** Already implemented with try-catch:
```typescript
videoRef.current.play().catch((error) => {
  console.error("Auto-play failed:", error);
  setHasError(true);
});
```

**Why it might fail:**
- Browser autoplay policies (requires user interaction)
- Video not loaded yet
- Audio issues (mute for autoplay)

**Workaround for autoplay with audio:**
```typescript
<video muted autoPlay>
```

---

## ⚡ **Performance Optimization**

### **1. Video CDN (Recommended for Production)**

Instead of serving from your server, use a video CDN:

#### **A. YouTube (Free, Easy):**
Upload videos to YouTube (can be unlisted):
```typescript
// Replace video URLs with YouTube embeds
<iframe src="https://www.youtube.com/embed/VIDEO_ID" />
```

**Pros:**
- Free hosting
- Automatic compression
- Global CDN
- Adaptive streaming

**Cons:**
- YouTube branding
- Internet required

#### **B. Cloudflare Stream ($5/month):**
Professional video hosting with:
- Automatic optimization
- Adaptive bitrate streaming
- No buffering
- Analytics

#### **C. AWS S3 + CloudFront:**
```bash
# Upload to S3
aws s3 cp video.mp4 s3://your-bucket/videos/

# Serve via CloudFront CDN
```

### **2. Lazy Loading Videos:**

Only load video when modal opens:
```typescript
// Already implemented - video element created only when isPlaying=true
{isPlaying ? (
  <video src={selectedVideo.videoUrl} />
) : (
  <img src={thumbnail} />
)}
```

### **3. Compress All Videos:**

Batch compress all videos:
```bash
#!/bin/bash
# compress-videos.sh

for video in public/*.mp4; do
  filename=$(basename "$video" .mp4)
  ffmpeg -i "$video" -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k -movflags +faststart "public/${filename}-compressed.mp4"
done
```

---

## 📊 **Test Video Performance**

### **1. Check File Sizes:**
```bash
# List all videos with sizes
ls -lh public/*.mp4

# Target: < 50 MB per video
```

### **2. Test Loading Speed:**
```javascript
// In browser console
const start = Date.now();
fetch('/processing-area.mp4')
  .then(() => {
    console.log(`Loaded in ${Date.now() - start}ms`);
  });

// Should be < 3000ms (3 seconds)
```

### **3. Browser DevTools:**
```
1. Open Network tab
2. Click on a video
3. Check:
   - File size
   - Load time
   - Status code (200 = good)
   - Content-Type: video/mp4
```

---

## 🎯 **Quick Fixes Checklist**

### **If Videos Won't Play:**

- [ ] Check files exist in `public/` folder
- [ ] Verify filenames match exactly (case-sensitive)
- [ ] Test video URLs directly: `http://localhost:5173/video.mp4`
- [ ] Check browser console for errors
- [ ] Try different browser
- [ ] Check file size (< 100 MB)
- [ ] Verify video format is MP4 with H.264 codec

### **If Videos Are Slow:**

- [ ] Compress videos to < 50 MB
- [ ] Use FFmpeg with `-movflags +faststart`
- [ ] Check internet connection
- [ ] Consider using video CDN
- [ ] Create lower resolution versions

### **If Videos Don't Work on Mobile:**

- [ ] Added `playsInline` attribute ✅
- [ ] Used H.264 codec
- [ ] File size < 50 MB
- [ ] Test on actual devices
- [ ] Check mobile browser console

---

## 🚀 **Deploy with Videos**

### **1. Build & Check:**
```bash
npm run build

# Check dist folder has videos
ls -lh dist/*.mp4
```

**Note:** Videos in `public/` are copied to `dist/` during build.

### **2. Deploy to Firebase:**
```bash
firebase deploy
```

### **3. Test Live Site:**
```
1. Visit https://interglobetc.com
2. Open video gallery
3. Click each video
4. Verify they load and play
5. Test on mobile devices
```

---

## 💡 **Best Practices**

### **Do's:**
✅ Keep videos < 50 MB
✅ Use MP4 with H.264 codec
✅ Add `playsInline` for mobile
✅ Show loading indicators
✅ Handle errors gracefully
✅ Use `preload="metadata"`
✅ Stop videos on modal close
✅ Test on multiple devices

### **Don'ts:**
❌ Don't use huge 4K videos (unless necessary)
❌ Don't autoplay with audio (browsers block it)
❌ Don't forget error handling
❌ Don't use proprietary codecs (WebM, HEVC)
❌ Don't forget mobile testing
❌ Don't store videos in Git (too large)

---

## 📞 **Still Having Issues?**

### **Debug Steps:**

1. **Check Browser Console:**
```
F12 → Console tab
Look for errors like:
- "Failed to load resource"
- "CORS policy"
- "Format not supported"
```

2. **Network Tab:**
```
F12 → Network tab → Filter: "media"
- Click video
- See if file loads (status 200)
- Check size and load time
```

3. **Test Video Directly:**
```bash
# In browser, visit:
http://localhost:5173/processing-area.mp4

# Should download or play
```

4. **Check Video Codec:**
```bash
ffmpeg -i video.mp4
# Look for: "Video: h264"
```

---

## ✅ **Summary of Improvements**

| Feature | Before | After |
|---------|--------|-------|
| Error Handling | ❌ None | ✅ User-friendly messages |
| Loading State | ❌ No indicator | ✅ Spinner shown |
| Mobile Support | ⚠️ Basic | ✅ Optimized |
| Video Control | ⚠️ Basic | ✅ Full control with ref |
| Auto-play | ❌ Unreliable | ✅ Error handling |
| Stop on Close | ❌ No | ✅ Properly stops |
| User Feedback | ❌ Silent failures | ✅ Clear messages |

---

**Your VideoGallery is now production-ready with proper error handling, loading states, and mobile optimization!** 🎬

