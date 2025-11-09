# Product Page Guide - Complete Setup

## Overview

The product page template (`templates/product.json`) is a flexible, block-based Shopify 2.0 template that allows complete customization without code.

## Files Included

### Template
- `templates/product.json` - Product page template configuration

### Sections
- `sections/main-product.liquid` - Main product section with blocks
- `sections/product-recommendations.liquid` - "You may also like" section
- `sections/product-rich-text.liquid` - Additional content/storytelling

## Features

### Main Product Section

**Media Gallery:**
- ✅ Image support (multiple images)
- ✅ Video support (native + external videos)
- ✅ Thumbnail gallery (up to 8 thumbnails)
- ✅ Click to switch main image
- ✅ Video play icons
- ✅ Responsive (mobile-friendly)

**Product Info (Configurable via Blocks):**
- ✅ Title
- ✅ Price (with compare-at-price and sale badge)
- ✅ Variant picker (dropdown or button style)
- ✅ Quantity selector (with +/- buttons)
- ✅ Buy button
- ✅ Dynamic checkout buttons (Apple Pay, Google Pay, etc.)
- ✅ Trust badges (3 customizable)
- ✅ Product description
- ✅ Collapsible tabs (unlimited)
- ✅ Share buttons (Facebook, Twitter, Pinterest)

**Product Badges:**
- Bestseller badge (if product tagged with `bestseller`)
- New badge (if product tagged with `new`)
- Sale badge (if product has compare_at_price)
- Configurable position (top-left or top-right)

**Smart Features:**
- Sticky product info on desktop (optional)
- Real-time variant switching
- URL updates with variant selection
- Image changes based on variant
- Stock level warnings
- Sold out state handling

### Product Recommendations Section

- Uses Shopify's native recommendations API
- Shows 2-8 related products
- Quick add to cart buttons (optional)
- Fully automated - no manual selection needed

### Product Rich Text Section

- Additional content area below the product
- Perfect for: origin stories, brewing guides, ingredient details
- Customizable background colors
- Optional image
- Optional CTA button

## How to Assign as Default Product Template

### Method 1: In Shopify Admin

1. Go to **Shopify Admin → Online Store → Themes**
2. Click **"Customize"** on your active theme
3. Navigate to **Products → [Any Product]**
4. The product.json template is automatically used

### Method 2: Set as Default for All Products

1. Go to **Shopify Admin → Settings → Files**
2. No action needed - `templates/product.json` is the default product template

### Method 3: Assign to Specific Products

1. Go to **Shopify Admin → Products → [Select a Product]**
2. Scroll to **"Theme templates"** (right sidebar)
3. Click **"Change"**
4. Select **"product"** (this is your product.json template)
5. Click **"Save"**

## How to Preview a Product

### Option 1: Theme Customizer (Recommended)

1. Go to **Online Store → Themes → Customize**
2. In the top bar, click the **page selector dropdown**
3. Select **"Products"** → Choose any product
4. You'll see the product page with your template
5. Make changes in real-time
6. Click **"Save"** when done

### Option 2: Direct Product View

1. Go to **Products → [Select a Product]**
2. Click **"View product"** (in the top right)
3. The product will display with your template
4. To edit: Click **"Customize"** button

### Option 3: Storefront URL

Navigate to: `your-store.myshopify.com/products/[product-handle]`

## Customization Guide

### Adding/Removing Blocks

**In Theme Customizer:**

1. Navigate to a product page
2. Click on **"Product"** section
3. Click **"Add block"** to add:
   - Title
   - Price
   - Variant Picker
   - Quantity Selector
   - Buy Buttons
   - Trust Badges
   - Description
   - Collapsible Tab (can add multiple)
   - Share Buttons
   - App blocks (from installed apps)
4. Drag to reorder blocks
5. Click **trash icon** to remove blocks

### Configuring Trust Badges

1. Click on **"Trust Badges"** block
2. For each badge (1-3):
   - Select an icon (checkmark, shipping, returns, secure)
   - Enter custom text
3. Examples:
   - "Free shipping over $50"
   - "30-day money-back guarantee"
   - "Secure checkout"
   - "Sustainably sourced"

### Adding Collapsible Tabs

Use collapsible tabs for:
- Ingredients & Benefits
- Brewing Instructions
- Shipping Information
- Care Instructions
- Return Policy

**To add:**
1. Click **"Add block"** → **"Collapsible Tab"**
2. Enter heading
3. Select icon (optional)
4. Add content (rich text)
5. Repeat for multiple tabs

### Variant Picker Options

**Dropdown (Default):**
- Classic select dropdown
- Works for all option types
- Compact

**Button:**
- Better for visual options (Color, Size)
- Shows all options at once
- More interactive

**To change:**
1. Click **"Variant Picker"** block
2. Select **"Picker type"**
3. Choose Dropdown or Button

### Product Badges

**Automatic badges display when:**
- Product tagged with `bestseller` → Shows "Bestseller" badge
- Product tagged with `new` → Shows "New" badge
- Product has compare_at_price → Shows "Sale" badge

**To control:**
1. Go to Product section settings
2. Toggle **"Show badges"**
3. Select **"Badge position"** (top-left or top-right)

## Section Settings

### Main Product Settings

**Enable sticky product info on desktop:**
- When enabled, product info scrolls with user
- Stays visible while viewing images
- Desktop only (mobile always scrolls normally)

**Loop product videos:**
- When enabled, product videos play on loop
- Recommended: Keep disabled for long videos

### Product Recommendations Settings

**Heading:**
- Custom heading text
- Default: "You may also like"

**Products to show:**
- Range: 2-8 products
- Default: 4 products
- Shopify automatically selects related products

**Show quick add button:**
- When enabled, shows "Quick Add" button on each product
- Allows adding to cart without leaving page

### Product Rich Text Settings

**Content:**
- Rich text editor
- Supports: paragraphs, lists, bold, italic, links

**Text alignment:**
- Left or Center

**Background color:**
- White, Beige, or Tan

**Image:**
- Optional feature image
- Displays above content

**Button:**
- Optional CTA button
- Custom label and link

## Block Order Best Practices

### Recommended Order:

1. **Title** - Product name first
2. **Price** - Price information
3. **Variant Picker** - Let users select options
4. **Quantity Selector** - Choose quantity
5. **Buy Buttons** - Main CTA
6. **Trust Badges** - Build confidence
7. **Description** - Product details
8. **Collapsible Tab(s)** - Additional info
9. **Share** - Social sharing (optional, at end)

### Why This Order?

- Most important info first (title, price)
- Purchase flow (select → quantity → buy)
- Supporting info after (trust, details)
- Social features last

## Advanced Customization

### Adding Custom Product Metafields

If you have product metafields, add them via blocks:

1. Edit `sections/main-product.liquid`
2. Add a new block type in the schema
3. Display metafield in the case statement

Example:
```liquid
{%- when 'farm_origin' -%}
  {%- if product.metafields.custom.farm_origin != blank -%}
    <div {{ block.shopify_attributes }}>
      <h3>Origin:</h3>
      <p>{{ product.metafields.custom.farm_origin }}</p>
    </div>
  {%- endif -%}
```

### Styling Customization

Colors are defined in Tailwind config (layout/theme.liquid):
- Primary green: `#9BB7A7`
- Dark green: `#2F3E34`
- Background beige: `#F6F3EE`

To customize, edit the color values in the Tailwind config.

## App Block Support

This section supports `@app` blocks for:
- Product reviews (Judge.me, Yotpo, etc.)
- Size guides
- Stock notifications
- Wishlists
- Product videos
- Custom product builders

Apps will automatically appear in the block list when installed.

## JavaScript Functionality

The product page includes built-in JavaScript for:

**Variant Switching:**
- Updates price when variant changes
- Updates featured image
- Updates URL with variant parameter
- Updates add to cart button state

**Quantity Controls:**
- +/- buttons to adjust quantity
- Validates minimum quantity (1)

**Thumbnail Gallery:**
- Click thumbnail to change main image
- Visual active state on thumbnails
- Supports images and videos

**No jQuery Required:**
- Pure vanilla JavaScript
- Modern browser APIs
- Lightweight and fast

## Testing Checklist

Before going live, test:

- [ ] Product images display correctly
- [ ] Video plays (if added)
- [ ] Thumbnails switch main image
- [ ] Variant selection updates price
- [ ] Variant selection updates image
- [ ] Add to cart works
- [ ] Sold out state displays correctly
- [ ] Quantity +/- buttons work
- [ ] Trust badges display
- [ ] Collapsible tabs open/close
- [ ] Share buttons work
- [ ] Product recommendations load
- [ ] Mobile responsive
- [ ] Dynamic checkout buttons appear (if enabled)

## Common Use Cases

### Subscription Products

1. Tag product with `subscription`
2. Price displays "/month subscription"
3. Add collapsible tab for subscription details
4. Use trust badges: "Cancel anytime", "Pause or skip", "No commitments"

### Variable Pricing Products

1. Create variants with different prices
2. Variant picker will update price automatically
3. Compare-at-price shows sale savings

### Video Products

1. Upload video to product media
2. Video thumbnail appears in gallery
3. Click to play in main area
4. Enable/disable looping in section settings

## Troubleshooting

### Variants Not Updating

**Cause:** JavaScript not loading
**Fix:** Check browser console for errors

### Images Not Displaying

**Cause:** No product images added
**Fix:** Add images in Shopify Admin → Products

### Add to Cart Not Working

**Cause:** No products or product not available
**Fix:** Ensure product is published and has available inventory

### Recommendations Not Showing

**Cause:** Shopify needs data to make recommendations
**Fix:** Wait for Shopify to build recommendations (requires some sales history)

## Pro Tips

1. **Use high-quality images** (min 2000px wide)
2. **Add multiple images** (show product from different angles)
3. **Write clear descriptions** (focus on benefits, not just features)
4. **Use collapsible tabs** (keep page clean, provide details)
5. **Enable trust badges** (increase conversion rates)
6. **Tag products properly** (enables automatic badges)
7. **Add videos** (products with videos convert better)
8. **Test on mobile** (most traffic is mobile)

## Next Steps

1. Create your first product in Shopify Admin
2. Add product images and details
3. Preview using theme customizer
4. Customize blocks to match your brand
5. Test add to cart functionality
6. Configure product recommendations
7. Add rich text section if needed

---

**Template Status:** ✅ Production-ready, Shopify 2.0 compliant
**Customization:** 100% theme customizer (no code needed)
**App Support:** Full app block integration

