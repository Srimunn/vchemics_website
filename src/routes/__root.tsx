import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
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
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
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
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  "name": "V Chemics India Solutions",
  "alternateName": "VChemics",
  "url": "https://vchemics.com",
  "logo": "https://vchemics.com/image.png",
  "image": "https://vchemics.com/image.png",
  "description": "Leading manufacturer and supplier of concrete admixtures, crystalline waterproofing chemicals, PU injection grouting, non-shrink grouts, and micro concrete in Chennai and across Tamil Nadu.",
  "telephone": "+91-99423-54602",
  "email": "vchemics.info@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Omsakthi Street, Kumaran Nagar Extn-I, Padi",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600050",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "13.0978",
    "longitude": "80.1873"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "19:00"
  },
  "areaServed": [
    "Chennai",
    "Coimbatore",
    "Erode",
    "Salem",
    "Karur",
    "Tamil Nadu",
    "South India"
  ],
  "priceRange": "₹₹",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Construction Chemicals & Waterproofing Products",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Concrete Admixtures" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Waterproofing Chemicals" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "PU Injection Grouting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Non-Shrink Grout" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Micro Concrete" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Concrete Repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Epoxy Grouting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Protective Coatings" } }
    ]
  }
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Construction Chemicals & Waterproofing Solutions in Chennai | V Chemics India Solutions" },
      {
        name: "description",
        content:
          "High-performance concrete admixtures, crystalline waterproofing, PU injection grouts, non-shrink grouts & micro concrete manufacturer in Chennai, Tamil Nadu. Same-day dispatch.",
      },
      { name: "keywords", content: "construction chemicals Chennai, waterproofing chemicals Chennai, concrete admixture supplier Chennai, PU injection grouting Chennai, non shrink grout Chennai, micro concrete Chennai" },
      { name: "author", content: "V Chemics India Solutions" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "V Chemics India Solutions" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://vchemics.com" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
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
        children: JSON.stringify(localBusinessSchema),
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

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </QueryClientProvider>
  );
}
