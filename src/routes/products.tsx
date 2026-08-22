import { createFileRoute } from "@tanstack/react-router";
import { Gauge, Layers, ShieldCheck, Truck, Waves } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ProductGrid } from "@/components/site/ProductGrid";
import { CtaBanner } from "@/components/site/CtaBanner";
import { SectionHeading } from "@/components/site/ui";
import { admixtureUses } from "@/components/site/data";

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

const useIcons = [Gauge, Waves, ShieldCheck, Layers, Truck];

const ranges = [
  {
    title: "Admixture Range",
    items: ["PCE Superplasticisers", "Retarders", "Accelerators", "Air Entrainers", "Waterproofing Admixtures"],
  },
  {
    title: "Grout Range",
    items: ["Cementitious Non-shrink", "Epoxy Grout", "PMMA Grout", "Polyurethane Grout", "Anchor Grout"],
  },
  {
    title: "Protective Systems",
    items: ["Crystalline Waterproofing", "PU Membranes", "Acrylic Coatings", "Bonding Agents", "Curing Compounds"],
  },
];

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Explore Our Products"
        intro="Forty-plus formulations across admixtures, grouts, waterproofing and repair — each supplied with data sheets and dosage guidance."
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ProductGrid />

          <Reveal className="mt-20 rounded-sm border border-border bg-secondary/60 p-8 lg:p-12">
            <h2 className="font-display text-xl font-bold sm:text-2xl">
              Our concrete admixtures are recommended for:
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {admixtureUses.map((u, i) => {
                const Icon = useIcons[i] ?? Layers;
                return (
                  <li key={u} className="lift flex flex-col gap-3 rounded-sm border border-border bg-background p-5">
                    <Icon className="h-6 w-6 text-primary" />
                    <span className="font-display text-sm font-bold leading-snug">{u}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-concrete py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Full Catalogue" title="Ranges at a glance" />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {ranges.map((r, i) => (
              <Reveal key={r.title} delay={i * 90}>
                <div className="lift h-full rounded-sm border border-border bg-background p-8 hover:border-primary">
                  <h3 className="font-display text-lg font-bold">{r.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {r.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 shrink-0 bg-primary" aria-hidden />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
