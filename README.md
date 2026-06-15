# Audiohive Ahmedabad - Premium Event Sound Website

A luxurious, minimal, and modern one-page website for Audiohive Ahmedabad - a premium event sound and live experience company.

## 🎨 Design Direction

- **Apple website storytelling** - Clean, minimal, focused narrative
- **Luxury event production agency** - Premium positioning
- **Modern music production studio** - Cutting-edge aesthetics
- **Dark premium portfolio website** - Sophisticated dark theme

## ✨ Features

### Visual Design
- **Dark Theme**: Matte black background (#0B0B0B)
- **Premium Accents**: Audiohive red (#E10600)
- **Large Bold Typography**: High-end visual hierarchy
- **Smooth Animations**: Framer Motion transitions
- **Elegant Hover Effects**: Interactive premium experience
- **Fully Responsive**: Desktop, tablet, and mobile optimized

### Sections

1. **Hero** - Full viewport height with call-to-action buttons
2. **Trust Statistics** - Animated counters showcasing achievements
3. **About** - Split layout with brand story
4. **Services** - 6 premium service cards with hover effects
5. **Equipment** - Professional audio equipment showcase
6. **Event Types** - Grid of event categories with icons
7. **Gallery** - Masonry layout with hover expansion
8. **Why Audiohive** - Feature blocks with scroll animations
9. **Testimonials** - Card slider with navigation
10. **Enquiry Form** - Comprehensive contact form
11. **Footer** - Contact info, social links, and floating WhatsApp button

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # Hero section with CTA
│   ├── Trust.tsx             # Statistics with animated counters
│   ├── About.tsx             # About section with split layout
│   ├── Services.tsx          # 6 service cards
│   ├── Equipment.tsx         # Equipment showcase
│   ├── EventTypes.tsx        # Event types grid
│   ├── Gallery.tsx           # Gallery masonry
│   ├── WhyAudiohive.tsx      # Feature blocks
│   ├── Testimonials.tsx      # Testimonial slider
│   ├── EnquiryForm.tsx       # Contact form
│   └── Footer.tsx            # Footer with contact info
├── App.tsx                   # Main app component
├── main.tsx                  # Entry point
└── index.css                 # Tailwind CSS with custom styles
```

## 🎯 Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Intersection Observer** - Scroll animations

## 🎨 Color Palette

- **Primary Dark**: #0B0B0B
- **Secondary Dark**: #1a1a1a
- **Tertiary Dark**: #2a2a2a
- **Accent Red**: #E10600
- **Text White**: #FFFFFF
- **Text Gray**: #9ca3af

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette.

### Typography
The site uses Inter as default with support for custom fonts (General Sans, Satoshi, Neue Montreal).

### Content
Update component text content directly in the React files to match your brand messaging.

## 📞 Contact Information

Update in `Footer.tsx`:
- Phone: +91 92135 48316
- Email: info@audiohive.in
- Instagram: @audiohive_ahmedabad

## ✅ Performance

- ✨ Smooth scroll animations
- 🚀 Optimized bundle size (~351 KB)
- 📦 Lazy-loaded images
- 🎯 SEO-friendly structure
- ♿ Semantic HTML

## 📄 License

All rights reserved © 2026 Audiohive Ahmedabad

---

**Built with ❤️ for premium event experiences**
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
