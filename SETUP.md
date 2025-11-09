# ZenLeaf Shopify Theme - Setup Guide

## Quick Start

### Option 1: Use Tailwind CDN (Quickest - Development Only)

1. Open `layout/theme.liquid`
2. Uncomment the Tailwind CDN line (around line 64):
   ```liquid
   <script src="https://cdn.tailwindcss.com"></script>
   ```
3. Comment out the compiled CSS line:
   ```liquid
   {%- comment -%}
   {{ 'tailwind.css' | asset_url | stylesheet_tag }}
   {%- endcomment -%}
   ```

**Note:** This is fine for development but not recommended for production due to performance and customization limitations.

### Option 2: Build Tailwind CSS (Recommended for Production)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build CSS:**
   ```bash
   npm run build:css
   ```

3. **For development with auto-rebuild:**
   ```bash
   npm run watch:css
   ```

4. Upload the compiled `assets/tailwind.css` file to your Shopify theme.

## Installing the Theme

1. **Zip the theme:**
   - Select all files and folders (except `node_modules`, `.git`, etc.)
   - Create a zip file named `zenleaf-theme.zip`

2. **Upload to Shopify:**
   - Go to Shopify Admin → Online Store → Themes
   - Click "Add theme" → "Upload zip file"
   - Select your `zenleaf-theme.zip` file
   - Wait for upload to complete

3. **Publish the theme:**
   - Click "Actions" → "Publish" on your new theme

## Initial Configuration

### 1. Set Up Navigation

- Go to Online Store → Navigation
- Create a menu named "Main Menu" (or update the header section to use your menu name)
- Add links: Shop, Quiz, Rituals, Farm Stories, About

### 2. Create Products

Create three products for your subscription tiers:

**Essentials Tier:**
- Title: "Essentials Subscription"
- Price: $29-35/month (or set as variants)
- Description: "2 teas + pocket mindfulness guide"
- Tags: Add "subscription", "essentials"

**Classic Tier:**
- Title: "Classic Subscription"  
- Price: $45-55/month
- Description: "3 teas + guide + accessory"
- Tags: Add "subscription", "classic"

**Reserve Tier:**
- Title: "Reserve Subscription"
- Price: $69-85/month
- Description: "Rare single-origin + artisan accessory"
- Tags: Add "subscription", "reserve"

### 3. Create Collection (Optional)

- Create a collection named "Subscription Tiers"
- Add your three tier products
- In the Product Tiers section, select this collection

### 4. Customize Theme Settings

- Go to Online Store → Themes → Customize
- Configure:
  - Logo and favicon
  - Fonts (heading and body)
  - Colors
  - Cart type (drawer, page, or notification)

### 5. Customize Sections

Each section can be customized through the theme editor:
- **Hero**: Update heading, description, images, and CTA links
- **Product Tiers**: Select collection or configure individual tier blocks
- **How It Works**: Edit steps, icons, and descriptions
- **Farm Spotlight**: Update content and image
- **Rituals Teaser**: Customize content and links
- **Reviews**: Add/edit customer testimonials
- **Newsletter**: Configure email subscription
- **Footer**: Set up footer menus and logo

## Testing

1. **Test on mobile:** Use Shopify's mobile preview
2. **Test cart:** Add products and verify cart functionality
3. **Test forms:** Submit newsletter form
4. **Test navigation:** Verify all links work correctly

## Customization Tips

### Changing Colors

The theme uses these color values:
- Primary green: `#9BB7A7`
- Dark green: `#2F3E34`
- Beige background: `#F6F3EE`
- Tan accent: `#E9E4D8`
- Brown accent: `#C7A27C`

To change colors, update the Tailwind config or use CSS custom properties.

### Adding New Sections

1. Create a new file in `sections/` directory
2. Use the same structure as existing sections
3. Add it to your page template JSON file

### Modifying Styles

- Edit `assets/tailwind.css` for Tailwind utilities
- Edit `assets/base.css` for base styles
- Use Shopify's theme customizer for section-specific styles

## Troubleshooting

### Tailwind classes not working

- Make sure `assets/tailwind.css` is compiled (run `npm run build:css`)
- Or use Tailwind CDN for quick testing
- Check browser console for CSS errors

### Products not showing

- Verify products are published and available
- Check collection settings if using collection-based display
- Verify product variants are set up correctly

### Cart not working

- Check that `routes.cart_add_url` is correct
- Verify JavaScript is loading (`assets/global.js`)
- Check browser console for errors

## Support

For Shopify-specific questions, refer to:
- [Shopify Theme Development Docs](https://shopify.dev/themes)
- [Liquid Documentation](https://shopify.dev/docs/api/liquid)

