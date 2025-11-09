# Complete Setup Guide for ZenLeaf Shopify Theme

## ⚠️ IMPORTANT: Cart Add Error Fix

If you're seeing "Failed to add item to cart", it's because **you need to create products first**. The cart buttons won't work until you have products in your Shopify store.

## Step-by-Step Setup (In Order)

### 1. Upload the Theme to Shopify

1. **Zip the theme files:**
   - Select all files EXCEPT:
     - `node_modules/`
     - `.git/`
     - `.specstory/`
   - Create a zip file named `zenleaf-theme.zip`

2. **Upload to Shopify:**
   - Go to **Shopify Admin → Online Store → Themes**
   - Click **"Add theme"** → **"Upload zip file"**
   - Select your `zenleaf-theme.zip`
   - Wait for upload to complete
   - Click **"Publish"** to make it your live theme

### 2. Create Products (REQUIRED - Do This First!)

**Without products, the "Add to Cart" buttons will NOT work.**

Go to **Shopify Admin → Products → Add product**

#### Product 1: Essentials Subscription

- **Title:** Essentials Subscription
- **Description:** 2 teas + pocket mindfulness guide
  ```
  Perfect for those starting their tea journey. Each month receive:
  • 2 curated small-farm teas (50g each)
  • Pocket mindfulness guide
  • Seasonal curation
  • Sustainable sourcing
  • Pause or skip anytime
  ```
- **Price:** $29.00 (or create variants for $29, $32, $35)
- **Tags:** `subscription`, `essentials`
- **Add an image** (tea product photo)
- Click **Save**

#### Product 2: Classic Subscription

- **Title:** Classic Subscription
- **Description:** 3 teas + guide + accessory
  ```
  Our flagship experience. Each month receive:
  • 3 premium teas (50g each)
  • Tasting notes guide
  • Handcrafted accessory (cup, strainer, or tray)
  • Gift-ready packaging
  • Pause or skip anytime
  ```
- **Price:** $45.00 (or create variants for $45, $50, $55)
- **Tags:** `subscription`, `classic`, `featured`
- **Add an image** (tea product photo)
- Click **Save**

#### Product 3: Reserve Subscription

- **Title:** Reserve Subscription
- **Description:** Rare single-origin + artisan accessory
  ```
  For the true tea connoisseur. Each month receive:
  • Rare single-origin tea (75g)
  • Artisan ceramic or wood accessory
  • Traceable micro-lots
  • Limited drops
  • Member stories
  ```
- **Price:** $69.00 (or create variants for $69, $75, $85)
- **Tags:** `subscription`, `reserve`
- **Add an image** (tea product photo)
- Click **Save**

### 3. Create a Collection

Go to **Shopify Admin → Products → Collections → Create collection**

- **Title:** Subscription Tiers
- **Collection type:** Manual
- **Products:** Add all three products you just created
- Click **Save**

### 4. Configure the Product Tiers Section

1. Go to **Online Store → Themes → Customize**
2. Navigate to the homepage
3. Click on the **"Product Tiers"** section
4. In **"Collection"** dropdown, select **"Subscription Tiers"**
5. Click **Save**

### 5. Create Static Pages

Go to **Online Store → Pages → Add page**

Create these pages:

#### Quiz Page
- **Title:** Quiz
- **Handle:** `quiz` (auto-generated)
- **Content:** Add your quiz content or embed a quiz tool
- Click **Save**

#### Rituals Page
- **Title:** Rituals
- **Handle:** `rituals`
- **Content:** Add your rituals content
- Click **Save**

#### Farm Stories Page
- **Title:** Farm Stories
- **Handle:** `farm-stories`
- **Content:** Add your farm stories content
- Click **Save**

#### About Page
- **Title:** About
- **Handle:** `about`
- **Content:** Add your about content
- Click **Save**

### 6. Set Up Navigation Menu

Go to **Online Store → Navigation**

1. Click on **"Main menu"** (or create one)
2. Add these menu items:
   - **Shop** → Link to homepage `/` (will scroll to #tiers)
   - **Quiz** → Link to Quiz page `/pages/quiz`
   - **Rituals** → Link to Rituals page `/pages/rituals`
   - **Farm Stories** → Link to Farm Stories page `/pages/farm-stories`
   - **About** → Link to About page `/pages/about`
3. Click **Save menu**

### 7. Configure Header Settings

1. In theme customizer, click **Header** section
2. Select the **Main menu** you just created
3. (Optional) Upload a logo
4. Click **Save**

### 8. Set Up Footer Menus

Go to **Online Store → Navigation**

Create these menus:

#### Footer - Shop
- The Tranquility Kit → Link to `/collections/subscription-tiers`
- Add-ons → Link to your add-ons collection
- Gift cards → Link to `/products/gift-card` or `/pages/gift-cards`

#### Footer - Learn
- Ritual Library → Link to `/pages/rituals`
- Farm Stories → Link to `/pages/farm-stories`
- About → Link to `/pages/about`

#### Footer - Support
- FAQ → Link to `/pages/faq`
- Shipping & Returns → Link to `/pages/shipping`
- Contact → Link to `/pages/contact`

Then in theme customizer:
1. Click on **Footer** section
2. For each menu block, select the appropriate menu
3. Click **Save**

## Testing the Cart Functionality

After creating products:

1. **Go to your store homepage**
2. **Scroll to "Choose your calm" section**
3. **Click "Start Essentials"** (or another tier)
4. **You should:**
   - See the item added to cart
   - Be redirected to the cart page
   - See the cart badge update in header

## Troubleshooting

### "Failed to add item to cart" Error

**Causes:**
1. ❌ No products exist → **Create products first**
2. ❌ Product variant doesn't exist → **Check product setup**
3. ❌ Product is not published → **Make sure products are "Active"**
4. ❌ Wrong collection selected → **Select "Subscription Tiers" collection in Product Tiers section**

**Solutions:**
1. Create the three subscription products (see Step 2)
2. Make sure products are **Active** (not Draft)
3. Add products to the "Subscription Tiers" collection
4. Configure the Product Tiers section to use the collection

### Products Not Showing

**If the product tiers section is empty:**
1. Go to theme customizer
2. Click on "Product Tiers" section
3. Select the "Subscription Tiers" collection in settings
4. OR manually add tier blocks and link them to products

### Styles Not Loading

**If the site has no styling:**
1. The theme uses Tailwind CDN (line 62 in `layout/theme.liquid`)
2. Make sure the CDN script is uncommented
3. Check browser console for errors

## Optional: Switch to Compiled CSS (Production)

For better performance:

1. On your computer, run:
   ```bash
   npm install
   npm run build:css
   ```

2. Upload `assets/tailwind.css` to your theme

3. In `layout/theme.liquid`:
   - Comment out lines 62-77 (Tailwind CDN)
   - Uncomment line 80 (compiled CSS)

## Quick Checklist

- [ ] Theme uploaded and published
- [ ] 3 products created (Essentials, Classic, Reserve)
- [ ] Collection created with all 3 products
- [ ] Product Tiers section configured to use collection
- [ ] Static pages created (Quiz, Rituals, Farm Stories, About)
- [ ] Main menu configured
- [ ] Footer menus configured
- [ ] Test: Click "Add to Cart" buttons
- [ ] Test: Navigation links scroll to sections
- [ ] Test: Mobile menu works

## Support

If you're still having issues after following all steps:

1. Check that products are **Active** (not Draft)
2. Verify the "Subscription Tiers" collection contains products
3. Check browser console for JavaScript errors (F12 → Console tab)
4. Make sure you're viewing the published theme, not the editor preview

