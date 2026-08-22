import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  FlaskConical,
  Handshake,
  Recycle,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Check,
  Wrench,
  Layers,
  Camera,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { SectionHeading } from "@/components/site/ui";

const title = "About V Chemics India Solutions | Concrete Admixture Specialists";
const description =
  "V Chemics manufactures concrete admixtures, non-shrink grouts, and waterproofing systems in Chennai. Technical support, on-site trials, and 1-day response.";

export const Route = createFileRoute("/about")({
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
  component: About,
});

const values = [
  {
    num: "01",
    tag: "Quality & Testing",
    title: "Chemistry First",
    body: "Every product is formulated, dosed, and validated under real site conditions before batching plant dispatch.",
    metric: "100% Pre-Pour Tested",
    Icon: FlaskConical,
  },
  {
    num: "02",
    tag: "Structural Life",
    title: "Proven Durability",
    body: "We build for the fifty-year view: ultra-low permeability, tight shrinkage control, and long service life.",
    metric: "50-Year Design View",
    Icon: ShieldCheck,
  },
  {
    num: "03",
    tag: "Site Support",
    title: "Technical Partnership",
    body: "Mix design calibration, on-site trial batches, and troubleshooting come standard — not as a paid extra.",
    metric: "Included With Every Drum",
    Icon: Wrench,
  },
  {
    num: "04",
    tag: "Sustainability",
    title: "Responsible Mixes",
    body: "High-range water reduction and cement optimization cut both project cost and embodied carbon per m³.",
    metric: "Up to 30% Water Reduction",
    Icon: Layers,
  },
];

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 40, suffix: "+", label: "Chemical Formulations" },
  { value: 50, suffix: "+", label: "Infrastructure Projects" },
  { value: 100, suffix: "%", label: "Tested & Certified" },
];

const standards = [
  {
    title: "Certified Raw Materials",
    desc: "Every batch starts with high-purity polycarboxylate ethers and active silanes rigorously tested for consistent molecular weight.",
    code: "IS 9103 & ASTM C494",
  },
  {
    title: "Zero-Variance Blending",
    desc: "Automated precision reactors ensure that batch #1 and batch #100 deliver identical slump retention and strength gains.",
    code: "Factory QA Certified",
  },
  {
    title: "On-Site Calibration",
    desc: "Our chemical engineers visit your batching plant or project site to fine-tune dosage curves against your exact sand and cement.",
    code: "South India Technical Network",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Engineering Stronger, Longer-Lasting Concrete & Structures."
        intro="Specialist manufacturers of advanced concrete admixtures, high-strength grouts, crystalline waterproofing, and structural micro concrete engineered for South India's demanding construction climate."
      />

      {/* 2. OUR HERITAGE & MISSION */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            {/* Left: Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <SectionHeading
                  eyebrow="Our Heritage"
                  title="Formulations That Outperform The Design Warranty"
                  intro="We bridge the gap between architectural vision and concrete placement reality."
                />
              </Reveal>

              <Reveal delay={100} className="space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                <p>
                  In high-performance construction, ordinary concrete cannot withstand the thermal stresses, heavy dynamic loadings, and aggressive chemical exposure of modern infrastructure. Admixtures and structural chemicals are what transform a standard mix into an unyielding, resilient asset.
                </p>
                <p>
                  Headquartered in Chennai, V Chemics operates dedicated synthesis reactors producing PCE superplasticisers, crystalline waterproofing compounds, non-shrink epoxy grouts, and structural micro-mortars. Every formulation is tailored to match local sands, quarry aggregates, and regional humidity curves.
                </p>
              </Reveal>

              {/* 3 Core Strengths */}
              <Reveal delay={140} className="pt-2">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { title: "Slump Control", desc: "Up to 3+ hours workability in high ambient heat." },
                    { title: "Zero Permeability", desc: "Permanent crystalline sealing of micro-capillaries." },
                    { title: "Rapid Strength", desc: "Reach 7-day design strength up to 48 hours earlier." },
                  ].map((f) => (
                    <div key={f.title} className="rounded-2xl border border-border/80 bg-card p-4 shadow-xs">
                      <div className="flex items-center gap-2 text-xs font-bold font-display text-foreground">
                        <Check className="h-4 w-4 text-[#669930]" /> {f.title}
                      </div>
                      <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right: Technical Engineering Showcase Card */}
            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-[#0b274c] to-[#071933] p-8 sm:p-10 text-white shadow-2xl">
                  <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#669930]/20 blur-2xl pointer-events-none" />
                  <div className="blueprint absolute inset-0 opacity-15 pointer-events-none" />

                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#669930]">
                    TECHNICAL CAPABILITY
                  </span>

                  <h3 className="mt-3 font-display text-2xl font-bold text-white">
                    Direct Plant &amp; Field Infrastructure
                  </h3>

                  <ul className="mt-6 space-y-4 text-xs sm:text-sm text-[#b0c7df]">
                    <li className="flex items-start gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-[#669930]/20 text-[#669930] mt-0.5">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>Automated liquid batching reactors with 100% batch traceability.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-[#669930]/20 text-[#669930] mt-0.5">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>Mobile on-site testing kits for immediate slump and air entrainment audits.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-[#669930]/20 text-[#669930] mt-0.5">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>Dedicated technical response team available across South India.</span>
                    </li>
                  </ul>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[0.68rem] uppercase text-[#669930] font-bold">Standard</p>
                      <p className="text-xs font-bold text-white">IS 9103 / IS 2645</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[0.68rem] uppercase text-[#669930] font-bold">Logistics</p>
                      <p className="text-xs font-bold text-white">24–48h Site Delivery</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER'S VISION & LEADERSHIP (SPLIT STAGE: PHOTO + VISION) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b274c] via-[#071933] to-[#0b274c] py-28 lg:py-36 text-white">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#054782]/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#669930]/30 blur-3xl pointer-events-none" />
        <div className="blueprint absolute inset-0 opacity-20 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            {/* Side 1: Add Photo Placeholder Stage */}
            <Reveal className="lg:col-span-5">
              <div className="group relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#054782] via-[#669930] to-[#054782] opacity-30 blur-lg transition-opacity duration-500 group-hover:opacity-50" />

                <div className="relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-3xl border-2 border-dashed border-white/25 bg-white/[0.03] p-6 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:border-[#669930]/50">
                  {/* Top Badge */}
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md px-3.5 py-1.5 font-mono text-[0.7rem] font-bold uppercase tracking-wider text-white border border-white/20">
                      <Sparkles className="h-3.5 w-3.5 text-[#669930]" /> 15+ Years Leadership
                    </span>
                  </div>

                  {/* Center Placeholder Box */}
                  <div className="flex flex-col items-center justify-center text-center py-8">
                    <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-[#669930] shadow-inner mb-3 border border-white/15">
                      <Camera className="h-8 w-8" />
                    </span>
                    <span className="font-display text-base font-bold text-white tracking-wide">
                      Add Photo
                    </span>
                    <span className="mt-1 font-mono text-xs text-[#b0c7df]/70">
                      Founder &amp; Managing Director
                    </span>
                  </div>

                  {/* Bottom Title Bar */}
                  <div className="rounded-2xl bg-black/40 backdrop-blur-md p-4 border border-white/10">
                    <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#669930]">
                      Founder &amp; Managing Director
                    </p>
                    <h4 className="mt-0.5 font-display text-lg font-bold text-white">
                      V Chemics India Solutions
                    </h4>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Side 2: Vision & Technical Tenets */}
            <Reveal delay={120} className="lg:col-span-7 space-y-7">
              <div>
                <p className="eyebrow mb-4 flex items-center gap-3 text-[#669930]">
                  <span className="h-px w-8 bg-[#669930]" aria-hidden />
                  Founder's Vision &amp; Leadership
                </p>
                <h3 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
                  “When Concrete Performs, Structures Stand for Generations.”
                </h3>
              </div>

              <blockquote className="border-l-2 border-[#669930] pl-6 text-base sm:text-lg italic leading-relaxed text-[#b0c7df]">
                “Our mission at V Chemics is simple yet rigorous: formulate chemistries that eliminate structural compromise. Every admixture and grout we blend is engineered to cut water demand, withstand environmental stress, and outlive design warranties.”
              </blockquote>

              <div className="grid gap-4 sm:grid-cols-3 pt-2">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#669930]/20 text-[#669930]">
                    <FlaskConical className="h-4.5 w-4.5" />
                  </span>
                  <h5 className="mt-3 font-display text-sm font-bold text-white">
                    Molecular Precision
                  </h5>
                  <p className="mt-1.5 text-xs text-[#b0c7df] leading-relaxed">
                    Formulations tailored to local quarry aggregates, sands, and regional temperature curves.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#054782]/40 text-white">
                    <ShieldCheck className="h-4.5 w-4.5" />
                  </span>
                  <h5 className="mt-3 font-display text-sm font-bold text-white">
                    Site-Level Assurance
                  </h5>
                  <p className="mt-1.5 text-xs text-[#b0c7df] leading-relaxed">
                    Direct batch plant calibration and slump retention trials supervised on-site before dispatch.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#669930]/20 text-[#669930]">
                    <Sparkles className="h-4.5 w-4.5" />
                  </span>
                  <h5 className="mt-3 font-display text-sm font-bold text-white">
                    15+ Years Leadership
                  </h5>
                  <p className="mt-1.5 text-xs text-[#b0c7df] leading-relaxed">
                    Decades of practical site chemistry experience guiding mix designs for over 50+ critical projects.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-[#b0c7df]">
                  <CheckCircle2 className="h-4 w-4 text-[#669930]" /> 100% Tested Formulations
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#b0c7df]">
                  <CheckCircle2 className="h-4 w-4 text-[#669930]" /> On-Site Engineering Trials
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. OPERATIONAL PILLARS SECTION (WHAT DRIVES US) */}
      <section className="bg-concrete py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What Drives Us"
              title="How We Engineer Excellence"
              intro="Four core formulation and delivery standards that define every batch and technical trial at V Chemics."
            />
          </Reveal>

          <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ num, Icon, tag, title: t, body, metric }, i) => (
              <Reveal key={t} as="li" delay={i * 70}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-7 shadow-xs transition-all duration-500 hover:-translate-y-2 hover:border-[#054782]/40 hover:shadow-xl">
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#054782] via-[#669930] to-[#054782] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="pointer-events-none absolute right-3 top-2 font-mono text-7xl font-black text-foreground/[0.03] select-none group-hover:text-[#054782]/10 transition-colors">
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
                      {t}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {body}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] font-semibold text-[#669930]">
                      <Sparkles className="h-3 w-3" /> {metric}
                    </span>
                    <div className="mt-2.5 h-1 w-6 rounded-full bg-border transition-all duration-500 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-[#054782] group-hover:to-[#669930]" />
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. STATS SECTION */}
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

      {/* 6. QUALITY STANDARDS & COMPLIANCE */}
      <section className="bg-background py-24 lg:py-32 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Quality Assurance"
              title="Formulated to Strict National &amp; Global Codes"
              intro="Precision batch control and third-party laboratory verification ensuring zero structural defect."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {standards.map((st, i) => (
              <Reveal key={st.title} delay={i * 80}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-7 shadow-xs transition-all duration-500 hover:border-[#054782]/40 hover:shadow-lg">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#669930] bg-[#669930]/10 px-3 py-1 rounded-full border border-[#669930]/20">
                      {st.code}
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-foreground group-hover:text-[#054782] transition-colors">
                      {st.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {st.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-mono font-semibold text-[#054782]">
                    <CheckCircle2 className="h-4 w-4 text-[#669930]" /> Verified Standard
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
