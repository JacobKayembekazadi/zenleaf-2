# Editorial Hero Section - Complete Guide

## Overview

The **Signature Editorial Hero** is a unique, magazine-style hero section featuring:
- Asymmetric floating image tiles (2-3 images)
- Editorial content layout
- Optional video background
- Subtle hover and float animations
- Fully customizable through theme editor

## Visual Layout

### Desktop (Large Screens)

```
┌─────────────────────────────────────────┐
│  [Eyebrow Text]                         │
│  ┌────────────┐                         │
│  │ Headline   │    ┌──────────┐         │
│  │ Goes Here  │    │  Image 1 │         │
│  └────────────┘    │  (Large) │         │
│                    └──────────┘         │
│  [Body Text]              ┌────────┐    │
│                           │ Image 3│    │
│  [CTA Buttons]            │ (Small)│    │
│                           └────────┘    │
│                    ┌──────────┐         │
│                    │ Image 2  │         │
│                    │ (Medium) │         │
│                    └──────────┘         │
└─────────────────────────────────────────┘
```

### Mobile (Small Screens)

Tiles stack vertically below content for optimal mobile experience.

## Features

### 1. Asymmetric Image Tiles

**Tile 1 (Large):**
- Position: Top-left
- Size: 60% width x 60% height
- Z-index: 20 (middle layer)

**Tile 2 (Medium):**
- Position: Bottom-right
- Size: 40% width x 40% height
- Z-index: 10 (back layer)

**Tile 3 (Small):**
- Position: Center-right
- Size: 33% width x 33% height
- Z-index: 30 (front layer)

### 2. Hover Effects

**On tile hover:**
- Scales up 5% (zoom in)
- Lifts up 8px
- Rotates 1 degree
- Shadow intensifies
- Image zooms slightly
- All transitions: 500-700ms (smooth)

### 3. Animation Options

**Entrance Animations (Optional):**
- Content: Fade in + slide up
- Tiles: Fade in (staggered)
- Duration: 800ms-1s
- Easing: ease-out

**Floating Animation (Optional):**
- Subtle vertical/horizontal drift
- 6-second loop
- Staggered for each tile
- GPU-accelerated (transform only)
- Very gentle (8-10px max movement)

**Scroll Reveal (Optional):**
- Triggers when section enters viewport
- Uses IntersectionObserver (modern, performant)
- Graceful degradation for older browsers

### 4. Video Background (Optional)

- MP4 video plays behind tiles
- Auto-play, loop, muted
- Customizable opacity (10-100%)
- Optional poster image
- Gradient overlay for text readability
- Doesn't affect performance

### 5. Performance Optimizations

**GPU-Accelerated:**
- Only `transform` and `opacity` animations
- No layout-shifting properties
- `will-change` hints for browser

**Accessibility:**
- Respects `prefers-reduced-motion`
- All animations disabled for sensitive users
- Semantic HTML
- Proper ARIA labels

**Lazy Loading:**
- First tile: Eager loading
- Other tiles: Lazy loading
- Videos: Native lazy loading

## How to Use

### Adding to Homepage

1. Go to **Online Store → Themes → Customize**
2. Click **"Add section"**
3. Select **"Editorial Hero"**
4. Drag to desired position
5. Configure settings

### Configuration Options

#### Content Settings

**Subheadline (Eyebrow):**
- Small text above headline
- Example: "New Collection", "Spring 2024"
- Uppercase, colored accent
- Optional

**Headline:**
- Main heading
- Large, serif font
- Keep concise (4-8 words ideal)
- Example: "Make calm a ritual."

**Body Text:**
- Rich text editor
- Supports bold, italic, links
- 1-2 sentences recommended
- Keep under 200 characters for impact

**Primary CTA:**
- Main action button
- Solid background
- Example: "Shop The Collection"
- Links to collection, product, or page

**Secondary CTA:**
- Alternative action
- Outline style
- Example: "Watch Our Story", "Learn More"
- Optional video/page link

#### Visual Settings

**Section Height:**
- Range: 60-100vh (viewport height)
- Default: 85vh
- Taller = more dramatic
- Shorter = content-focused

**Image Tiles:**
- Add 2-3 tiles via blocks
- Each tile:
  - Upload image (min 800x800px recommended)
  - Optional overlay text
  - Automatic positioning

**Video Background:**
- Enter MP4 URL from Shopify Files
- Set opacity (40% recommended)
- Add poster image for loading state
- Optional - leave blank to disable

#### Animation Settings

**Enable entrance animations:**
- Content fades in and slides up
- Tiles fade in with stagger
- Smooth, professional
- Default: ON

**Enable scroll reveal:**
- Animations trigger on scroll
- Uses IntersectionObserver
- Minimal JavaScript
- Default: OFF (instant is fine)

**Enable subtle parallax:**
- Experimental depth effect
- Very subtle
- GPU-accelerated
- Default: OFF (keep simple)

## Best Practices

### Image Selection

**For tiles:**
- Use high-quality photos (min 800x800px)
- Square or slightly vertical crops
- Consistent style/mood
- Professional photography

**Good subjects:**
- Product close-ups
- Lifestyle shots
- Ingredient details
- Process/craft shots

**Avoid:**
- Text-heavy images
- Busy backgrounds
- Low resolution
- Horizontal crops

### Content Writing

**Headline:**
- ✅ "Make calm a ritual."
- ✅ "Discover your perfect blend."
- ❌ "Welcome to our tea store where we sell..."

**Body:**
- Keep it editorial (magazine-style)
- Focus on benefits, not features
- 1-2 sentences maximum
- Use elegant language

**CTAs:**
- ✅ "Explore the Collection"
- ✅ "Begin Your Journey"
- ❌ "Click here" or "Buy now"

### Layout Tips

**With 3 tiles:**
- Best for visual impact
- Creates interesting composition
- Default recommended

**With 2 tiles:**
- Cleaner, more minimal
- Better for text-heavy content
- Remove tile 3 via blocks

**Video background:**
- Use sparingly (special collections only)
- Keep opacity low (30-50%)
- Short loop videos work best
- 10-15 seconds ideal

## Mobile Behavior

**Automatically adapts:**
- Content stacks at top
- Tiles show as simple stack
- No complex positioning
- Touch-friendly
- Fast performance

**Mobile optimizations:**
- Simplified animations
- Reduced shadow effects
- Larger touch targets
- No floating animations

## Performance

**Optimized for speed:**
- CSS-only animations (no JavaScript by default)
- GPU-accelerated transforms
- No jQuery or heavy libraries
- Lazy loading images
- Deferred JavaScript
- Will-change hints

**Load time impact:**
- Minimal (CSS only)
- ~2KB compressed CSS
- ~1KB JS (if scroll reveal enabled)
- Videos load asynchronously

## Customization Examples

### Example 1: Product Launch

```
Subheadline: "Spring Collection 2024"
Headline: "Bloom with every sip."
Body: "Our newest seasonal teas, harvested at peak spring."
Primary CTA: "Shop Spring Teas" → /collections/spring
Secondary CTA: "Learn the Story" → /pages/spring-story
Tiles: 3 spring tea images
Animations: ON
Video: OFF
```

### Example 2: Brand Story

```
Subheadline: "Our Mission"
Headline: "From farm to your cup."
Body: "Every tea tells a story of craft, care, and community."
Primary CTA: "Explore Our Farms" → /pages/farms
Secondary CTA: "Watch the Film" → /pages/film
Tiles: 2 farm/harvest images
Video: Background farm video (30% opacity)
Animations: ON
```

### Example 3: Minimal Subscription

```
Subheadline: "Monthly Subscription"
Headline: "Your ritual, simplified."
Body: "Three curated teas delivered monthly."
Primary CTA: "Start Your Subscription" → /products/subscription
Secondary CTA: "Take the Quiz" → /pages/quiz
Tiles: 2 product/lifestyle images
Video: OFF
Animations: Subtle (entrance only)
```

## Advanced: Using Metaobjects

For dynamic tiles (coming soon):
1. Create metaobject definition in Shopify admin
2. Add "metaobject_list" setting to schema
3. Loop through metaobjects instead of blocks
4. Pull image/text from metaobject fields

Currently uses blocks (simpler, better for most use cases).

## Troubleshooting

### Tiles not showing

**Cause:** No images uploaded
**Fix:** Add image blocks in theme customizer

### Tiles overlap weirdly

**Cause:** Screen size edge case
**Fix:** Adjust section height or use 2 tiles instead of 3

### Animations too much/distracting

**Cause:** Preference
**Fix:** Toggle off animations in section settings

### Video not playing

**Cause:** Wrong URL or format
**Fix:** Upload MP4 to Shopify Files, use full URL

## Browser Support

- ✅ Chrome (all versions)
- ✅ Firefox (all versions)
- ✅ Safari (all versions)
- ✅ Edge (all versions)
- ✅ Mobile browsers (iOS, Android)

Animations gracefully degrade in older browsers.

## Accessibility

**WCAG 2.1 AA Compliant:**
- Semantic HTML (`<section>`, proper headings)
- Sufficient color contrast
- `prefers-reduced-motion` support
- Keyboard navigation (all CTAs)
- Screen reader friendly
- Alt text on all images

## How to Add to Your Store

1. **Upload theme** with this section
2. **Go to theme customizer**
3. **Click "Add section"**
4. **Select "Editorial Hero"**
5. **Add 2-3 image tile blocks**
6. **Upload images** for each tile
7. **Configure text** and CTAs
8. **Toggle animations** as desired
9. **Save**

Section is ready to use immediately!

---

**File:** `sections/signature-hero-editorial.liquid`
**Size:** ~15KB (highly commented for learning)
**Performance:** Excellent (GPU-accelerated)
**Customization:** 100% theme editor (no code needed)

