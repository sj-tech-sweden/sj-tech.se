// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Netlify adapter enables on-demand rendering for routes that set
  // `export const prerender = false` (e.g. /products).
  // Disable the Edge Functions dev server so `astro dev` serves on-demand
  // routes directly via Astro's dev server (no Deno required locally).
  adapter: netlify({ devFeatures: { edgeFunctions: false } }),
  vite: {
    plugins: [tailwindcss()]
  }
});