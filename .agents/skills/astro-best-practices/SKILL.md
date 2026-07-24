---
name: astro-best-practices
description: Core best practices for Astro 6 performance, static rendering, client hydration rules, scoped styling, and TypeScript.
---

# Astro Best Practices

Use this skill to ensure code written for this Astro repository is maintainable, performant, and aligned with Astro 6 patterns.

---

## Technical Best Practices

### 1. Static by Default
- Prefer Static Site Generation (SSG) for fast page loads and optimal SEO.
- Server-side rendering (SSR) should only be enabled for dynamic per-request logic or user authentication.

### 2. Hydrate Responsibly (Islands)
- Do not hydrate entire page trees.
- Wrap only interactive UI leaves in client directives.
- Choose the lightest hydration directive suitable for the interaction:
  - Prefer `client:visible` over `client:load` for below-the-fold interactive components.

### 3. Type-Safe Props & Data
- Define explicit `Props` interface for every `.astro` component:
  ```astro
  ---
  interface Props {
    title: string;
    description?: string;
  }
  const { title, description } = Astro.props;
  ---
  ```
- Use `astro check` to catch type mismatch errors across `.astro` files.

### 4. Image & Asset Optimization
- Use Astro's `<Image />` component from `astro:assets` for optimized loading, responsive srcset generation, and format conversion.
- Store public static files in `public/` and modular component graphics in `src/assets/`.

### 5. SEO & Metadata
- Include proper `<title>`, `<meta name="description">`, Open Graph tags, and canonical links in `Layout.astro`.
- Utilize Astro SEO best practices for structured metadata.
