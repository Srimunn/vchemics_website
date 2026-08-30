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
    preset: "node-server",
    compressPublicAssets: true,
    routeRules: {
      "/**": {
        headers: {
          "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
        },
      },
    },
  },
  vite: {
    optimizeDeps: {
      exclude: [
        "@tanstack/react-start",
        "@tanstack/start-server-core",
        "@tanstack/start-storage-context",
      ],
      include: [
        "@tanstack/react-router",
        "@tanstack/react-query",
        "lucide-react",
        "recharts",
        "react-hook-form",
        "@hookform/resolvers/zod",
        "zod",
        "clsx",
        "tailwind-merge",
        "class-variance-authority",
        "sonner",
        "vaul",
        "embla-carousel-react",
        "react-markdown",
        "remark-gfm",
        "date-fns",
        "react-day-picker",
        "cmdk",
        "input-otp",
        "@radix-ui/react-accordion",
        "@radix-ui/react-alert-dialog",
        "@radix-ui/react-aspect-ratio",
        "@radix-ui/react-avatar",
        "@radix-ui/react-checkbox",
        "@radix-ui/react-collapsible",
        "@radix-ui/react-context-menu",
        "@radix-ui/react-dialog",
        "@radix-ui/react-dropdown-menu",
        "@radix-ui/react-hover-card",
        "@radix-ui/react-label",
        "@radix-ui/react-menubar",
        "@radix-ui/react-navigation-menu",
        "@radix-ui/react-popover",
        "@radix-ui/react-progress",
        "@radix-ui/react-radio-group",
        "@radix-ui/react-scroll-area",
        "@radix-ui/react-select",
        "@radix-ui/react-separator",
        "@radix-ui/react-slider",
        "@radix-ui/react-slot",
        "@radix-ui/react-switch",
        "@radix-ui/react-tabs",
        "@radix-ui/react-toggle",
        "@radix-ui/react-toggle-group",
        "@radix-ui/react-tooltip",
      ],
    },
  },
});
