import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Droplets,
  FlaskConical,
  Factory,
  HardHat,
  Layers,
  Mountain,
  ShieldCheck,
  Truck,
  Waves,
  Wrench,
  Paintbrush,
  Ruler,
  Zap,
  Gauge,
  Sparkles,
  CheckCircle2,
  Phone,
  MessageCircle,
  FileText,
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
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { allProducts, allSolutions, allLocations, stats } from "@/components/site/data";
import { cn } from "@/lib/utils";
import { trackGetQuoteClick, trackCallClick } from "@/lib/analytics";

const title = "Construction Chemical Distributors, Tamil Nadu | Vchemics";
const description =
  "Premium construction chemicals & waterproofing products. Concrete admixtures, PU grouting agents, sealers. IS/ASTM certified. Fast delivery across India.";

const categoryIcons: Record<string, typeof FlaskConical> = {
  "concrete-admixtures": FlaskConical,
  "waterproofing-chemicals": Droplets,
  "pu-injection-grouting": Waves,
  "non-shrink-grout": Layers,
  "micro-concrete": Building2,
  "concrete-repair": Wrench,
  "epoxy-grouting": Factory,
  "protective-coatings": ShieldCheck,
};

const faqs = [
  {
    q: "What construction chemicals does Vchemics manufacture and distribute in Tamil Nadu?",
    a: "Vchemics manufactures and distributes PCE superplasticiser concrete admixtures, crystalline waterproofing chemicals, hydro-active PU injection resins, ASTM C1107 non-shrink grouts, polymer repair mortars, micro concrete, 3-part epoxy grouts, and protective PU/epoxy coatings across Chennai, Coimbatore, Erode, and Krishnagiri.",
  },
  {
    q: "How quickly can Vchemics deliver materials to sites in Tamil Nadu?",
    a: "We provide same-day dispatch (4-8 hours) within Chennai Metro, and guaranteed 24-hour direct delivery across Coimbatore, Erode, Krishnagiri, and neighbouring districts from our regional warehouses.",
  },
  {
    q: "Does Vchemics provide on-site concrete mix trial batches?",
    a: "Yes. Our chemical formulation engineers visit ready-mix batch plants and job sites to perform slump-flow audits, cube compressive tests, and optimize water-cement ratios tailored to your quarry aggregates.",
  },
  {
    q: "Are Vchemics products compliant with IS and ASTM standards?",
    a: "All Vchemics products are manufactured under rigorous QA and tested to comply with IS 9103, IS 2645, ASTM C494, ASTM C1107, and EN 1504 specifications with official Test Certificates & TDS.",
  },
  {
    q: "What industries and professionals do you serve?",
    a: "We partner with civil contractors, infrastructure builders, ready-mix batching plants, structural consultants, industrial plant managers, and government project developers.",
  },
  {
    q: "Why is waterproofing necessary for my home or building?",
    a: "Without waterproofing, water seeps into concrete and masonry over time, causing dampness, peeling paint, rusting of internal steel reinforcement, and cracks. Waterproofing creates a barrier that keeps structures dry, extends their lifespan, and prevents costly repairs later.",
  },
  {
    q: "What happens if I skip waterproofing my terrace or basement?",
    a: "Untreated terraces and basements are prone to water leakage during monsoons, leading to seepage marks on ceilings, mold growth, and gradual weakening of the concrete structure. Repair costs after damage occurs are typically far higher than the original waterproofing investment.",
  },
  {
    q: "How long does waterproofing usually last?",
    a: "A properly applied waterproofing system typically lasts 10-15 years depending on the product used, surface preparation, and exposure conditions. Regular inspection and minor maintenance can help it last even longer.",
  },
  {
    q: "Can waterproofing be done on an old building, or only new construction?",
    a: "Waterproofing can be applied to both new and existing structures. For older buildings, our team first assesses the surface condition and existing damage, then recommends the right repair and waterproofing system to restore protection.",
  },
  {
    q: "What is the difference between waterproofing and simply painting a wall?",
    a: "Paint is primarily decorative and offers minimal protection against water penetration. Waterproofing chemicals are specifically engineered to block water at a molecular or membrane level, actively resisting moisture ingress rather than just covering the surface.",
  },
];

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "construction chemical distributors Tamil Nadu, construction chemicals Chennai, waterproofing chemicals Coimbatore, concrete admixtures Erode, Krishnagiri construction chemicals, PU injection grouting, non shrink grout, micro concrete",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.vchemicsindia.com/" },
      { property: "og:image", content: "https://www.vchemicsindia.com/image.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.vchemicsindia.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(homeFaqSchema),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeSolutionTab, setActiveSolutionTab] = useState(
    allSolutions[0]?.id ?? "basement-waterproofing",
  );

  return (
    <>
      {/* 1. HERO SECTION - SLANTED DIAGONAL CUT */}
      <section className="clip-slant-b relative flex min-h-[96vh] sm:min-h-screen items-center overflow-hidden bg-graphite-deep pb-16">
        <HeroVideo src="/final.mp4" className="absolute inset-0 h-full w-full object-cover" />
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
              Specialist manufacturer of PCE concrete admixtures, crystalline waterproofing, PU
              injection grouts, ASTM non-shrink grouts, and structural micro concrete engineered for
              maximum durability.
            </p>

            {/* Clean Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                to="/contact"
                onClick={() =>
                  trackGetQuoteClick({
                    button_location: "home_hero",
                    label: "Get Instant Quote",
                    source: "/",
                  })
                }
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl btn-brand-gradient px-7 py-4 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-brand-blue/40 transition-all duration-300 hover:scale-105"
              >
                <span>Get Instant Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="tel:+919942354602"
                onClick={() =>
                  trackCallClick({
                    source: "home_hero",
                    phone_number: "+91 99423-54602",
                  })
                }
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-4 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                <Phone className="h-4 w-4 text-brand-green" />
                <span className="font-phone">+91 99423-54602</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. 8 CORE PRODUCT FAMILIES - ULTRA-PREMIUM ARCHITECTURAL GRID */}
      <section className="bg-background py-20 lg:py-28 relative overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-48 h-96 w-96 rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Formulation Families"
              title="Our Major Product Categories"
              intro="Precision-blended construction chemicals and structural waterproofing solutions ready for dispatch across Tamil Nadu."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {allProducts.map((p, idx) => {
              const CategoryIcon = categoryIcons[p.id] ?? ShieldCheck;

              return (
                <Reveal key={p.id} delay={idx * 50} className="h-full">
                  <Link
                    to="/products"
                    hash={p.id}
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-blue/50 hover:shadow-2xl"
                  >
                    {/* Top Gradient Hover Accent Line */}
                    <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20" />

                    {/* Image Slot */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/40 rounded-t-3xl">
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.alt || p.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <ImagePlaceholder label={`+ Add ${p.title} Photo`} />
                      )}

                      {/* Ambient Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                      {/* Top Left Floating System Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-white border border-white/15">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Top Right Category Icon Badge */}
                      <div className="absolute top-3 right-3 z-10">
                        <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/20 text-white backdrop-blur-md shadow-xs transition-all duration-300 group-hover:bg-brand-green group-hover:text-white group-hover:scale-110">
                          <CategoryIcon className="h-4 w-4" />
                        </span>
                      </div>

                      {/* Bottom Category Label over Image */}
                      <div className="absolute bottom-2.5 left-3 right-3 z-10">
                        <span className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-brand-green drop-shadow-md">
                          {p.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div className="flex-1 flex flex-col">
                        <h3 className="font-display text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-brand-blue leading-snug">
                          {p.title}
                        </h3>

                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground flex-1">
                          {p.description}
                        </p>
                      </div>

                      <div className="mt-5 space-y-3 pt-2">
                        {/* Standard Compliance Chip */}
                        <div className="rounded-lg bg-muted/40 px-2.5 py-1 text-[0.68rem] font-mono text-muted-foreground border border-border/60 min-h-[1.75rem] flex items-center">
                          <span className="truncate">
                            Standard:{" "}
                            <strong className="text-foreground font-semibold">
                              {p.standard.split("•")[0]?.trim() ?? p.standard}
                            </strong>
                          </span>
                        </div>

                        {/* Interactive Card Action Link */}
                        <div className="pt-2 border-t border-border/60 flex items-center justify-between">
                          <span className="font-display text-xs font-bold uppercase tracking-wider text-brand-blue group-hover:text-brand-green transition-colors inline-flex items-center gap-1.5">
                            <span>View Specs</span>
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>

                          <div className="h-1 w-6 rounded-full bg-border transition-all duration-500 group-hover:w-12 group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-green" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          {/* Bottom Big CTA Buttons */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 rounded-2xl btn-brand-gradient px-7 py-4 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-brand-blue/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span>Explore All 8 Product Families</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/products"
              hash="dealer-stock"
              className="inline-flex items-center gap-3 rounded-2xl border border-brand-blue/30 bg-card px-7 py-4 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-blue shadow-md transition-all duration-300 hover:scale-105 hover:bg-brand-blue/5 hover:border-brand-blue"
            >
              <span>Explore Certified Dealer Stock (100+)</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. WHO VCHEMICS SERVES - ALTERNATING ZIG-ZAG RECTANGULAR BOXES */}
      <section className="bg-concrete py-20 lg:py-28 border-t border-border/60 relative overflow-hidden">
        {/* Subtle Decorative Background Accents */}
        <div className="absolute top-1/4 -right-40 h-80 w-80 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -left-40 h-80 w-80 rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Market Sectors"
              title="Who Vchemics Serves"
              intro="Custom chemical solutions and certified technical support tailored for every tier of the construction ecosystem."
            />
          </Reveal>

          {/* Zig-Zag Stack of Rectangular Boxes */}
          <div className="mt-14 space-y-6 sm:space-y-8">
            {[
              {
                step: "01",
                num: "1",
                title: "Civil & Infrastructure Contractors",
                role: "High-Volume Supply & Compliance",
                desc: "IS 9103 compliant superplasticisers, crystalline waterproofing systems, and ASTM C1107 grouts with on-time direct batching plant deliveries.",
                highlights: ["IS 9103 Compliance", "Direct Batching Supply", "On-Site Batch QA/QC"],
                icon: HardHat,
                theme: "blue" as const,
              },
              {
                step: "02",
                num: "2",
                title: "Ready-Mix Concrete (RMC) Plants",
                role: "Custom Mix Design & Slump Retention",
                desc: "PCE-based retarders and accelerators calibrated to your quarry sand and ambient heat for 3-hour open transit without cold joints.",
                highlights: [
                  "3-Hour Slump Retention",
                  "Quarry Sand Calibration",
                  "PCE Formulations",
                ],
                icon: Truck,
                theme: "green" as const,
              },
              {
                step: "03",
                num: "3",
                title: "Structural & Waterproofing Consultants",
                role: "Technical Specification & Drawings",
                desc: "Complete specification assistance, crystalline vs membrane selection, structural rehabilitation protocols, and test data sheets.",
                highlights: ["AutoCAD / BIM Specs", "Method Statements", "NABL Lab Test Sheets"],
                icon: Ruler,
                theme: "blue" as const,
              },
              {
                step: "04",
                num: "4",
                title: "Industrial & Manufacturing Plants",
                role: "Machinery Plinths & Chemical Bunds",
                desc: "High-strength vibration-resistant epoxy grouts for stamping presses and chemical-resistant linings for ETP/STP tanks.",
                highlights: [
                  "High Early Strength",
                  "ETP/STP Chemical Linings",
                  "Vibration Damping",
                ],
                icon: Factory,
                theme: "green" as const,
              },
              {
                step: "05",
                num: "5",
                title: "Builders & Commercial Developers",
                role: "Watertight Envelope Guarantee",
                desc: "Permanent basement raft crystalline protection, podium elastomeric membranes, and high-fluidity column jacketing concrete.",
                highlights: [
                  "Basement Raft Protection",
                  "Podium Elastomeric Coats",
                  "Micro Concrete Jacketing",
                ],
                icon: Building2,
                theme: "blue" as const,
              },
              {
                step: "06",
                num: "6",
                title: "Specialist Waterproofing Applicators",
                role: "Chemical Training & Same-Day Dispatch",
                desc: "Hydro-active PU leak injection resins, mechanical packers, and fast-curing polymer repair mortars stocked in drums and bags.",
                highlights: [
                  "Hydro-Active PU Resins",
                  "Mechanical Packers Stocked",
                  "Same-Day Dispatch",
                ],
                icon: Droplets,
                theme: "green" as const,
              },
            ].map(
              ({ step, num: _num, title: t, role, desc, highlights, icon: Icon, theme }, idx) => {
                const isEven = idx % 2 === 1; // 02, 04, 06 are reversed for zig-zag flow

                return (
                  <Reveal key={t} delay={idx * 60}>
                    <div
                      className={cn(
                        "group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-white dark:bg-card p-6 sm:p-8 lg:p-10 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl",
                        theme === "blue"
                          ? "hover:border-brand-blue/50"
                          : "hover:border-brand-green/50",
                      )}
                    >
                      {/* Top Accent Gradient Bar on Hover */}
                      <div
                        className={cn(
                          "absolute inset-x-0 top-0 h-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                          theme === "blue"
                            ? "bg-gradient-to-r from-brand-blue via-brand-navy to-brand-blue"
                            : "bg-gradient-to-r from-brand-green via-brand-navy to-brand-green",
                        )}
                      />

                      {/* Subtle Large Watermark Number */}
                      <div
                        aria-hidden="true"
                        className={cn(
                          "pointer-events-none select-none absolute -bottom-6 font-display font-black text-8xl sm:text-9xl tracking-tighter opacity-5 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-10",
                          isEven
                            ? "left-6 sm:left-10 text-brand-green"
                            : "right-6 sm:right-10 text-brand-blue",
                        )}
                      >
                        {step}
                      </div>

                      {/* Zig-Zag Content Flex: Desktop alternates left & right */}
                      <div
                        className={cn(
                          "relative z-10 flex flex-col gap-6 lg:gap-10 lg:items-center",
                          isEven ? "lg:flex-row-reverse" : "lg:flex-row",
                        )}
                      >
                        {/* Anchor Column (Step #, Icon, Title, Role) */}
                        <div className="flex-1 lg:max-w-[46%] space-y-4">
                          <div className="flex items-center gap-3">
                            {/* Step Number Badge */}
                            <span
                              className={cn(
                                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider shadow-xs",
                                theme === "blue"
                                  ? "bg-brand-blue text-white"
                                  : "bg-brand-green text-white",
                              )}
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                              Sector {step}
                            </span>

                            {/* Role / Focus Subtitle Tag */}
                            <span className="font-mono text-[0.72rem] font-bold uppercase tracking-wider text-muted-foreground">
                              {role}
                            </span>
                          </div>

                          {/* Title with Icon */}
                          <div className="flex items-start gap-3.5 sm:gap-4 pt-1">
                            <div
                              className={cn(
                                "grid h-12 w-12 sm:h-14 sm:w-14 shrink-0 place-items-center rounded-2xl transition-all duration-300 shadow-xs",
                                theme === "blue"
                                  ? "bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white"
                                  : "bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white",
                              )}
                            >
                              <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                            </div>

                            <div>
                              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground leading-snug group-hover:text-brand-blue transition-colors">
                                {t}
                              </h3>
                            </div>
                          </div>
                        </div>

                        {/* Middle Vertical Divider (Desktop Only) */}
                        <div
                          aria-hidden="true"
                          className="hidden lg:block h-28 w-[1px] bg-gradient-to-b from-border/20 via-border to-border/20 shrink-0"
                        />

                        {/* Details Column (Description, Key Highlight Chips, Enquire Action CTA) */}
                        <div className="flex-1 space-y-4">
                          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                            {desc}
                          </p>

                          {/* Highlight Feature Chips */}
                          <div className="flex flex-wrap items-center gap-2 pt-1">
                            {highlights.map((h) => (
                              <span
                                key={h}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-concrete px-2.5 py-1 font-mono text-[0.72rem] font-medium text-foreground/80"
                              >
                                <span
                                  className={cn(
                                    "h-1.5 w-1.5 rounded-full",
                                    theme === "blue" ? "bg-brand-blue" : "bg-brand-green",
                                  )}
                                />
                                {h}
                              </span>
                            ))}
                          </div>

                          {/* Interactive CTA Link */}
                          <div className="pt-2">
                            <Link
                              to="/contact"
                              className={cn(
                                "group/link inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-xs",
                                theme === "blue"
                                  ? "bg-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white"
                                  : "bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-white",
                              )}
                            >
                              <span>Enquire For Your Project</span>
                              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              },
            )}
          </div>

          {/* Bottom Consultation Assistance Banner */}
          <Reveal delay={400}>
            <div className="mt-12 rounded-2xl sm:rounded-3xl border border-border/80 bg-white dark:bg-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs text-center sm:text-left">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-navy text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-foreground">
                    Need Custom Mix Specifications or On-Site Technical Trials?
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    Our technical engineers visit your batching plant or site with certified lab
                    test reports.
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 shrink-0 rounded-xl btn-brand-gradient px-6 py-3 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:scale-105"
              >
                <span>Request Site Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. STATS & TRUST BAR */}
      <section className="blueprint clip-slant-both relative bg-graphite py-24">
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <p className="font-display text-4xl font-bold text-brand-green sm:text-6xl">
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
        <div className="absolute top-1/3 -right-48 h-96 w-96 rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 -left-48 h-96 w-96 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10">
              <div>
                <p className="eyebrow flex items-center gap-2.5 text-brand-green">
                  <span className="h-0.5 w-6 bg-brand-green" aria-hidden /> Engineered Protocols
                </p>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
                  6 Engineered Solution Systems
                </h2>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl">
                  Hover or select an engineering discipline below to explore chemical mechanisms,
                  live benchmarks, and application protocols.
                </p>
              </div>

              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-foreground hover:border-brand-blue hover:text-brand-blue transition-all shrink-0"
              >
                <span>View Full Protocols ({allSolutions.length})</span>
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
                        : sol.id === "industrial-flooring"
                          ? Factory
                          : Paintbrush;

              return (
                <div
                  key={sol.id}
                  onMouseEnter={() => setActiveSolutionTab(sol.id)}
                  onClick={() => setActiveSolutionTab(sol.id)}
                  className={cn(
                    "group relative overflow-hidden rounded-3xl border transition-all duration-700 ease-out cursor-pointer select-none",
                    isExpanded
                      ? "lg:flex-[3.5] border-brand-blue bg-[#0b274c] shadow-2xl scale-[1.005]"
                      : "lg:flex-1 border-border/70 bg-[#0b274c]/90 hover:border-brand-blue/50 hover:bg-[#0b274c] opacity-90 hover:opacity-100",
                  )}
                >
                  {/* Real Solution Background Photography */}
                  {sol.image && (
                    <img
                      src={sol.image}
                      alt={`${sol.title} - Site Execution & Application`}
                      loading="lazy"
                      decoding="async"
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out",
                        isExpanded
                          ? "scale-105 opacity-30 filter contrast-125"
                          : "scale-100 opacity-20 group-hover:scale-105 group-hover:opacity-30 filter grayscale group-hover:grayscale-0",
                      )}
                    />
                  )}

                  {/* Multi-tier Dark Blueprint Scrim / Gradient Overlay for Maximum Text Contrast */}
                  <div
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500",
                      isExpanded
                        ? "bg-gradient-to-t from-[#041224]/95 via-[#081f3d]/85 to-[#0b274c]/80"
                        : "bg-gradient-to-b from-[#0b274c]/90 via-[#081f3d]/85 to-[#041224]/90 group-hover:from-[#0b274c]/80 group-hover:to-[#041224]/80",
                    )}
                  />

                  {/* Top Accent Gradient Line */}
                  <div
                    className={cn(
                      "absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue transition-opacity duration-300 z-20",
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
                            isExpanded ? "bg-brand-green animate-pulse" : "bg-white/40",
                          )}
                        />
                        0{idx + 1}
                      </span>

                      <span
                        className={cn(
                          "grid h-9 w-9 place-items-center rounded-2xl backdrop-blur-md transition-all duration-500",
                          isExpanded
                            ? "bg-brand-green text-white shadow-lg shadow-brand-green/30 scale-110"
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
                          <span className="font-mono text-[0.65rem] font-bold uppercase tracking-wider text-brand-green">
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
                          <span className="block font-mono text-[0.62rem] uppercase tracking-wider text-brand-green font-bold">
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

                          <div className="rounded-xl border border-brand-green/40 bg-brand-green/20 p-3 backdrop-blur-xs">
                            <span className="font-mono text-[0.62rem] font-bold uppercase tracking-wider text-brand-green block">
                              ✓ Vchemics Solution
                            </span>
                            <p className="mt-1 text-[0.7rem] text-white/90 leading-snug line-clamp-2 font-sans">
                              {sol.solutionDesc}
                            </p>
                          </div>
                        </div>

                        {/* CTA Link directly following Challenge & Solution */}
                        <div className="pt-1">
                          <Link
                            to="/solutions/$slug"
                            params={{ slug: sol.id }}
                            className="inline-flex items-center gap-2 rounded-xl btn-brand-gradient px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-md hover:scale-105 transition-all"
                          >
                            <span>Inspect Full Methodology</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    ) : (
                      /* COLLAPSED STATE (PERFECTLY CENTERED VERTICAL TITLE WITH NO OVERLAP) */
                      <div className="flex flex-col justify-between flex-1 py-4 items-center">
                        <div className="my-auto flex items-center justify-center px-2">
                          <h3 className="lg:[writing-mode:vertical-rl] lg:rotate-180 font-display text-sm lg:text-base font-bold text-white tracking-wide text-center max-w-full break-words lg:whitespace-nowrap">
                            {sol.title}
                          </h3>
                        </div>

                        <div className="pt-3 border-t border-white/10 w-full text-center">
                          <span className="font-mono text-[0.62rem] font-bold uppercase tracking-wider text-brand-green block truncate">
                            {sol.metrics.split("•")[0]?.trim() ?? sol.metrics}
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
                <p className="eyebrow flex items-center gap-2.5 text-brand-green">
                  <span className="h-0.5 w-6 bg-brand-green" aria-hidden /> Technical &amp;
                  Commercial FAQ
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
                      ? "border-brand-blue bg-card shadow-md ring-1 ring-brand-blue/20"
                      : "border-border/80 bg-card hover:border-border hover:bg-muted/30",
                  )}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left transition-colors cursor-pointer gap-4"
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className={cn(
                          "font-mono text-xs font-bold transition-colors shrink-0",
                          isOpen ? "text-brand-green" : "text-muted-foreground",
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}.
                      </span>

                      <h3
                        className={cn(
                          "font-display text-sm sm:text-base font-bold transition-colors leading-snug",
                          isOpen ? "text-brand-blue dark:text-blue-400" : "text-foreground",
                        )}
                      >
                        {faq.q}
                      </h3>
                    </div>

                    <span
                      className={cn(
                        "grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-border/80 bg-muted/30 text-muted-foreground transition-transform duration-300",
                        isOpen && "rotate-90 bg-brand-blue/10 text-brand-blue border-brand-blue/30",
                      )}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-panel-${index}`}
                      role="region"
                      className="px-5 pb-5 pt-1 animate-in fade-in slide-in-from-top-2 duration-300"
                    >
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
