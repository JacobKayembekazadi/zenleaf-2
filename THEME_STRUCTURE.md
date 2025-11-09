# Theme Structure Overview

This document explains the structure and purpose of each directory in the ZenLeaf Shopify theme.

## Directory Structure

```
zenleaf-shopify-theme/
├── assets/              # Static assets (CSS, JS, images)
├── config/              # Theme configuration
├── layout/              # Theme layout templates
├── locales/             # Translation files
├── sections/            # Reusable theme sections
├── snippets/            # Reusable code snippets
├── templates/           # Page templates
├── package.json         # Node.js dependencies
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md            # Theme documentation
```

## Assets (`/assets`)

Contains static files loaded by the theme:

- **`base.css`**: Base styles and utility classes
- **`tailwind.css`**: Compiled Tailwind CSS (build with `npm run build:css`)
- **`global.js`**: Global JavaScript for cart functionality and interactions

## Config (`/config`)

Theme configuration files:

- **`settings_schema.json`**: Defines theme settings available in the Shopify theme customizer (fonts, colors, logo, etc.)

## Layout (`/layout`)

Main theme layout:

- **`theme.liquid`**: Base layout template that wraps all pages. Includes `<head>`, navigation structure, and footer structure.

## Locales (`/locales`)

Translation files for internationalization:

- **`en.default.json`**: English translations for theme strings (cart messages, product labels, etc.)

## Sections (`/sections`)

Reusable, customizable sections that can be added to pages:

- **`header.liquid`**: Site header with navigation and cart
- **`hero.liquid`**: Hero section with CTA buttons
- **`product-tiers.liquid`**: Displays subscription tier products
- **`how-it-works.liquid`**: Three-step process explanation
- **`farm-spotlight.liquid`**: Feature section about farms
- **`rituals-teaser.liquid`**: Content section promoting rituals
- **`reviews.liquid`**: Customer testimonials
- **`newsletter.liquid`**: Email subscription form
- **`footer.liquid`**: Site footer with links
- **`main-product.liquid`**: Product detail page layout
- **`main-collection.liquid`**: Collection/listing page layout

## Snippets (`/snippets`)

Reusable code fragments included in sections:

- **`icon-leaf.liquid`**: Leaf icon SVG
- **`icon-cup.liquid`**: Cup icon SVG
- **`icon-gift.liquid`**: Gift icon SVG
- **`icon-cart.liquid`**: Cart icon SVG
- **`icon-check.liquid`**: Checkmark icon SVG
- **`star-rating.liquid`**: Star rating component
- **`meta-tags.liquid`**: Open Graph and meta tags
- **`cart-notification.liquid`**: Cart notification popup

## Templates (`/templates`)

Page templates that define which sections appear on each page type:

- **`index.json`**: Homepage template (uses hero, product tiers, etc.)
- **`product.json`**: Product detail page template
- **`collection.json`**: Collection/listing page template

## How Sections Work

Sections are the building blocks of Shopify themes. Each section:

1. Has a `{% schema %}` block that defines customizable settings
2. Can be added/removed/reordered in the theme customizer
3. Can have multiple "blocks" (like review cards, tier cards, etc.)
4. Uses Liquid templating to output dynamic content

## How to Add a New Section

1. Create a new `.liquid` file in `/sections`
2. Add HTML/Liquid markup
3. Add a `{% schema %}` block with settings
4. Add the section to a template JSON file or use the theme customizer

## Key Shopify Concepts

### Liquid
Shopify's templating language. Used to output dynamic content:
- `{{ variable }}` - Outputs a variable
- `{% tag %}` - Logic tags (if, for, etc.)
- `{% render 'snippet' %}` - Includes a snippet

### Objects
Shopify provides objects like:
- `product` - Current product
- `collection` - Current collection
- `cart` - Shopping cart
- `shop` - Shop information

### Routes
Shopify route helpers:
- `{{ routes.cart_url }}` - Cart page URL
- `{{ routes.collections_url }}` - Collections page URL
- `{{ routes.root_url }}` - Homepage URL

## Customization Flow

1. **Theme Settings**: Configure in `config/settings_schema.json`, accessible via theme customizer
2. **Section Settings**: Each section has its own settings in the customizer
3. **Content**: Add/edit content through Shopify admin (products, collections, pages)
4. **Code**: Edit Liquid files directly or via theme editor

