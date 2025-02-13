import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://wakpedia.visamalog.com',
  integrations: [tailwind(), sitemap()],
  adapter: netlify(),
});