// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    // This app deploys to Netlify, so build with nitro's netlify preset instead of the
    // cloudflare default. It emits static assets to `dist/` (see netlify.toml `publish`)
    // and the SSR handler to `.netlify/functions-internal/`, which Netlify picks up
    // automatically. Inside the Lovable sandbox this is overridden back to cloudflare.
    preset: "netlify",
  },
});
