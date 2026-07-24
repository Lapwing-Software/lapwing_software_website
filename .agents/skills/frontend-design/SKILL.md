---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill for ALL UI, UX, styling, and design decisions. This is the absolute source of truth for aesthetics in this project. Generates creative, polished code and UI design that avoids generic AI aesthetics.
---

# Frontend Design (Source of Truth for UI/UX)

This skill is the absolute authority on visual execution. It guides the creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

---

## Tech Stack Alignment

Your tools for achieving these designs in this project are **Astro 6** and **Tailwind CSS v4** (`@tailwindcss/vite`).

- Use Astro `.astro` components for static rendering and performance.
- Extend styles and custom font variables (`--font-mulish`, `--font-nunito`, etc., configured in `astro.config.mjs`) in `src/styles/global.css`.
- If complex interactive animations or client states are needed, build framework islands or script blocks with smooth CSS/Tailwind transitions.

---

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:

- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Professional, modern, software product showcase, refined tech aesthetic.
- **Differentiation**: Clean layout, polished typography, dynamic micro-interactions, dark/light contrast.

---

## Frontend Aesthetics Guidelines

Focus on:

- **Typography**: Utilize Google Fonts configured via `astro.config.mjs` (Mulish, Nunito) or distinctive font pairings. Use standard typography variables in CSS/Tailwind.
- **Color & Theme**: Commit to a cohesive, premium aesthetic. Use Tailwind v4 utilities and CSS variables for smooth light/dark palettes and brand accents.
- **Motion**: Use smooth CSS transitions and micro-interactions on hover and focus states. Keep motion crisp and responsive.
- **Spatial Composition**: Modern layout with clean negative space, responsive flexbox/grid containers, and intuitive navigation.
- **Visual Details**: Atmospheric backgrounds, subtle border-radius tokens, crisp card containers, and optimized image/graphic assets.

NEVER use generic AI-generated aesthetics like predictable cookie-cutter patterns lacking context-specific character.

