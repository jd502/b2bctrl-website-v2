# B2BCTRL One-Pager

## Overview

B2BCTRL is a business-card style one-pager website designed to showcase B2B automation services. The application is a modern marketing landing page built with Next.js 15, featuring a clean, professional design with integrated hero imagery and a focused flow from value proposition to proof to contact. The site is optimized for deployment on Replit and focuses on lead generation through Calendly integration and email contact.

## Recent Changes

### Comprehensive Design Refresh (October 11, 2025)
- **Brand Color System**: Implemented consistent brand blue (#3399FF) across all CTAs, navigation links, and proof metrics for stronger visual identity
- **Hero Section**: Added darker overlay (from-neutral-900/30) to better balance the orange background image and improve text readability
- **Typography Hierarchy**: Upgraded headings to text-3xl/4xl with font-bold, increased body text sizes and line-heights for better readability
- **CTA Buttons**: Redesigned primary CTAs with brand blue background (#3399FF) and hover states (#2b85e6), secondary buttons use outlined style with better borders
- **Component Polish**: Added subtle shadows (shadow-sm, hover:shadow-md) to all cards, enhanced ProofCard metrics with brand blue color
- **Spacing & Rhythm**: Standardized section padding (py-20 for major sections), improved vertical spacing consistency throughout
- **Footer Improvements**: Increased padding (py-16), lightened text color (text-neutral-500), added brand blue link hover effects
- **Logo Refinement**: Optimized header logo to 140x42px and footer logo to 100x30px for better proportions

### Logo Implementation (October 2025)
- **Header Logo**: 140x42 pixels with rounded-lg corners and border using b2bctrl_logo_wht_blue.svg
- **Footer Logo**: 100x30 pixels with rounded-lg corners and border using b2bctrl_logo_wht_blue.svg
- **Design**: White/light background with brand blue (#3399FF) text accent and subtle border (border-neutral-200) for consistent visual identity across the site

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Choice: Next.js 15 (App Router)**
- **Rationale**: Leverages the latest App Router architecture for improved performance, built-in SEO optimization, and React Server Components
- **Alternatives considered**: Traditional React SPA, but Next.js provides better SEO, image optimization, and deployment story
- **Pros**: Superior SEO, automatic code splitting, optimized image handling via `next/image`, excellent Vercel deployment integration
- **Cons**: Requires understanding of Server Components vs Client Components paradigm

**Styling: Tailwind CSS**
- **Rationale**: Utility-first approach enables rapid UI development with consistent design tokens and minimal CSS bundle size
- **Solution**: Configured with PostCSS and Autoprefixer for cross-browser compatibility
- **Pros**: Fast development, small production bundles, built-in responsive utilities, easy customization
- **Cons**: HTML can become verbose with many utility classes

**TypeScript Configuration**
- **Rationale**: Strict type checking enabled to catch errors early and improve code reliability
- **Configuration**: ES2020 target with bundler module resolution, strict mode enabled
- **Pros**: Better IDE support, fewer runtime errors, self-documenting code
- **Cons**: Slightly slower development due to type definitions

**Component Architecture**
- **Pattern**: Functional components with props-based composition
- **Structure**: Reusable components (Stat, Card, ProofCard) for consistent UI elements
- **Pros**: High reusability, maintainable codebase, easy to test
- **Cons**: May require refactoring as complexity grows

### Static Asset Management

**Image Optimization Strategy**
- **Solution**: Next.js Image component with priority loading for above-the-fold images
- **Rationale**: Automatic format optimization (WebP/AVIF), responsive sizing, lazy loading
- **Implementation**: Logo component with light/dark mode variants, SVG logos for crisp rendering
- **Pros**: Significantly improved Core Web Vitals, automatic responsive images
- **Cons**: Requires proper sizing configuration

### SEO & Metadata

**Meta Configuration**
- **Solution**: Centralized metadata in layout.tsx with OpenGraph support
- **Rationale**: Better search engine discoverability and social media sharing
- **Implementation**: Title, description, OpenGraph tags, robots configuration
- **Pros**: Improved SEO, rich social previews
- **Cons**: Requires manual updates for content changes

### Deployment Architecture

**Hosting Platform: Replit (Migrated from Vercel - October 2025)**
- **Rationale**: Cloud development and hosting platform with built-in deployment capabilities
- **Configuration**: Custom port 5000 for dev/production, 0.0.0.0 host binding for Replit's networking environment
- **Migration Notes**: 
  - Updated Next.js from 14.2.5 to 15.5.4 (resolved security vulnerabilities)
  - Configured npm scripts to bind to 0.0.0.0:5000 for Replit compatibility
  - Added comprehensive .gitignore for security
  - Deployment configured for autoscale mode (stateless web app)
- **Pros**: Integrated development environment, automatic deployments, built-in secrets management
- **Cons**: Different networking model than Vercel (uses iframe proxy)

## External Dependencies

### Core Framework Dependencies
- **Next.js 15.5.4**: React framework with App Router, Server Components, and built-in optimizations
- **React 18.3.1**: UI library with concurrent features
- **React DOM 18.3.1**: React rendering for web

### Development Tools
- **TypeScript 5.4.5**: Static type checking
- **ESLint 8.57.0**: Code linting with Next.js 15.x config
- **eslint-config-next 15.x**: Updated to match Next.js 15.x framework version
- **Tailwind CSS 3.4.10**: Utility-first CSS framework
- **PostCSS 8.4.38**: CSS processing tool
- **Autoprefixer 10.4.19**: Automatic vendor prefixing

### Third-Party Services
- **Calendly**: Meeting scheduling integration (URL configured via `NEXT_PUBLIC_CALENDLY_URL` environment variable)
- **Email Contact**: Primary contact method (configured via `NEXT_PUBLIC_CONTACT_EMAIL` environment variable)

### Environment Variables
- `NEXT_PUBLIC_CALENDLY_URL`: Calendly booking page URL (default: https://calendly.com/your-handle/intro)
- `NEXT_PUBLIC_CONTACT_EMAIL`: Contact email address (default: hello@b2bctrl.com)

### Build & Deployment Configuration
- **Node.js Types**: @types/node 20.11.24
- **React Types**: @types/react 18.2.79, @types/react-dom 18.2.25
- **Custom Scripts**: Dev server on port 5000, production-ready build configuration