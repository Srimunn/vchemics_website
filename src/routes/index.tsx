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
  Zap,
  Gauge,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { HeroVideo } from "@/components/site/HeroVideo";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { ProductGrid } from "@/components/site/ProductGrid";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactSection } from "@/components/site/ContactSection";
import { SectionHeading, btnAccent, btnOutlineLight } from "@/components/site/ui";
import { admixtureUses, industries, stats } from "@/components/site/data";

const title = "V Chemics India Solutions | Construction Chemicals in Chennai";
const description =
  "Concrete admixtures, waterproofing systems, non-shrink grouts and repair solutions engineered for durable, high-performance construction. Chennai, India.";

export const Route = createFileRoute("/")({
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
  component: Home,
});

const features = [
  {
    num: "01",
    Icon: FlaskConical,
    title: "Concrete Admixtures",
    tagline: "Tiny tweaks that unlock big performance gains",
  },
  {
    num: "02",
    Icon: Droplets,
    title: "Waterproofing Solutions",
    tagline: "Basements, roofs, and foundations — solved.",
  },
  {
    num: "03",
    Icon: Hammer,
    title: "Repair and Rehabilitation",
    tagline: "Historic preservation, disaster recovery, renovations",
  },
];

const useIcons = [Gauge, Waves, ShieldCheck, Layers, Truck];

const industryIcons = [
  Building2,
  Ruler,
  Factory,
  Layers,
  Hammer,
  Mountain,
  Zap,
  HardHat,
];

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="clip-slant-b relative flex min-h-screen items-center overflow-hidden bg-graphite-deep">
        <HeroVideo
          src="/final.mp4"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Soft subtle ambient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-graphite-deep/60 via-transparent to-graphite-deep/70"
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-36 pb-28 lg:px-8">
          <Reveal className="max-w-3xl">
            <h1 className="text-[2.5rem] font-bold leading-[1.04] text-white sm:text-5xl lg:text-[4rem] drop-shadow-lg">
              Ultimate Solution for Your Construction Needs
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg drop-shadow-md">
              High-performance concrete admixtures, waterproofing, and repair solutions engineered for
              durability.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#054782] to-[#669930] px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.08em] text-white shadow-lg shadow-[#054782]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="relative overflow-hidden bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Editorial Top Narrative */}
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
            <Reveal className="lg:col-span-6">
              <SectionHeading
                eyebrow="Who We Are"
                title="Engineering Stronger, Longer-Lasting Construction"
              />
            </Reveal>

            <Reveal delay={100} className="lg:col-span-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Rigorous design targets need materials that behave under pressure. Our admixtures are
                the difference between concrete that merely sets and concrete that performs — denser,
                more workable, and built to outlive its warranty.
              </p>
              <p>
                V Chemics supplies a broad admixture range with innovative mix-design options that
                strip out water content while still delivering strong early strength. Alongside it sits
                a full portfolio of cementitious, epoxy, PMMA and polyurethane grouts, trusted across
                the market for technical performance, durability and watertightness.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary">
                  <CheckCircle2 className="h-4 w-4 text-[#669930]" /> On-Site Mix Validation
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#669930]/30 bg-[#669930]/10 px-4 py-2 text-xs font-semibold text-[#669930]">
                  <CheckCircle2 className="h-4 w-4 text-[#669930]" /> Batching Plant Supply
                </span>
              </div>
            </Reveal>
          </div>

          {/* 3-Card Specialization Showcase Grid */}
          <div className="mt-16 lg:mt-20">
            <Reveal>
              <p className="eyebrow mb-8 text-foreground flex items-center gap-3">
                <span className="h-px w-8 bg-[#669930]" aria-hidden />
                We specialize in Construction Chemicals including:
              </p>
            </Reveal>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ num, Icon, title: t, tagline }, idx) => (
                <Reveal key={num} delay={idx * 100}>
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#054782]/40 hover:shadow-xl">
                    {/* Watermark Number */}
                    <span className="pointer-events-none absolute -right-2 -top-4 font-mono text-8xl font-black text-foreground/[0.04] transition-colors duration-500 group-hover:text-[#054782]/10 select-none">
                      {num}
                    </span>

                    <div>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#669930]/10 px-3 py-1 font-mono text-xs font-bold text-[#669930] border border-[#669930]/20">
                          SYSTEM {num}
                        </span>

                        <span className="grid h-13 w-13 place-items-center rounded-2xl bg-gradient-to-br from-[#054782] to-[#0b274c] text-white shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:from-[#054782] group-hover:to-[#669930]">
                          <Icon className="h-6 w-6" />
                        </span>
                      </div>

                      <h3 className="mt-6 font-display text-xl font-bold text-foreground transition-colors group-hover:text-[#054782]">
                        {t}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {tagline}
                      </p>
                    </div>

                    <div className="mt-8 pt-5 border-t border-border/60 flex items-center justify-between">
                      <Link
                        to="/products"
                        className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-[#054782] transition-colors group-hover:text-[#669930]"
                      >
                        Explore Solutions
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>

                      {/* Expanding Bottom Accent Line on hover */}
                      <span className="h-1.5 w-8 rounded-full bg-border transition-all duration-500 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-[#054782] group-hover:to-[#669930]" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="blueprint clip-slant-both relative bg-graphite py-28">
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <p className="font-display text-5xl font-bold text-[#669930] sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.14em] text-on-dark-muted">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Product Range"
              title="Explore Our Products"
              intro="Four core systems, each backed by on-site technical support and consistent batch quality."
            />
          </Reveal>
          <div className="mt-14">
            <ProductGrid />
          </div>

          {/* Recommended Admixture Applications Deck */}
          <div className="mt-24 pt-16 border-t border-border/70">
            <Reveal className="pb-10 max-w-3xl">
              <p className="eyebrow mb-4 flex items-center gap-3 text-[#669930]">
                <span className="h-px w-8 bg-[#669930]" aria-hidden />
                Engineering Applicability
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl lg:text-4xl text-foreground">
                Our concrete admixtures are recommended for:
              </h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Formulated to optimize slump retention, hydration control, and early strength gain for diverse placement methods.
              </p>
            </Reveal>

            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-500 hover:-translate-y-2 hover:border-[#054782]/40 hover:shadow-xl">
                    {/* Top Gradient Line */}
                    <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#054782] via-[#669930] to-[#054782] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Watermark Numeral */}
                    <span className="pointer-events-none absolute right-3 top-2 font-mono text-5xl font-black text-foreground/[0.03] select-none group-hover:text-[#054782]/10 transition-colors">
                      {num}
                    </span>

                    <div>
                      <div className="flex items-center justify-between">
                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#054782]/10 to-[#669930]/10 text-[#054782] transition-all duration-500 group-hover:scale-110 group-hover:from-[#054782] group-hover:to-[#669930] group-hover:text-white shadow-xs">
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="font-mono text-xs font-bold text-[#669930] bg-[#669930]/10 px-2.5 py-1 rounded-full border border-[#669930]/20">
                          {num}
                        </span>
                      </div>

                      <span className="mt-5 block font-mono text-[0.68rem] font-bold uppercase tracking-wider text-[#669930]">
                        {tag}
                      </span>

                      <h4 className="mt-1 font-display text-base font-bold text-foreground transition-colors group-hover:text-[#054782]">
                        {u}
                      </h4>

                      <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/60">
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

      {/* INDUSTRIES WE SERVE */}
      <section className="bg-concrete py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Applications"
              title="Industries We Serve"
              intro="From tunnel linings to high-rise rafts, our chemical formulations deliver guaranteed structural durability across every sector."
            />
          </Reveal>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                name: "Concrete & RMC",
                tag: "Batching & Precast",
                desc: "High-slump retention superplasticisers for pumped concrete and rapid-demould precast yards.",
                chip: "3-Hour Open Transit",
                Icon: HardHat,
              },
              {
                num: "02",
                name: "Civil Engineering",
                tag: "Bridges & Highways",
                desc: "Mass concrete thermal management, flyover pier casting, and structural waterproofing.",
                chip: "High Durability Mix",
                Icon: Ruler,
              },
              {
                num: "03",
                name: "Industrial Manufacturing",
                tag: "Heavy Production",
                desc: "Dynamic vibration-proof machine foundation grouting and chemical-resistant bund linings.",
                chip: "Zero-Shrink Spec",
                Icon: Factory,
              },
              {
                num: "04",
                name: "Flooring Systems",
                tag: "Surface Engineering",
                desc: "Monolithic abrasion hardeners, heavy-duty polymer screeds, and anti-dusting floor seals.",
                chip: "Forklift Traffic Ready",
                Icon: Layers,
              },
              {
                num: "05",
                name: "Restoration & Renovation",
                tag: "Structural Rehab",
                desc: "Micro concrete column encasement, low-viscosity crack injection, and rebar rust converters.",
                chip: "Full Load Recovery",
                Icon: Hammer,
              },
              {
                num: "06",
                name: "Mining & Tunneling",
                tag: "Underground Works",
                desc: "Fast-setting wet shotcrete accelerators, rock-bolting anchors, and hydro-active water stops.",
                chip: "Rapid Initial Set",
                Icon: Mountain,
              },
              {
                num: "07",
                name: "Power & Energy",
                tag: "Critical Utilities",
                desc: "Turbine base grouts, transformer yard pads, and cooling tower crystalline waterproof barriers.",
                chip: "Extreme Vibration Proof",
                Icon: Zap,
              },
              {
                num: "08",
                name: "Building & Construction",
                tag: "High-Rise Towers",
                desc: "Basement raft crystalline protection, terrace waterproofing, and high-fluidity column pours.",
                chip: "100% Watertight Envelope",
                Icon: Building2,
              },
            ].map(({ num, name, tag, desc, chip, Icon }, i) => (
              <Reveal key={name} as="li" delay={i * 50}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-7 shadow-xs transition-all duration-500 hover:-translate-y-2 hover:border-[#054782]/40 hover:shadow-xl">
                  {/* Top Gradient Line on hover */}
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#054782] via-[#669930] to-[#054782] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Watermark Numeral */}
                  <span className="pointer-events-none absolute right-3 top-2 font-mono text-5xl font-black text-foreground/[0.03] select-none group-hover:text-[#054782]/10 transition-colors">
                    {num}
                  </span>

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#054782]/10 to-[#669930]/10 text-[#054782] transition-all duration-500 group-hover:scale-110 group-hover:from-[#054782] group-hover:to-[#669930] group-hover:text-white shadow-xs">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="font-mono text-[0.65rem] font-bold uppercase tracking-wider text-[#669930] bg-[#669930]/10 px-2.5 py-1 rounded-full border border-[#669930]/20">
                        {tag}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-lg font-bold text-foreground transition-colors group-hover:text-[#054782]">
                      {name}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60">
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
      </section>

      <Testimonials />
      <ContactSection />
    </>
  );
}
