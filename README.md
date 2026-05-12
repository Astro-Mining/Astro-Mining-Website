# Astro Mining & Industrial Website

Next.js rebuild of the Astro Mining & Industrial homepage using the supplied preview, local brand assets, and content sourced from the live website.

## Stack

- Next.js App Router
- React
- CSS Modules
- Framer Motion for scroll and entrance animations

## Current Scope

- Modular homepage implementation
- Reusable layout and shared UI components
- SEO-ready metadata and semantic structure
- Real local logo and hero video integration
- Scroll-based fade-up animations across sections
- Refactored `astro_homepage_preview.jsx` into a compatibility export

## Project Structure

- `app/` App Router entrypoints, metadata, and global styles
- `components/` layout, sections, and shared UI primitives
- `data/` site content and structured homepage data
- `lib/` animation variants and shared helpers
- `public/assets/` brand, image, and video assets

## Implemented Sections

- Sticky header with responsive mobile navigation
- Hero section with local looping background video
- Feature strip
- About and values section
- Products grid
- Industries grid
- Why Astro stats section
- Partners marquee
- Global reach section
- Contact section

## Notes

- The original single-file preview is preserved as a compatibility export and now points to the modular homepage implementation.
- Styling avoids Tailwind and Bootstrap per project rules.
- Animations focus on subtle fade-up and staggered reveal patterns.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
