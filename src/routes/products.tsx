import { createFileRoute } from "@tanstack/react-router";
import {
  FlaskConical,
  Layers,
  ShieldCheck,
  Truck,
  Waves,
  Gauge,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Beaker,
  Building2,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ProductGrid } from "@/components/site/ProductGrid";
import { SectionHeading } from "@/components/site/ui";
import { ContactSection } from "@/components/site/ContactSection";

const title = "Products | Concrete Admixtures, Grouts & Waterproofing";
const description =
  "Explore V Chemics products: concrete admixtures, non-shrink cementitious and epoxy grouts, waterproofing systems and micro concrete for structural repair.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Products,
});

const catalogues = [
  {
    num: "01",
    tag: "Concrete Performance",
    title: "Admixture Formulations",
    desc: "Advanced chemical admixtures engineered for water reduction, extended slump retention, and rapid compressive strength.",
    Icon: FlaskConical,
    standard: "IS 9103 • ASTM C494",
    items: [
      { name: "PCE Superplasticisers", spec: "Up to 30% Water Cut" },
      { name: "Setting Retarders", spec: "3+ Hours Open Time" },
      { name: "Early Accelerators", spec: "48h Fast Demoulding" },
      { name: "Air Entrainers", spec: "Freeze-Thaw Resistance" },
      { name: "Integral Waterproofers", spec: "Hydrophobic Pore Blocker" },
    ],
  },
  {
    num: "02",
    tag: "Precision Anchoring",
    title: "High-Strength Grouts",
    desc: "Zero-shrink cementitious and resin-based grouting solutions designed for heavy machine bases, precast panels, and rebar anchoring.",
    Icon: Layers,
    standard: "ASTM C1107 • IS 4031",
    items: [
      { name: "Cementitious Non-Shrink", spec: ">75 MPa Compressive" },
      { name: "High-Strength Epoxy Grout", spec: "Dynamic Vibration Resilient" },
      { name: "Fast-Set PMMA Grout", spec: "Rapid 2-Hour Return to Service" },
      { name: "Polyurethane Injection", spec: "Active Water Leak Sealing" },
      { name: "Anchor & Dowel Mortar", spec: "High Pull-Out Capacity" },
    ],
  },
  {
    num: "03",
    tag: "Waterproofing & Protection",
    title: "Protective Systems",
    desc: "Crystalline deep-pore barriers, flexible PU elastomeric coatings, and structural micro concrete for permanent durability.",
    Icon: ShieldCheck,
    standard: "IS 2645 • DIN 1048",
    items: [
      { name: "Crystalline Waterproofing", spec: "Self-Healing Micro-Cracks" },
      { name: "PU Liquid Membranes", spec: ">400% Elongation" },
      { name: "Acrylic Polymer Coatings", spec: "UV & Carbonation Barrier" },
      { name: "Polymer Bonding Agents", spec: "Monolithic Interfacial Bond" },
      { name: "Water-Retention Curing", spec: "ASTM C309 Compliant" },
    ],
  },
];

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Formulations for every stage of your pour"
        intro="Forty-plus specialized formulations across admixtures, high-strength grouts, crystalline waterproofing, and structural repair — each backed by technical data sheets and on-site dosage guidance."
      />

      {/* 2. CORE SYSTEMS PRODUCT GRID */}
      <section className="bg-background py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Core Categories"
              title="Formulated For South India's Demanding Sites"
              intro="Click any product category below to explore technical applications, mix specs, and direct delivery options."
            />
          </Reveal>

          <div className="mt-6">
            <ProductGrid />
          </div>

          {/* 3. PERFORMANCE COMPATIBILITY DECK */}
          <div className="mt-20 pt-14 border-t border-border/70">
            <Reveal className="pb-6 max-w-3xl">
              <p className="eyebrow mb-3 flex items-center gap-3 text-[#669930]">
                <span className="h-px w-8 bg-[#669930]" aria-hidden />
                Engineering Applicability
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl text-foreground">
                Our concrete admixtures are recommended for:
              </h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Formulated to optimize slump retention, hydration control, and early strength gain for diverse placement methods.
              </p>
            </Reveal>

            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {[
                {
                  num: "01",
                  title: "Pumped Concrete",
                  tag: "High-Rise Pumping",
                  chip: "150m+ Vertical Head",
                  desc: "Friction reduction & anti-blockage lubrication for long pipe lines and high-rise casting.",
                  Icon: Truck,
                },
                {
                  num: "02",
                  title: "High Fluidity Concrete",
                  tag: "Self-Compacting (SCC)",
                  chip: ">650mm Slump Flow",
                  desc: "Seamless self-leveling flow around dense rebar cages with zero aggregate segregation.",
                  Icon: Waves,
                },
                {
                  num: "03",
                  title: "High Strength Concrete",
                  tag: "M50 – M100+ Grades",
                  chip: "Up to 22% Water Cut",
                  desc: "Ultra-low water-cement ratio achieving peak 7-day and 28-day compressive strength.",
                  Icon: ShieldCheck,
                },
                {
                  num: "04",
                  title: "Ready-Mixed Concrete",
                  tag: "Batch Plant Quality",
                  chip: "3-Hour Open Window",
                  desc: "Extended open time & reliable slump retention for urban RMC deliveries in tropical heat.",
                  Icon: Layers,
                },
                {
                  num: "05",
                  title: "Long Distance Transport",
                  tag: "Controlled Hydration",
                  chip: "Zero Cold Joints",
                  desc: "Retarded setting profiles to withstand extended transit delays without compromising finish.",
                  Icon: Gauge,
                },
              ].map(({ num, title: u, tag, chip, desc, Icon }, i) => (
                <Reveal key={u} as="li" delay={i * 60}>
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-5 shadow-xs transition-all duration-500 hover:-translate-y-1.5 hover:border-[#054782]/40 hover:shadow-xl">
                    <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#054782] via-[#669930] to-[#054782] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <span className="pointer-events-none absolute right-3 top-2 font-mono text-4xl font-black text-foreground/[0.03] select-none group-hover:text-[#054782]/10 transition-colors">
                      {num}
                    </span>

                    <div>
                      <div className="flex items-center justify-between">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#054782]/10 to-[#669930]/10 text-[#054782] transition-all duration-500 group-hover:scale-110 group-hover:from-[#054782] group-hover:to-[#669930] group-hover:text-white shadow-xs">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="font-mono text-xs font-bold text-[#669930] bg-[#669930]/10 px-2.5 py-0.5 rounded-full border border-[#669930]/20">
                          {num}
                        </span>
                      </div>

                      <span className="mt-4 block font-mono text-[0.68rem] font-bold uppercase tracking-wider text-[#669930]">
                        {tag}
                      </span>

                      <h4 className="mt-1 font-display text-base font-bold text-foreground transition-colors group-hover:text-[#054782]">
                        {u}
                      </h4>

                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-border/60">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] font-semibold text-[#054782] group-hover:text-[#669930] transition-colors">
                        <Sparkles className="h-3 w-3 text-[#669930]" /> {chip}
                      </span>
                      <div className="mt-2 h-1 w-6 rounded-full bg-border transition-all duration-500 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-[#054782] group-hover:to-[#669930]" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. FULL CATALOGUE: RANGES AT A GLANCE (ARCHITECTURAL 3-COLUMN DECK) */}
      <section className="bg-concrete py-10 lg:py-14 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Full Catalogue"
              title="Ranges At A Glance"
              intro="Comprehensive breakdown of our formulation families, performance specifications, and compliance standards."
            />
          </Reveal>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {catalogues.map(({ num, tag, title: t, desc, Icon, standard, items }, idx) => (
              <Reveal key={t} delay={idx * 90}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-6 sm:p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#054782]/40 hover:shadow-2xl">
                  {/* Top Gradient Line */}
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#054782] via-[#669930] to-[#054782] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Watermark Numeral */}
                  <span className="pointer-events-none absolute right-4 top-2 font-mono text-7xl font-black text-foreground/[0.03] select-none group-hover:text-[#054782]/10 transition-colors">
                    {num}
                  </span>

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#054782]/10 to-[#669930]/10 text-[#054782] transition-all duration-500 group-hover:scale-110 group-hover:from-[#054782] group-hover:to-[#669930] group-hover:text-white shadow-xs">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="font-mono text-xs font-bold text-[#669930] bg-[#669930]/10 px-3 py-0.5 rounded-full border border-[#669930]/20 uppercase tracking-wider">
                        {tag}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-bold text-foreground transition-colors group-hover:text-[#054782]">
                      {t}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {desc}
                    </p>

                    {/* Formulations List */}
                    <div className="mt-5 space-y-2">
                      <p className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-[#669930]">
                        Key Product Formulations
                      </p>
                      <ul className="space-y-2">
                        {items.map((it) => (
                          <li
                            key={it.name}
                            className="flex items-center justify-between gap-3 rounded-xl bg-muted/40 p-2.5 text-xs transition-colors hover:bg-muted/70"
                          >
                            <span className="font-medium text-foreground">{it.name}</span>
                            <span className="font-mono text-[0.68rem] font-semibold text-[#054782] bg-white dark:bg-card px-2 py-0.5 rounded-md border border-border/60 shrink-0">
                              {it.spec}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer with Standard Tag */}
                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                    <span className="font-mono text-[0.68rem] font-semibold text-muted-foreground">
                      Standard: <strong className="text-foreground">{standard}</strong>
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#054782] group-hover:text-[#669930] transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-[#669930]" /> Tested
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
