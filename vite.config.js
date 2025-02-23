import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Determine the base URL based on the deployment environment
const getBase = () => {
  if (process.env.DEPLOY_TARGET === "custom") {
    return "/"; // For wesleygrubbs.com
  }
  return "/wesgrubbs.github.io/"; // For GitHub Pages
};

export default defineConfig({
  plugins: [react()],
  base: getBase(),
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    minify: "terser",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
  },
  server: {
    headers: {
      "Content-Security-Policy":
        "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline';",
    },
  },
});
