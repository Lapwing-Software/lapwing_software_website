# Implementation Plan: Lapwing Software Home Page

Transform the home page (`src/pages/index.astro`) into a modern, responsive landing page for Lapwing Software that highlights its products (Kippr and Storis) across mobile and desktop devices.

## Goal and Scope

### Goals
- Redesign `src/pages/index.astro` into a polished, mobile-responsive landing page.
- Showcase main products: **Kippr** and **Storis**, with product descriptions, feature tags, and direct links to Privacy Policy & Terms.
- Apply modern design aesthetics using Tailwind CSS v4 and Google Fonts (`Mulish` & `Nunito`).
- Ensure static-first performance (`.astro` component with zero unnecessary client-side JavaScript).

### Non-Goals
- Adding complex backend dynamic data or CMS integrations.
- Adding heavy client-side JavaScript libraries.

## Implementation Tasks

### 1. Update Layout & Navigation (if needed)
- Ensure `src/layouts/Layout.astro` properly handles header title, meta tags, and full height page layout.

### 2. Redesign `src/pages/index.astro`
- Build a Hero section with Lapwing Software branding and tagline.
- Implement a responsive 2-column grid (`grid-cols-1 md:grid-cols-2`) for Kippr and Storis product cards.
- Add styled badges, feature summaries, and direct legal links (`/kippr/privacy-policy`, `/kippr/terms-and-conditions`, `/storis/privacy-policy`, `/storis/terms-and-conditions`).
- Build a clean, subtle footer with copyright notice and navigation links.

## Verification Strategy

### Automated Verification
- `npm run lint` - ESLint code checks.
- `npx astro check` - Strict Astro & TypeScript verification.
- `npm run build` - SSG production build test.

## Handoff
Execute this plan using the `executing-plans` skill once approved.
