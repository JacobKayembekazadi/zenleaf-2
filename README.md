# ZenLeaf – Tea & Mindful Rituals Landing Page

A beautiful, accessible, and fully responsive landing page for ZenLeaf, a tea subscription service focused on mindfulness and craft.

## ✨ Features

- 🎨 **Modern Design**: Clean, calming aesthetic with custom color palette
- 📱 **Fully Responsive**: Mobile-first design with sticky header and collapsible navigation
- ♿ **Accessible**: Semantic HTML, ARIA labels, focus states, and screen reader support
- 🚀 **Performance**: Built with React + Vite for lightning-fast development
- 🎯 **Tailwind CSS**: Utility-first styling with no external UI libraries
- 💚 **Zero Dependencies**: Pure React + Tailwind (besides core React libs)

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📂 Project Structure

```
zenleaf-website/
├── public/
│   ├── images/                # 🖼️ Place your images here
│   ├── videos/                # 🎬 Place your videos here
│   └── README.md              # Assets usage guide
├── src/
│   ├── components/
│   │   └── Layout.jsx         # Shared header/footer layout
│   ├── pages/
│   │   ├── Home.jsx           # Landing page
│   │   ├── Shop.jsx           # Product catalog & subscriptions
│   │   ├── Quiz.jsx           # Interactive recommendation quiz
│   │   ├── Rituals.jsx        # Mindfulness guides library
│   │   ├── FarmStories.jsx    # Farm profiles & stories
│   │   └── About.jsx          # Company information
│   ├── App.jsx                # Router configuration
│   ├── main.jsx               # React entry point
│   └── index.css              # Tailwind imports
├── index.html                 # HTML template
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies
```

## 🎨 Customization

### Add Your Own Images & Videos

1. **Place your assets in the `public/` folder:**
   - Images → `public/images/` (e.g., `hero-tea.jpg`, `farm-landscape.jpg`)
   - Videos → `public/videos/` (e.g., `brewing-guide.mp4`)

2. **Replace placeholder images in `src/ZenLeafLanding.jsx`:**

   The component currently uses Unsplash placeholders. Replace them with your own:

   ```jsx
   // Hero section (line ~181)
   <img src="/images/hero-tea.jpg" alt="..." />
   
   // Farm spotlight (line ~292)
   <img src="/images/tea-farm.jpg" alt="..." />
   
   // Ritual teaser (line ~316)
   <img src="/images/tea-ritual.jpg" alt="..." />
   ```

3. **Reference assets** using the path `/images/your-file.jpg` or `/videos/your-file.mp4`

   See `public/README.md` for detailed usage examples and optimization tips.

### Update Links

Replace placeholder `href="#"` values with your actual routes/pages.

### Modify Colors

The color palette is defined using Tailwind arbitrary values:
- Primary Green: `#9BB7A7`
- Dark Green: `#2F3E34`
- Warm Beige: `#F6F3EE`
- Light Beige: `#E9E4D8`
- Brown Accent: `#C7A27C`
- Text: `#2B2B2B`

### Add Google Fonts (Optional)

For a custom serif font, add this to `index.html` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&display=swap" rel="stylesheet">
```

Then update `tailwind.config.js`:

```js
fontFamily: {
  serif: ['Lora', 'Georgia', 'serif'],
},
```

## 📦 What's Included

### Pages
- ✅ **Home** - Landing page with hero, pricing tiers, reviews, newsletter signup
- ✅ **Shop** - Product catalog with subscription tiers, add-ons, and gift cards
- ✅ **Quiz** - Interactive 5-question quiz with personalized recommendations
- ✅ **Rituals** - Library of mindfulness guides with filtering and modals
- ✅ **Farm Stories** - Farm profiles, sustainability practices, and sourcing commitment
- ✅ **About** - Company story, mission, values, timeline, team, and impact stats

### Features
- ✅ Full routing with React Router
- ✅ Shared header/footer layout
- ✅ Sticky navigation with mobile menu
- ✅ Responsive design (mobile-first)
- ✅ Interactive components (quiz, modals, filters)
- ✅ Smooth page transitions
- ✅ SEO-friendly structure

## 🛠️ Tech Stack

- **React 18** - UI library
- **React Router 6** - Client-side routing
- **Vite 5** - Build tool
- **Tailwind CSS 3** - Styling
- **PostCSS** - CSS processing
- **Autoprefixer** - Vendor prefixes

## 📝 License

This project is open source and available for personal and commercial use.

---

**Built with ☕ and mindfulness**

