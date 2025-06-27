import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  build: {
    assets: "assets",
  },
  devToolbar: {
    enabled: false,
  },
  server: {
    port: 4321,
    host: true,
  },
});
