// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      // @ts-expect-error - Type definitions mismatch between Astro's Vite and @tailwindcss/vite
      tailwindcss(),
    ],
  },
});
