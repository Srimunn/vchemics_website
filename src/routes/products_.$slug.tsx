import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  FlaskConical,
  Droplets,
  Layers,
  Wrench,
  Building2,
  Factory,
  ShieldCheck,
  Waves,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Check,
  Clock,
  HelpCircle,
  ChevronDown,
  FileText,
  Phone,
  MessageCircle,
  CheckCircle2,
  Download,
  BookOpen,
  Calendar,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { allProducts, allBlogPosts, type ProductItem } from "@/components/site/data";
import {
  catalogueProducts,
  type CatalogueProduct,
  type CatalogueCategory,
} from "@/components/site/catalogue-data";
import { productDetailsExtended } from "@/lib/product-details";
import { getCategoryIcon } from "@/lib/category-icons";
import { cn } from "@/lib/utils";
import { trackWhatsAppClick, trackCallClick, trackGetQuoteClick } from "@/lib/analytics";

const productIcons: Record<string, LucideIcon> = {
  "concrete-admixtures": FlaskConical,
  "waterproofing-chemicals": Droplets,
  "pu-injection-grouting": Waves,
  "non-shrink-grout": Layers,
  "micro-concrete": Building2,
  "concrete-repair": Wrench,
  "epoxy-grouting": Factory,
  "protective-coatings": ShieldCheck,
};

function mapProductToCatalogueCategory(p: ProductItem): CatalogueCategory {
  const id = p.id.toLowerCase();
  if (id.includes("admixture")) return "admixtures";
  if (id.includes("waterproof") || id.includes("pu-injection")) return "waterproofing";
  if (id.includes("grout")) return "grouts";
  if (id.includes("repair") || id.includes("micro")) return "repair-micro-concrete";
  if (id.includes("coating")) return "coatings";
  return "admixtures";
}

const productMetaDescriptions: Record<string, string> = {
  "concrete-admixtures":
    "High-performance PCE & SNF concrete superplasticisers delivering 30% water cut, 3h slump retention, and rapid early strength for RMC & precast in Tamil Nadu.",
  "waterproofing-chemicals":
    "Integral crystalline powders and elastomeric barrier chemicals preventing deep hydrostatic water ingress in basement foundations, rafts, sumps, and wet areas.",
  "pu-injection-grouting":
    "Hydro-active polyurethane resins expanding 30x in 30 seconds to arrest high-pressure gushing water leaks in basement walls, dams, tunnels, and cold joints.",
  "non-shrink-grout":
    "Free-flowing ASTM C1107 cementitious precision grouts achieving >75 MPa strength with 100% bearing area contact under heavy machine baseplates & anchor bolts.",
  "epoxy-grouting":
    "Heavy-duty 3-component solvent-free epoxy grouts exceeding 95 MPa compressive strength with extreme chemical resistance for dynamic stamping presses & cranes.",
  "protective-coatings":
    "Aliphatic polyurethane, epoxy floorings & anti-carbonation barrier coatings shielding civil facades and industrial concrete against UV, moisture, and smog.",
  "concrete-repair":
    "Thixotropic polymer-modified structural repair mortars and zinc-rich rebar primers halting corrosion and spalling in structural columns, beams, and facades.",
  "micro-concrete":
    "Pre-bagged flowable micro concrete for structural column jacketing, section enlargement, and dense rebar encasement with zero vibration and >60 MPa strength.",
};

const productSolutionsMap: Record<string, { id: string; title: string }> = {
  "micro-concrete": {
    id: "structural-rehabilitation",
    title: "Structural Rehabilitation & Column Jacketing",
  },
  "concrete-repair": {
    id: "concrete-repair",
    title: "Concrete Repair & Restoration Protocol",
  },
  "waterproofing-chemicals": {
    id: "basement-waterproofing",
    title: "Deep-Pore Basement Waterproofing",
  },
  "pu-injection-grouting": {
    id: "basement-waterproofing",
    title: "Active Leak High-Pressure Injection",
  },
  "protective-coatings": {
    id: "industrial-flooring",
    title: "Industrial Flooring & Protective Coatings",
  },
  "epoxy-grouting": {
    id: "industrial-flooring",
    title: "Heavy Equipment Plinths & Industrial Flooring",
  },
  "non-shrink-grout": {
    id: "industrial-flooring",
    title: "Precision Equipment Bedding & Plinths",
  },
  "concrete-admixtures": {
    id: "basement-waterproofing",
    title: "Dense Impermeable Concrete Mixes",
  },
};

export const Route = createFileRoute("/products_/$slug")({
  loader: ({ params }) => {
    const product = allProducts.find((p) => p.id === params.slug || p.slug === params.slug);
    if (!product) {
      throw notFound();
    }
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.product) return {};
    const { product } = loaderData;
    const title = `${product.title} | Technical Specs & TDS | Vchemics`;
    const description =
      productMetaDescriptions[product.id] ||
      productMetaDescriptions[product.slug] ||
      `${product.title} manufactured by Vchemics Chennai. ${product.tagline}. Compliant with ${product.standard}.`;
    const url = `https://www.vchemicsindia.com/products/${product.id}`;
    const ogImage =
      typeof product.image === "string" && product.image.startsWith("http")
        ? product.image
        : "https://www.vchemicsindia.com/image.png";

    const productSchema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.title,
      description: description,
      category: product.category,
      image: ogImage,
      sku: product.id,
      mpn: product.id,
      brand: {
        "@type": "Brand",
        name: "Vchemics India Solutions",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "0",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: url,
        seller: {
          "@type": "Organization",
          name: "Vchemics India Solutions",
        },
      },
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.vchemicsindia.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: "https://www.vchemicsindia.com/products",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: product.title,
          item: url,
        },
      ],
    };

    const productFaqs = product.faqs || productDetailsExtended[product.id]?.faqs || [];
    const faqSchema =
      productFaqs.length > 0
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: productFaqs.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }
        : null;

    const scripts: { type: string; children: string }[] = [
      {
        type: "application/ld+json",
        children: JSON.stringify(productSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema),
      },
    ];

    if (faqSchema) {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify(faqSchema),
      });
    }

    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content: `${product.title}, ${product.category}, ${product.standard}, construction chemicals Chennai, Vchemics`,
        },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:image", content: ogImage },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts,
    };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  const [isProcOpen, setIsProcOpen] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const defaultDetails = {
    problemSolved:
      "Engineered high-performance formulation tailored for extreme site durability and tropical curing conditions.",
    substrateSuitability: "Structural concrete, RCC frames, masonry, and civil substrates.",
    procedure: [
      "Surface preparation, cleaning, and substrate profiling.",
      "Mechanical mixing according to recommended water/powder ratio.",
      "Controlled application per standard civil engineering norms.",
      "Moist curing to achieve peak design compressive and bond strength.",
    ],
    packaging: "20kg Plastic Cans, 200kg HDPE Barrels, 1000L Bulk IBC Containers.",
    faqs: [
      {
        q: "What testing standard does this product comply with?",
        a: `Tested and certified to comply with ${product.standard}.`,
      },
    ],
  };

  const ext = productDetailsExtended[product.id] ?? defaultDetails;
  const faqs = product.faqs ?? ext.faqs;
  const ProductIcon = productIcons[product.id] || FlaskConical;
  const catalogueCategory = mapProductToCatalogueCategory(product);
  const relatedFormulations = catalogueProducts.filter((p) => p.category === catalogueCategory);
  const CategoryIcon = getCategoryIcon(catalogueCategory);

  // Filter genuinely related blog posts based on tags/category overlap
  const relatedArticles = allBlogPosts
    .filter((post) => {
      const prodCat = product.category.toLowerCase();
      const prodTitle = product.title.toLowerCase();
      const prodId = product.id.toLowerCase();

      const tagMatch = post.tags.some((t) => {
        const tag = t.toLowerCase();
        return (
          prodCat.includes(tag) ||
          tag.includes(prodCat) ||
          prodTitle.includes(tag) ||
          tag.includes(prodTitle) ||
          prodId.includes(tag) ||
          tag.includes(prodId)
        );
      });

      const catMatch = post.category.toLowerCase().includes(prodCat);
      return tagMatch || catMatch;
    })
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background pb-12 sm:pb-16">
      {/* 1. HERO & BREADCRUMB HEADER */}
      <section className="relative overflow-hidden blueprint bg-[#061933] text-white pt-28 sm:pt-36 pb-16 lg:pb-20 border-b border-border/20">
        <div className="absolute inset-0 bg-radial-at-t from-brand-blue/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          {/* Navigation Row: Back Link + Breadcrumbs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
            {/* Standalone Back Link */}
            <Link
              to="/products"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-brand-green hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5 shrink-0" />
              <span>Back to Products</span>
            </Link>

            {/* Breadcrumb Trail */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center flex-wrap gap-1.5 text-xs text-white/70"
            >
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 shrink-0 text-white/40" />
              <Link to="/products" className="hover:text-white transition-colors">
                Products
              </Link>
              <ChevronRight className="h-3 w-3 shrink-0 text-white/40" />
              <span className="text-white/60">{product.category}</span>
              <ChevronRight className="h-3 w-3 shrink-0 text-white/40" />
              <span className="text-brand-green font-semibold truncate max-w-[180px] sm:max-w-none">
                {product.title}
              </span>
            </nav>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-6 sm:pt-8">
            {/* Left: Product Info */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Category badge */}
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-brand-green/15 border border-brand-green/30 px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-brand-green">
                <ProductIcon className="h-3.5 w-3.5" />
                <span>{product.category}</span>
              </div>

              {/* Product Title H1 */}
              <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {product.title}
              </h1>

              {/* Subtitle / Tagline */}
              {product.tagline && (
                <p className="mt-3.5 font-mono text-sm sm:text-base font-semibold text-brand-green">
                  {product.tagline}
                </p>
              )}

              {/* Description */}
              {product.description && (
                <p className="mt-3.5 text-sm sm:text-base text-white/85 leading-relaxed max-w-2xl font-sans">
                  {product.description}
                </p>
              )}

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/contact"
                  onClick={() =>
                    trackGetQuoteClick({
                      button_location: "product_detail_hero",
                      label: "Request TDS / Trial Batch",
                      product: product.title,
                    })
                  }
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl btn-brand-gradient px-6 py-3 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-blue/30 transition-all hover:scale-105"
                >
                  <FileText className="h-4 w-4" />
                  <span>Request TDS / Trial Batch</span>
                </Link>

                <a
                  href="tel:+919942354602"
                  onClick={() =>
                    trackCallClick({
                      source: "product_detail_hero",
                      phone_number: "+91 99423-54602",
                    })
                  }
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all"
                >
                  <Phone className="h-4 w-4 text-brand-green" />
                  <span>Call Technical Sales</span>
                </a>
              </div>
            </div>

            {/* Right: Showcase Image Card */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md shadow-2xl p-2 sm:p-3">
                <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-slate-900">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.alt || product.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <ImagePlaceholder label={`+ Add ${product.title} Photo`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-mono text-[0.68rem] font-bold text-brand-green uppercase tracking-wider bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                      IS & ASTM Verified
                    </span>
                    <span className="font-mono text-[0.68rem] text-white/80">
                      Chennai Manufacturing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEEP SPECIFICATIONS & PERFORMANCE METRICS */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-12">
          {/* Overview Grids */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Column: Problem Solved & Key Features (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Problem Solved Card */}
              <div className="rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-5 sm:p-6 space-y-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-blue flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-brand-green" /> What Engineering Problem It
                  Solves
                </span>
                <p className="text-sm text-foreground/90 leading-relaxed font-sans pt-1">
                  {ext.problemSolved}
                </p>
                <div className="pt-2 border-t border-brand-blue/15 text-xs text-muted-foreground">
                  <strong className="text-foreground font-semibold">Substrate Suitability: </strong>
                  <span>{ext.substrateSuitability}</span>
                </div>
                {productSolutionsMap[product.id] && (
                  <div className="pt-2 border-t border-brand-blue/15 text-xs text-muted-foreground flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <strong className="text-foreground font-semibold">
                        Related Solution Protocol:{" "}
                      </strong>
                      <Link
                        to="/solutions/$slug"
                        params={{ slug: productSolutionsMap[product.id].id }}
                        className="text-brand-blue font-semibold hover:text-brand-green underline underline-offset-2 transition-colors inline-flex items-center gap-1"
                      >
                        <span>{productSolutionsMap[product.id].title}</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Key Features / Benefits Checklist */}
              <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-xs space-y-4">
                <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-brand-green" />
                  <span>Key Performance Advantages</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-muted/20 p-3 text-xs text-foreground/90 font-sans"
                    >
                      <Check className="h-4 w-4 text-brand-green shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4-Step Application Procedure Accordion */}
              <div className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs">
                <button
                  type="button"
                  onClick={() => setIsProcOpen((v) => !v)}
                  className="flex w-full items-center justify-between p-5 text-left font-display text-base font-bold text-foreground hover:bg-muted/40 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-brand-blue" />
                    <span>Standard 4-Step Site Application Method</span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-muted-foreground transition-transform duration-300",
                      isProcOpen && "rotate-180 text-brand-blue",
                    )}
                  />
                </button>

                {isProcOpen && (
                  <div className="border-t border-border/80 bg-muted/15 p-5 space-y-3">
                    {ext.procedure.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-3 text-xs">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue text-[0.65rem] font-bold text-white font-mono">
                          {sIdx + 1}
                        </span>
                        <span className="text-foreground/90 leading-relaxed pt-0.5">{step}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Key Technical Parameters & Packaging (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Technical Specifications Table */}
              <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-xs space-y-4">
                <h2 className="font-display text-lg font-bold text-foreground">
                  Technical Specifications
                </h2>

                <div className="divide-y divide-border/60 text-xs">
                  <div className="py-2.5 flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                    <span className="text-muted-foreground font-mono uppercase text-[0.68rem]">
                      Standard
                    </span>
                    <span className="font-semibold text-foreground font-mono">
                      {product.standard}
                    </span>
                  </div>

                  <div className="py-2.5 flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                    <span className="text-muted-foreground font-mono uppercase text-[0.68rem]">
                      Dosage / Rate
                    </span>
                    <span className="font-semibold text-brand-green font-mono">
                      {product.dosage}
                    </span>
                  </div>

                  <div className="py-2.5 flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                    <span className="text-muted-foreground font-mono uppercase text-[0.68rem]">
                      Packaging
                    </span>
                    <span className="font-semibold text-foreground text-right max-w-full sm:max-w-[200px] truncate">
                      {ext.packaging}
                    </span>
                  </div>

                  {product.specs?.map((spec) => (
                    <div
                      key={spec.label}
                      className="py-2.5 flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap"
                    >
                      <span className="text-muted-foreground font-mono uppercase text-[0.68rem]">
                        {spec.label}
                      </span>
                      <span className="font-semibold text-foreground font-mono text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Applications */}
              <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-xs space-y-3">
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand-blue">
                  Typical Site Applications
                </h3>
                <ul className="space-y-2 text-xs text-foreground/80">
                  {product.applications.map((app) => (
                    <li key={app} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-green shrink-0 mt-1.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Inquiry Box */}
              <div className="rounded-2xl border border-brand-green/30 bg-gradient-to-br from-brand-green/10 via-card to-card p-5 space-y-3 text-center">
                <h3 className="font-display text-base font-bold text-foreground">
                  Need Material for Your Project?
                </h3>
                <p className="text-xs text-muted-foreground">
                  Same-day dispatch available in Chennai & across Tamil Nadu. Direct factory pricing
                  for bulk orders.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl btn-brand-gradient py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-brand-blue/20"
                >
                  <span>Get Instant Pricing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RELATED FORMULATIONS FROM FOSROC (AUTHORIZED DEALER STOCK) */}
      {relatedFormulations.length > 0 && (
        <section className="py-14 lg:py-20 border-t border-border/80 bg-muted/20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-8">
            <Reveal>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-4 border-b border-border/60">
                <div>
                  <p className="eyebrow flex items-center gap-2 text-brand-green font-mono text-xs font-bold uppercase tracking-wider">
                    <span className="h-2 w-2 rounded-full bg-brand-green" />
                    AUTHORIZED DEALER STOCK
                  </p>
                  <h2 className="mt-1.5 font-display text-2xl sm:text-3xl font-bold text-foreground">
                    Related Formulations from Fosroc
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-xl">
                    Certified dealer-stock formulations available for same-day dispatch to
                    complement your {product.title.toLowerCase()} requirements.
                  </p>
                </div>

                <span className="font-mono text-xs font-bold text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20 self-start sm:self-auto">
                  {relatedFormulations.length}{" "}
                  {relatedFormulations.length === 1 ? "Product Stocked" : "Products Stocked"}
                </span>
              </div>
            </Reveal>

            {/* Related Formulations Cards Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedFormulations.map((item) => (
                <RelatedCatalogueCard key={item.id} product={item} CategoryIcon={CategoryIcon} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      {faqs && faqs.length > 0 && (
        <section className="py-14 lg:py-20 border-t border-border/80 bg-background">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <p className="eyebrow flex items-center justify-center gap-2 text-brand-blue font-mono text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="h-3.5 w-3.5 text-brand-green" />
                TECHNICAL FAQS & FIELD GUIDELINES
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Frequently Asked Questions: {product.title}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                In-depth technical answers regarding site compatibility, storage requirements, and
                application procedures.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={faq.q}
                    className={cn(
                      "rounded-2xl border transition-all duration-200 overflow-hidden bg-card",
                      isOpen
                        ? "border-brand-blue/40 shadow-md ring-1 ring-brand-blue/15"
                        : "border-border/80 hover:border-border",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-5 text-left font-display text-sm sm:text-base font-bold text-foreground hover:text-brand-blue transition-colors cursor-pointer gap-4"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue font-mono">
                          Q{idx + 1}
                        </span>
                        <span>{faq.q}</span>
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
                          isOpen && "rotate-180 text-brand-blue",
                        )}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-border/60 bg-muted/15 p-5 pt-4 text-xs sm:text-sm text-foreground/90 leading-relaxed font-sans animate-in fade-in duration-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 5. RELATED TECHNICAL ARTICLES */}
      {relatedArticles.length > 0 && (
        <section className="py-14 lg:py-20 border-t border-border/80 bg-muted/20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-4 border-b border-border/60">
              <div>
                <p className="eyebrow flex items-center gap-2 text-brand-blue font-mono text-xs font-bold uppercase tracking-wider">
                  <BookOpen className="h-3.5 w-3.5 text-brand-green" />
                  TECHNICAL KNOWLEDGE BASE
                </p>
                <h2 className="mt-1.5 font-display text-2xl sm:text-3xl font-bold text-foreground">
                  Related Engineering Guides
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-xl">
                  Deep-dive site best practices and IS/ASTM compliance guides related to{" "}
                  {product.title.toLowerCase()}.
                </p>
              </div>

              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-green transition-colors"
              >
                <span>View All Articles</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Article Cards Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((article) => (
                <Link
                  key={article.id}
                  to="/blog/$slug"
                  params={{ slug: article.slug }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs hover:shadow-xl hover:border-brand-blue/40 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="relative aspect-16/9 w-full overflow-hidden bg-slate-900">
                      {article.image ? (
                        <img
                          src={article.image}
                          alt={article.alt || `${article.title} Technical Guide`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <ImagePlaceholder label={article.title} />
                      )}
                      <div className="absolute top-2.5 left-2.5 z-10">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/65 backdrop-blur-md px-2.5 py-0.5 font-mono text-[0.62rem] font-bold uppercase tracking-wider text-brand-green border border-white/15">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 space-y-2">
                      <div className="flex items-center gap-2 text-[0.68rem] font-mono text-muted-foreground">
                        <Calendar className="h-3 w-3 text-brand-green" />
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className="font-display text-base font-bold text-foreground group-hover:text-brand-blue transition-colors leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-xs text-foreground/80 leading-relaxed font-sans line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 pt-2 border-t border-border/60 flex items-center justify-between">
                    <span className="font-display text-xs font-bold text-brand-blue group-hover:text-brand-green transition-colors">
                      Read Technical Guide
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-brand-blue group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. DOWNLOAD / TDS ENQUIRY CARD */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-brand-blue/30 bg-linear-to-br from-brand-blue/10 via-card to-brand-green/10 p-6 sm:p-10 shadow-lg">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/15 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-brand-blue">
                  <FileText className="h-3.5 w-3.5" />
                  <span>Technical Documentation & Compliance</span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  Request Technical Data Sheet (TDS) & Method Statement
                </h2>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl font-sans">
                  Obtain full certified laboratory test reports, mix design guidelines, ASTM/IS
                  compliance certificates, and formal method statements for {product.title}.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                {/* TODO: replace with direct PDF download once TDS files are available */}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl btn-brand-gradient px-6 py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-brand-blue/25 transition-all hover:scale-105 text-center"
                >
                  <Download className="h-4 w-4" />
                  <span>Request Technical Data Sheet</span>
                </Link>

                <a
                  href="https://wa.me/919942354602?text=Hi%20Vchemics,%20please%20send%20the%20TDS%20and%20pricing%20for%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWhatsAppClick({
                      source: "product_detail_action_card",
                      product: product.title,
                      destination: "https://wa.me/919942354602",
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-green/40 bg-brand-green/10 px-5 py-3 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-green hover:bg-brand-green/20 transition-all text-center"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Instant WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM STICKY/ACCORDION MOBILE ACTION DOCK (OPTIONAL) */}
      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-4">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-xs font-bold font-display uppercase tracking-wider text-brand-blue hover:text-brand-green transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Products</span>
        </Link>
      </div>
    </div>
  );
}

// Compact Related Catalogue Card Component
function RelatedCatalogueCard({
  product,
  CategoryIcon,
}: {
  product: CatalogueProduct;
  CategoryIcon: LucideIcon;
}) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col justify-between rounded-2xl border bg-card p-5 sm:p-6 shadow-xs transition-all duration-300 hover:shadow-xl hover:border-brand-blue/40",
        product.featured ? "border-brand-green/40 ring-1 ring-brand-green/20" : "border-border/80",
      )}
    >
      {/* Top Accent Line for Featured */}
      {product.featured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green via-brand-blue to-brand-green rounded-t-2xl" />
      )}

      <div className="space-y-4 flex-1 flex flex-col">
        {/* Top Row: Square Icon Tile + Badges */}
        <div className="flex items-start justify-between gap-3">
          {/* Square Icon Tile with subtle diagonal light-gray accent */}
          <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border/80 bg-linear-to-br from-slate-100 via-white to-slate-200 shadow-xs group-hover:border-brand-blue/40 transition-colors overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-tr from-black/[0.03] to-transparent pointer-events-none" />
            <CategoryIcon className="h-6 w-6 text-brand-blue transition-transform duration-300 group-hover:scale-110" />
          </div>

          <div className="flex flex-wrap items-center justify-end gap-1.5">
            <span className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-2.5 py-0.5 rounded-full border border-brand-blue/20">
              {product.make}
            </span>
            {product.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-green/10 text-brand-green px-2 py-0.5 font-mono text-[0.65rem] font-bold uppercase tracking-wider border border-brand-green/30">
                <Sparkles className="h-3 w-3" /> Featured
              </span>
            )}
          </div>
        </div>

        {/* Product Heading */}
        <div>
          <h3 className="font-display text-lg font-bold text-foreground group-hover:text-brand-blue transition-colors leading-snug">
            {product.name}
          </h3>
        </div>

        {/* Description - Full description without line clamp */}
        {product.description && (
          <p className="text-xs text-foreground/80 leading-relaxed font-sans flex-1">
            {product.description}
          </p>
        )}

        {/* Variant Pills */}
        <div className="space-y-1.5 pt-1">
          <span className="block font-mono text-[0.62rem] font-bold uppercase tracking-wider text-muted-foreground">
            Available Pack Sizes / Variants:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {product.variants.map((v) => (
              <span
                key={v.label}
                className="inline-flex items-center rounded-lg border border-border/80 bg-muted/40 px-2 py-0.5 font-mono text-[0.68rem] font-semibold text-foreground/90"
              >
                {v.label}
              </span>
            ))}
          </div>
        </div>

        {/* Cross-brand enquiry line */}
        <p className="text-muted-foreground text-[0.72rem] italic pt-1 border-t border-border/50">
          Equivalent formulations also available across our stocked brands —{" "}
          <Link
            to="/contact"
            className="text-brand-blue font-semibold underline underline-offset-2 hover:text-brand-green transition-colors"
          >
            enquire
          </Link>{" "}
          for alternatives.
        </p>
      </div>

      {/* Card Action Footer */}
      <div className="pt-4 mt-4 border-t border-border/60 flex items-center justify-between gap-3">
        <span className="font-mono text-[0.62rem] text-muted-foreground">SKU: {product.id}</span>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background px-3 py-1.5 font-display text-[0.7rem] font-bold uppercase tracking-wider text-foreground hover:bg-muted/50 hover:text-brand-blue transition-all"
        >
          <span>Enquire / Quote</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
