import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";

export default defineConfig({
  plugins: [solidPlugin()],
  resolve: {
    alias: {
      "@": path.resolve("./src/"),
      "@node_modules": path.resolve("./node_modules/")
    }
  },
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
