export interface ProductDetailExtended {
  problemSolved: string;
  substrateSuitability: string;
  procedure: string[];
  packaging: string;
  faqs: { q: string; a: string }[];
}

export const productDetailsExtended: Record<string, ProductDetailExtended> = {
  "concrete-admixtures": {
    problemSolved:
      "Overcomes rapid slump loss, high water demand, honeycombing, and delayed strength development during high-temperature concrete batching and long transit in South India.",
    substrateSuitability:
      "OPC 43/53, PPC, PSC, fly ash blends, GGBS, micro-silica, crushed sand (M-sand), and river sand mixes.",
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
    problemSolved:
      "Prevents sub-soil water ingress, capillary water seepage, dampness, mold formation, and steel rebar corrosion in basements, retaining walls, and water tanks.",
    substrateSuitability:
      "Structural concrete, RCC retaining walls, block masonry, cement plaster, and mortar beds.",
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
    problemSolved:
      "Instantly stops gushing water leaks under high hydrostatic pressure in concrete cracks, expansion joints, basement diaphragm walls, and tunnel segments.",
    substrateSuitability:
      "Poured concrete walls, construction joints, brick/stone masonry, and precast segment junctions.",
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
    problemSolved:
      "Eliminates shrinkage voids, air pockets, and loose baseplates beneath vibrating machinery, structural columns, and precast bridge bearings.",
    substrateSuitability:
      "Roughened concrete foundation pedestals, base plates, and steel anchor bolt pockets.",
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
    problemSolved:
      "Restores spalled, honeycombed, or undersized concrete structural columns, beams, and slabs without requiring heavy mechanical vibration.",
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
    problemSolved:
      "Repairs structural defects, spalling, carbonation attack, and corrosion delamination while restoring structural load bearing and alkaline protection to steel.",
    substrateSuitability:
      "Damaged concrete structures, overhead slabs, beam soffits, marine piers, and bridge decks.",
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
    problemSolved:
      "Provides extraordinary compressive strength, dynamic fatigue resistance, and total impermeability to chemicals, oils, and acids beneath heavy industrial mills.",
    substrateSuitability:
      "Heavy machinery plinths, crane rail soleplates, chemical sump pump foundations, and tie-back anchors.",
    procedure: [
      "Ensure concrete substrate is completely dry (moisture content < 4%) and oil-free.",
      "Mix Base (Resin) and Hardener for 2 minutes before adding graded silica aggregates.",
      "Pour into leak-proof waxed formwork using a flow box for hydrostatic head.",
      "Allow 24–48 hours full chemical cure before applying machine operating load.",
    ],
    packaging:
      "3-Part Pre-proportioned System (Resin + Hardener + Aggregates) in 15kg & 30kg Kits.",
    faqs: [
      {
        q: "What is the compressive strength of epoxy grout?",
        a: "Our 3-part epoxy grout exceeds 95 MPa compressive strength and 25 MPa flexural strength.",
      },
    ],
  },
  "protective-coatings": {
    problemSolved:
      "Shields concrete and steel against UV degradation, carbonation, acid rain, industrial chemical spills, and heavy forklift wheel abrasion.",
    substrateSuitability:
      "Concrete facades, parking garage decks, chemical bund walls, wastewater treatment basins, and roofs.",
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
