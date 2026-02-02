# Saurav Niraula - Portfolio Website

A modern, futuristic portfolio website built with Next.js, React, Tailwind CSS, Framer Motion, and Three.js. Features smooth animations, glassmorphism design, interactive 3D elements, and a custom cursor follower.

**Live Demo:** http://localhost:3000 (development)

## 🎨 Features

- **Cyber-Organic Design**: Blend of organic flowing shapes and futuristic tech elements
- **Glassmorphism UI**: Frosted glass panels with subtle neon gradients
- **Smooth Animations**: Powered by Framer Motion with scroll-triggered effects
- **Interactive 3D Background**: Particle system with cursor attraction
- **Dark/Light Mode**: System preference detection with persistent storage
- **Cursor Follower**: Custom animated cursor with trailing effect
- **Ripple Button Effects**: Click-triggered ripple animations
- **Responsive Design**: Fully mobile-optimized
- **Contact Form**: Integrated API endpoint for message submissions
- **Project Showcase**: Interactive flip cards for project display

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or navigate to project
cd d:\practise\sauravnr

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/          # Contact form API endpoint
│   ├── layout.tsx            # Root layout with ThemeProvider
│   ├── page.tsx              # Main portfolio page
│   └── globals.css           # Global styles
├── components/
│   ├── Navigation.tsx        # Top navigation with theme toggle
│   ├── sections/             # Page sections
│   │   ├── Hero.tsx          # Hero section
│   │   ├── About.tsx         # About & timeline
│   │   ├── Skills.tsx        # Skills display
│   │   ├── Projects.tsx      # Project cards
│   │   └── Contact.tsx       # Contact form & social links
│   └── ui/                   # Reusable components
│       ├── Button.tsx        # Animated button with ripple
│       ├── GlassCard.tsx     # Glassmorphism card
│       ├── AnimatedBackground.tsx  # Particle system
│       └── CursorFollower.tsx      # Cursor effect
├── lib/
│   ├── theme-context.tsx     # Dark/light mode context
│   └── constants.ts          # Projects, skills, timeline data
└── utils/                    # Utility functions
```

## 🎯 Customization Guide

### Update Personal Information

Edit `src/lib/constants.ts`:

```typescript
// Update social links
export const SOCIAL_LINKS = {
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_PROFILE",
  twitter: "https://twitter.com/YOUR_HANDLE",
  email: "your.email@domain.com",
};
```

### Available Scripts

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🚀 Deployment to Vercel

1. **Push to GitHub**:

   ```bash
   git add .
   git commit -m "Portfolio website ready for deployment"
   git push
   ```

2. **Deploy**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Click Deploy

3. **Custom Domain** (sauravniraula.com.np):
   - Add domain in Vercel dashboard
   - Update DNS records at your registrar

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
