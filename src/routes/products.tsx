import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  FlaskConical,
  Layers,
  ShieldCheck,
  Waves,
  ArrowRight,
  Droplets,
  Wrench,
  Building2,
  Factory,
  Search,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { allProducts, type ProductItem } from "@/components/site/data";
import { cn } from "@/lib/utils";

const title = "Construction Chemicals Catalog & Products | Vchemics";
const description =
  "Explore high-performance concrete admixtures, crystalline waterproofing, PU injection grouts, non-shrink grouts & repair mortars from Vchemics in Chennai.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "concrete admixtures Chennai, Fosroc dealer Chennai, Brushbond, Nitobond EP, Conplast SP430, Conbextra GP2, Auramix, crystalline waterproofing, non-shrink grout Tamil Nadu",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.vchemicsindia.com/products" },
      { property: "og:image", content: "https://www.vchemicsindia.com/image.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.vchemicsindia.com/products" }],
  }),
  component: ProductsPage,
});

const productIcons: Record<string, LucideIcon> = {
  "concrete-admixtures": FlaskConical,
  "waterproofing-chemicals": Droplets,
  "pu-injection-grouting": Waves,
  "non-shrink-grout": Layers,
  "micro-concrete": Building2,
  "concrete-repair": Wrench,
  "epoxy-grouting": Factory,
  "protective-coatings": ShieldCheck,
};

function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Products" },
    { id: "admixtures", label: "Admixtures" },
    { id: "waterproofing", label: "Waterproofing" },
    { id: "grouts", label: "Grouts" },
    { id: "repair", label: "Repair & Micro Concrete" },
    { id: "coatings", label: "Coatings" },
  ];

  // Filter Core Products
  const filteredProducts = allProducts.filter((p) => {
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "admixtures" && p.id === "concrete-admixtures") ||
      (selectedCategory === "waterproofing" &&
        (p.id === "waterproofing-chemicals" || p.id === "pu-injection-grouting")) ||
      (selectedCategory === "grouts" &&
        (p.id === "non-shrink-grout" || p.id === "epoxy-grouting")) ||
      (selectedCategory === "repair" &&
        (p.id === "micro-concrete" || p.id === "concrete-repair")) ||
      (selectedCategory === "coatings" && p.id === "protective-coatings");

    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      query === "" ||
      p.title.toLowerCase().includes(query) ||
      p.tagline.toLowerCase().includes(query) ||
      p.standard.toLowerCase().includes(query) ||
      p.dosage.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHero
        eyebrow="Certified Formulations & Dealer Stock"
        title="Engineered Systems & Certified Dealer Stock"
        intro="In-house engineered systems built to IS & ASTM benchmarks, plus 100+ certified formulations we stock as an authorized dealer — supplying RMC plants, infrastructure projects, and civil contractors across South India."
      />

      {/* 1. SLIM INTERACTIVE FILTER & SEARCH DOCK */}
      <section className="bg-muted/40 border-b border-border/80 py-3 sticky top-14 sm:top-16 z-30 backdrop-blur-md bg-white/95 transition-all duration-300">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="rounded-xl border border-border/80 bg-card p-2 sm:p-2.5 shadow-xs flex flex-col md:flex-row items-center justify-between gap-2.5">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "flex items-center justify-center rounded-lg px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border text-center",
                      isSelected
                        ? "border-brand-blue bg-brand-blue text-white shadow-xs"
                        : "border-border/70 bg-background text-foreground/80 hover:text-brand-blue hover:border-brand-blue/30 hover:bg-muted/40",
                    )}
                  >
                    <span className="truncate">{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-brand-blue" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search chemicals, brands, standards..."
                className="w-full rounded-lg border border-border/80 bg-background pl-8.5 pr-3 py-1.5 text-xs font-semibold text-foreground placeholder:text-muted-foreground focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT CARDS GRID (8 CORE ENGINEERED SYSTEMS) */}
      <section className="bg-background py-10 lg:py-16 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-48 h-96 w-96 rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Section Header */}
          <div className="pb-6">
            <p className="eyebrow flex items-center gap-2 text-brand-blue font-mono text-xs font-bold uppercase tracking-wider">
              <span className="h-2 w-2 rounded-full bg-brand-blue" />
              IN-HOUSE ENGINEERED SYSTEMS
            </p>
            <h2 className="mt-1.5 font-display text-2xl sm:text-3xl font-bold text-foreground">
              Vchemics Core Chemical Families
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Formulated in Chennai to stringent IS and ASTM specifications for heavy-duty civil
              performance.
            </p>
          </div>

          {/* Cards Grid */}
          {filteredProducts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border/80 bg-muted/20 p-8 text-center text-xs text-muted-foreground">
              No in-house core products match "{searchQuery}" in this category.
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
              {filteredProducts.map((p, idx) => {
                const CardIcon = productIcons[p.id] || FlaskConical;

                return (
                  <Link
                    key={p.id}
                    to="/products/$slug"
                    params={{ slug: p.id }}
                    className="group relative rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs hover:shadow-xl hover:border-brand-blue/40 transition-all duration-300 h-full flex flex-col justify-between"
                  >
                    {/* Top Accent Gradient Line */}
                    <div className="h-1 w-full bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue" />

                    <div className="flex-1 flex flex-col">
                      {/* Visual Banner Thumbnail */}
                      <div className="relative aspect-16/10 w-full overflow-hidden bg-muted/30">
                        {p.image ? (
                          <img
                            src={p.image}
                            alt={p.alt || `${p.title} - IS & ASTM Standard Construction Chemical`}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <ImagePlaceholder label={`+ Add ${p.title} Site Photo`} />
                        )}

                        {/* Ambient Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                        {/* Floating Badges */}
                        <div className="absolute top-2.5 left-2.5 z-10">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 font-mono text-[0.62rem] font-bold uppercase tracking-wider text-white border border-white/20 shadow-xs">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
                            0{idx + 1} • {p.category}
                          </span>
                        </div>

                        <div className="absolute top-2.5 right-2.5 z-10">
                          <span className="grid h-6 w-6 place-items-center rounded-lg bg-white/20 text-white backdrop-blur-md shadow-xs">
                            <CardIcon className="h-3 w-3" />
                          </span>
                        </div>

                        <div className="absolute bottom-2 left-2.5 right-2.5 z-10">
                          <span className="font-mono text-[0.6rem] font-bold uppercase tracking-wider text-brand-green block drop-shadow-xs truncate">
                            {p.standard.split("•")[0]?.trim() ?? p.standard}
                          </span>
                        </div>
                      </div>

                      {/* Card Content Body */}
                      <div className="p-4 sm:p-5 space-y-2.5 flex-1 flex flex-col">
                        <div>
                          <h3 className="font-display text-base sm:text-lg font-bold text-foreground group-hover:text-brand-blue transition-colors leading-snug">
                            {p.title}
                          </h3>
                          <p className="mt-0.5 font-mono text-[0.68rem] font-semibold text-brand-blue truncate">
                            {p.tagline}
                          </p>
                        </div>

                        <p className="text-xs text-foreground/80 leading-relaxed font-sans flex-1">
                          {p.description}
                        </p>
                      </div>
                    </div>

                    {/* Card Action Footer */}
                    <div className="p-4 sm:p-5 pt-3 border-t border-border/60 mt-1 flex items-center justify-between">
                      <span className="text-[0.72rem] font-display font-bold text-brand-blue group-hover:text-brand-green transition-colors">
                        View Full Specifications
                      </span>
                      <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
