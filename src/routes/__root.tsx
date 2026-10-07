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
import { ChatWidget } from "@/components/site/ChatWidget";
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

const SITE_URL = "https://www.vchemicsindia.com";
const ORG_ID = `${SITE_URL}/#organization`;

// Opening hours from the Vchemics Google Business Profile (Erode), used for all branches.
const openingHours = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:30",
    closes: "19:30",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "09:30",
    closes: "20:30",
  },
];

function branch(
  id: string,
  city: string,
  streetAddress: string,
  postalCode: string,
  areaServed: string[],
  extra: Record<string, unknown> = {},
) {
  return {
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#${id}`,
    name: `Vchemics India Solutions, ${city}`,
    parentOrganization: { "@id": ORG_ID },
    url: `${SITE_URL}/locations`,
    image: `${SITE_URL}/image.png`,
    telephone: "+91-99423-54602",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality: city,
      addressRegion: "Tamil Nadu",
      postalCode,
      addressCountry: "IN",
    },
    openingHoursSpecification: openingHours,
    areaServed,
    ...extra,
  };
}

// One linked graph for the whole site: the company, its branches and the website.
// Page-level schemas can reference the company with { "@id": ORG_ID }.
const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Vchemics India Solutions",
      alternateName: "Vchemics",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: `${SITE_URL}/image.png`,
        width: 588,
        height: 242,
        caption: "Vchemics India Solutions",
      },
      image: { "@id": `${SITE_URL}/#logo` },
      description:
        "Supplier of construction chemicals, waterproofing systems and concrete repair products across Tamil Nadu, and authorized distributor of leading brands including Fosroc, BASF, Sika, Berger, Ardex, MYK Arment, Renacon and STP.",
      email: "vchemics1989@gmail.com",
      telephone: "+91-99423-54602",
      address: {
        "@type": "PostalAddress",
        streetAddress: "302/B9, Indian Nagar, 3rd Street, 46 Pudur, Chettipalayam, Modakurichi",
        addressLocality: "Erode",
        addressRegion: "Tamil Nadu",
        postalCode: "638002",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-99423-54602",
        email: "vchemics1989@gmail.com",
        contactType: "sales",
        areaServed: "IN-TN",
        availableLanguage: ["English", "Tamil"],
      },
      areaServed: { "@type": "State", name: "Tamil Nadu" },
      knowsAbout: [
        "Concrete Admixtures",
        "Waterproofing Chemicals",
        "PU Injection Grouting",
        "Non-Shrink Grout",
        "Epoxy Grouting",
        "Protective Coatings",
        "Concrete Repair",
        "Micro Concrete",
      ],
      sameAs: [
        "https://www.instagram.com/vchemics_india/",
        "https://www.facebook.com/profile.php?id=61593645627034",
        "https://x.com/vchemics_india",
      ],
      department: [
        { "@id": `${SITE_URL}/#erode` },
        { "@id": `${SITE_URL}/#chennai` },
        { "@id": `${SITE_URL}/#krishnagiri` },
      ],
    },
    branch(
      "erode",
      "Erode",
      "302/B9, Indian Nagar, 3rd Street, 46 Pudur, Chettipalayam, Modakurichi",
      "638002",
      ["Erode", "Perundurai", "Bhavani", "Gobichettipalayam", "Anthiyur", "Sathyamangalam"],
    ),
    branch(
      "chennai",
      "Chennai",
      "Omsakthi Street, Kumaran Nagar Extn-I, Padi",
      "600050",
      ["Chennai", "Kanchipuram", "Chengalpattu", "Tiruvallur", "Sriperumbudur", "Oragadam"],
      { geo: { "@type": "GeoCoordinates", latitude: 13.0978, longitude: 80.1873 } },
    ),
    branch(
      "krishnagiri",
      "Krishnagiri",
      "RSF No. 121/16, Murugar Kovil, Boganapalli",
      "635001",
      ["Krishnagiri", "Hosur", "Dharmapuri", "Bargur", "Pochampalli"],
    ),
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Vchemics India Solutions",
      alternateName: "Vchemics",
      inLanguage: "en-IN",
      publisher: { "@id": ORG_ID },
    },
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
        children: JSON.stringify(siteSchema),
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
      <ChatWidget />
      <Toaster position="top-right" richColors />
    </QueryClientProvider>
  );
}
