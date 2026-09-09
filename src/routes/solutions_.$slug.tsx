import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  Droplets,
  ShieldCheck,
  Wrench,
  Building2,
  Factory,
  Paintbrush,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Phone,
  FileText,
  CheckCircle2,
  Camera,
  Layers,
  Sparkles,
  Check,
  Info,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { allSolutions, type SolutionItem } from "@/components/site/data";
import { cn } from "@/lib/utils";

const solutionIcons: Record<string, LucideIcon> = {
  "basement-waterproofing": Droplets,
  "terrace-waterproofing": ShieldCheck,
  "concrete-repair": Wrench,
  "structural-rehabilitation": Building2,
  "industrial-flooring": Factory,
  painting: Paintbrush,
};

const solutionMetaDescriptions: Record<string, string> = {
  "basement-waterproofing":
    "Dual-barrier crystalline and elastomeric envelope resisting >5 bar hydrostatic pressure in deep basement rafts, lift pits, retaining walls, and cold joints.",
  "terrace-waterproofing":
    "Seamless PU and polymer matrix waterproofing with >400% elongation and UV topcoats engineered to bridge dynamic thermal cracks and withstand water ponding.",
  "concrete-repair":
    "Step-by-step structural concrete restoration protocol: crack routing, zinc-rich rebar passivation, and polymer-modified mortar repair recovering >50 MPa.",
  "structural-rehabilitation":
    "Engineered RCC column jacketing and section enlargement with self-compacting micro concrete and epoxy doweling achieving >65 MPa compressive strength.",
  "industrial-flooring":
    "Heavy-duty epoxy screeds, metallic dry-shake floor hardeners, and chemical-resistant polyurethane toppings built for high-abrasion forklift and factory traffic.",
  painting:
    "Industrial protective coatings and durable architectural painting systems matched to exposure conditions for structural steel, tanks, and building envelopes.",
};

export const Route = createFileRoute("/solutions_/$slug")({
  loader: ({ params }) => {
    const solution = allSolutions.find((s) => s.id === params.slug || s.slug === params.slug);
    if (!solution) {
      throw notFound();
    }
    return { solution };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.solution) return {};
    const { solution } = loaderData;
    const title = `${solution.title} Solutions & Methodology | Vchemics`;
    const description =
      solutionMetaDescriptions[solution.id] ||
      solutionMetaDescriptions[solution.slug] ||
      `${solution.subtitle} Engineered structural application protocols by Vchemics Chennai.`;
    const url = `https://www.vchemicsindia.com/solutions/${solution.id}`;
    const ogImage =
      typeof solution.image === "string" && solution.image.startsWith("http")
        ? solution.image
        : "https://www.vchemicsindia.com/image.png";

    const solutionSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: solution.title,
      description: description,
      provider: {
        "@type": "Organization",
        name: "Vchemics India Solutions",
        url: "https://www.vchemicsindia.com",
      },
      areaServed: {
        "@type": "State",
        name: "Tamil Nadu",
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
          name: "Solutions",
          item: "https://www.vchemicsindia.com/solutions",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: solution.title,
          item: url,
        },
      ],
    };

    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content: `${solution.title}, structural solutions Chennai, waterproofing chemicals, concrete repair Tamil Nadu, Vchemics`,
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
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(solutionSchema),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(breadcrumbSchema),
        },
      ],
    };
  },
  component: SolutionDetailPage,
});

function SolutionDetailPage() {
  const { solution } = Route.useLoaderData();
  const SolIcon = solutionIcons[solution.id] || ShieldCheck;
  const gallery = solution.workGallery;
  const hasGallery = Boolean(gallery && gallery.length > 0);

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
              to="/solutions"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-brand-green hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5 shrink-0" />
              <span>Back to Solutions</span>
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
              <Link to="/solutions" className="hover:text-white transition-colors">
                Solutions
              </Link>
              <ChevronRight className="h-3 w-3 shrink-0 text-white/40" />
              <span className="text-brand-green font-semibold truncate max-w-[180px] sm:max-w-none">
                {solution.title}
              </span>
            </nav>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-6 sm:pt-8">
            {/* Left: Solution Info */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Category badge */}
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-brand-green/15 border border-brand-green/30 px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-brand-green">
                <SolIcon className="h-3.5 w-3.5" />
                <span>Engineered Solution System</span>
              </div>

              {/* Solution Title H1 */}
              <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {solution.title}
              </h1>

              {/* Subtitle / Tagline */}
              {solution.subtitle && (
                <p className="mt-3.5 font-mono text-sm sm:text-base font-semibold text-brand-green">
                  {solution.subtitle}
                </p>
              )}

              {/* Performance Metric Pill */}
              <div className="mt-4 inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md self-start">
                <Sparkles className="h-4 w-4 text-brand-green" />
                <span className="font-mono text-xs sm:text-sm font-bold text-white">
                  {solution.metrics}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl btn-brand-gradient px-6 py-3 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-blue/30 transition-all hover:scale-105"
                >
                  <FileText className="h-4 w-4" />
                  <span>Request Site Consultation</span>
                </Link>

                <a
                  href="tel:+919942354602"
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
                  {solution.image ? (
                    <img
                      src={solution.image}
                      alt={
                        solution.alt ||
                        `${solution.title} - Certified Engineering Application Protocol`
                      }
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <ImagePlaceholder label={`+ Add ${solution.title} Photo`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-mono text-[0.68rem] font-bold text-brand-green uppercase tracking-wider bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                      Certified Protocol
                    </span>
                    <span className="font-mono text-[0.68rem] text-white/80">
                      IS & ASTM Compliant
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHALLENGE VS SOLUTION STRATEGY & METHODOLOGY */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-12">
          {/* Challenge & Solution Cards */}
          <Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Challenge Card */}
              <div className="rounded-2xl sm:rounded-3xl border border-amber-500/30 bg-amber-500/5 p-5 sm:p-8 space-y-3">
                <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  <span className="grid h-6 w-6 place-items-center rounded-lg bg-amber-500/20 text-xs">
                    ⚠
                  </span>
                  <span>The Structural Challenge</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  Sub-surface Degradation &amp; Ingress Risks
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                  {solution.challenge}
                </p>
              </div>

              {/* Solution Card */}
              <div className="rounded-2xl sm:rounded-3xl border border-brand-blue/30 bg-brand-blue/5 p-5 sm:p-8 space-y-3">
                <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-brand-blue">
                  <span className="grid h-6 w-6 place-items-center rounded-lg bg-brand-blue/20 text-xs text-brand-blue">
                    ✓
                  </span>
                  <span>Vchemics Chemical Protocol</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  Engineered Multi-Barrier Protection
                </h3>
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed font-sans">
                  {solution.solutionDesc}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Key Formulations & Application Scopes */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Key Chemical Formulations */}
            <div className="rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-navy text-white">
                  <Layers className="h-4.5 w-4.5" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  Specified Chemical Formulations
                </h3>
              </div>
              <ul className="space-y-2.5">
                {solution.keyProducts.map((prod) => (
                  <li
                    key={prod}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-green mt-0.5" />
                    <span>{prod}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Structural Applications */}
            <div className="rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-navy text-white">
                  <Building2 className="h-4.5 w-4.5" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  Engineered Application Scope
                </h3>
              </div>
              <ul className="space-y-2.5">
                {solution.applications.map((app) => (
                  <li
                    key={app}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground"
                  >
                    <Check className="h-4 w-4 shrink-0 text-brand-blue mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4-Stage Execution Methodology */}
          <div className="rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-6 sm:p-8 space-y-6">
            <div>
              <p className="eyebrow flex items-center gap-2 text-brand-green">
                <span className="h-0.5 w-6 bg-brand-green" aria-hidden /> Standard Operating
                Protocol
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold text-foreground">
                4-Stage Application Methodology
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {solution.stages.map((stg, idx) => (
                <div
                  key={stg.name}
                  className="rounded-2xl border border-border/70 bg-muted/20 p-5 space-y-2 relative"
                >
                  <span className="font-mono text-xs font-bold text-brand-green bg-brand-green/10 border border-brand-green/20 px-2.5 py-0.5 rounded-full inline-block">
                    Stage 0{idx + 1}
                  </span>
                  <h4 className="font-display text-sm font-bold text-foreground">{stg.name}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                    {stg.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW WE WORKED - SITE EXECUTION GALLERY */}
      <section className="bg-muted/15 py-16 sm:py-24 border-t border-b border-border/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-12">
          {/* Section Header */}
          <Reveal>
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow flex items-center gap-2 text-brand-green">
                  <span className="h-0.5 w-6 bg-brand-green" aria-hidden />{" "}
                  {solution.workGalleryType === "diagrams"
                    ? "Technical Execution Workflow"
                    : "Site Execution Gallery"}
                </p>

                {solution.workGalleryType === "diagrams" && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 px-3 py-1 font-mono text-xs font-bold text-brand-blue uppercase tracking-wider">
                    <Info className="h-3.5 w-3.5 text-brand-blue" />
                    <span>Illustrative Technical Diagrams</span>
                  </span>
                )}
              </div>

              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
                How We Worked
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                {solution.workGalleryType === "diagrams"
                  ? "Step-by-step technical engineering diagrams illustrating the diagnostic assessment, mechanical routing, and restorative curing methodology."
                  : "Step-by-step photographic breakdown of real-world site execution, obstacles managed, and progressive structural sealing."}
              </p>
            </div>
          </Reveal>

          {/* Gallery Content: Real Steps OR Placeholder Card */}
          {hasGallery && gallery ? (
            <div className="space-y-12 sm:space-y-16">
              {gallery.map((stepItem, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <Reveal key={stepItem.step} delay={idx * 80}>
                    <div
                      className={cn(
                        "flex flex-col gap-8 lg:gap-12 items-center",
                        isEven ? "lg:flex-row" : "lg:flex-row-reverse",
                      )}
                    >
                      {/* Photo Container (55% width on desktop) */}
                      <div className="w-full lg:w-7/12">
                        <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-2 sm:p-3 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-brand-blue/50">
                          <div className="relative aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl bg-slate-900">
                            <img
                              src={stepItem.image}
                              alt={stepItem.alt}
                              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                              loading="lazy"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                            {/* Floating Step Badge in Image */}
                            <div className="absolute top-3 left-3">
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md px-3 py-1 font-mono text-[0.7rem] font-bold text-white border border-white/20">
                                <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
                                Step 0{stepItem.step}
                              </span>
                            </div>

                            {/* Alt caption in bottom bar */}
                            <div className="absolute bottom-3 left-3 right-3">
                              <p className="font-mono text-[0.68rem] text-white/80 truncate">
                                {stepItem.alt}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Text / Context Container (45% width on desktop) */}
                      <div className="w-full lg:w-5/12 space-y-4">
                        <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/15 border border-brand-green/30 px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-brand-green">
                          <span>
                            Step 0{stepItem.step} of 0{gallery.length}
                          </span>
                        </div>

                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-snug">
                          {stepItem.title}
                        </h3>

                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                          {stepItem.caption}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          ) : (
            /* Placeholder Card when workGallery is empty or undefined */
            <Reveal>
              <div className="rounded-3xl border-2 border-dashed border-border/80 bg-card p-10 sm:p-14 text-center max-w-2xl mx-auto flex flex-col items-center justify-center space-y-4 shadow-sm">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 shadow-xs">
                  <Camera className="h-8 w-8" />
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 font-mono text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                  Photo Documentation In Progress
                </span>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  Site execution photos for this solution coming soon
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed font-sans">
                  Our field engineers are currently compiling high-resolution on-site progress
                  imagery for {solution.title.toLowerCase()}. Full step-by-step case documentation
                  will be published here shortly.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* 4. OTHER SOLUTION PROTOCOLS DIRECT CROSS-LINKS */}
      <section className="pt-14 sm:pt-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-4 border-b border-border/60">
            <div>
              <p className="eyebrow flex items-center gap-2 text-brand-blue font-mono text-xs font-bold uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-brand-green" />
                EXPLORE MORE DISCIPLINES
              </p>
              <h2 className="mt-1.5 font-display text-xl sm:text-2xl font-bold text-foreground">
                Other Engineered Solution Protocols
              </h2>
            </div>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-green transition-colors"
            >
              <span>View All Protocols</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {allSolutions
              .filter((s) => s.id !== solution.id)
              .map((otherSol) => {
                const OtherIcon =
                  solutionIcons[otherSol.id as keyof typeof solutionIcons] || ShieldCheck;
                return (
                  <Link
                    key={otherSol.id}
                    to="/solutions/$slug"
                    params={{ slug: otherSol.id }}
                    className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 shadow-xs hover:border-brand-blue/40 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="space-y-2.5">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue border border-brand-blue/20 group-hover:scale-105 transition-transform">
                        <OtherIcon className="h-5 w-5" />
                      </div>
                      <p className="font-display text-sm font-bold text-foreground group-hover:text-brand-blue transition-colors line-clamp-1">
                        {otherSol.title}
                      </p>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed font-sans">
                        {otherSol.subtitle}
                      </p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-border/60 flex items-center justify-between text-xs font-bold text-brand-blue font-display uppercase tracking-wider">
                      <span>View Protocol</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM ACTION & TECHNICAL ADVISORY CTA */}
      <section className="pt-14 sm:pt-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="rounded-3xl border border-border/80 bg-graphite-deep text-white p-6 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-brand-green/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="space-y-3 max-w-2xl">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-green">
                  Ready to Protect Your Structure?
                </span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Schedule an On-Site Diagnostic Assessment
                </h3>
                <p className="text-xs sm:text-sm sm:text-base text-white/80 leading-relaxed font-sans">
                  Our chemical application specialists visit your project site in Chennai or Tamil
                  Nadu to evaluate substrate conditions, inspect water ingress sources, and prepare
                  custom IS-compliant chemical specifications.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 shrink-0 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl btn-brand-gradient px-6 py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xl hover:scale-105 transition-all"
                >
                  <span>Request Site Audit</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/solutions"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all"
                >
                  <span>All Solutions</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
