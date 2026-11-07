import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  server: { host: "127.0.0.1", port: 5181 },
  preview: { host: "127.0.0.1" },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        speisekarte: resolve(__dirname, "speisekarte.html"),
        ueberUns: resolve(__dirname, "ueber-uns.html"),
        impressum: resolve(__dirname, "impressum.html"),
        datenschutz: resolve(__dirname, "datenschutz.html"),
        bildnachweis: resolve(__dirname, "bildnachweis.html"),
      },
    },
  },
});
