import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Droplets,
  Wrench,
  Building2,
  Factory,
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
import { allSolutions, type SolutionItem } from "@/components/site/data";
import { cn } from "@/lib/utils";

const title = "Waterproofing & Concrete Repair Solutions in Chennai | V Chemics";
const description =
  "Certified structural solutions: Basement Waterproofing, Terrace Waterproofing, Concrete Repair, Structural Column Rehabilitation, and Industrial Flooring across Chennai & Tamil Nadu.";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "waterproofing solutions Chennai, basement waterproofing, terrace waterproofing, concrete repair Chennai, structural rehabilitation, industrial flooring Tamil Nadu" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SolutionsPage,
});

const solutionIcons = {
  "basement-waterproofing": Droplets,
  "terrace-waterproofing": ShieldCheck,
  "concrete-repair": Wrench,
  "structural-rehabilitation": Building2,
  "industrial-flooring": Factory,
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
      mechanism: "High-pressure water jetting (250 bar) to remove laitance and open capillary pores.",
      material: "Saturated Surface Dry (SSD) Concrete Base",
    },
    {
      layerNumber: "Layer 02",
      title: "Hydrophilic Waterstop & Joint Detailing",
      thickness: "20mm x 10mm Bar",
      mechanism: "Expands up to 300% on contact with water to permanently seal construction cold joints.",
      material: "V-Chemics Swellable Sodium Bentonite/Butyl Bar",
    },
    {
      layerNumber: "Layer 03",
      title: "Catalytic Crystalline Slurry Layer",
      thickness: "1.2 – 1.5 kg/m²",
      mechanism: "Active chemical catalysts penetrate up to 300mm deep, growing non-soluble dendritic crystals.",
      material: "V-Chemics Deep-Pore Crystalline Matrix",
    },
    {
      layerNumber: "Layer 04",
      title: "Hydrostatic PU Pressure Grout",
      thickness: "Target Injection",
      mechanism: "Closed-cell hydrophobic polyurethane foam injected at 150 bar to stop active gushing leaks.",
      material: "Hydro-Active Polyurethane Injection Resin",
    },
  ],
  "terrace-waterproofing": [
    {
      layerNumber: "Layer 01",
      title: "Graded Screed Substrate",
      thickness: "Min 1:100 Gradient",
      mechanism: "Eliminates stagnant water pooling and provides 75mm angle fillets at all wall junctions.",
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
      mechanism: "Reflects solar UV radiation, prevents chalking, and withstands foot traffic ponding.",
      material: "Aliphatic UV-Resistant Polyurethane Shield",
    },
  ],
  "concrete-repair": [
    {
      layerNumber: "Layer 01",
      title: "Deteriorated Core Removal",
      thickness: "Min 15mm Behind Rebar",
      mechanism: "Mechanical scabbling to expose clean, sound concrete aggregate and rusted rebar perimeter.",
      material: "Sound Structural Concrete Substrate",
    },
    {
      layerNumber: "Layer 02",
      title: "Cathodic Zinc Rebar Passivator",
      thickness: "2 Uniform Coats",
      mechanism: "Provides active galvanic zinc protection to prevent future electrolytic rust and spalling.",
      material: "V-Chemics Zinc-Rich Epoxy/Polymer Primer",
    },
    {
      layerNumber: "Layer 03",
      title: "Thixotropic Repair Mortar",
      thickness: "10mm – 50mm Layer",
      mechanism: "Shrinkage-compensated mortar restoring original structural compressive and flexural capacity.",
      material: "Polymer-Modified Thixotropic Class R4 Mortar",
    },
    {
      layerNumber: "Layer 04",
      title: "Anti-Carbonation Barrier",
      thickness: "250 Microns DFT",
      mechanism: "Impenetrable shield against CO₂ diffusion, airborne chlorides, and acid rain erosion.",
      material: "Elastomeric Anti-Carbonation Protective Finish",
    },
  ],
  "structural-rehabilitation": [
    {
      layerNumber: "Layer 01",
      title: "Propping & Surface Profiling",
      thickness: "Temporary Load Relief",
      mechanism: "Heavy-duty shoring towers redistribute structural loads before chipping concrete skin.",
      material: "Scabbled Concrete Pedestal CSP 5",
    },
    {
      layerNumber: "Layer 02",
      title: "Shear Rebar Dowels & Cage",
      thickness: "Engineered Size",
      mechanism: "Chemical anchor mortar bonds additional rebar stirrups for complete composite action.",
      material: "High-Load Epoxy Anchor Dowel System",
    },
    {
      layerNumber: "Layer 03",
      title: "Self-Compacting Micro Concrete",
      thickness: "50mm – 150mm Jacket",
      mechanism: "High-fluidity micro concrete flows into tight formwork, achieving >65 MPa without vibration.",
      material: "V-Chemics Non-Shrink Micro Concrete",
    },
    {
      layerNumber: "Layer 04",
      title: "Monolithic Encasement Curing",
      thickness: "Fully Monolithic",
      mechanism: "Locks in ultimate compressive strength and provides seamless load transfer across old & new RCC.",
      material: "Wet Curing & Silane Impregnation Seal",
    },
  ],
  "industrial-flooring": [
    {
      layerNumber: "Layer 01",
      title: "Vacuum-Dewatered Concrete Base",
      thickness: "M25 / M30 Grade",
      mechanism: "High-density concrete slab compacted to eliminate water-cement ratio bleeding voids.",
      material: "Vibrated Structural Floor Slab",
    },
    {
      layerNumber: "Layer 02",
      title: "Non-Oxidizing Metallic Hardener",
      thickness: "3.5 – 5.0 kg/m²",
      mechanism: "Monolithically power-troweled into green concrete to create an abrasion-resistant armor plate.",
      material: "Graded Corundum / Metallic Dry Shake",
    },
    {
      layerNumber: "Layer 03",
      title: "Solvent-Free Epoxy Screed / Topping",
      thickness: "2.0mm – 4.0mm",
      mechanism: "Seamless resin barrier offering complete resistance against acids, oils, and chemical spills.",
      material: "100% Solid Heavy-Duty Epoxy Mortar",
    },
    {
      layerNumber: "Layer 04",
      title: "Silicate Densifier & Curing Seal",
      thickness: "0.15 L/m²",
      mechanism: "Liquid chemical hardener reacts with free lime, locking concrete pores to prevent dusting.",
      material: "Lithium / Sodium Silicate Floor Densifier",
    },
  ],
};

const comparisonMatrix = [
  {
    system: "Basement Waterproofing",
    mechanism: "Catalytic Crystalline Slurry + PU Leak Grout",
    substrates: "Raft Slabs, Retaining Walls, Lift Pits",
    benchmark: ">5 Bar Hydrostatic Head",
    standards: "DIN 1048 • IS 2645",
  },
  {
    system: "Terrace Waterproofing",
    mechanism: "Seamless High-Build Elastomeric PU Membrane",
    substrates: "Flat Roofs, Podium Decks, Terraces",
    benchmark: ">400% Elongation • 72h Pond Tested",
    standards: "ASTM D412 • ASTM C836",
  },
  {
    system: "Concrete Repair",
    mechanism: "Polymer Thixotropic Mortar + Zinc Passivation",
    substrates: "Spalled RCC Beams, Columns, Slabs",
    benchmark: ">50 MPa Strength Recovery",
    standards: "EN 1504-3 Class R4",
  },
  {
    system: "Structural Rehabilitation",
    mechanism: "Self-Compacting Micro Concrete Jacketing",
    substrates: "Distressed Columns, Beams, Footings",
    benchmark: ">65 MPa Compressive Bond",
    standards: "EN 1504-3 • IS 516",
  },
  {
    system: "Industrial Flooring",
    mechanism: "Metallic Surface Hardeners & Epoxy Screeds",
    substrates: "Manufacturing Floors, Warehouses",
    benchmark: "Heavy Forklift Traffic Ready",
    standards: "ASTM C779 • IS 5435",
  },
];

function SolutionsPage() {
  const [activeTab, setActiveTab] = useState(allSolutions[0].id);
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

  const activeSolution = allSolutions.find((s) => s.id === activeTab) || allSolutions[0];
  const Icon = solutionIcons[activeSolution.id as keyof typeof solutionIcons] || ShieldCheck;
  const activeIndex = allSolutions.findIndex((s) => s.id === activeSolution.id);
  const layers = crossSectionLayers[activeSolution.id] || crossSectionLayers["basement-waterproofing"];
  const currentLayer = layers[activeLayerIndex] || layers[0];

  return (
    <>
      <PageHero
        eyebrow="Engineered Protocols"
        title="Structural &amp; Waterproofing Solutions"
        intro="Interactive chemical anatomy, layer-by-layer cross-sections, and field-proven engineering methodologies certified to IS & ASTM standards."
      />

      {/* 1. UNIQUE INTERACTIVE STRUCTURAL ANATOMY STUDIO */}
      <section id="solutions-anatomy-studio" className="bg-background py-14 lg:py-20 relative overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-[#054782]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-48 h-96 w-96 rounded-full bg-[#669930]/5 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-10">
          {/* Header & Discipline Selector Grid */}
          <div className="space-y-6">
            <div>
              <p className="eyebrow flex items-center gap-2 text-[#669930]">
                <span className="h-0.5 w-6 bg-[#669930]" aria-hidden /> 5 Certified Disciplines
              </p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-foreground">
                Interactive Structural Anatomy &amp; Layering
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Select a structural discipline to inspect its layer-by-layer chemical mechanism and application metrics.
              </p>
            </div>

            {/* 5-Column Responsive Discipline Selector Bar (Zero horizontal scrollbar) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 w-full">
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
                        ? "border-[#054782] bg-[#054782] text-white shadow-md shadow-[#054782]/20"
                        : "border-border/80 bg-card text-muted-foreground hover:text-foreground hover:border-border",
                    )}
                  >
                    <SolIcon className={cn("h-3.5 w-3.5 shrink-0", isActive ? "text-[#669930]" : "text-muted-foreground")} />
                    <span className="truncate">0{idx + 1}. {sol.title}</span>
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
                {/* Structural Image Header */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted shadow-md">
                  <img
                    src={activeSolution.image}
                    alt={activeSolution.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b274c]/90 via-transparent to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 font-mono text-[0.68rem] font-bold text-white border border-white/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#669930] animate-pulse" />
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
                    <Layers className="h-3.5 w-3.5 text-[#054782]" />
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
                              ? "border-[#669930] bg-[#669930]/10 text-foreground shadow-xs scale-[1.02]"
                              : "border-border/70 bg-muted/30 text-muted-foreground hover:border-border hover:bg-muted/60 hover:text-foreground",
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <span className={cn("font-mono text-[0.62rem] font-bold", isLayerActive ? "text-[#669930]" : "text-muted-foreground")}>
                              {lyr.layerNumber}
                            </span>
                            {isLayerActive && <CheckCircle2 className="h-3 w-3 text-[#669930]" />}
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
                    <span className="font-mono text-xs font-bold uppercase text-[#669930]">
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
                <div className="rounded-2xl border border-[#669930]/40 bg-[#669930]/5 p-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-[#669930]/20 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#669930] bg-[#669930]/20 px-2 py-0.5 rounded">
                        {currentLayer.layerNumber}
                      </span>
                      <h4 className="font-display text-sm font-bold text-foreground">
                        {currentLayer.title}
                      </h4>
                    </div>

                    <span className="font-mono text-[0.68rem] font-bold text-[#054782] bg-card border border-border/80 px-2.5 py-0.5 rounded">
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

                  <div className="rounded-xl border border-[#054782]/30 bg-[#054782]/5 p-3.5">
                    <span className="font-mono text-[0.65rem] font-bold uppercase text-[#054782] flex items-center gap-1">
                      <span>✓</span> Engineered Seal Strategy
                    </span>
                    <p className="mt-1 text-xs text-foreground/90 leading-relaxed">
                      {activeSolution.solutionDesc}
                    </p>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-3 border-t border-border/60 flex items-center justify-end">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#054782] px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#043763] transition-all"
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



      {/* 3. TECHNICAL SPECIFICATION MATRIX (TABLE VIEW - NO SIDE SCROLLING) */}
      <section className="bg-background py-14 lg:py-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-8">
          <div>
            <p className="eyebrow flex items-center gap-2 text-[#669930]">
              <span className="h-0.5 w-5 bg-[#669930]" aria-hidden /> Quick Comparison
            </p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-foreground">
              Systems Specification Matrix
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-md">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-border/80 bg-muted/50 font-mono text-[0.68rem] uppercase tracking-wider text-muted-foreground">
                  <th className="py-3.5 px-4 font-bold text-[#054782] w-[24%]">System Discipline</th>
                  <th className="py-3.5 px-4 font-bold w-[26%]">Mechanism</th>
                  <th className="py-3.5 px-4 font-bold w-[22%]">Substrates</th>
                  <th className="py-3.5 px-4 font-bold text-[#669930] w-[16%]">Benchmark</th>
                  <th className="py-3.5 px-4 font-bold w-[12%]">Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {comparisonMatrix.map((row, rIdx) => (
                  <tr
                    key={row.system}
                    className="transition-colors hover:bg-muted/30"
                  >
                    <td className="py-3.5 px-4 font-display font-bold text-foreground">
                      <span className="font-mono text-[0.68rem] text-[#669930] mr-1.5">0{rIdx + 1}.</span>
                      {row.system}
                    </td>
                    <td className="py-3.5 px-4 text-[0.72rem] text-foreground/90 font-sans leading-snug">
                      {row.mechanism}
                    </td>
                    <td className="py-3.5 px-4 text-[0.72rem] text-muted-foreground leading-snug">
                      {row.substrates}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[0.72rem] font-bold text-[#669930]">
                      {row.benchmark}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[0.72rem] text-muted-foreground">
                      {row.standards}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
