import path from "path";
import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

const config = defineConfig({
  base: "/",
  build: {
    outDir: "./dist",
    rollupOptions: {
      input: {
        ".": "./src/index.ts",
      },
      output: {
        entryFileNames: "index.js",
        chunkFileNames: "[name]/[name].js",
        assetFileNames: "[name]/[ext]/[name].[ext]",
      },
    },
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    ...VitePluginNode({
      adapter: "express",
      appPath: "./src/index.ts",
    }),
  ],
});

export default config;
