import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Droplets,
  FlaskConical,
  Factory,
  Hammer,
  HardHat,
  Layers,
  Mountain,
  Ruler,
  ShieldCheck,
  Truck,
  Waves,
  Wrench,
  Zap,
  Gauge,
  Sparkles,
  CheckCircle2,
  Phone,
  MessageCircle,
  FileText,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Award,
} from "lucide-react";
import { useState } from "react";
import { HeroVideo } from "@/components/site/HeroVideo";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactSection } from "@/components/site/ContactSection";
import { SectionHeading } from "@/components/site/ui";
import { allProducts, allSolutions, allLocations, stats } from "@/components/site/data";
import { cn } from "@/lib/utils";

const title = "Construction Chemicals & Waterproofing Solutions in Chennai | V Chemics India Solutions";
const description =
  "Leading manufacturer of concrete admixtures, crystalline waterproofing, PU injection grouts, non-shrink grouts, and micro concrete in Chennai. Get instant technical quotes & same-day site dispatch.";

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What construction chemicals does V Chemics manufacture in Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "V Chemics manufactures PCE superplasticiser concrete admixtures, crystalline waterproofing chemicals, hydro-active PU injection resins, ASTM C1107 non-shrink grouts, polymer repair mortars, micro concrete, 3-part epoxy grouts, and protective PU/epoxy coatings."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can V Chemics deliver materials to sites in Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide same-day dispatch (4-8 hours) within Chennai Metro, and guaranteed 24-hour direct delivery across Coimbatore, Erode, Salem, Karur, and neighbouring districts."
      }
    },
    {
      "@type": "Question",
      "name": "Does V Chemics provide on-site concrete mix trial batches?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our chemical formulation engineers visit ready-mix batch plants and job sites to perform slump-flow audits, cube compressive tests, and optimize water-cement ratios tailored to your quarry aggregates."
      }
    },
    {
      "@type": "Question",
      "name": "Are V Chemics products compliant with IS and ASTM standards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All V Chemics products are manufactured under rigorous QA and tested to comply with IS 9103, IS 2645, ASTM C494, ASTM C1107, and EN 1504 specifications."
      }
    }
  ]
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "construction chemicals Chennai, waterproofing solutions Chennai, concrete admixture supplier Chennai, PU injection grouting Chennai, non shrink grout Chennai, micro concrete Chennai" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vchemics.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(homeFaqSchema),
      },
    ],
  }),
  component: Home,
});

const faqs = [
  {
    q: "What construction chemicals does V Chemics manufacture in Chennai?",
    a: "V Chemics manufactures PCE superplasticiser concrete admixtures, crystalline waterproofing chemicals, hydro-active PU injection resins, ASTM C1107 non-shrink grouts, polymer repair mortars, micro concrete, 3-part epoxy grouts, and protective PU/epoxy coatings.",
  },
  {
    q: "How quickly can V Chemics deliver materials to sites in Tamil Nadu?",
    a: "We provide same-day dispatch (4-8 hours) within Chennai Metro, and guaranteed 24-hour direct delivery across Coimbatore, Erode, Salem, Karur, and neighbouring districts from our regional warehouses.",
  },
  {
    q: "Does V Chemics provide on-site concrete mix trial batches?",
    a: "Yes. Our chemical formulation engineers visit ready-mix batch plants and job sites to perform slump-flow audits, cube compressive tests, and optimize water-cement ratios tailored to your quarry aggregates.",
  },
  {
    q: "Are V Chemics products compliant with IS and ASTM standards?",
    a: "All V Chemics products are manufactured under rigorous QA and tested to comply with IS 9103, IS 2645, ASTM C494, ASTM C1107, and EN 1504 specifications with official Test Certificates & TDS.",
  },
  {
    q: "What industries and professionals do you serve?",
    a: "We partner with civil contractors, infrastructure builders, ready-mix batching plants, structural consultants, industrial plant managers, and government project developers.",
  },
];

function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeSolutionTab, setActiveSolutionTab] = useState(allSolutions[0].id);

  return (
    <>
      {/* 1. HERO SECTION - SLANTED DIAGONAL CUT */}
      <section className="clip-slant-b relative flex min-h-[96vh] sm:min-h-screen items-center overflow-hidden bg-graphite-deep pb-16">
        <HeroVideo
          src="/final.mp4"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-graphite-deep/85 via-graphite-deep/60 to-graphite-deep/95"
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-24 lg:px-8">
          <Reveal className="max-w-4xl">
            {/* Clean Primary H1 */}
            <h1 className="text-3xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.75rem] drop-shadow-xl">
              Construction Chemicals &amp; Waterproofing Solutions
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg drop-shadow-md">
              Specialist manufacturer of PCE concrete admixtures, crystalline waterproofing, PU injection grouts, ASTM non-shrink grouts, and structural micro concrete engineered for maximum durability.
            </p>

            {/* Clean Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#054782] to-[#669930] px-7 py-4 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-[#054782]/40 transition-all duration-300 hover:scale-105"
              >
                <span>Get Instant Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="tel:+919942354602"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-4 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                <Phone className="h-4 w-4 text-[#669930]" />
                <span>+91 99423-54602</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. 8 CORE PRODUCT FAMILIES - ULTRA-PREMIUM ARCHITECTURAL GRID */}
      <section className="bg-background py-20 lg:py-28 relative overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-[#054782]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-48 h-96 w-96 rounded-full bg-[#669930]/5 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Formulation Families"
              title="8 Major Product Categories"
              intro="Precision-blended construction chemicals and structural waterproofing solutions ready for dispatch across Tamil Nadu."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {allProducts.map((p, idx) => {
              const CategoryIcon =
                p.id === "concrete-admixtures"
                  ? FlaskConical
                  : p.id === "waterproofing-chemicals"
                    ? Droplets
                    : p.id === "pu-injection-grouting"
                      ? Waves
                      : p.id === "non-shrink-grout"
                        ? Layers
                        : p.id === "micro-concrete"
                          ? Building2
                          : p.id === "concrete-repair"
                            ? Wrench
                            : p.id === "epoxy-grouting"
                              ? Factory
                              : ShieldCheck;

              return (
                <Reveal key={p.id} delay={idx * 50}>
                  <Link
                    to="/products"
                    hash={p.id}
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#054782]/50 hover:shadow-2xl"
                  >
                    {/* Top Gradient Hover Accent Line */}
                    <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#054782] via-[#669930] to-[#054782] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20" />

                    {/* Image Container with Zoom and Glass Overlay */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                      <img
                        src={p.image}
                        alt={p.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b274c]/90 via-[#0b274c]/30 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-85" />

                      {/* Top Left Floating System Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-white border border-white/15">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#669930] animate-pulse" />
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Top Right Category Icon Badge */}
                      <div className="absolute top-3 right-3 z-10">
                        <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/20 text-white backdrop-blur-md shadow-xs transition-all duration-300 group-hover:bg-[#669930] group-hover:text-white group-hover:scale-110">
                          <CategoryIcon className="h-4 w-4" />
                        </span>
                      </div>

                      {/* Bottom Category Label over Image */}
                      <div className="absolute bottom-2.5 left-3 right-3 z-10">
                        <span className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-[#669930] drop-shadow-sm">
                          {p.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div>
                        <h3 className="font-display text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-[#054782] leading-snug">
                          {p.title}
                        </h3>

                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                          {p.description}
                        </p>
                      </div>

                      <div className="mt-5 space-y-3">
                        {/* Standard Compliance Chip */}
                        <div className="rounded-lg bg-muted/40 px-2.5 py-1 text-[0.68rem] font-mono text-muted-foreground border border-border/60">
                          <span>Standard: </span>
                          <strong className="text-foreground font-semibold">
                            {p.standard.split("•")[0].trim()}
                          </strong>
                        </div>

                        {/* Interactive Card Action Link */}
                        <div className="pt-2 border-t border-border/60 flex items-center justify-between">
                          <span className="font-display text-xs font-bold uppercase tracking-wider text-[#054782] group-hover:text-[#669930] transition-colors inline-flex items-center gap-1.5">
                            <span>View Specs</span>
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>

                          <div className="h-1 w-6 rounded-full bg-border transition-all duration-500 group-hover:w-12 group-hover:bg-gradient-to-r group-hover:from-[#054782] group-hover:to-[#669930]" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          {/* Bottom Big CTA Button */}
          <div className="mt-14 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#054782] to-[#669930] px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-[#054782]/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span>Explore Complete 40+ Formulation Catalogue</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. WHO V CHEMICS SERVES */}
      <section className="bg-concrete py-20 lg:py-28 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Market Sectors"
              title="Who V Chemics Serves"
              intro="Custom chemical solutions and certified technical support tailored for every tier of the construction ecosystem."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Civil & Infrastructure Contractors",
                role: "High-Volume Supply & Compliance",
                desc: "IS 9103 compliant superplasticisers, crystalline waterproofing systems, and ASTM C1107 grouts with on-time direct batching plant deliveries.",
                icon: HardHat,
              },
              {
                title: "Ready-Mix Concrete (RMC) Plants",
                role: "Custom Mix Design & Slump Retention",
                desc: "PCE-based retarders and accelerators calibrated to your quarry sand and ambient heat for 3-hour open transit without cold joints.",
                icon: Truck,
              },
              {
                title: "Structural & Waterproofing Consultants",
                role: "Technical Specification & Drawings",
                desc: "Complete specification assistance, crystalline vs membrane selection, structural rehabilitation protocols, and test data sheets.",
                icon: Ruler,
              },
              {
                title: "Industrial & Manufacturing Plants",
                role: "Machinery Plinths & Chemical Bunds",
                desc: "High-strength vibration-resistant epoxy grouts for stamping presses and chemical-resistant linings for ETP/STP tanks.",
                icon: Factory,
              },
              {
                title: "Builders & Commercial Developers",
                role: "Watertight Envelope Guarantee",
                desc: "Permanent basement raft crystalline protection, podium elastomeric membranes, and high-fluidity column jacketing concrete.",
                icon: Building2,
              },
              {
                title: "Specialist Waterproofing Applicators",
                role: "Chemical Training & Same-Day Dispatch",
                desc: "Hydro-active PU leak injection resins, mechanical packers, and fast-curing polymer repair mortars stocked in drums and bags.",
                icon: Droplets,
              },
            ].map(({ title: t, role, desc, icon: Icon }, idx) => (
              <Reveal key={t} delay={idx * 60}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-7 shadow-xs transition-all duration-500 hover:-translate-y-1.5 hover:border-[#054782]/40 hover:shadow-xl">
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#054782] via-[#669930] to-[#054782] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#054782]/10 text-[#054782] group-hover:bg-[#054782] group-hover:text-white transition-all">
                      <Icon className="h-6 w-6" />
                    </span>

                    <h3 className="mt-5 font-display text-lg font-bold text-foreground group-hover:text-[#054782] transition-colors">
                      {t}
                    </h3>

                    <span className="mt-1 block font-mono text-[0.68rem] font-bold uppercase tracking-wider text-[#669930]">
                      {role}
                    </span>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-border/60">
                    <Link
                      to="/contact"
                      className="font-display text-xs font-bold uppercase text-[#054782] group-hover:text-[#669930] transition-colors inline-flex items-center gap-1"
                    >
                      Enquire For Your Project <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STATS & TRUST BAR */}
      <section className="blueprint clip-slant-both relative bg-graphite py-24">
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <p className="font-display text-4xl font-bold text-[#669930] sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-on-dark-muted font-bold">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. SOLUTIONS SECTION - HORIZONTAL EXPANDING ARCHITECTURAL PANELS */}
      <section className="bg-background py-20 lg:py-28 relative overflow-hidden border-t border-border/60">
        {/* Ambient Glows */}
        <div className="absolute top-1/3 -right-48 h-96 w-96 rounded-full bg-[#669930]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 -left-48 h-96 w-96 rounded-full bg-[#054782]/5 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10">
              <div>
                <p className="eyebrow flex items-center gap-2.5 text-[#669930]">
                  <span className="h-0.5 w-6 bg-[#669930]" aria-hidden /> Engineered Protocols
                </p>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
                  5 Structural Solution Systems
                </h2>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl">
                  Hover or select an engineering discipline below to explore chemical mechanisms, live benchmarks, and application protocols.
                </p>
              </div>

              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-foreground hover:border-[#054782] hover:text-[#054782] transition-all shrink-0"
              >
                <span>View Full Protocols (5)</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>

          {/* Interactive Horizontal Expanding Accordion Panels */}
          <div className="mt-6 flex flex-col lg:flex-row gap-3.5 min-h-[550px] lg:h-[580px] items-stretch">
            {allSolutions.map((sol, idx) => {
              const isExpanded = activeSolutionTab === sol.id;
              const SolIcon =
                sol.id === "basement-waterproofing"
                  ? Droplets
                  : sol.id === "terrace-waterproofing"
                    ? ShieldCheck
                    : sol.id === "concrete-repair"
                      ? Wrench
                      : sol.id === "structural-rehabilitation"
                        ? Building2
                        : Factory;

              return (
                <div
                  key={sol.id}
                  onMouseEnter={() => setActiveSolutionTab(sol.id)}
                  onClick={() => setActiveSolutionTab(sol.id)}
                  className={cn(
                    "group relative overflow-hidden rounded-3xl border transition-all duration-700 ease-out cursor-pointer select-none",
                    isExpanded
                      ? "lg:flex-[3.5] border-[#054782] bg-card shadow-2xl scale-[1.005]"
                      : "lg:flex-1 border-border/70 bg-card/60 hover:border-border hover:bg-card opacity-90 hover:opacity-100",
                  )}
                >
                  {/* Background Image with Dark Contrast Scrim */}
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500",
                      isExpanded
                        ? "bg-gradient-to-t from-[#0b274c] via-[#0b274c]/85 to-[#0b274c]/45"
                        : "bg-gradient-to-t from-[#0b274c]/95 via-[#0b274c]/75 to-[#0b274c]/55 group-hover:via-[#0b274c]/65",
                    )}
                  />

                  {/* Top Accent Gradient Line */}
                  <div
                    className={cn(
                      "absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#054782] via-[#669930] to-[#054782] transition-opacity duration-300 z-20",
                      isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                    )}
                  />

                  {/* Content Container */}
                  <div className="relative z-10 h-full p-5 sm:p-7 flex flex-col justify-between">
                    {/* Top Bar: Number + Icon */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-white border border-white/20 shadow-md">
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            isExpanded ? "bg-[#669930] animate-pulse" : "bg-white/40",
                          )}
                        />
                        0{idx + 1}
                      </span>

                      <span
                        className={cn(
                          "grid h-9 w-9 place-items-center rounded-2xl backdrop-blur-md transition-all duration-500",
                          isExpanded
                            ? "bg-[#669930] text-white shadow-lg shadow-[#669930]/30 scale-110"
                            : "bg-white/15 text-white group-hover:bg-white/30",
                        )}
                      >
                        <SolIcon className="h-4.5 w-4.5" />
                      </span>
                    </div>

                    {/* EXPANDED STATE CONTENT */}
                    {isExpanded ? (
                      <div className="space-y-3.5 pt-2 animate-in fade-in zoom-in-95 duration-500">
                        <div>
                          <span className="font-mono text-[0.65rem] font-bold uppercase tracking-wider text-[#669930]">
                            System Specification
                          </span>
                          <h3 className="mt-0.5 font-display text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
                            {sol.title}
                          </h3>
                          <p className="mt-1 text-xs sm:text-sm text-[#b0c7df] leading-relaxed line-clamp-2">
                            {sol.subtitle}
                          </p>
                        </div>

                        {/* Benchmark Pill */}
                        <div className="rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 backdrop-blur-md">
                          <span className="block font-mono text-[0.62rem] uppercase tracking-wider text-[#669930] font-bold">
                            Performance Benchmark
                          </span>
                          <p className="font-display text-xs sm:text-sm font-bold text-white mt-0.5">
                            {sol.metrics}
                          </p>
                        </div>

                        {/* Challenge & Solution Mini-Cards */}
                        <div className="grid sm:grid-cols-2 gap-2.5">
                          <div className="rounded-xl border border-amber-500/30 bg-black/40 p-3 backdrop-blur-xs">
                            <span className="font-mono text-[0.62rem] font-bold uppercase tracking-wider text-amber-400 block">
                              ⚠ The Challenge
                            </span>
                            <p className="mt-1 text-[0.7rem] text-white/80 leading-snug line-clamp-2 font-sans">
                              {sol.challenge}
                            </p>
                          </div>

                          <div className="rounded-xl border border-[#669930]/40 bg-[#669930]/20 p-3 backdrop-blur-xs">
                            <span className="font-mono text-[0.62rem] font-bold uppercase tracking-wider text-[#669930] block">
                              ✓ V Chemics Solution
                            </span>
                            <p className="mt-1 text-[0.7rem] text-white/90 leading-snug line-clamp-2 font-sans">
                              {sol.solutionDesc}
                            </p>
                          </div>
                        </div>

                        {/* Target Applications Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {sol.applications.slice(0, 3).map((app) => (
                            <span
                              key={app}
                              className="rounded-lg bg-black/50 border border-white/15 px-2.5 py-1 text-[0.65rem] font-medium text-white/90"
                            >
                              {app}
                            </span>
                          ))}
                        </div>

                        {/* CTA Link */}
                        <div className="pt-1">
                          <Link
                            to="/solutions"
                            hash={sol.id}
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#054782] to-[#669930] px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-md hover:scale-105 transition-all"
                          >
                            <span>Inspect Full Methodology</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    ) : (
                      /* COLLAPSED STATE (PERFECTLY CENTERED VERTICAL TITLE WITH NO OVERLAP) */
                      <div className="flex flex-col justify-between flex-1 py-4 items-center">
                        <div className="my-auto flex items-center justify-center">
                          <h3 className="lg:[writing-mode:vertical-rl] lg:rotate-180 font-display text-sm lg:text-base font-bold text-white tracking-wide whitespace-nowrap">
                            {sol.title}
                          </h3>
                        </div>

                        <div className="pt-3 border-t border-white/10 w-full text-center">
                          <span className="font-mono text-[0.62rem] font-bold uppercase tracking-wider text-[#669930] block truncate">
                            {sol.metrics.split("•")[0].trim()}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* 7. FREQUENTLY ASKED QUESTIONS - SIMPLE & CLEAN */}
      <section className="bg-background py-16 lg:py-24 relative overflow-hidden border-t border-border/60">
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="pb-6">
              <div>
                <p className="eyebrow flex items-center gap-2.5 text-[#669930]">
                  <span className="h-0.5 w-6 bg-[#669930]" aria-hidden /> Technical &amp; Commercial FAQ
                </p>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
                  Frequently Asked Questions
                </h2>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl">
                  Quick answers on chemical standards, dispatch timelines, and on-site trial mixes.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Clean Centered Accordion Stack */}
          <div className="mt-6 max-w-4xl mx-auto space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-all duration-300",
                    isOpen
                      ? "border-[#054782] bg-card shadow-md ring-1 ring-[#054782]/20"
                      : "border-border/80 bg-card hover:border-border hover:bg-muted/30",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left transition-colors cursor-pointer gap-4"
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className={cn(
                          "font-mono text-xs font-bold transition-colors shrink-0",
                          isOpen ? "text-[#669930]" : "text-muted-foreground",
                        )}
                      >
                        0{index + 1}.
                      </span>

                      <h3
                        className={cn(
                          "font-display text-sm sm:text-base font-bold transition-colors leading-snug",
                          isOpen ? "text-[#054782] dark:text-blue-400" : "text-foreground",
                        )}
                      >
                        {faq.q}
                      </h3>
                    </div>

                    <span
                      className={cn(
                        "grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-border/80 bg-muted/30 text-muted-foreground transition-transform duration-300",
                        isOpen && "rotate-90 bg-[#054782]/10 text-[#054782] border-[#054782]/30",
                      )}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                        <p className="text-xs sm:text-sm leading-relaxed text-foreground/90 font-sans">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CASE STUDIES & TESTIMONIALS */}
      <Testimonials />

      {/* 9. CONTACT SECTION */}
      <ContactSection />
    </>
  );
}
