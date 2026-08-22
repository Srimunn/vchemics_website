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
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Testimonials } from "@/components/site/Testimonials";
import { SectionHeading } from "@/components/site/ui";
import { industries } from "@/components/site/data";

const title = "Our Services | Mix Design, Site Support & Repair Solutions";
const description =
  "Mix design consulting, on-site trials, waterproofing system design, structural repair support and reliable supply logistics from V Chemics India Solutions.";

export const Route = createFileRoute("/services")({
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
  component: Services,
});

const services = [
  {
    Icon: FlaskConical,
    title: "Mix Design Consulting",
    body: "We optimise water-cement ratio, slump retention and early strength for your aggregates and your ambient conditions.",
  },
  {
    Icon: ClipboardCheck,
    title: "On-Site Trials & QA",
    body: "Trial batches, slump-flow checks and cube testing supervised with your team before full-scale production begins.",
  },
  {
    Icon: Layers,
    title: "Waterproofing System Design",
    body: "Specification of the right membrane, crystalline or admixture-based system per exposure class and detail.",
  },
  {
    Icon: Wrench,
    title: "Repair & Rehabilitation",
    body: "Condition assessment through to jacketing, micro concrete placement, crack injection and protective coating.",
  },
  {
    Icon: Truck,
    title: "Supply & Logistics",
    body: "Scheduled deliveries across Tamil Nadu and neighbouring states with consistent batch-to-batch quality.",
  },
  {
    Icon: HardHat,
    title: "Applicator Training",
    body: "Hands-on sessions for site crews on surface prep, dosing discipline and correct application technique.",
  },
];

const industryIcons = [Building2, Ruler, Factory, Layers, Hammer, Mountain, Zap, HardHat];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Technical support that ships with every drum"
        intro="Material alone doesn't solve a site problem. Our engineers work with your team from mix design through final application."
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Capabilities" title="What we do" />
          </Reveal>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ Icon, title: t, body }, i) => (
              <Reveal key={t} as="li" delay={i * 70}>
                <div className="lift group h-full rounded-sm border border-border bg-background p-8 hover:border-primary">
                  <span className="grid h-12 w-12 place-items-center rounded-sm bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-bold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="blueprint clip-slant-both relative bg-graphite py-28">
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Applications" title="Industries We Serve" onDark />
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((name, i) => {
              const Icon = industryIcons[i] ?? Building2;
              return (
                <Reveal key={name} as="li" delay={i * 60}>
                  <div className="lift flex h-full items-center gap-4 rounded-sm border border-on-dark/12 bg-graphite-soft/60 p-6 hover:border-primary">
                    <Icon className="h-5 w-5 shrink-0 text-primary" />
                    <span className="font-display text-sm font-bold leading-snug text-on-dark">{name}</span>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <Testimonials />
      <CtaBanner />
    </>
  );
}
