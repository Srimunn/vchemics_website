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
  Timer,
} from "lucide-react";
import heroImg from "@/assets/hero-concrete.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { CtaBanner } from "@/components/site/CtaBanner";
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
      {/* HERO */}
      <section className="clip-slant-b relative flex min-h-screen items-center overflow-hidden bg-graphite-deep">
        <img
          src={heroImg}
          alt="Construction crew placing and levelling freshly pumped concrete at dusk"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-graphite-deep via-graphite-deep/85 to-graphite-deep/40"
          aria-hidden
        />
        <div className="blueprint absolute inset-0" aria-hidden />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-28 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-sm border border-primary/50 bg-primary/10 px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.16em] text-primary">
              <Timer className="h-3.5 w-3.5" /> 50+ Clients
            </span>
            <h1 className="mt-7 text-[2.5rem] leading-[1.02] text-on-dark sm:text-5xl lg:text-[4rem]">
              Ultimate Solution for Your Construction Needs
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-on-dark-muted sm:text-lg">
              High-performance concrete admixtures, waterproofing, and repair solutions engineered for
              durability.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className={btnAccent}>
                Get In Touch <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/products" className={btnOutlineLight}>
                Explore Products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Who We Are"
                title="Engineering Stronger, Longer-Lasting Construction"
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
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
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="eyebrow mb-6 text-foreground">
                We specialize in Construction Chemicals including:
              </p>
              <ul className="space-y-4">
                {features.map(({ num, Icon, title: t, tagline }) => (
                  <li
                    key={num}
                    className="lift group flex gap-5 rounded-sm border border-border bg-secondary/50 p-6 hover:border-primary"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm bg-graphite text-on-dark transition-colors duration-300 group-hover:bg-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="font-display text-xs font-bold tracking-[0.2em] text-primary">
                        {num}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-bold">{t}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{tagline}</p>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="blueprint clip-slant-both relative bg-graphite py-28">
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <p className="font-display text-5xl font-bold text-primary sm:text-6xl">
                <Counter value={s.value} />
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

          <Reveal className="mt-20 rounded-sm border border-border bg-secondary/60 p-8 lg:p-12">
            <h3 className="font-display text-xl font-bold sm:text-2xl">
              Our concrete admixtures are recommended for:
            </h3>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {admixtureUses.map((u, i) => {
                const Icon = useIcons[i] ?? Layers;
                return (
                  <li
                    key={u}
                    className="lift flex flex-col gap-3 rounded-sm border border-border bg-background p-5"
                  >
                    <Icon className="h-6 w-6 text-primary" />
                    <span className="font-display text-sm font-bold leading-snug">{u}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBanner />

      {/* INDUSTRIES */}
      <section className="bg-concrete py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Applications"
              title="Industries We Serve"
              intro="From tunnel linings to terrace decks, our chemistry shows up wherever concrete has to hold."
            />
          </Reveal>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((name, i) => {
              const Icon = industryIcons[i] ?? Building2;
              return (
                <Reveal key={name} as="li" delay={i * 60}>
                  <div className="lift group flex h-full items-center gap-4 rounded-sm border border-border bg-background p-6 hover:border-primary">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-sm font-bold leading-snug">{name}</span>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <Testimonials />
      <ContactSection />
    </>
  );
}
