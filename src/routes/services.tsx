import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  ClipboardCheck,
  Factory,
  Hammer,
  HardHat,
  Layers,
  Mountain,
  Ruler,
  Truck,
  Wrench,
  Zap,
  FlaskConical,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Clock,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Testimonials } from "@/components/site/Testimonials";
import { SectionHeading } from "@/components/site/ui";
import { ContactSection } from "@/components/site/ContactSection";

const title = "Mix Design & Site Support Engineering Services | Vchemics";
const description =
  "Mix design consulting, on-site trials, waterproofing system design, structural repair support and reliable supply logistics from Vchemics India Solutions.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.vchemicsindia.com/services" },
      { property: "og:image", content: "https://www.vchemicsindia.com/image.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.vchemicsindia.com/services" }],
  }),
  component: Services,
});

const capabilities = [
  {
    num: "01",
    tag: "Calibration & Trial",
    title: "Mix Design Consulting",
    metric: "Optimized w/c & Slump Curves",
    body: "We fine-tune water-cement ratios, slump retention profiles, and 7-day strength curves tailored to your exact quarry aggregates, local sands, and ambient temperature.",
    Icon: FlaskConical,
  },
  {
    num: "02",
    tag: "Site Quality Assurance",
    title: "On-Site Trials & QA",
    metric: "Cube Strength & Slump Audits",
    body: "Pre-pour trial batches, slump-flow retention audits, and compressive cube testing supervised alongside your engineering team before mass batching.",
    Icon: ClipboardCheck,
  },
  {
    num: "03",
    tag: "Structural Envelope",
    title: "Waterproofing System Design",
    metric: "Crystalline & Elastomeric PU",
    body: "Comprehensive specification of deep-pore crystalline systems, elastomeric PU membranes, and swellable waterstops designed for intense hydrostatic heads.",
    Icon: Layers,
  },
  {
    num: "04",
    tag: "Structural Retrofitting",
    title: "Repair & Rehabilitation",
    metric: "Micro Concrete & Crack Jacketing",
    body: "Structural integrity assessments, non-shrink micro concrete encasements, low-pressure epoxy crack injections, and rebar passivating anti-corrosion primers.",
    Icon: Wrench,
  },
  {
    num: "05",
    tag: "Bulk Supply Logistics",
    title: "Supply & Direct Dispatch",
    metric: "24–48h South India Delivery",
    body: "Scheduled direct-to-site supply in 20kg bags, 220kg barrels, and bulk IBC containers across Tamil Nadu and neighbouring states with zero batch variance.",
    Icon: Truck,
  },
  {
    num: "06",
    tag: "Workmanship Rigor",
    title: "Applicator Training & QA",
    metric: "Certified Site Practice",
    body: "Hands-on technical workshops for site contractors and applicators covering substrate prep, dosing discipline, pot life control, and precision curing.",
    Icon: HardHat,
  },
];

const industriesServed = [
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
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Technical support that ships with every drum"
        intro="Material alone doesn't solve a site problem. Our engineers work with your team from mix design through final application."
      />

      {/* 2. CAPABILITIES & WHAT WE DO (6-CARD ARCHITECTURAL BENTO DECK) */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Engineering Services &amp; Field Solutions"
              intro="Six specialized technical capabilities designed to ensure every batch and placement achieves target design strength."
            />
          </Reveal>

          <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ num, tag, title: t, metric, body, Icon }, i) => (
              <Reveal key={t} as="li" delay={i * 70}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-8 shadow-xs transition-all duration-500 hover:-translate-y-2 hover:border-brand-blue/40 hover:shadow-2xl">
                  {/* Top Gradient Line */}
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Watermark Numeral */}
                  <span className="pointer-events-none absolute right-4 top-2 font-mono text-8xl font-black text-foreground/[0.03] select-none group-hover:text-brand-blue/10 transition-colors">
                    {num}
                  </span>

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-green/10 text-brand-blue transition-all duration-500 group-hover:scale-110 group-hover:from-brand-blue group-hover:to-brand-green group-hover:text-white shadow-xs">
                        <Icon className="h-7 w-7" />
                      </span>
                      <span className="font-mono text-xs font-bold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full border border-brand-green/20 uppercase tracking-wider">
                        {tag}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-xl font-bold text-foreground transition-colors group-hover:text-brand-blue">
                      {t}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {body}
                    </p>
                  </div>

                  {/* Footer Metric Chip */}
                  <div className="mt-8 pt-5 border-t border-border/60">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] font-semibold text-brand-blue group-hover:text-brand-green transition-colors">
                      <Sparkles className="h-3 w-3 text-brand-green" /> {metric}
                    </span>
                    <div className="mt-2.5 h-1 w-6 rounded-full bg-border transition-all duration-500 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-green" />
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. INDUSTRIES WE SERVE (8-CARD ARCHITECTURAL MATRIX) */}
      <section className="bg-concrete py-24 lg:py-32 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Applications"
              title="Industries We Serve"
              intro="From tunnel linings to high-rise rafts, our chemical formulations deliver guaranteed structural durability across every sector."
            />
          </Reveal>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industriesServed.map(({ num, name, tag, desc, chip, Icon }, i) => (
              <Reveal key={name} as="li" delay={i * 50}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-7 shadow-xs transition-all duration-500 hover:-translate-y-2 hover:border-brand-blue/40 hover:shadow-xl">
                  {/* Top Gradient Line on hover */}
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Watermark Numeral */}
                  <span className="pointer-events-none absolute right-3 top-2 font-mono text-5xl font-black text-foreground/[0.03] select-none group-hover:text-brand-blue/10 transition-colors">
                    {num}
                  </span>

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-green/10 text-brand-blue transition-all duration-500 group-hover:scale-110 group-hover:from-brand-blue group-hover:to-brand-green group-hover:text-white shadow-xs">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="font-mono text-[0.65rem] font-bold uppercase tracking-wider text-brand-green bg-brand-green/10 px-2.5 py-1 rounded-full border border-brand-green/20">
                        {tag}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-lg font-bold text-foreground transition-colors group-hover:text-brand-blue">
                      {name}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] font-semibold text-brand-blue group-hover:text-brand-green transition-colors">
                      <Sparkles className="h-3 w-3 text-brand-green" /> {chip}
                    </span>
                    <div className="mt-2 h-1 w-6 rounded-full bg-border transition-all duration-500 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-green" />
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. CASE STUDY TESTIMONIALS */}
      <Testimonials />
    </>
  );
}
