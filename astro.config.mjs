import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import favicons from "astro-favicons";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://victorare.mu",
  integrations: [
    mdx(),
    sitemap(),
    favicons({
      masterPicture: "./src/favicon.svg",
      emitAssets: true,
      faviconsDarkMode: true,
    }),
    tailwind(),
    react(),
  ],
  output: "server",
  adapter: netlify(),
});
