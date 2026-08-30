import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  FlaskConical,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Check,
  Wrench,
  Layers,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { SectionHeading } from "@/components/site/ui";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { founder } from "@/components/site/data";

const title = "About Us | Vchemics Construction Chemical Specialists";
const description =
  "Vchemics manufactures concrete admixtures, non-shrink grouts, and waterproofing systems in Chennai. Technical support, on-site trials, and 1-day response.";

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: title,
  description: description,
  url: "https://www.vchemicsindia.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "Vchemics India Solutions",
    url: "https://www.vchemicsindia.com",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: founder?.name ?? "Velmurugan Sivanantham",
  jobTitle: founder?.titles?.[0] ?? "Founder, Vchemics India Solutions",
  worksFor: {
    "@type": "Organization",
    name: "Vchemics India Solutions",
    url: "https://www.vchemicsindia.com",
  },
  description:
    "Founder of Vchemics India Solutions specializing in high-performance construction chemicals, concrete admixtures, and structural waterproofing in Tamil Nadu.",
  knowsAbout: [
    "Concrete Technology",
    "Construction Chemicals",
    "Structural Waterproofing",
    "Polycarboxylate Ether Admixtures",
    "Structural Rehabilitation",
  ],
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.vchemicsindia.com/about" },
      { property: "og:image", content: "https://www.vchemicsindia.com/image.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.vchemicsindia.com/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(aboutPageSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(personSchema),
      },
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

              <Reveal
                delay={100}
                className="space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground"
              >
                <p>
                  In high-performance construction, ordinary concrete cannot withstand the thermal
                  stresses, heavy dynamic loadings, and aggressive chemical exposure of modern
                  infrastructure. Admixtures and structural chemicals are what transform a standard
                  mix into an unyielding, resilient asset.
                </p>
                <p>
                  Headquartered in Chennai, Vchemics operates dedicated synthesis reactors producing
                  PCE superplasticisers, crystalline waterproofing compounds, non-shrink epoxy
                  grouts, and structural micro-mortars. Every formulation is tailored to match local
                  sands, quarry aggregates, and regional humidity curves.
                </p>
              </Reveal>

              {/* 3 Core Strengths */}
              <Reveal delay={140} className="pt-2">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      title: "Slump Control",
                      desc: "Up to 3+ hours workability in high ambient heat.",
                    },
                    {
                      title: "Zero Permeability",
                      desc: "Permanent crystalline sealing of micro-capillaries.",
                    },
                    {
                      title: "Rapid Strength",
                      desc: "Reach 7-day design strength up to 48 hours earlier.",
                    },
                  ].map((f) => (
                    <div
                      key={f.title}
                      className="rounded-2xl border border-border/80 bg-card p-4 shadow-xs"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold font-display text-foreground">
                        <Check className="h-4 w-4 text-brand-green" /> {f.title}
                      </div>
                      <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right: Technical Engineering Showcase Card */}
            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-[#0b274c] to-[#071933] p-8 sm:p-10 text-white shadow-2xl">
                  <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-brand-green/20 blur-2xl pointer-events-none" />
                  <div className="blueprint absolute inset-0 opacity-15 pointer-events-none" />

                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-green">
                    TECHNICAL CAPABILITY
                  </span>

                  <h3 className="mt-3 font-display text-2xl font-bold text-white">
                    Direct Plant &amp; Field Infrastructure
                  </h3>

                  <ul className="mt-6 space-y-4 text-xs sm:text-sm text-[#b0c7df]">
                    <li className="flex items-start gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-brand-green/20 text-brand-green mt-0.5">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>Automated liquid batching reactors with 100% batch traceability.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-brand-green/20 text-brand-green mt-0.5">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>
                        Mobile on-site testing kits for immediate slump and air entrainment audits.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-brand-green/20 text-brand-green mt-0.5">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>Dedicated technical response team available across South India.</span>
                    </li>
                  </ul>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[0.68rem] uppercase text-brand-green font-bold">
                        Compliance
                      </p>
                      <p className="text-xs font-bold text-white">IS 9103 / IS 2645</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[0.68rem] uppercase text-brand-green font-bold">
                        Logistics
                      </p>
                      <p className="text-xs font-bold text-white">24–48h Site Delivery</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER & LEADERSHIP SECTION */}
      <section className="bg-background py-24 lg:py-32 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
              {/* Left: Founder Photo Slot (~40%) */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Ambient Backlight Glow */}
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand-blue/20 via-brand-green/15 to-transparent blur-xl pointer-events-none" />

                  <div className="relative rounded-3xl bg-card p-2 sm:p-3 border border-border/80 shadow-2xl overflow-hidden">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900">
                      {founder?.photo ? (
                        <img
                          src={founder.photo}
                          alt={
                            founder.alt ||
                            `${founder.name}, Founder & CEO of Vchemics India Solutions`
                          }
                          className="h-full w-full object-cover object-top shadow-sm transition-transform duration-700 hover:scale-105"
                        />
                      ) : (
                        <ImagePlaceholder
                          label="+ Add Founder / CEO Photo"
                          className="w-full h-full rounded-2xl"
                        />
                      )}
                      {/* Subtle Bottom Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Executive Pill */}
                      <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between">
                        <div className="flex items-center gap-2 rounded-xl bg-black/75 backdrop-blur-md px-3 py-1.5 border border-white/20 text-white shadow-lg">
                          <ShieldCheck className="h-4 w-4 text-brand-green" />
                          <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                            Founder &amp; CEO
                          </span>
                        </div>
                        <span className="font-mono text-[0.68rem] text-white/80 hidden sm:inline-block bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15">
                          Vchemics
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Content (~60%) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <p className="eyebrow mb-3 flex items-center gap-3 text-brand-green font-mono uppercase tracking-wide">
                    <span className="h-px w-8 bg-brand-green" aria-hidden />
                    Leadership
                  </p>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    {founder?.name}
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {(founder?.titles ?? []).map((title) => (
                      <span
                        key={title}
                        className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-blue"
                      >
                        {title}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {(founder?.bio ?? []).map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  {(founder?.credentials ?? []).map((cred) => (
                    <span
                      key={cred}
                      className="inline-flex items-center gap-2 rounded-xl bg-card border border-border/80 px-4 py-2 text-xs sm:text-sm font-medium text-foreground shadow-2xs"
                    >
                      <Award className="h-4 w-4 text-brand-green shrink-0" />
                      <span>{cred}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. OPERATIONAL PILLARS SECTION (WHAT DRIVES US) */}
      <section className="bg-concrete py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What Drives Us"
              title="How We Engineer Excellence"
              intro="Four core formulation and delivery standards that define every batch and technical trial at Vchemics."
            />
          </Reveal>

          <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ num, Icon, tag, title: t, body, metric }, i) => (
              <Reveal key={t} as="li" delay={i * 70}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-7 shadow-xs transition-all duration-500 hover:-translate-y-2 hover:border-brand-blue/40 hover:shadow-xl">
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="pointer-events-none absolute right-3 top-2 font-mono text-7xl font-black text-foreground/[0.03] select-none group-hover:text-brand-blue/10 transition-colors">
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
                      {t}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {body}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] font-semibold text-brand-green">
                      <Sparkles className="h-3 w-3" /> {metric}
                    </span>
                    <div className="mt-2.5 h-1 w-6 rounded-full bg-border transition-all duration-500 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-green" />
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
              <p className="font-display text-5xl font-bold text-brand-green sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.14em] text-on-dark-muted">
                {s.label}
              </p>
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
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-7 shadow-xs transition-all duration-500 hover:border-brand-blue/40 hover:shadow-lg">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-green bg-brand-green/10 px-3 py-1 rounded-full border border-brand-green/20">
                      {st.code}
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-foreground group-hover:text-brand-blue transition-colors">
                      {st.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {st.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-mono font-semibold text-brand-blue">
                    <CheckCircle2 className="h-4 w-4 text-brand-green" /> Verified Standard
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
