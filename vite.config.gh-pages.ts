import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "invitation";
const base = process.env.GITHUB_PAGES ? `/${repoName}/` : "/";

export default defineConfig({
  base,
  resolve: { tsconfigPaths: true },
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
