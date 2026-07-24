---
name: brainstorming-astro
description: Use when designing new Astro 6 features, page layouts, components, content collections, or interactive UI islands before implementation.
---

# Brainstorming Ideas Into Designs (Astro 6)

Use this skill when designing a new feature, page, component, or layout in this Astro repository before writing code.

---

## Operating Principles

- **Static First**: Always start with static `.astro` components. Only add client hydration (`client:load`, `client:visible`, `client:idle`) when client-side state or user interaction is strictly required.
- **Design System Alignment**: Integrate designs seamlessly with Tailwind CSS v4 and current typography settings in `astro.config.mjs` / `global.css`.
- **Zero Bloat**: Channel `ponytail` principles—keep components lean, avoid unnecessary dependencies, and leverage native Web APIs and Astro features.

---

## Workflow

1. **Understand the Goal**: Identify what pages, components, or content collections are needed.
2. **Review Tech Stack**:
   - Astro 6 framework (`.astro` templates, layouts, dynamic parameters).
   - Tailwind CSS v4 (`@tailwindcss/vite` integration).
   - Content Collections (`src/content/` schemas and markdown/MDX data).
   - Google Fonts configured via `astro.config.mjs`.
3. **Outline Design & Structure**:
   - Determine component breakdown (Layout vs Page vs Component vs Island).
   - Decide if interactive JavaScript is needed (Vanilla JS `<script>` in `.astro` vs framework islands).
4. **Formulate Plan**: Write clear step-by-step implementation tasks following `writing-plans`.
