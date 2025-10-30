# Public Assets Folder

This folder contains static assets (images, videos, etc.) that are served directly by Vite.

## 📂 Folder Structure

```
public/
├── images/          # Store your images here
├── videos/          # Store your videos here
└── README.md        # This file
```

## 🖼️ How to Use Images

### 1. Add your images to the `public/images/` folder

For example:
- `public/images/hero-tea.jpg`
- `public/images/logo.png`
- `public/images/farm-landscape.jpg`

### 2. Reference them in your React components

In Vite, files in the `public` folder are served at the root path `/`:

```jsx
// ✅ Correct way to reference public assets
<img src="/images/hero-tea.jpg" alt="Tea ceremony" />

// ✅ For videos
<video src="/videos/ritual-guide.mp4" controls />

// ✅ Background images in inline styles
<div style={{ backgroundImage: 'url(/images/background.jpg)' }}>
```

### 3. Replace placeholder images in ZenLeafLanding.jsx

Find these lines in `src/ZenLeafLanding.jsx` and replace with your own images:

**Hero Section** (around line 181):
```jsx
<img
  src="/images/hero-tea.jpg"  // Replace Unsplash URL
  alt="A calm tea still life with steam, ceramics, and citrus"
  className="h-full w-full object-cover"
/>
```

**Farm Spotlight** (around line 292):
```jsx
<img
  src="/images/tea-farm.jpg"  // Replace Unsplash URL
  alt="Tea fields at sunrise with soft mist"
  className="h-full w-full object-cover"
/>
```

**Ritual Section** (around line 316):
```jsx
<img
  src="/images/tea-ritual.jpg"  // Replace Unsplash URL
  alt="A serene cup of tea beside a linen cloth and wooden tray"
  className="h-full w-full object-cover"
/>
```

## 🎬 Video Usage

For videos, use the HTML5 `<video>` tag:

```jsx
<video 
  src="/videos/brewing-guide.mp4" 
  controls 
  className="w-full rounded-lg"
  poster="/images/video-thumbnail.jpg"
>
  Your browser does not support the video tag.
</video>
```

## 📝 Supported Formats

### Images
- `.jpg` / `.jpeg` - Photos, complex images
- `.png` - Images with transparency
- `.svg` - Logos, icons (scalable)
- `.webp` - Modern format (smaller file size)
- `.gif` - Simple animations

### Videos
- `.mp4` - Best browser support (recommended)
- `.webm` - Modern format, good compression
- `.mov` - QuickTime format

## ⚡ Performance Tips

1. **Optimize images before uploading:**
   - Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Target 100-200KB for photos
   - Use WebP format when possible

2. **Provide appropriate dimensions:**
   - Hero images: 1920x1080px or 1600x1200px
   - Thumbnails: 400x300px
   - Logos: Use SVG for crisp scaling

3. **Use lazy loading for images below the fold:**
   ```jsx
   <img src="/images/photo.jpg" loading="lazy" alt="Description" />
   ```

4. **Consider responsive images:**
   ```jsx
   <img 
     srcSet="/images/photo-small.jpg 400w, 
             /images/photo-medium.jpg 800w,
             /images/photo-large.jpg 1200w"
     sizes="(max-width: 640px) 400px, 
            (max-width: 1024px) 800px, 
            1200px"
     src="/images/photo-medium.jpg"
     alt="Description"
   />
   ```

## 🚫 What NOT to Put Here

- **Source code** → goes in `src/`
- **Components** → goes in `src/components/`
- **Imported assets** → can go in `src/assets/` if you want them processed by Vite
- **Config files** → stays in root

## 📚 Learn More

- [Vite Static Asset Handling](https://vitejs.dev/guide/assets.html#the-public-directory)

