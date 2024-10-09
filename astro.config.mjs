import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://aaryan25.github.io/',
  base: 'MSME_Astro',
  integrations: [tailwind()]
});