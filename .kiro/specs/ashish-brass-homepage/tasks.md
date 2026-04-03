# Implementation Plan: Ashish Brass Homepage

## Overview

Build a data-driven, component-based homepage for Ashish Brass using Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, and Lucide React. Each section is an isolated Server Component (with Client Components only where interactivity is required). All user-visible content lives in typed data files under `src/data/`.

## Tasks

- [x] 1. Set up data layer — define all TypeScript types and seed data files
  - [x] 1.1 Create `src/data/types.ts` with interfaces for NavLink, Stat, Feature, TrustBadge, Product, Industry, CtaData, FooterData
    - Cover every field referenced in requirements (icon name as string, isFeatured flag, tags array, spec list, etc.)
    - _Requirements: 2.1, 2.4_
  - [x] 1.2 Create `src/data/nav.ts` — export `navLinks: NavLink[]` and `contactPhone: string`
    - Include links for Products, Industries, About, Contact with href anchor targets
    - _Requirements: 2.1, 3.2, 3.3_
  - [x] 1.3 Create `src/data/hero.ts` — export `heroData` with headline, subheadline, description, primary/secondary CTA, and `stats: Stat[]`
    - Include at least 4 stats (e.g. "25+ Years", "500+ Products", "50+ Countries", "ISO Certified")
    - _Requirements: 2.1, 4.1, 4.2, 4.3, 4.4_
  - [x] 1.4 Create `src/data/features.ts` — export `features: Feature[]` (icon, title, description)
    - _Requirements: 2.1, 5.1, 5.2_
  - [x] 1.5 Create `src/data/trust.ts` — export `trustBadges: TrustBadge[]` (icon, label)
    - _Requirements: 2.1, 6.1, 6.2_
  - [x] 1.6 Create `src/data/products.ts` — export `productsData` with sectionTitle, subtitle, viewAllLink, and `products: Product[]`
    - Include at least 6 products; at least 2 with `isFeatured: true`; each with tags and spec list
    - _Requirements: 2.1, 2.2, 7.1, 7.2, 7.3, 7.5, 7.6_
  - [x] 1.7 Create `src/data/industries.ts` — export `industriesData` with sectionTitle, subtitle, and `industries: Industry[]`
    - _Requirements: 2.1, 8.1, 8.2, 8.3_
  - [x] 1.8 Create `src/data/cta.ts` — export `ctaData` with headline, description, buttonLabel, buttonHref, and contactDetail
    - _Requirements: 2.1, 9.1, 9.2_
  - [x] 1.9 Create `src/data/footer.ts` — export `footerData` with companyName, tagline, address, phone, email, linkColumns, businessHours
    - _Requirements: 2.1, 10.1, 10.2, 10.3, 10.4_

- [x] 2. Update layout and global styles
  - [x] 2.1 Update `src/app/layout.tsx` — set `metadata` (title, description) via Next.js Metadata API; keep Geist font variables
    - Use `export const metadata: Metadata = { title: '...', description: '...' }` — Server Component only
    - _Requirements: 13.1_
  - [x] 2.2 Extend `src/app/globals.css` — add CSS custom properties for brand color palette (primary amber/gold, neutrals) using `@theme` block compatible with Tailwind v4
    - Define `--color-brand-*`, `--color-neutral-*` tokens; keep existing background/foreground vars
    - _Requirements: 12.1_

- [x] 3. Implement Navbar component
  - [x] 3.1 Create `src/components/Navbar.tsx` as a Client Component (`'use client'`)
    - Render brand name on left, nav links from `navLinks`, phone from `contactPhone`, "Get a Quote" button
    - Implement scroll-aware background: use `useEffect` + `useState` to toggle shadow/bg class when `window.scrollY > 0`
    - Implement hamburger menu with `useState` for open/close; close on outside click via `useEffect` ref listener
    - Add `aria-label` and `aria-expanded` to hamburger button; use `<nav>` semantic element
    - Anchor links (`href="#products"` etc.) for section navigation
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 13.3, 13.4, 13.5_

- [x] 4. Implement Hero section
  - [x] 4.1 Create `src/components/Hero.tsx` as a Client Component (`'use client'`) to support Framer Motion entrance animations
    - Render headline, subheadline, description, two CTA buttons, and stats grid from `heroData`
    - Apply `min-h-[90vh]` on desktop; stack content vertically on mobile with `flex-col md:flex-row`
    - Use a gradient/pattern background (CSS gradient via Tailwind) to convey industrial precision
    - Wrap headline/content in `motion.div` with `initial={{ opacity: 0, y: 24 }}` / `animate={{ opacity: 1, y: 0 }}` entrance animation
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 12.5_

- [x] 5. Implement Features Strip
  - [x] 5.1 Create `src/components/FeaturesStrip.tsx` as a Server Component
    - Map over `features` array; render icon (Lucide), title, description per card
    - `flex-col md:flex-row` layout; use `gap` and `flex-1` for equal-width cards
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [x] 6. Implement Trust Bar
  - [x] 6.1 Create `src/components/TrustBar.tsx` as a Server Component
    - Map over `trustBadges`; render Lucide icon + label per badge
    - `flex-row flex-wrap` on desktop; `grid grid-cols-2` below 640px via `sm:flex`
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [x] 7. Implement Products Section
  - [x] 7.1 Create `src/components/ProductCard.tsx` as a Server Component
    - Accept a `Product` prop; render name, tags, spec list, "View Details" link
    - Show placeholder SVG/div when no image URL provided
    - Apply featured highlight (amber border + badge) when `isFeatured` is true
    - Smooth hover transition on card (`transition-shadow duration-200`)
    - _Requirements: 7.3, 7.4, 7.5, 12.3_
  - [x] 7.2 Create `src/components/ProductsSection.tsx` as a Server Component
    - Render section title, subtitle, responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`), all ProductCards, and "View All Products" link
    - Add `id="products"` for anchor navigation
    - _Requirements: 7.1, 7.2, 7.6, 7.7, 7.8, 7.9_

- [x] 8. Implement Industries Section
  - [x] 8.1 Create `src/components/IndustriesSection.tsx` as a Server Component
    - Render section title, subtitle, and industry cards from `industriesData`
    - Each card: Lucide icon, name, description
    - `grid-cols-2 md:grid-cols-3 lg:grid-cols-4` responsive grid; `grid-cols-2` on mobile
    - Add `id="industries"` for anchor navigation
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

- [x] 9. Implement CTA Section
  - [x] 9.1 Create `src/components/CtaSection.tsx` as a Server Component
    - Render headline, description, primary CTA button, and secondary contact detail from `ctaData`
    - Use brand color background (e.g. `bg-amber-600` or CSS custom property) to visually distinguish from adjacent sections
    - CTA button `href` points to contact anchor or `#contact`
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

- [x] 10. Implement Footer
  - [x] 10.1 Create `src/components/Footer.tsx` as a Server Component
    - Render company name, tagline, address, phone, email, link columns, business hours
    - Copyright notice: `© {new Date().getFullYear()} Ashish Brass`
    - `grid-cols-1 md:grid-cols-4` layout; stacks vertically on mobile
    - Use `<footer>` semantic element; add `id="contact"` for anchor navigation
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 13.5_

- [x] 11. Wire everything together in `src/app/page.tsx`
  - Replace current placeholder content with imports of all Section_Components in order: Navbar, Hero, FeaturesStrip, TrustBar, ProductsSection, IndustriesSection, CtaSection, Footer
  - Wrap page in `<main>` with `<header>` for Navbar; use `<section>` wrappers for each content section
  - Ensure no hardcoded user-visible strings remain in page.tsx
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 2.5, 13.5_

- [x] 12. Checkpoint — verify layout, responsiveness, and accessibility
  - Ensure all components render without TypeScript errors (`npx tsc --noEmit`)
  - Verify no horizontal scroll at 320px viewport width
  - Confirm all interactive elements have visible focus indicators and keyboard accessibility
  - Confirm `<nav>`, `<main>`, `<section>`, `<footer>`, `<header>` landmarks are present
  - Confirm all images have non-empty `alt` attributes
  - _Requirements: 11.1, 11.2, 11.3, 11.4, 13.2, 13.3, 13.5_

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP (none in this plan — no Correctness Properties section in design)
- All Section_Components default to Server Components unless they require `useState`/`useEffect` (Navbar, Hero)
- Framer Motion's `motion.*` components require `'use client'` — Hero is already a Client Component
- Tailwind v4 uses `@import "tailwindcss"` and `@theme` blocks instead of a `tailwind.config.js` — do not create a config file
- Lucide React v1 icon import syntax: `import { IconName } from 'lucide-react'`
