import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  Sparkles,
  Search,
  FileText,
  CheckCircle2,
  Phone,
  MessageCircle,
  HelpCircle,
  X,
  Share2,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/ui";
import { cn } from "@/lib/utils";

const title = "Knowledge Centre & Technical Guides | Concrete Chemicals & Waterproofing Standards";
const description =
  "Technical engineering articles on concrete admixtures, PU injection grouting, crystalline waterproofing, micro concrete, non-shrink grouting & crack repair methods.";

export interface KnowledgeArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  summary: string;
  content: {
    heading: string;
    body: string;
  }[];
  relatedProducts: { name: string; link: string }[];
  tags: string[];
}

export const allKnowledgeArticles: KnowledgeArticle[] = [
  {
    id: "what-is-concrete-admixture-how-it-works",
    slug: "what-is-concrete-admixture-how-it-works",
    title: "What is Concrete Admixture and How Does It Work?",
    category: "Concrete Admixtures",
    date: "February 2025",
    readTime: "6 min read",
    author: "Senior Formulation Chemist",
    summary: "A fundamental engineering guide explaining chemical plasticisation, steric hindrance in PCE polymers, water-cement ratio optimization, and compressive strength gains.",
    content: [
      {
        heading: "1. The Chemical Role of Admixtures",
        body: "Concrete admixtures are chemical formulations added during mixing to modify fresh and hardened concrete properties. Without changing cement content, they disperse cement particles and reduce water demand up to 30%.",
      },
      {
        heading: "2. Electrostatic Repulsion vs Steric Hindrance",
        body: "Traditional SNF plasticisers work by imparting negative electrical charges causing electrostatic repulsion. Modern Polycarboxylate Ether (PCE) admixtures utilize long polyethylene glycol graft chains that create steric hindrance, preventing cement agglomeration far more effectively.",
      },
      {
        heading: "3. Impact on Durability & Strength",
        body: "By reducing excess mixing water, admixtures dramatically decrease capillary pore volumes in the concrete matrix. This results in significantly higher 7-day and 28-day compressive strengths and reduced permeability against water and chloride ingress.",
      },
    ],
    relatedProducts: [
      { name: "Concrete Admixtures (PCE)", link: "/products#concrete-admixtures" },
      { name: "Waterproofing Chemicals", link: "/products#waterproofing-chemicals" },
    ],
    tags: ["Admixtures", "PCE", "IS 9103", "Mix Design"],
  },
  {
    id: "types-of-concrete-admixtures-applications",
    slug: "types-of-concrete-admixtures-applications",
    title: "Types of Concrete Admixtures and Their Applications",
    category: "Concrete Admixtures",
    date: "February 2025",
    readTime: "7 min read",
    author: "RMC Technical Specialist",
    summary: "Detailed classification of IS 9103 & ASTM C494 admixtures: plasticisers, superplasticisers, retarders, accelerators, and air-entraining agents.",
    content: [
      {
        heading: "1. Plasticisers & High-Range Superplasticisers (HRWR)",
        body: "Engineered for ready-mix concrete, pumped mixes, and self-compacting concrete (SCC) requiring high slump flow (>600mm) without aggregate segregation.",
      },
      {
        heading: "2. Setting Retarders for Tropical Climates",
        body: "Crucial for South India's summer temperatures (35°C–42°C), retarding agents slow down initial cement hydration to extend transit windows up to 3 hours, avoiding cold joints.",
      },
      {
        heading: "3. Accelerators for Fast Demoulding",
        body: "Precast concrete plants use accelerating admixtures to achieve high 24-hour demoulding strengths, doubling mould turnaround efficiency.",
      },
    ],
    relatedProducts: [
      { name: "Concrete Admixtures", link: "/products#concrete-admixtures" },
    ],
    tags: ["ASTM C494", "Superplasticisers", "Retarders", "RMC"],
  },
  {
    id: "what-is-pu-injection-grouting",
    slug: "what-is-pu-injection-grouting",
    title: "What is PU Injection Grouting and How Does It Stop Leaks?",
    category: "Injection Systems",
    date: "January 2025",
    readTime: "5 min read",
    author: "Field Applications Engineer",
    summary: "How hydro-active polyurethane resins react violently with live water ingress to expand up to 30x and permanently seal active basement leaks.",
    content: [
      {
        heading: "1. The Principle of Hydro-Active Chemistry",
        body: "PU injection resin is a hydrophobic low-viscosity prepolymer. When pumped into concrete cracks containing water, it triggers an immediate chemical reaction, forming an expanding closed-cell elastomeric foam.",
      },
      {
        heading: "2. Expansion & Pressure Sealing",
        body: "Expanding 20x to 30x in under 45 seconds, the foam penetrates deep into microscopic fissures, displacing water and locking into the concrete pore structure.",
      },
      {
        heading: "3. High-Pressure Mechanical Packer Method",
        body: "Installed via 45-degree angle drilled holes, mechanical packers withstand injection pressures up to 250 bar to ensure full depth penetration across the structural wall cross-section.",
      },
    ],
    relatedProducts: [
      { name: "PU Injection Grouting", link: "/products#pu-injection-grouting" },
      { name: "Basement Waterproofing", link: "/solutions#basement-waterproofing" },
    ],
    tags: ["PU Injection", "Water Leak Sealing", "Packers", "Basements"],
  },
  {
    id: "pu-grouting-vs-epoxy-grouting",
    slug: "pu-grouting-vs-epoxy-grouting",
    title: "PU Grouting vs Epoxy Grouting: How to Choose the Right Solution",
    category: "Precision Grouts",
    date: "January 2025",
    readTime: "6 min read",
    author: "Materials Engineer",
    summary: "Direct technical comparison between elastomeric PU resins for active water stops and rigid high-strength epoxy grouts for structural load transfer.",
    content: [
      {
        heading: "1. Polyurethane (PU) Grout: The Water-Stopping Champion",
        body: "Best for active water leaks, expansion joints, and moving cracks. Flexible and accommodating of structural thermal movement.",
      },
      {
        heading: "2. Epoxy Grout: The High-Strength Structural Leader",
        body: "Best for dry machine baseplates, heavy crane rails, anchor doweling, and structural crack welding where compressive strengths >90 MPa are required.",
      },
      {
        heading: "3. Key Decision Matrix",
        body: "Choose PU for live water seepage in basements and tunnels. Choose Epoxy for vibration resistance, chemical plant plinths, and structural bonding.",
      },
    ],
    relatedProducts: [
      { name: "PU Injection Grouting", link: "/products#pu-injection-grouting" },
      { name: "Epoxy Grouting", link: "/products#epoxy-grouting" },
    ],
    tags: ["PU vs Epoxy", "Grouting Guide", "Machine Plinths"],
  },
  {
    id: "common-causes-concrete-cracks-repair-methods",
    slug: "common-causes-concrete-cracks-repair-methods",
    title: "Common Causes of Concrete Cracks and Proven Repair Methods",
    category: "Repair & Rehabilitation",
    date: "December 2024",
    readTime: "8 min read",
    author: "Rehabilitation Consultant",
    summary: "Diagnostic guide to plastic shrinkage, thermal cracking, settlement, carbonation, and rebar corrosion with EN 1504 restorative protocols.",
    content: [
      {
        heading: "1. Diagnosis of Crack Types",
        body: "Non-structural cracks (crazing, plastic shrinkage) require surface polymer sealers, whereas active structural cracks and rebar corrosion delamination demand structural repair mortars.",
      },
      {
        heading: "2. Rebar Rust Passivation Protocol",
        body: "Exposed corroded steel must be mechanically wire-brushed and coated immediately with zinc-rich primers to halt galvanic electrochemical degradation.",
      },
      {
        heading: "3. Mortar Selection & Build-Up",
        body: "Apply thixotropic polymer modified structural repair mortars wet-on-wet over polymer bonding coats to guarantee monolithic stress transfer.",
      },
    ],
    relatedProducts: [
      { name: "Concrete Repair Mortars", link: "/products#concrete-repair" },
      { name: "Micro Concrete", link: "/products#micro-concrete" },
    ],
    tags: ["Crack Repair", "EN 1504", "Rebar Corrosion", "Polymer Mortar"],
  },
  {
    id: "what-is-micro-concrete-where-is-it-used",
    slug: "what-is-micro-concrete-where-is-it-used",
    title: "What is Micro Concrete and Where Is It Used?",
    category: "Structural Repair",
    date: "December 2024",
    readTime: "6 min read",
    author: "Structural Restoration Chemist",
    summary: "How shrinkage-compensated, self-flowing micro concrete enables column jacketing, section enlargement, and deep honeycombing repair without vibration.",
    content: [
      {
        heading: "1. Micro Concrete Formulation",
        body: "A pre-blended mix of special cements, graded spherical aggregates (<5mm), high-range plasticisers, and shrinkage compensating agents.",
      },
      {
        heading: "2. Key Advantages Over Normal Concrete",
        body: "Flows effortlessly around dense rebar cages, requires zero mechanical poker vibration, and achieves >60 MPa 28-day compressive strength with negligible shrinkage.",
      },
      {
        heading: "3. Primary Engineering Applications",
        body: "RCC column and beam jacketing, seismic retrofitting, bridge pier section enlargement, and deep mass honeycombing rectification.",
      },
    ],
    relatedProducts: [
      { name: "Micro Concrete R4", link: "/products#micro-concrete" },
      { name: "Structural Rehabilitation", link: "/solutions#structural-rehabilitation" },
    ],
    tags: ["Micro Concrete", "Column Jacketing", "Section Enlargement"],
  },
  {
    id: "non-shrink-grout-applications-benefits",
    slug: "non-shrink-grout-applications-benefits",
    title: "Non-Shrink Grout: Applications and Engineering Benefits",
    category: "Precision Grouts",
    date: "November 2024",
    readTime: "6 min read",
    author: "Precision Materials Lab",
    summary: "Why ASTM C1107 non-shrink grouts are critical for machinery baseplates, anchor dowels, and precast connections to prevent load transfer failure.",
    content: [
      {
        heading: "1. The Physics of Non-Shrink Formulations",
        body: "Standard cement mortars shrink as excess water evaporates, leaving hollow voids beneath baseplates. Non-shrink grouts incorporate controlled expansion mechanisms ensuring 100% Effective Bearing Area (EBA).",
      },
      {
        heading: "2. Dynamic Vibration Resistance",
        body: "With compressive strengths exceeding 75 MPa, non-shrink grouts withstand severe cyclic loads from reciprocating compressors and industrial stamping presses.",
      },
      {
        heading: "3. Free-Flowing Gravity Placement",
        body: "Self-levels smoothly into tight gaps from 10mm to 100mm without segregation or bleeding.",
      },
    ],
    relatedProducts: [
      { name: "Non-Shrink Grout", link: "/products#non-shrink-grout" },
      { name: "Epoxy Grouting", link: "/products#epoxy-grouting" },
    ],
    tags: ["ASTM C1107", "Non-Shrink Grout", "Machine Baseplates"],
  },
  {
    id: "basement-waterproofing-methods",
    slug: "basement-waterproofing-methods",
    title: "Comprehensive Basement Waterproofing Methods (Raft & Walls)",
    category: "Waterproofing",
    date: "November 2024",
    readTime: "8 min read",
    author: "Waterproofing Engineering Head",
    summary: "Dual-barrier methodology: integral crystalline admixture dosing for the concrete matrix combined with external elastomeric membranes and hydrophilic waterstops.",
    content: [
      {
        heading: "1. Managing Hydrostatic Head Pressure",
        body: "Deep basements face constant subterranean water tables. Integral crystalline dosing converts the entire concrete pour into an active self-healing waterproof barrier.",
      },
      {
        heading: "2. Cold Construction Joint Protection",
        body: "Hydrophilic swellable waterstop bars expand upon contact with water, creating a tight physical gasket across kicker joints and slab-wall intersections.",
      },
      {
        heading: "3. Retaining Wall External Membranes",
        body: "Flexible elastomeric slurry coatings applied on exterior retaining walls provide secondary defense against soil sulfates and aggressive groundwater.",
      },
    ],
    relatedProducts: [
      { name: "Waterproofing Chemicals", link: "/products#waterproofing-chemicals" },
      { name: "Basement Waterproofing", link: "/solutions#basement-waterproofing" },
    ],
    tags: ["Basement Waterproofing", "Crystalline", "Waterstops"],
  },
  {
    id: "terrace-roof-waterproofing-methods",
    slug: "terrace-roof-waterproofing-methods",
    title: "Terrace and Roof Waterproofing: Methods and Materials",
    category: "Waterproofing",
    date: "October 2024",
    readTime: "7 min read",
    author: "Roof Systems Specialist",
    summary: "How seamless high-elongation polyurethane membranes withstand tropical thermal expansion cycles and prevent flat-roof ceiling seepage.",
    content: [
      {
        heading: "1. Thermal Cycling & Slab Movement",
        body: "Roof slabs undergo extreme daily temperature shifts (25°C to 50°C), creating dynamic micro-cracks that tear brittle traditional coatings.",
      },
      {
        heading: "2. Polyurethane Liquid Membranes (>400% Elongation)",
        body: "Liquid-applied PU elastomeric systems form a seamless monolithic rubber-like skin that bridges thermal cracks without rupture.",
      },
      {
        heading: "3. UV Reflective Aliphatic Topcoats",
        body: "Topcoat layers shield the membrane from UV degradation while reflecting solar heat to lower building cooling demands.",
      },
    ],
    relatedProducts: [
      { name: "Terrace Waterproofing", link: "/solutions#terrace-waterproofing" },
      { name: "Protective Coatings", link: "/products#protective-coatings" },
    ],
    tags: ["Terrace Waterproofing", "PU Membrane", "UV Protection"],
  },
  {
    id: "how-to-select-right-construction-chemical",
    slug: "how-to-select-right-construction-chemical",
    title: "How to Select the Right Construction Chemical for Your Project",
    category: "General Guide",
    date: "October 2024",
    readTime: "8 min read",
    author: "Technical Advisory Director",
    summary: "A practical decision framework evaluating project type, structural exposure, ambient temperature, application method, and IS/ASTM standards.",
    content: [
      {
        heading: "1. Step 1: Identify the Engineering Objective",
        body: "Whether reducing water-cement ratio, sealing active water leaks, leveling heavy machine bases, or enlarging load-bearing columns.",
      },
      {
        heading: "2. Step 2: Review Environmental & Substrate Constraints",
        body: "Assess ambient temperatures, transit durations, moisture levels in substrates, and exposure to aggressive chemical or coastal marine salts.",
      },
      {
        heading: "3. Step 3: Verify Certified Standards & Plant Trial",
        body: "Always demand manufacturer Test Certificates (IS 9103, IS 2645, ASTM C1107) and conduct plant trial mixes before mass batching.",
      },
    ],
    relatedProducts: [
      { name: "All 8 Product Formulations", link: "/products" },
      { name: "All 5 Structural Solutions", link: "/solutions" },
    ],
    tags: ["Selection Guide", "Standards", "Quality Assurance"],
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "concrete admixture guide, PU injection grouting Chennai, crystalline waterproofing guide, micro concrete standards, non shrink grout ASTM C1107, concrete crack repair" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KnowledgeCenterPage,
});

function KnowledgeCenterPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<KnowledgeArticle | null>(null);

  const categories = Array.from(
    new Set(allKnowledgeArticles.map((a) => a.category)),
  );

  const filteredArticles = allKnowledgeArticles.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(search.toLowerCase()) ||
      art.summary.toLowerCase().includes(search.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCat = activeCategory ? art.category === activeCategory : true;
    return matchesSearch && matchesCat;
  });

  return (
    <>
      <PageHero
        eyebrow="Knowledge Centre &amp; Engineering Blog"
        title="Technical Whitepapers, Standards &amp; Practical Guides"
        intro="In-depth engineering articles answering real construction site questions — written by our formulation chemists, materials engineers, and structural repair specialists."
      />

      {/* 2. SEARCH & CATEGORY FILTER BAR */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-border/80">
            <div>
              <p className="eyebrow flex items-center gap-2 text-[#669930]">
                <BookOpen className="h-4 w-4" /> 10 High-Intent Engineering Guides
              </p>
              <h2 className="mt-1 font-display text-2xl font-bold text-foreground">
                Browse Technical Articles
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search topics, codes, standards…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-border/80 bg-card pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#054782] focus:ring-2 focus:ring-[#054782]/10 outline-none"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase text-muted-foreground mr-1">
              Category:
            </span>
            <button
              onClick={() => setActiveCategory(null)}
              className={cn(
                "rounded-lg px-3 py-1 font-mono text-xs transition-colors cursor-pointer",
                activeCategory === null
                  ? "bg-[#054782] text-white font-bold"
                  : "border border-border/80 bg-muted/40 text-muted-foreground hover:bg-muted",
              )}
            >
              All Topics ({allKnowledgeArticles.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                className={cn(
                  "rounded-lg px-3 py-1 font-mono text-xs transition-colors cursor-pointer",
                  activeCategory === cat
                    ? "bg-[#054782] text-white font-bold"
                    : "border border-border/80 bg-muted/40 text-muted-foreground hover:bg-muted",
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 10 Articles Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((post, idx) => (
              <Reveal key={post.id} delay={idx * 50}>
                <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-7 shadow-xs transition-all duration-500 hover:-translate-y-1.5 hover:border-[#054782]/40 hover:shadow-2xl">
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#054782] via-[#669930] to-[#054782] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-[#669930] bg-[#669930]/10 px-2.5 py-1 rounded-full border border-[#669930]/20">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        <Clock className="h-3.5 w-3.5 text-[#054782]" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-[#054782] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {post.summary}
                    </p>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {post.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-muted/50 px-2 py-0.5 font-mono text-[0.68rem] text-muted-foreground"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Read Article Button */}
                  <div className="mt-7 pt-4 border-t border-border/60 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5 text-[#669930]" /> {post.date}
                    </span>

                    <button
                      onClick={() => setSelectedArticle(post)}
                      className="inline-flex items-center gap-1 font-display text-xs font-bold uppercase text-[#054782] group-hover:text-[#669930] transition-colors cursor-pointer"
                    >
                      Read Guide <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="mt-12 rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground/50 mb-3" />
              <p className="text-base font-semibold">No articles match your query.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory(null);
                }}
                className="mt-3 text-sm text-[#054782] underline font-semibold cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. FULL ARTICLE READING MODAL DIALOG */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedArticle.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
        >
          <div className="relative w-full max-w-3xl rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              aria-label="Close article"
              className="absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-muted/60 text-foreground hover:bg-muted cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#669930]">
              {selectedArticle.category} • {selectedArticle.readTime}
            </span>

            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-foreground">
              {selectedArticle.title}
            </h2>

            <div className="mt-2 flex items-center gap-4 text-xs font-mono text-muted-foreground pb-4 border-b border-border/80">
              <span>By {selectedArticle.author}</span>
              <span>•</span>
              <span>Published: {selectedArticle.date}</span>
            </div>

            {/* Article Sections */}
            <div className="mt-6 space-y-6">
              {selectedArticle.content.map((sec) => (
                <div key={sec.heading} className="space-y-2">
                  <h3 className="font-display text-base sm:text-lg font-bold text-foreground">
                    {sec.heading}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Related Products Box */}
            <div className="mt-8 rounded-2xl border border-border/80 bg-muted/30 p-5">
              <span className="font-display text-xs font-bold uppercase tracking-wider text-[#054782] block mb-2">
                Related V-Chemics Formulations &amp; Solutions
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedArticle.relatedProducts.map((rp) => (
                  <Link
                    key={rp.name}
                    to={rp.link}
                    onClick={() => setSelectedArticle(null)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-card px-3 py-1.5 text-xs font-semibold text-foreground hover:border-[#054782] hover:text-[#054782] transition-colors"
                  >
                    <span>{rp.name}</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Direct Technical Consultation CTA */}
            <div className="mt-8 pt-6 border-t border-border/80 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-muted-foreground">
                Need on-site technical assistance for this application?
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/919942354602?text=Hello%2C%20I%20read%20your%20article%20on%20${encodeURIComponent(selectedArticle.title)}%20and%20need%20technical%20advice.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#25D366] px-4 py-2.5 font-display text-xs font-bold uppercase text-white hover:bg-[#20bd5a] transition-all"
                >
                  <MessageCircle className="h-4 w-4 fill-current" /> WhatsApp Chemist
                </a>
                <Link
                  to="/contact"
                  onClick={() => setSelectedArticle(null)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#054782] to-[#669930] px-4 py-2.5 font-display text-xs font-bold uppercase text-white shadow-md hover:scale-105 transition-all"
                >
                  Get Quote <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
