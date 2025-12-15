import { defineConfig } from "astro/config";

// Astro integration imports
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import { VitePWA } from "vite-plugin-pwa";

// Helper imports
import { manifest, seoConfig } from "./utils/seoConfig";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: seoConfig.baseURL,
  integrations: [tailwind({
    config: {
      applyBaseStyles: false,
      path: "./tailwind.config.js"
    }
  }), sitemap(), compress(), react()],
  vite: {
    resolve: {
      alias: {
        '@globals': '/src/components/global',
        '@component': '/src/components',
        '@style': '/src/styles',
        '@js': '/src/js',
        '@util': '/utils',
        '@img': '/src/assets/img',
        '@svg': '/src/assets/svg',
        '@icon': '/src/assets/svg/icon',
      },
    },
    plugins: [VitePWA({
      registerType: "autoUpdate",
      manifest,
      workbox: {
        globDirectory: 'dist',
        globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}'],
        // Don't fallback on document based (e.g. `/some-page`) requests
        // This removes an errant console.log message from showing up.
        navigateFallback: null
      }
    })]
  }
});