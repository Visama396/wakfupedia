import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";


import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  site: 'https://wakpedia.visamalog.com',
  integrations: [tailwind(), react()],
  adapter: netlify(),
});