import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  FlaskConical,
  Layers,
  ShieldCheck,
  Truck,
  Waves,
  Gauge,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Droplets,
  Wrench,
  Building2,
  Factory,
  ChevronRight,
  ChevronDown,
  Phone,
  MessageCircle,
  FileText,
  Package,
  HelpCircle,
  Clock,
  Layers3,
  TestTube2,
  Scale,
  Search,
  Check,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/ui";
import { allProducts, type ProductItem } from "@/components/site/data";
import { cn } from "@/lib/utils";

const title = "Products Catalogue | Concrete Admixtures, Waterproofing, Grouts & Repair in Chennai";
const description =
  "Complete technical catalogue of construction chemicals: Concrete Admixtures, Waterproofing Chemicals, PU Injection Grouting, Non-Shrink Grout, Micro Concrete, Concrete Repair, Epoxy Grouting & Protective Coatings.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "concrete admixtures Chennai, waterproofing chemicals, PU injection grouting, non-shrink grout, micro concrete, concrete repair, epoxy grouting, protective coatings" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

const productIcons: Record<string, any> = {
  "concrete-admixtures": FlaskConical,
  "waterproofing-chemicals": Droplets,
  "pu-injection-grouting": Waves,
  "non-shrink-grout": Layers,
  "micro-concrete": Building2,
  "concrete-repair": Wrench,
  "epoxy-grouting": Factory,
  "protective-coatings": ShieldCheck,
};

const productDetailsExtended: Record<
  string,
  {
    problemSolved: string;
    substrateSuitability: string;
    procedure: string[];
    packaging: string;
    faqs: { q: string; a: string }[];
  }
> = {
  "concrete-admixtures": {
    problemSolved: "Overcomes rapid slump loss, high water demand, honeycombing, and delayed strength development during high-temperature concrete batching and long transit in South India.",
    substrateSuitability: "OPC 43/53, PPC, PSC, fly ash blends, GGBS, micro-silica, crushed sand (M-sand), and river sand mixes.",
    procedure: [
      "Dose admixture directly into gauging water or at the final 10% batching water cycle.",
      "Mix thoroughly in batching pan or transit mixer drum for minimum 60–90 seconds.",
      "Conduct on-site slump cone and flow table test to verify targeted rheology.",
      "Follow standard IS 456 curing regimes to lock in peak hydration.",
    ],
    packaging: "20kg Plastic Cans, 220kg HDPE Barrels, 1000L Bulk IBC Containers.",
    faqs: [
      {
        q: "What is the recommended dosage for PCE superplasticisers?",
        a: "Typically 0.4% to 1.8% by weight of total cementitious binder, optimized via plant trial mix.",
      },
    ],
  },
  "waterproofing-chemicals": {
    problemSolved: "Prevents sub-soil water ingress, capillary water seepage, dampness, mold formation, and steel rebar corrosion in basements, retaining walls, and water tanks.",
    substrateSuitability: "Structural concrete, RCC retaining walls, block masonry, cement plaster, and mortar beds.",
    procedure: [
      "High-pressure water jet substrate to remove laitance, form-release oils, and dirt.",
      "Pre-saturate concrete surface to Saturated Surface Dry (SSD) condition.",
      "Apply 2 uniform cross-coats using masonry brush at 1.2 – 1.5 kg/m².",
      "Moist cure with fine water mist spray for 48 hours to activate crystalline needle growth.",
    ],
    packaging: "20kg HDPE Pails, 25kg Poly-lined Bags, 200L Barrels.",
    faqs: [
      {
        q: "How does crystalline waterproofing self-heal micro-cracks?",
        a: "Active chemical catalysts react with free lime in the presence of moisture to grow non-soluble dendritic crystals sealing cracks up to 0.4mm.",
      },
    ],
  },
  "pu-injection-grouting": {
    problemSolved: "Instantly stops gushing water leaks under high hydrostatic pressure in concrete cracks, expansion joints, basement diaphragm walls, and tunnel segments.",
    substrateSuitability: "Poured concrete walls, construction joints, brick/stone masonry, and precast segment junctions.",
    procedure: [
      "Drill 45-degree angle injection holes intersecting the crack at midpoint.",
      "Fix high-pressure mechanical injection packers and tighten firmly.",
      "Flush crack with water to verify interconnection and remove debris.",
      "Inject hydro-active PU resin at 50–200 bar until foaming resin emerges from adjacent ports.",
    ],
    packaging: "5kg & 20kg Metal Cans with separate catalyst bottles.",
    faqs: [
      {
        q: "How fast does the PU resin react with ingress water?",
        a: "Reaction induction starts within 15–30 seconds, expanding up to 30x volume to form a tough impermeable seal.",
      },
    ],
  },
  "non-shrink-grout": {
    problemSolved: "Eliminates shrinkage voids, air pockets, and loose baseplates beneath vibrating machinery, structural columns, and precast bridge bearings.",
    substrateSuitability: "Roughened concrete foundation pedestals, base plates, and steel anchor bolt pockets.",
    procedure: [
      "Scabble concrete pedestal to expose sound aggregate and saturate with water for 24h prior.",
      "Erect sturdy leak-proof formwork allowing a 50mm head for gravity flow.",
      "Mix mechanically with measured clean water (approx. 3.5L per 25kg bag).",
      "Pour continuously from one side only to avoid air entrapment.",
    ],
    packaging: "25kg Moisture-resistant HDPE woven bags with plastic liner.",
    faqs: [
      {
        q: "What compressive strength is achieved at 28 days?",
        a: "Our cementitious non-shrink grout reaches >75 MPa at 28 days and >25 MPa in 24 hours.",
      },
    ],
  },
  "micro-concrete": {
    problemSolved: "Restores spalled, honeycombed, or undersized concrete structural columns, beams, and slabs without requiring heavy mechanical vibration.",
    substrateSuitability: "Existing RCC columns, beams, foundation footings, and bridge piers.",
    procedure: [
      "Chip unsound concrete beyond exposed steel rebar and apply zinc-rich anti-corrosion primer.",
      "Drill and anchor shear rebar dowels where structural section enlargement is required.",
      "Erect rigid, watertight shuttering with top hopper pouring chutes.",
      "Mix micro concrete with 3.5–3.75L water per 25kg bag and pour continuously without vibrating.",
    ],
    packaging: "25kg & 40kg Heavy-duty moisture-barrier bags.",
    faqs: [
      {
        q: "Can micro concrete flow into tight congested rebar cages?",
        a: "Yes, formulated with graded micro-aggregates and high-fluidity polymers, it is self-compacting and fills intricate jackets void-free.",
      },
    ],
  },
  "concrete-repair": {
    problemSolved: "Repairs structural defects, spalling, carbonation attack, and corrosion delamination while restoring structural load bearing and alkaline protection to steel.",
    substrateSuitability: "Damaged concrete structures, overhead slabs, beam soffits, marine piers, and bridge decks.",
    procedure: [
      "Saw cut edges to minimum 10mm depth to prevent feather edging.",
      "Clean exposed steel rebar and apply active anti-corrosion polymer coat.",
      "Apply bonding slurry coat while tacky.",
      "Trowel-apply polymer-modified mortar in layers up to 40mm and finish smooth.",
    ],
    packaging: "25kg Bags with optional liquid polymer mixing bottles.",
    faqs: [
      {
        q: "Can this mortar be applied overhead without sagging?",
        a: "Yes, our thixotropic formulations prevent slump/sag in vertical and overhead repairs up to 40mm single pass.",
      },
    ],
  },
  "epoxy-grouting": {
    problemSolved: "Provides extraordinary compressive strength, dynamic fatigue resistance, and total impermeability to chemicals, oils, and acids beneath heavy industrial mills.",
    substrateSuitability: "Heavy machinery plinths, crane rail soleplates, chemical sump pump foundations, and tie-back anchors.",
    procedure: [
      "Ensure concrete substrate is completely dry (moisture content < 4%) and oil-free.",
      "Mix Base (Resin) and Hardener for 2 minutes before adding graded silica aggregates.",
      "Pour into leak-proof waxed formwork using a flow box for hydrostatic head.",
      "Allow 24–48 hours full chemical cure before applying machine operating load.",
    ],
    packaging: "3-Part Pre-proportioned System (Resin + Hardener + Aggregates) in 15kg & 30kg Kits.",
    faqs: [
      {
        q: "What is the compressive strength of epoxy grout?",
        a: "Our 3-part epoxy grout exceeds 95 MPa compressive strength and 25 MPa flexural strength.",
      },
    ],
  },
  "protective-coatings": {
    problemSolved: "Shields concrete and steel against UV degradation, carbonation, acid rain, industrial chemical spills, and heavy forklift wheel abrasion.",
    substrateSuitability: "Concrete facades, parking garage decks, chemical bund walls, wastewater treatment basins, and roofs.",
    procedure: [
      "Diamond grind or grit blast concrete to achieve an open CSP-2/3 surface profile.",
      "Apply penetrating epoxy/PU primer to seal micro-pores and prevent pinholes.",
      "Apply first coat of high-build protective coating using roller or airless spray.",
      "Apply second cross-coat after 6–8 hours inter-coat window for complete pinhole-free film.",
    ],
    packaging: "5kg & 20kg Sets (Base + Hardener).",
    faqs: [
      {
        q: "How long does the anti-carbonation coating protect concrete?",
        a: "Accelerated weathering tests confirm over 10+ years of active carbon dioxide diffusion barrier protection.",
      },
    ],
  },
};

function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedProcedure, setExpandedProcedure] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Products" },
    { id: "admixtures", label: "Admixtures" },
    { id: "waterproofing", label: "Waterproofing" },
    { id: "grouts", label: "Grouts" },
    { id: "repair", label: "Repair & Micro Concrete" },
    { id: "coatings", label: "Coatings" },
  ];

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

    const matchesSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.standard.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.dosage.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHero
        eyebrow="Certified Formulations"
        title="8 Construction Chemical Product Families"
        intro="Engineered in Chennai to rigorous IS & ASTM benchmarks — supporting ready-mix concrete plants, civil contractors, and industrial infrastructure projects across South India."
      />

      {/* 1. INTERACTIVE FILTER & SEARCH DOCK */}
      <section className="bg-muted/40 border-b border-border/80 py-6">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5 shadow-sm space-y-4">
            {/* Top Bar: Section Title, Count & Search Input */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#669930]" />
                <span className="font-mono text-xs font-bold uppercase text-[#054782]">
                  Select Formulation Discipline
                </span>
                <span className="font-mono text-[0.68rem] text-muted-foreground bg-muted px-2 py-0.5 rounded-full border border-border/60">
                  {filteredProducts.length} {filteredProducts.length === 1 ? "Family" : "Families"}
                </span>
              </div>

              {/* Live Search Input */}
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#054782]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search chemical, IS/ASTM standard..."
                  className="w-full rounded-xl border border-border/80 bg-background pl-10 pr-4 py-2 text-xs font-semibold text-foreground placeholder:text-muted-foreground focus:border-[#054782] focus:outline-none focus:ring-2 focus:ring-[#054782]/20"
                />
              </div>
            </div>

            {/* Symmetrical 6-Column Category Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 w-full pt-1 border-t border-border/50">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "flex items-center justify-center rounded-xl px-3 py-2.5 font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border text-center",
                      isSelected
                        ? "border-[#054782] bg-[#054782] text-white shadow-md shadow-[#054782]/25"
                        : "border-border/80 bg-background text-foreground/80 hover:text-[#054782] hover:border-[#054782]/40 hover:bg-muted/40",
                    )}
                  >
                    <span className="truncate">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT SPECIFICATION CARDS GRID */}
      <section className="bg-background py-10 lg:py-16 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-[#054782]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-48 h-96 w-96 rounded-full bg-[#669930]/5 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProducts.map((p, idx) => {
              const CardIcon = productIcons[p.id] || FlaskConical;
              const ext = productDetailsExtended[p.id] || productDetailsExtended["concrete-admixtures"];
              const isProcOpen = expandedProcedure === p.id;

              return (
                <div
                  key={p.id}
                  id={p.id}
                  className="scroll-mt-28 group relative rounded-2xl border border-border/80 bg-card overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top Accent Gradient Line */}
                  <div className="h-1 w-full bg-gradient-to-r from-[#054782] via-[#669930] to-[#054782]" />

                  <div>
                    {/* Visual Banner Header */}
                    <div className="relative aspect-[24/9] w-full overflow-hidden bg-muted">
                      <img
                        src={p.image}
                        alt={p.alt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b274c]/95 via-[#0b274c]/40 to-transparent" />

                      {/* Floating Badges */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-white border border-white/20 shadow-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#669930] animate-pulse" />
                          0{idx + 1} • {p.category}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3 z-10">
                        <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/20 text-white backdrop-blur-md shadow-xs">
                          <CardIcon className="h-3.5 w-3.5" />
                        </span>
                      </div>

                      <div className="absolute bottom-2 left-3 right-3 z-10">
                        <span className="font-mono text-[0.62rem] font-bold uppercase tracking-wider text-[#669930] block">
                          Testing Standard: {p.standard.split("•")[0].trim()}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-4 sm:p-5 space-y-3">
                      <div>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-[#054782] transition-colors leading-tight">
                          {p.title}
                        </h3>
                        <p className="mt-0.5 font-mono text-[0.72rem] font-semibold text-[#054782]">
                          {p.tagline}
                        </p>
                      </div>

                      {/* Problem Solved Container */}
                      <div className="rounded-xl border border-border/70 bg-muted/25 p-3">
                        <span className="font-mono text-[0.62rem] font-bold uppercase tracking-wider text-[#054782] flex items-center gap-1.5">
                          <HelpCircle className="h-3 w-3 text-[#669930]" /> What Problem It Solves
                        </span>
                        <p className="mt-1 text-[0.74rem] text-foreground/90 leading-relaxed font-sans">
                          {ext.problemSolved}
                        </p>
                      </div>

                      {/* Key Parameter Badges */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="rounded-lg border border-[#669930]/30 bg-[#669930]/5 p-2.5">
                          <span className="block font-mono text-[0.6rem] font-bold uppercase text-[#669930]">
                            Dosage / Coverage
                          </span>
                          <span className="font-display text-xs font-bold text-foreground mt-0.5 block truncate">
                            {p.dosage}
                          </span>
                        </div>

                        <div className="rounded-lg border border-[#054782]/30 bg-[#054782]/5 p-2.5">
                          <span className="block font-mono text-[0.6rem] font-bold uppercase text-[#054782]">
                            Standard Packaging
                          </span>
                          <span className="font-mono text-xs font-bold text-foreground mt-0.5 block truncate">
                            {ext.packaging.split(",")[0].trim()}
                          </span>
                        </div>
                      </div>

                      {/* Features Bullet List */}
                      <div className="space-y-1 pt-0.5">
                        {p.features.slice(0, 3).map((feat) => (
                          <div key={feat} className="flex items-center gap-1.5 text-[0.74rem] text-muted-foreground">
                            <Check className="h-3 w-3 text-[#669930] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Application Procedure Collapsible Accordion */}
                      <div className="rounded-xl border border-border/70 bg-card overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setExpandedProcedure(isProcOpen ? null : p.id)}
                          className="flex w-full items-center justify-between p-2.5 text-left font-display text-[0.72rem] font-bold text-foreground hover:bg-muted/40 transition-colors cursor-pointer"
                        >
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-3 w-3 text-[#054782]" />
                            <span>4-Step Application Procedure</span>
                          </span>
                          <ChevronDown
                            className={cn(
                              "h-3.5 w-3.5 text-muted-foreground transition-transform duration-300",
                              isProcOpen && "rotate-180 text-[#054782]",
                            )}
                          />
                        </button>

                        {isProcOpen && (
                          <div className="p-3 pt-1 border-t border-border/60 bg-muted/20 space-y-1.5 animate-in fade-in duration-300">
                            {ext.procedure.map((step, sIdx) => (
                              <div key={step} className="flex items-start gap-2 text-[0.72rem] text-muted-foreground">
                                <span className="font-mono font-bold text-[#054782] shrink-0">
                                  #{sIdx + 1}
                                </span>
                                <span className="leading-relaxed font-sans">{step}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="p-4 sm:p-5 pt-3 border-t border-border/60 mt-2 flex items-center justify-end">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background px-3.5 py-2 font-display text-[0.72rem] font-bold uppercase tracking-wider text-foreground hover:bg-muted/50 hover:text-[#054782] transition-all"
                    >
                      <span>Request TDS / Trial</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. MASTER CHEMICAL CROSS-REFERENCE MATRIX (TABLE VIEW) */}
      <section className="bg-muted/20 py-14 lg:py-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b border-border/60">
              <div>
                <p className="eyebrow flex items-center gap-2.5 text-[#669930]">
                  <span className="h-0.5 w-6 bg-[#669930]" aria-hidden /> Formulation Matrix
                </p>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
                  Chemical Formulations Comparison
                </h2>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl">
                  Quick engineering cross-reference across all 8 chemical product families.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Table Container */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-border/80 bg-card shadow-md">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-border/80 bg-muted/50 font-mono text-[0.68rem] uppercase tracking-wider text-muted-foreground">
                  <th className="py-3.5 px-4 font-bold text-[#054782] w-[28%]">Product Family</th>
                  <th className="py-3.5 px-4 font-bold w-[18%]">Key Standard</th>
                  <th className="py-3.5 px-4 font-bold text-[#669930] w-[28%]">Dosage / Coverage</th>
                  <th className="py-3.5 px-4 font-bold w-[26%]">Standard Packaging</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {allProducts.map((p, idx) => {
                  const ext = productDetailsExtended[p.id] || productDetailsExtended["concrete-admixtures"];
                  return (
                    <tr
                      key={p.id}
                      className="transition-colors hover:bg-muted/30 group"
                    >
                      <td className="py-3.5 px-4 font-display font-bold text-foreground group-hover:text-[#054782] transition-colors">
                        <span className="font-mono text-[0.68rem] text-[#669930] mr-1.5">0{idx + 1}.</span>
                        {p.title}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[0.72rem] text-muted-foreground">
                        {p.standard.split("•")[0].trim()}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[0.72rem] text-[#669930] leading-snug">
                        {p.dosage}
                      </td>
                      <td className="py-3.5 px-4 text-[0.72rem] text-muted-foreground leading-snug">
                        {ext.packaging}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
