// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: 'Mulish',
      cssVariable: '--font-mulish',
      provider: fontProviders.google(),
    },
    {
      name: 'Nunito',
      cssVariable: '--font-nunito',
      provider: fontProviders.google(),
    },
  ],
  vite: {
    plugins: [
      // @ts-expect-error - Type definitions mismatch between Astro's Vite and @tailwindcss/vite
      tailwindcss(),
    ],
  },
});
