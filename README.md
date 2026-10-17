# Astro Mining & Industrial Website

Next.js rebuild of the Astro Mining & Industrial homepage using the supplied preview, local brand assets, the company PDF, and content sourced from the live website.

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
- Generated mineral product imagery placed in reusable local assets
- Client-provided quarry imagery integrated into About and Services sections
- Client-provided partner logos integrated into a slow looping slider with arrow controls
- Company profile PDF wired into the footer download card
- Scroll-based fade-up animations across sections
- Refactored `astro_homepage_preview.jsx` into a compatibility export

## Project Structure

- `app/` App Router entrypoints, metadata, and global styles
- `components/` layout, sections, and shared UI primitives
- `data/` site content and structured homepage data
- `lib/` animation variants and shared helpers
- `public/assets/` brand, image, video, and PDF assets

## Implemented Sections

- Absolute header with responsive mobile navigation
- Hero section with local looping background video
- Feature strip
- About section with quarry visuals and company story
- Combined About + Services scroll-story section with synchronized copy and diagonal media transitions
- Directional reveal animations and expanded dotted accent treatments across major sections
- Products grid matching the preview layout
- Industries grid matching the preview layout
- Why Astro stats section matching the preview layout
- Partners slider with slow auto-advance and manual arrow controls
- Global reach map section with coordinate-based export pins and flag previews
- Footer with contact info, social links, and profile download
- News page (`/news`, "media hub"): category filters, bento grid with the featured story as a large tile, and a "Watch" strip that plays every video in a modal (bilingual EN/AR)
- News story pages (`/news/[slug]`, statically generated): full-bleed photo header, article with an "At a glance" facts/share sidebar, pull quote, video players, a photo carousel with filmstrip (swipe and arrow keys), and related stories
- Site-wide "Latest News" popup linking to `/news` (replaces the ended Egypt Mining Forum banner; hidden on news pages)

## Notes

- The original single-file preview is preserved as a compatibility export and now points to the modular homepage implementation.
- The page structure intentionally follows the supplied preview file layout instead of expanding into extra homepage sections.
- Stage 1 content has been refined using the client-approved About, Services, and Contact copy.
- Styling avoids Tailwind and Bootstrap per project rules.
- Animations focus on subtle fade-up and staggered reveal patterns.
- The canonical site URL lives in `lib/site.js` (the live site is served from `www`; the bare domain redirects there). Metadata, sitemap, robots.txt, and structured data all read it.
- Site icons use the App Router file conventions in `app/`: `favicon.ico` (16/32/48px), `icon.png` (512px), and `apple-icon.png` (180px), cut from the logo mark on white so Google can show it next to search results. The homepage also emits Organization/WebSite structured data with the company logo.

## Adding News

- Stories live in `data/news.js` (shared media plus `en` / `ar` copy). Body blocks are paragraphs or `{ list: [...] }` checklists. Each story also has a `type` (event / tv / press, used by the filters), `facts` for the "At a glance" box, and an optional `highlight` pull quote.
- Put photos in `public/assets/images/news/<slug>/` and videos in `public/assets/video/news/`.
- Photos: high-quality JPEG, max 2000px on the long edge (PNG exports are converted).
- Videos: H.264 MP4 with `+faststart` so they play in every browser and start streaming immediately, plus a JPEG poster frame. Keep every file under GitHub's 100 MB limit (the 10-minute Al Nahar segment was two-pass encoded to ~95 MB).

## Search Engines

- Google: verify the site in Google Search Console, submit `https://www.astromining-industrial.com/sitemap.xml`, and use URL Inspection → Request indexing after big changes.
- Bing (also feeds DuckDuckGo, Yahoo, Ecosia): the site supports IndexNow. The key file is `public/0e28ce84682b042b6320b6f67a34b490.txt`; after a deploy run `npm run indexnow` to submit every sitemap URL. Bing Webmaster Tools can also import the site from Google Search Console.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run indexnow` (notify Bing/IndexNow engines of all sitemap URLs; run after deploys)
