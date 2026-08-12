// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: "/portfolio-website/4-devportfolio/",
  vite: {
    plugins: [tailwindcss()],
  },
});
