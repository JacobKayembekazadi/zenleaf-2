# Button Links Reference

This document lists all buttons and their default links in the ZenLeaf Shopify theme.

## ✅ All Buttons Verified and Linked

### **Header Section**

1. **Logo/Shop Name**
   - Links to: `{{ routes.root_url }}` (Homepage)

2. **Navigation Menu Links**
   - Links to: `{{ link.url }}` (Configured in Shopify menu settings)
   - Expected pages: Shop, Quiz, Rituals, Farm Stories, About

3. **"Shop The Tranquility Kit" Button** (Desktop & Mobile)
   - **On Homepage**: Links to `#tiers` (scrolls to product tiers section)
   - **On Other Pages**: Links to `{{ routes.collections_url }}` (Collections page)

4. **Cart Icon/Button**
   - Links to: `{{ routes.cart_url }}` (Cart page)
   - Shows item count badge when cart has items

### **Hero Section**

1. **Primary CTA: "Shop The Tranquility Kit"**
   - Default: `#tiers` (scrolls to product tiers on homepage)
   - Customizable: Can be set in theme customizer

2. **Secondary CTA: "Take the 2‑min Quiz"**
   - Default: `/pages/quiz` (Quiz page)
   - Customizable: Can be set in theme customizer

### **Product Tiers Section**

1. **"Start [Tier Name]" Buttons**
   - **If product exists**: Adds product to cart directly
   - **If no product**: Links to `{{ routes.collections_url }}` or custom link
   - **If product has variants**: Links to product page (`{{ product.url }}`)

### **Farm Spotlight Section**

1. **"Explore farm stories" Button**
   - Default: `/pages/farm-stories` (Farm Stories page)
   - Customizable: Can be set in theme customizer

### **Rituals Teaser Section**

1. **"Browse rituals" Button (Primary)**
   - Default: `/pages/rituals` (Rituals page)
   - Customizable: Can be set in theme customizer

2. **"Play a sample" Button (Secondary)**
   - Default: `/pages/rituals` (Rituals page)
   - Customizable: Can be set in theme customizer

### **Product Pages**

1. **"Add to Cart" Button**
   - Action: Submits product form to `{{ routes.cart_add_url }}`
   - Shows "Sold Out" if product unavailable

### **Collection Pages**

1. **Product Cards**
   - Product image/title: Links to `{{ product.url }}` (Product page)
   - "Add to Cart" button: Adds product to cart

### **Cart Page**

1. **"Update Cart" Button**
   - Action: Updates cart quantities

2. **"Checkout" Button**
   - Action: Proceeds to Shopify checkout

3. **"Continue Shopping" Button** (Empty cart)
   - Links to: `{{ routes.collections_url }}` (Collections page)

4. **"Remove" Links**
   - Action: Removes item from cart via `{{ routes.cart_change_url }}`

### **404 Error Page**

1. **"Go Home" Button**
   - Links to: `{{ routes.root_url }}` (Homepage)

2. **"Browse Products" Button**
   - Links to: `{{ routes.collections_url }}` (Collections page)

### **Footer Section**

1. **Footer Menu Links**
   - Links to: `{{ link.url }}` (Configured in footer menu blocks)
   - Typically includes: Shop links, Learn links, Support links

## 📋 Required Pages to Create in Shopify

To ensure all buttons work correctly, create these pages in **Shopify Admin → Online Store → Pages**:

1. **Quiz** (`/pages/quiz`)
   - Handle: `quiz`
   - Content: Your quiz content

2. **Rituals** (`/pages/rituals`)
   - Handle: `rituals`
   - Content: Your rituals content

3. **Farm Stories** (`/pages/farm-stories`)
   - Handle: `farm-stories`
   - Content: Your farm stories content

4. **About** (`/pages/about`)
   - Handle: `about`
   - Content: Your about page content

## 🔗 Anchor Links (Homepage)

These sections have anchor IDs for smooth scrolling:

- `#tiers` - Product Tiers section
- `#rituals` - Rituals Teaser section
- `#farms` - Farm Spotlight section

## ✅ All Links Verified

- [x] Header buttons linked correctly
- [x] Hero CTAs have defaults
- [x] Product tier buttons link to products/collections
- [x] Farm spotlight button has default
- [x] Rituals buttons have defaults
- [x] Product page buttons work
- [x] Collection page buttons work
- [x] Cart page buttons work
- [x] 404 page buttons work
- [x] Footer links use menu system

## 🎯 Smart Link Behavior

- **Homepage**: "Shop The Tranquility Kit" scrolls to `#tiers`
- **Other Pages**: "Shop The Tranquility Kit" goes to collections
- **Product Tiers**: Buttons add to cart if product exists, otherwise link to collections
- **All CTAs**: Can be customized in theme customizer

