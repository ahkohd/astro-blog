import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://victorare.mu",
  integrations: [mdx(), sitemap(), tailwind(), react()],
  output: "server",
  adapter: netlify(),
});

