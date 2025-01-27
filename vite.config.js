import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        content: resolve(__dirname, "src/content.jsx"),
      },
      output: {
        dir: "dist",
        entryFileNames: "[name].js",
      },
    },
  },
  publicDir: "public", // Ensure this is set to include the manifest
});
