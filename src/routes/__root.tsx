import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { GA_MEASUREMENT_ID, trackPageView, initGlobalAnalyticsListeners } from "@/lib/analytics";
import { Navbar } from "@/components/site/Navbar";
import { BrandStrip } from "@/components/site/BrandStrip";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-background px-4 py-16">
      <div className="max-w-lg text-center">
        <span className="font-mono text-sm font-bold uppercase tracking-widest text-brand-green">
          Error 404
        </span>
        <h1 className="mt-2 text-6xl sm:text-7xl font-bold font-display text-foreground">404</h1>
        <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-foreground">
          Page or Formulation Not Found
        </h2>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
          The page, product specification, or solution you requested could not be located. Browse
          our catalog or reach out to our Chennai technical team.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-blue/90 shadow-sm"
          >
            Back to Homepage
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-muted"
          >
            View Products
          </Link>
          <Link
            to="/solutions"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-muted"
          >
            View Solutions
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-green/90 shadow-sm"
          >
            Contact Team
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-background px-4 py-16">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-brand-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-blue/90"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vchemics India Solutions",
  alternateName: "Vchemics",
  url: "https://www.vchemicsindia.com",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vchemics India Solutions",
  alternateName: "Vchemics",
  url: "https://www.vchemicsindia.com",
  logo: "https://www.vchemicsindia.com/image.png",
  image: "https://www.vchemicsindia.com/image.png",
  description:
    "Manufacturer of concrete admixtures, crystalline waterproofing, PU injection grouts, non-shrink grouts, and micro concrete in Chennai and across South India.",
  telephone: "+91-99423-54602",
  email: "vchemics1989@gmail.com",
  sameAs: [
    "https://www.instagram.com/vchemics_india/",
    "https://www.facebook.com/profile.php?id=61593645627034",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Omsakthi Street, Kumaran Nagar Extn-I, Padi",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600050",
    addressCountry: "IN",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  name: "Vchemics India Solutions",
  alternateName: "Vchemics",
  url: "https://www.vchemicsindia.com",
  logo: "https://www.vchemicsindia.com/image.png",
  image: "https://www.vchemicsindia.com/image.png",
  description:
    "Leading manufacturer and supplier of concrete admixtures, crystalline waterproofing chemicals, PU injection grouting, non-shrink grouts, and micro concrete in Chennai, Coimbatore, Erode, Krishnagiri, and across Tamil Nadu.",
  telephone: "+91-99423-54602",
  email: "vchemics1989@gmail.com",
  sameAs: [
    "https://www.instagram.com/vchemics_india/",
    "https://www.facebook.com/profile.php?id=61593645627034",
    "https://x.com/vchemics_india",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Omsakthi Street, Kumaran Nagar Extn-I, Padi",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600050",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "13.0978",
    longitude: "80.1873",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:00",
  },
  areaServed: ["Chennai", "Coimbatore", "Erode", "Krishnagiri", "Tamil Nadu", "South India"],
  priceRange: "₹₹",
  knowsAbout: [
    "Concrete Admixtures",
    "Waterproofing Chemicals",
    "PU Injection Grouting",
    "Non-Shrink Grout",
    "Micro Concrete",
    "Concrete Repair",
    "Epoxy Grouting",
    "Protective Coatings",
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Construction Chemicals & Waterproofing Solutions | Vchemics",
      },
      {
        name: "description",
        content:
          "High-performance concrete admixtures, crystalline waterproofing, PU injection grouts, non-shrink grouts & micro concrete manufacturer across Chennai, Coimbatore, Erode & Krishnagiri. Same-day & 24-hour dispatch.",
      },
      {
        name: "keywords",
        content:
          "construction chemicals Chennai, waterproofing chemicals Coimbatore, concrete admixture supplier Erode, Krishnagiri construction chemicals, PU injection grouting Tamil Nadu, non shrink grout, micro concrete",
      },
      { name: "author", content: "Vchemics India Solutions" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Vchemics India Solutions" },
      { property: "og:image", content: "https://www.vchemicsindia.com/image.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "64x64" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(webSiteSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Google Analytics 4 (GA4) Tracking Script */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isFirstRender = useRef(true);

  // Track page_view event on client-side route transitions
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    trackPageView(pathname);
  }, [pathname]);

  // Set up global click listener for tel:, mailto:, WhatsApp, and Quote buttons
  useEffect(() => {
    const cleanup = initGlobalAnalyticsListeners();
    return cleanup;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <BrandStrip />
      <Footer />
      <BackToTop />
      <Toaster position="top-right" richColors />
    </QueryClientProvider>
  );
}
