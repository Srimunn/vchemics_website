import { createFileRoute } from "@tanstack/react-router";
import { Award, FlaskConical, Handshake, Recycle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { CtaBanner } from "@/components/site/CtaBanner";
import { SectionHeading } from "@/components/site/ui";
import { stats } from "@/components/site/data";

const title = "About Us | V Chemics India Solutions";
const description =
  "V Chemics India Solutions manufactures and supplies concrete admixtures, grouts and waterproofing systems from Chennai, built around technical performance and durability.";

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
    Icon: FlaskConical,
    title: "Chemistry First",
    body: "Every product is dosed, trialled and validated against real site conditions before it reaches your batching plant.",
  },
  {
    Icon: Award,
    title: "Proven Durability",
    body: "We build for the fifty-year view: lower permeability, tighter shrinkage control, longer service life.",
  },
  {
    Icon: Handshake,
    title: "Technical Partnership",
    body: "Mix design support, on-site trials and troubleshooting come standard — not as a paid extra.",
  },
  {
    Icon: Recycle,
    title: "Responsible Mixes",
    body: "Water reduction and cement optimisation cut both cost and the embodied carbon of your pour.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Engineering Stronger, Longer-Lasting Construction"
        intro="A Chennai-based construction chemicals company built by people who have stood on the slab at 3 a.m. waiting for a pour to finish."
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <SectionHeading eyebrow="Our Story" title="Materials that meet the design intent" />
            </Reveal>
            <Reveal delay={100} className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Our construction material solutions exist to answer hard design and construction
                challenges — the ones where standard concrete simply will not do. Admixtures are what
                turn an ordinary mix into a high-performance, long-lasting, and genuinely good-looking
                structure.
              </p>
              <p>
                V Chemics offers a wide admixture range with innovative mix-design options that reduce
                water content while achieving strong early strength. We also supply a complete portfolio
                of cementitious grouts, epoxy grouts, PMMA grouts and polyurethane grouts, trusted in the
                market for their technical performance, durability and waterproofing ability.
              </p>
              <p>
                We work shoulder-to-shoulder with contractors, RMC plants, consultants and facility teams
                across South India — supplying material, yes, but also the dosage advice and site support
                that make it work.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

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

      <section className="bg-concrete py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="What Drives Us" title="How we work" />
          </Reveal>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map(({ Icon, title: t, body }, i) => (
              <Reveal key={t} as="li" delay={i * 80}>
                <div className="lift h-full rounded-sm border border-border bg-background p-8 hover:border-primary">
                  <span className="grid h-12 w-12 place-items-center rounded-sm bg-graphite text-on-dark">
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

      <CtaBanner />
    </>
  );
}
