# ZenLeaf Shopify Theme

A beautiful, modern Shopify theme converted from a React landing page. This theme maintains the original design aesthetic with Tailwind CSS styling and full Shopify e-commerce functionality.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Product Integration**: Full Shopify product and cart functionality
- **Customizable Sections**: All sections are editable through Shopify theme customizer
- **Newsletter Integration**: Built-in Shopify customer form integration
- **Accessible**: Semantic HTML and ARIA labels throughout
- **Performance**: Optimized images and minimal JavaScript

## Theme Structure

```
.
├── assets/          # CSS, JavaScript, and other assets
├── config/          # Theme configuration
├── layout/          # Theme layout files
├── locales/         # Translation files
├── sections/        # Reusable theme sections
├── snippets/        # Reusable code snippets
└── templates/       # Page templates

```

## Sections

- **Header**: Sticky navigation with mobile menu
- **Hero**: Hero section with CTA buttons
- **Product Tiers**: Display subscription tiers/products
- **How It Works**: Three-step process explanation
- **Farm Spotlight**: Feature section with image
- **Rituals Teaser**: Content section with CTA
- **Reviews**: Customer testimonials
- **Newsletter**: Email subscription form
- **Footer**: Site footer with links

## Setup Instructions

1. **Install Theme**:
   - Zip the entire theme directory
   - Upload to Shopify Admin → Online Store → Themes → Add theme → Upload zip file

2. **Configure Settings**:
   - Go to Theme Customizer
   - Configure logo, colors, fonts, and other settings
   - Set up navigation menus

3. **Create Products**:
   - Create products for your subscription tiers (Essentials, Classic, Reserve)
   - Tag products appropriately for filtering
   - Set up collections if using collection-based product display

4. **Customize Sections**:
   - Each section can be customized through the theme editor
   - Add/remove blocks, update content, and configure settings

## Product Setup

To use the Product Tiers section:

1. Create a collection named "Subscription Tiers" (or any name)
2. Add your three tier products to this collection
3. In the Product Tiers section settings, select this collection
4. Alternatively, use the section blocks to manually configure each tier

## Styling

The theme uses Tailwind CSS. See `SETUP.md` for detailed instructions.

**Quick Start (Development):**
- Uncomment the Tailwind CDN script in `layout/theme.liquid` (line 64)

**Production Build:**
1. Install dependencies: `npm install`
2. Build CSS: `npm run build:css`
3. Upload the compiled `assets/tailwind.css` to Shopify

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This theme is provided as-is for use with Shopify stores.

