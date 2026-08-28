# Vchemics India Solutions — Project Context for AI Assistants

> **Purpose**: Read this file first before making any change to this codebase.
> It explains the stack, architecture, design system, data model, and conventions so you work with the project — not against it.

---

## 1. What Is This Project?

**Vchemics India Solutions** is a marketing + product-catalogue website for a Chennai-based construction chemicals manufacturer. They supply concrete admixtures, waterproofing chemicals, PU injection grouts, non-shrink grouts, micro concrete, epoxy grouts, protective coatings, and concrete repair products across Tamil Nadu.

The site is connected to **Lovable** (lovable.dev) — a visual web editor that syncs commits back and forth. **Do not force-push, rebase, amend, or squash already-pushed commits**. Always keep the branch in a deployable state.

---

## 2. Tech Stack

| Layer           | Technology                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------- |
| Framework       | **TanStack Start** (SSR React meta-framework) v1.168                                                    |
| Router          | **TanStack Router** v1.170 — file-based, type-safe                                                      |
| Styling         | **Tailwind CSS v4** (`@import "tailwindcss"`) + custom design tokens                                    |
| UI Primitives   | **shadcn/ui** (Radix UI under the hood) — located in `src/components/ui/`                               |
| Icons           | **lucide-react**                                                                                        |
| Build tool      | **Vite** v8 via `@lovable.dev/vite-tanstack-config`                                                     |
| Package manager | **Bun** (use `bun install`, `bun run dev`)                                                              |
| Server target   | Node.js server (Nitro node-server preset), hosted on Railway — do not change without updating this doc. |
| Data fetching   | **TanStack Query** v5                                                                                   |
| Forms           | **react-hook-form** + **zod** + **@hookform/resolvers**                                                 |
| Animations      | `tw-animate-css` + custom CSS utilities                                                                 |
| Fonts           | **Space Grotesk** (headings/display) · **Inter** (body) — loaded from Google Fonts in `__root.tsx`      |

---

## 3. Directory Structure

```
vchemi/
├── src/
│   ├── routes/               ← Every .tsx here = a page (TanStack Router file-based routing)
│   │   ├── __root.tsx        ← Root layout: Navbar + Footer + BackToTop + global <head> tags + JSON-LD
│   │   ├── index.tsx         ← Homepage (/)
│   │   ├── products.tsx      ← /products
│   │   ├── solutions.tsx     ← /solutions
│   │   ├── locations.tsx     ← /locations
│   │   ├── about.tsx         ← /about
│   │   ├── contact.tsx       ← /contact
│   │   ├── blog.tsx          ← /blog
│   │   ├── projects.tsx      ← /projects
│   │   ├── services.tsx      ← /services
│   │   ├── terms.tsx         ← /terms
│   │   ├── privacy.tsx       ← /privacy
│   │   └── ...               ← Other stub/redirect pages
│   │
│   ├── components/
│   │   ├── site/             ← ALL business/site-specific components live here
│   │   │   ├── data.ts       ← THE SINGLE SOURCE OF TRUTH for all content data
│   │   │   ├── Navbar.tsx    ← Sticky responsive navbar with mobile drawer
│   │   │   ├── Footer.tsx    ← Full footer with links and contact info
│   │   │   ├── PageHero.tsx  ← Reusable hero banner for inner pages
│   │   │   ├── ContactSection.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── Counter.tsx   ← Animated number counters
│   │   │   ├── Reveal.tsx    ← Scroll reveal animation wrapper
│   │   │   ├── BackToTop.tsx
│   │   │   ├── HeroVideo.tsx
│   │   │   ├── Logo.tsx
│   │   │   └── ui.tsx        ← Tiny shared UI helpers (e.g. SectionLabel)
│   │   └── ui/               ← shadcn/ui primitives — never customise directly
│   │
│   ├── hooks/                ← Custom React hooks
│   ├── lib/                  ← Utilities (e.g. lovable-error-reporting.ts, cn helper)
│   ├── assets/               ← Static images imported as modules (not /public)
│   ├── styles.css            ← Tailwind entry + full design token definitions
│   ├── router.tsx            ← TanStack Router setup with QueryClient context
│   ├── routeTree.gen.ts      ← AUTO-GENERATED — NEVER edit manually
│   ├── server.ts             ← SSR Nitro server entry (do not edit unless needed)
│   └── start.ts              ← Client entry
│
├── public/                   ← Static files served as-is (favicon, OG images)
├── vite.config.ts            ← Thin wrapper — read the comment at the top before touching
├── components.json           ← shadcn/ui config
├── AGENTS.md                 ← Lovable integration rules (do not delete)
└── CLAUDE.md                 ← This file
```

---

## 4. The One Data File: `src/components/site/data.ts`

**All site content lives here.** Do not hard-code content inside page files — export it from `data.ts` and import it into the page.

### Exported data + their TypeScript interfaces:

| Export          | Interface      | Description                                                                                                                           |
| --------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `allProducts`   | `ProductItem`  | 8 products (admixtures, waterproofing, PU grout, non-shrink grout, micro concrete, concrete repair, epoxy grout, protective coatings) |
| `products`      | —              | First 4 products (used on homepage grid)                                                                                              |
| `allSolutions`  | `SolutionItem` | 5 solutions (basement WP, terrace WP, concrete repair, structural rehab, industrial flooring)                                         |
| `allLocations`  | `LocationItem` | 3 TN hubs: Chennai (HQ), Coimbatore, Erode                                                                                            |
| `allProjects`   | `ProjectItem`  | 6 case study projects                                                                                                                 |
| `allBlogPosts`  | `BlogPostItem` | 5 technical blog articles                                                                                                             |
| `admixtureUses` | `const` tuple  | Use-case labels for admixtures                                                                                                        |
| `industries`    | `const` tuple  | 8 served industry sectors                                                                                                             |
| `stats`         | `const` tuple  | 4 KPI stats shown on homepage                                                                                                         |

**When adding new content:** Add the data object to the relevant array in `data.ts` first. The UI will pick it up automatically if it iterates the array.

---

## 5. Design System

### Brand Colors (defined in `styles.css`)

| Token                                              | Hex       | Usage                            |
| -------------------------------------------------- | --------- | -------------------------------- |
| `--color-brand-blue` / `--primary`                 | `#054782` | CTA buttons, links, highlights   |
| `--color-brand-green` / `--secondary` / `--accent` | `#669930` | Accent badges, secondary actions |
| `--color-brand-navy` / `--graphite`                | `#0b274c` | Dark sections, headings          |
| `--graphite-deep`                                  | `#061933` | Deepest dark (hero backgrounds)  |
| `--graphite-soft`                                  | `#123766` | Mid-dark cards                   |
| `--concrete`                                       | `#f4f8fc` | Light section backgrounds        |
| `--concrete-dark`                                  | `#e1edf7` | Borders, subtle dividers         |

In Tailwind you use these as `bg-brand-blue`, `text-brand-green`, `bg-graphite`, `text-graphite`, etc.

### Custom CSS Utilities (use these in className)

| Class             | Effect                                                      |
| ----------------- | ----------------------------------------------------------- |
| `blueprint`       | Blueprint grid overlay (white grid lines on dark sections)  |
| `hatch`           | Diagonal brand-color hatch pattern                          |
| `clip-slant-b`    | Angled bottom clip-path divider                             |
| `clip-slant-t`    | Angled top clip-path divider                                |
| `clip-slant-both` | Angled top + bottom                                         |
| `lift`            | Card hover: translateY(-6px) + shadow                       |
| `reveal`          | Scroll animation: hidden state (opacity 0, translateY 28px) |
| `reveal-in`       | Scroll animation: visible state                             |
| `eyebrow`         | Small all-caps tracking-wide label above headings           |

### Typography

- **Display/Headings**: `font-display` → Space Grotesk 500/600/700, `letter-spacing: -0.02em`
- **Body**: `font-sans` → Inter 400/500/600/700
- **Heading hierarchy per page**: always one `<h1>` (usually in PageHero), then `<h2>` for sections, `<h3>` for cards

### Scroll Reveal

Use the `<Reveal>` component (`src/components/site/Reveal.tsx`) to wrap any block that should animate on scroll. It adds the `reveal` class and toggles `reveal-in` when the element enters the viewport via IntersectionObserver.

```tsx
import { Reveal } from "@/components/site/Reveal";

<Reveal>
  <SomeCard />
</Reveal>;
```

---

## 6. Routing Conventions

This project uses **TanStack Router file-based routing**. The route tree is auto-generated in `routeTree.gen.ts` — **never edit it manually**.

- Each file in `src/routes/` exports `export const Route = createFileRoute('/path')({ component: ... })`.
- The root layout in `__root.tsx` wraps all routes with: `<Navbar> + <main><Outlet /></main> + <Footer> + <BackToTop>`.
- Page-level `head()` metadata (title, description, OG tags) is set using the `head:` property inside `createFileRoute(...)`.
- Navigation links use TanStack Router's `<Link to="/path">` — never plain `<a>` for internal links.

---

## 7. SEO Conventions

Every route file should define a `head()` returning:

- A unique `title` tag
- A `description` meta tag (150–160 chars)
- `og:title`, `og:description`, `og:image` open graph tags
- A `canonical` link
- A `robots: index, follow` meta

The global JSON-LD `LocalBusiness` schema is already in `__root.tsx`. Add page-specific schemas (e.g. `FAQPage`, `BreadcrumbList`) in each route's `head()` as additional script tags.

---

## 8. Components to Reuse

Before writing custom markup for common patterns, check if one of these already exists:

| Component        | Path                               | What it does                                                       |
| ---------------- | ---------------------------------- | ------------------------------------------------------------------ |
| `PageHero`       | `@/components/site/PageHero`       | Standard hero banner for inner pages (title, subtitle, breadcrumb) |
| `Reveal`         | `@/components/site/Reveal`         | IntersectionObserver scroll-reveal wrapper                         |
| `Counter`        | `@/components/site/Counter`        | Animated counting number (for stats)                               |
| `ContactSection` | `@/components/site/ContactSection` | Full contact form + company info block                             |
| `Testimonials`   | `@/components/site/Testimonials`   | Testimonial carousel                                               |
| `ProductGrid`    | `@/components/site/ProductGrid`    | Card grid layout for products                                      |
| `Logo`           | `@/components/site/Logo`           | Brand SVG logo                                                     |
| `HeroVideo`      | `@/components/site/HeroVideo`      | Background video element for hero                                  |

shadcn/ui primitives (Button, Card, Badge, Accordion, Dialog, Tabs, etc.) are all available at `@/components/ui/*`.

---

## 9. Image Handling

Static images live in `src/assets/` and are **imported as ES module references**:

```ts
import admixturesImg from "@/assets/product-admixtures.jpg";
```

They are then used directly as the `src` attribute or stored in `data.ts`. Do not use raw `/public/` paths for product/section images — use the import pattern so Vite handles hashing and optimisation.

The `@` alias maps to `src/` (configured via `vite-tsconfig-paths` in `vite.config.ts`).

---

## 10. Development Commands

```bash
bun run dev       # Start local dev server (HMR)
bun run build     # Production build
bun run lint      # ESLint check
bun run format    # Prettier format
```

The dev server runs on `localhost:3000` by default (configured by Lovable's Vite config).

---

## 11. Key Constraints & Rules

1. **Lovable sync** — Never force-push or rebase already-pushed commits. Keep the `main`/connected branch always deployable.
2. **`routeTree.gen.ts`** — Never edit. It is auto-generated on dev server start.
3. **`vite.config.ts`** — The Lovable config already includes TanStack devtools, React plugin, Tailwind, tsConfigPaths, Nitro, and the `@` alias. Do not re-add these — it will break the build.
4. **Data goes in `data.ts`** — Do not scatter hard-coded strings across route files.
5. **No plain `<a>` for internal navigation** — Use `<Link to="...">` from `@tanstack/react-router`.
6. **One `<h1>` per page** — Usually rendered by `<PageHero>`. Do not add a second one.
7. **Tailwind v4 syntax** — Uses `@import "tailwindcss"` + `@theme inline { ... }`. There is no `tailwind.config.js`. Add custom tokens in `styles.css`.
8. **No dark mode toggle** — The site is light-mode only. `@custom-variant dark` is defined but the site does not expose a toggle UI.

---

## 12. Business Information (quick reference)

- **Company**: Vchemics India Solutions
- **HQ**: Omsakthi Street, Kumaran Nagar Extn-I, Padi, Chennai - 600050
- **Phone**: +91 99423-54602
- **Email**: vchemics.info@gmail.com
- **Domain**: https://vchemicsindia.com
- **Operating hours**: Mon-Sat, 09:00-19:00
- **Service area**: Chennai, Coimbatore, Erode (Tamil Nadu, South India)
- **Products (8)**: Concrete Admixtures · Waterproofing Chemicals · PU Injection Grouting · Non-Shrink Grout · Micro Concrete · Concrete Repair · Epoxy Grouting · Protective Coatings
- **Solutions (5)**: Basement Waterproofing · Terrace Waterproofing · Concrete Repair · Structural Rehabilitation · Industrial Flooring
