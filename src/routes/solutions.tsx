import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Droplets,
  Wrench,
  Building2,
  Factory,
  Paintbrush,
  ArrowRight,
  Sparkles,
  Phone,
  MessageCircle,
  Check,
  Clock,
  Layers,
  ChevronRight,
  Activity,
  Compass,
  Gauge,
  Sliders,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { allSolutions, type SolutionItem } from "@/components/site/data";
import { cn } from "@/lib/utils";

const title = "Waterproofing & Concrete Repair Solutions | Vchemics";
const description =
  "Engineered waterproofing, concrete repair, basement sealing, structural column rehabilitation & industrial flooring solutions from Vchemics in Chennai.";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "waterproofing solutions Chennai, basement waterproofing, terrace waterproofing, concrete repair Chennai, structural rehabilitation, industrial flooring Tamil Nadu",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.vchemicsindia.com/solutions" },
      { property: "og:image", content: "https://www.vchemicsindia.com/image.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.vchemicsindia.com/solutions" }],
  }),
  component: SolutionsPage,
});

const solutionIcons = {
  "basement-waterproofing": Droplets,
  "terrace-waterproofing": ShieldCheck,
  "concrete-repair": Wrench,
  "structural-rehabilitation": Building2,
  "industrial-flooring": Factory,
  painting: Paintbrush,
};

const crossSectionLayers: Record<
  string,
  {
    layerNumber: string;
    title: string;
    thickness: string;
    mechanism: string;
    material: string;
  }[]
> = {
  "basement-waterproofing": [
    {
      layerNumber: "Layer 01",
      title: "Roughened RCC Substrate",
      thickness: "Parent Concrete",
      mechanism:
        "High-pressure water jetting (250 bar) to remove laitance and open capillary pores.",
      material: "Saturated Surface Dry (SSD) Concrete Base",
    },
    {
      layerNumber: "Layer 02",
      title: "Hydrophilic Waterstop & Joint Detailing",
      thickness: "20mm x 10mm Bar",
      mechanism:
        "Expands up to 300% on contact with water to permanently seal construction cold joints.",
      material: "Vchemics Swellable Sodium Bentonite/Butyl Bar",
    },
    {
      layerNumber: "Layer 03",
      title: "Catalytic Crystalline Slurry Layer",
      thickness: "1.2 – 1.5 kg/m²",
      mechanism:
        "Active chemical catalysts penetrate up to 300mm deep, growing non-soluble dendritic crystals.",
      material: "Vchemics Deep-Pore Crystalline Matrix",
    },
    {
      layerNumber: "Layer 04",
      title: "Hydrostatic PU Pressure Grout",
      thickness: "Target Injection",
      mechanism:
        "Closed-cell hydrophobic polyurethane foam injected at 150 bar to stop active gushing leaks.",
      material: "Hydro-Active Polyurethane Injection Resin",
    },
  ],
  "terrace-waterproofing": [
    {
      layerNumber: "Layer 01",
      title: "Graded Screed Substrate",
      thickness: "Min 1:100 Gradient",
      mechanism:
        "Eliminates stagnant water pooling and provides 75mm angle fillets at all wall junctions.",
      material: "Polymer-Modified Drainage Screed",
    },
    {
      layerNumber: "Layer 02",
      title: "Penetrating Moisture Primer",
      thickness: "0.15 – 0.20 kg/m²",
      mechanism: "Seals micro-pores and establishes maximum interfacial adhesion to concrete.",
      material: "Moisture-Tolerant Epoxy/Polyurethane Primer",
    },
    {
      layerNumber: "Layer 03",
      title: "Reinforced Elastomeric PU Membrane",
      thickness: "1.5mm – 2.0mm DFT",
      mechanism: "Provides >400% elongation, bridging dynamic thermal stress cracks up to 2.0mm.",
      material: "Liquid Polyurethane embedded with 45 GSM Mesh",
    },
    {
      layerNumber: "Layer 04",
      title: "Aliphatic UV Protective Topcoat",
      thickness: "0.25 kg/m²",
      mechanism:
        "Reflects solar UV radiation, prevents chalking, and withstands foot traffic ponding.",
      material: "Aliphatic UV-Resistant Polyurethane Shield",
    },
  ],
  "concrete-repair": [
    {
      layerNumber: "Layer 01",
      title: "Deteriorated Core Removal",
      thickness: "Min 15mm Behind Rebar",
      mechanism:
        "Mechanical scabbling to expose clean, sound concrete aggregate and rusted rebar perimeter.",
      material: "Sound Structural Concrete Substrate",
    },
    {
      layerNumber: "Layer 02",
      title: "Cathodic Zinc Rebar Passivator",
      thickness: "2 Uniform Coats",
      mechanism:
        "Provides active galvanic zinc protection to prevent future electrolytic rust and spalling.",
      material: "Vchemics Zinc-Rich Epoxy/Polymer Primer",
    },
    {
      layerNumber: "Layer 03",
      title: "Thixotropic Repair Mortar",
      thickness: "10mm – 50mm Layer",
      mechanism:
        "Shrinkage-compensated mortar restoring original structural compressive and flexural capacity.",
      material: "Polymer-Modified Thixotropic Class R4 Mortar",
    },
    {
      layerNumber: "Layer 04",
      title: "Anti-Carbonation Barrier",
      thickness: "250 Microns DFT",
      mechanism:
        "Impenetrable shield against CO₂ diffusion, airborne chlorides, and acid rain erosion.",
      material: "Elastomeric Anti-Carbonation Protective Finish",
    },
  ],
  "structural-rehabilitation": [
    {
      layerNumber: "Layer 01",
      title: "Propping & Surface Profiling",
      thickness: "Temporary Load Relief",
      mechanism:
        "Heavy-duty shoring towers redistribute structural loads before chipping concrete skin.",
      material: "Scabbled Concrete Pedestal CSP 5",
    },
    {
      layerNumber: "Layer 02",
      title: "Shear Rebar Dowels & Cage",
      thickness: "Engineered Size",
      mechanism:
        "Chemical anchor mortar bonds additional rebar stirrups for complete composite action.",
      material: "High-Load Epoxy Anchor Dowel System",
    },
    {
      layerNumber: "Layer 03",
      title: "Self-Compacting Micro Concrete",
      thickness: "50mm – 150mm Jacket",
      mechanism:
        "High-fluidity micro concrete flows into tight formwork, achieving >65 MPa without vibration.",
      material: "Vchemics Non-Shrink Micro Concrete",
    },
    {
      layerNumber: "Layer 04",
      title: "Monolithic Encasement Curing",
      thickness: "Fully Monolithic",
      mechanism:
        "Locks in ultimate compressive strength and provides seamless load transfer across old & new RCC.",
      material: "Wet Curing & Silane Impregnation Seal",
    },
  ],
  "industrial-flooring": [
    {
      layerNumber: "Layer 01",
      title: "Vacuum-Dewatered Concrete Base",
      thickness: "M25 / M30 Grade",
      mechanism:
        "High-density concrete slab compacted to eliminate water-cement ratio bleeding voids.",
      material: "Vibrated Structural Floor Slab",
    },
    {
      layerNumber: "Layer 02",
      title: "Non-Oxidizing Metallic Hardener",
      thickness: "3.5 – 5.0 kg/m²",
      mechanism:
        "Monolithically power-troweled into green concrete to create an abrasion-resistant armor plate.",
      material: "Graded Corundum / Metallic Dry Shake",
    },
    {
      layerNumber: "Layer 03",
      title: "Solvent-Free Epoxy Screed / Topping",
      thickness: "2.0mm – 4.0mm",
      mechanism:
        "Seamless resin barrier offering complete resistance against acids, oils, and chemical spills.",
      material: "100% Solid Heavy-Duty Epoxy Mortar",
    },
    {
      layerNumber: "Layer 04",
      title: "Silicate Densifier & Curing Seal",
      thickness: "0.15 L/m²",
      mechanism:
        "Liquid chemical hardener reacts with free lime, locking concrete pores to prevent dusting.",
      material: "Lithium / Sodium Silicate Floor Densifier",
    },
  ],
  painting: [
    {
      layerNumber: "Layer 01",
      title: "Substrate Profiling & Abrasive Prep",
      thickness: "Parent Substrate",
      mechanism:
        "Grit blasting to SA 2.5 or high-pressure washing to eliminate contaminants and establish receptive profile.",
      material: "Structural Steel / Dense Masonry Substrate",
    },
    {
      layerNumber: "Layer 02",
      title: "Anti-Corrosive / Alkali Primer",
      thickness: "50 – 75 µm DFT",
      mechanism:
        "Passivates metal oxidation and anchors coating system with deep capillary substrate wetting.",
      material: "Zinc-Rich Epoxy or Alkali-Resistant Primer",
    },
    {
      layerNumber: "Layer 03",
      title: "High-Build Intermediate Barrier",
      thickness: "100 – 150 µm DFT",
      mechanism:
        "Forms an impenetrable cross-linked barrier against chloride diffusion, atmospheric humidity, and chemicals.",
      material: "High-Build Epoxy or Elastomeric Intermediate",
    },
    {
      layerNumber: "Layer 04",
      title: "UV-Stable Protective & Decorative Topcoat",
      thickness: "50 – 80 µm DFT",
      mechanism:
        "Provides non-chalking UV resistance, vibrant color retention, and chemical fume/abrasion defense.",
      material: "Aliphatic Polyurethane / Weatherproof Emulsion",
    },
  ],
};

function SolutionsPage() {
  const [activeTab, setActiveTab] = useState(allSolutions[0]?.id ?? "basement-waterproofing");
  const [activeLayerIndex, setActiveLayerIndex] = useState(2);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      const match = allSolutions.find((s) => s.id === hash || s.slug === hash);
      if (match) {
        setActiveTab(match.id);
        const el = document.getElementById("solutions-anatomy-studio");
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
        }
      }
    }
  }, []);

  const activeSolution = allSolutions.find((s) => s.id === activeTab) ?? allSolutions[0];
  if (!activeSolution) return null;

  const Icon = solutionIcons[activeSolution.id as keyof typeof solutionIcons] || ShieldCheck;
  const activeIndex = allSolutions.findIndex((s) => s.id === activeSolution.id);
  const defaultLayers = crossSectionLayers["basement-waterproofing"] ?? [];
  const layers = crossSectionLayers[activeSolution.id] ?? defaultLayers;
  const currentLayer = layers[activeLayerIndex] ??
    layers[0] ?? {
      layerNumber: "Layer 01",
      title: "Structural Substrate",
      thickness: "Standard",
      mechanism: "Engineered preparation and adhesion profile",
      material: "Vchemics Primer & Matrix",
    };

  return (
    <>
      <PageHero
        eyebrow="Engineered Protocols"
        title="Structural &amp; Waterproofing Solutions"
        intro="Interactive chemical anatomy, layer-by-layer cross-sections, and field-proven engineering methodologies certified to IS & ASTM standards."
      />

      {/* 1. UNIQUE INTERACTIVE STRUCTURAL ANATOMY STUDIO */}
      <section
        id="solutions-anatomy-studio"
        className="bg-background py-14 lg:py-20 relative overflow-hidden"
      >
        {/* Subtle Ambient Glows */}
        <div className="absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-48 h-96 w-96 rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-10">
          {/* Header & Discipline Selector Grid */}
          <div className="space-y-6">
            <div>
              <p className="eyebrow flex items-center gap-2 text-brand-green">
                <span className="h-0.5 w-6 bg-brand-green" aria-hidden /> Certified Disciplines
              </p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-foreground">
                Interactive Structural Anatomy &amp; Layering
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Select a structural discipline to inspect its layer-by-layer chemical mechanism and
                application metrics.
              </p>
            </div>

            {/* 6-Column Responsive Discipline Selector Bar (Zero horizontal scrollbar) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 w-full">
              {allSolutions.map((sol, idx) => {
                const SolIcon = solutionIcons[sol.id as keyof typeof solutionIcons] || ShieldCheck;
                const isActive = sol.id === activeTab;
                return (
                  <button
                    key={sol.id}
                    onClick={() => {
                      setActiveTab(sol.id);
                      setActiveLayerIndex(2);
                      if (typeof window !== "undefined") {
                        window.history.replaceState(null, "", `#${sol.id}`);
                      }
                    }}
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border text-center",
                      isActive
                        ? "border-brand-blue bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                        : "border-border/80 bg-card text-muted-foreground hover:text-foreground hover:border-border",
                    )}
                  >
                    <SolIcon
                      className={cn(
                        "h-3.5 w-3.5 shrink-0",
                        isActive ? "text-brand-green" : "text-muted-foreground",
                      )}
                    />
                    <span className="truncate">
                      0{idx + 1}. {sol.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Master Anatomy & Chemical Cross-Section Viewer Card */}
          <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden">
            <div className="grid gap-8 lg:grid-cols-12 items-start">
              {/* Left Column: Visual Cross-Section & Interactive Layer Selector (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                {/* Structural Image Slot */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted/30 shadow-md">
                  {activeSolution.image ? (
                    <img
                      src={activeSolution.image}
                      alt={`${activeSolution.title} - Engineered Application Protocol`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <ImagePlaceholder label={`+ Add ${activeSolution.title} Photo`} />
                  )}

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 font-mono text-[0.68rem] font-bold text-white border border-white/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
                      Cross-Section Inspection
                    </span>
                  </div>

                  {/* Bottom Metric Pill */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="font-mono text-[0.62rem] uppercase tracking-wider text-[#b0c7df] block">
                      Certified Benchmark
                    </span>
                    <span className="font-display text-xs font-bold text-white block mt-0.5">
                      {activeSolution.metrics}
                    </span>
                  </div>
                </div>

                {/* Interactive 4-Layer Clickable Selector Stack */}
                <div className="space-y-2 pt-2">
                  <span className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-muted-foreground block flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-brand-blue" />
                    Click a Layer to Inspect Chemistry:
                  </span>

                  <div className="grid grid-cols-2 gap-2">
                    {layers.map((lyr, lIdx) => {
                      const isLayerActive = activeLayerIndex === lIdx;
                      return (
                        <button
                          key={lyr.layerNumber}
                          type="button"
                          onClick={() => setActiveLayerIndex(lIdx)}
                          className={cn(
                            "rounded-xl p-2.5 text-left transition-all border cursor-pointer",
                            isLayerActive
                              ? "border-brand-green bg-brand-green/10 text-foreground shadow-xs scale-[1.02]"
                              : "border-border/70 bg-muted/30 text-muted-foreground hover:border-border hover:bg-muted/60 hover:text-foreground",
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <span
                              className={cn(
                                "font-mono text-[0.62rem] font-bold",
                                isLayerActive ? "text-brand-green" : "text-muted-foreground",
                              )}
                            >
                              {lyr.layerNumber}
                            </span>
                            {isLayerActive && <CheckCircle2 className="h-3 w-3 text-brand-green" />}
                          </div>
                          <p className="font-display text-xs font-bold mt-1 leading-tight line-clamp-1">
                            {lyr.title}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Deep Chemical Diagnosis & Active Layer Breakdown (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold uppercase text-brand-green">
                      IS &amp; ASTM Certified Protocol
                    </span>
                  </div>

                  <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-foreground">
                    {activeSolution.title}
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {activeSolution.subtitle}
                  </p>
                </div>

                {/* Active Layer Deep Breakdown Card */}
                <div className="rounded-2xl border border-brand-green/40 bg-brand-green/5 p-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-brand-green/20 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-brand-green bg-brand-green/20 px-2 py-0.5 rounded">
                        {currentLayer.layerNumber}
                      </span>
                      <h4 className="font-display text-sm font-bold text-foreground">
                        {currentLayer.title}
                      </h4>
                    </div>

                    <span className="font-mono text-[0.68rem] font-bold text-brand-blue bg-card border border-border/80 px-2.5 py-0.5 rounded">
                      Thickness: {currentLayer.thickness}
                    </span>
                  </div>

                  <p className="text-xs text-foreground/90 leading-relaxed font-sans">
                    {currentLayer.mechanism}
                  </p>

                  <div className="pt-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <strong className="text-foreground font-semibold">Specified Chemistry:</strong>
                    <span>{currentLayer.material}</span>
                  </div>
                </div>

                {/* Structural Challenge vs Solution Summary Grid */}
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-3.5">
                    <span className="font-mono text-[0.65rem] font-bold uppercase text-amber-500 flex items-center gap-1">
                      <span>⚠</span> Structural Challenge
                    </span>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {activeSolution.challenge}
                    </p>
                  </div>

                  <div className="rounded-xl border border-brand-blue/30 bg-brand-blue/5 p-3.5">
                    <span className="font-mono text-[0.65rem] font-bold uppercase text-brand-blue flex items-center gap-1">
                      <span>✓</span> Engineered Seal Strategy
                    </span>
                    <p className="mt-1 text-xs text-foreground/90 leading-relaxed">
                      {activeSolution.solutionDesc}
                    </p>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-3 border-t border-border/60 flex items-center justify-between flex-wrap gap-3">
                  <Link
                    to="/solutions/$slug"
                    params={{ slug: activeSolution.id }}
                    className="inline-flex items-center gap-2 rounded-xl border border-brand-blue/30 bg-brand-blue/10 px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-brand-blue hover:bg-brand-blue/20 transition-all"
                  >
                    <span>View Site Gallery &amp; Methodology</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#043763] transition-all"
                  >
                    <span>Request Site Diagnosis</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ALL 6 SOLUTION PROTOCOLS DIRECT INDEX */}
      <section className="py-14 lg:py-20 border-t border-border/80 bg-muted/20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-4 border-b border-border/60">
            <div>
              <p className="eyebrow flex items-center gap-2 text-brand-blue font-mono text-xs font-bold uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-brand-green" />
                COMPLETE SOLUTION DIRECTORY
              </p>
              <h2 className="mt-1.5 font-display text-2xl sm:text-3xl font-bold text-foreground">
                All 6 Engineered Solution Disciplines
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-xl">
                Explore dedicated execution methodologies, certified ASTM/IS layering standards, and
                photo case documentation.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allSolutions.map((sol, idx) => {
              const SolIcon = solutionIcons[sol.id as keyof typeof solutionIcons] || ShieldCheck;
              return (
                <Link
                  key={sol.id}
                  to="/solutions/$slug"
                  params={{ slug: sol.id }}
                  className="group flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-xs hover:border-brand-blue/40 hover:shadow-xl transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-blue/10 text-brand-blue border border-brand-blue/20 group-hover:scale-110 transition-transform">
                        <SolIcon className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-brand-green bg-brand-green/10 px-2.5 py-1 rounded-full border border-brand-green/30">
                        Protocol 0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground group-hover:text-brand-blue transition-colors">
                        {sol.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                        {sol.subtitle}
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-border/60">
                      <span className="font-mono text-[0.65rem] font-bold text-brand-blue uppercase tracking-wider block">
                        Target Applications:
                      </span>
                      <p className="text-xs text-foreground/80 line-clamp-2">
                        {sol.applications.slice(0, 3).join(" • ")}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-border/60 flex items-center justify-between">
                    <span className="font-display text-xs font-bold text-brand-blue group-hover:text-brand-green transition-colors">
                      View Full Protocol &amp; Case Study
                    </span>
                    <ArrowRight className="h-4 w-4 text-brand-blue group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
