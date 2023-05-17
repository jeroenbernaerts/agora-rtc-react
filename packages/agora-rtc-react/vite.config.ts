/* eslint-env node */

/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    coverage: {
      provider: "c8",
      reporter: ["text", "json", "html", "lcov", "json-summary"],
    },
    setupFiles: ["./test/setup.tsx"],
  },
});
