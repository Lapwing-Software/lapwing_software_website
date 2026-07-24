---
name: astro-architecture
description: Application architecture standards for Astro 6, file-based routing, layout composition, islands architecture, and Content Layer.
---

# Astro Application Architecture

This project is built on **Astro 6** using **Vite** and **Tailwind CSS v4**.

---

## Directory Structure

```text
src/
├── components/       # Reusable UI components (.astro or framework islands)
├── content/          # Content Collections and schemas (Content Layer)
├── layouts/          # Layout wrappers (e.g., Layout.astro)
├── pages/            # File-based routes and API endpoints
└── styles/           # Global styles (e.g., global.css with Tailwind v4)
public/               # Static public assets (favicons, images, fonts)
astro.config.mjs      # Astro configuration & plugins
```

---

## Architectural Guidelines

### 1. File-Based Routing (`src/pages`)
- Standard pages end with `.astro` (e.g., `src/pages/index.astro`, `src/pages/about.astro`).
- Dynamic routes use bracket syntax (e.g., `src/pages/blog/[slug].astro`).
- Server API endpoints export HTTP handler functions (`GET`, `POST`, etc.) in `.ts` or `.js` files.

### 2. Layouts and Components (`src/layouts` & `src/components`)
- Pages wrap content using Layout components (`Layout.astro`).
- Modular UI components belong in `src/components/`.
- Keep component props typed with TypeScript interface `Props`.

### 3. Islands Architecture
- Default components are static with **zero JS sent to the client**.
- When client-side interactivity is necessary, use explicit client directives:
  - `client:load`: High priority UI interactive immediately on load.
  - `client:visible`: Low priority UI hydrated when scrolled into view.
  - `client:idle`: Hydrates once page main thread is idle.

### 4. Styling System
- Uses **Tailwind CSS v4** configured via `@tailwindcss/vite` in `astro.config.mjs` and imported in `src/styles/global.css`.
- Standardize colors, typography, and spacing using CSS variables and Tailwind utility classes.
- Scoped CSS can be written directly inside `<style>` tags in `.astro` files.

### 5. Content Layer & Collections
- Structured data (blog posts, products, showcase items) lives in `src/content/`.
- Define type-safe content schemas using `astro:content` (`defineCollection` & `zod`).
