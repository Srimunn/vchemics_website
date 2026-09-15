import admixturesImg from "@/assets/product-admixtures.jpg";
import waterproofingImg from "@/assets/product-waterproofing.jpg";
import puInjectionImg from "@/assets/product-pu-injection.jpg";
import nonShrinkGroutImg from "@/assets/product-nonshrink-grout.png";
import epoxyGroutImg from "@/assets/product-epoxy-grout.jpg";
import protectiveCoatingsImg from "@/assets/product-protective-coatings.png";
import concreteRepairImg from "@/assets/product-concrete-repair.jpg";
import microConcreteImg from "@/assets/product-microconcrete.jpg";
import groutsImg from "@/assets/product-grouts.jpg";
import terraceWaterproofingImg from "@/assets/solution-terrace-waterproofing.jpg";
import founderImg from "@/assets/velmurugan-sivanantham.jpg";
import blogColdJointsImg from "@/assets/blog-preventing-cold-joints.jpg";
import puInjectionSiteHeroImg from "@/assets/blog/pu-injection-grouting-hero.jpg";
import waterproofingGuideImg from "@/assets/blog/water_proofing.png";
import protectiveCoatingsBuildingsImg from "@/assets/blog/protective-coatings-buildings.png";
import step1StructureImg from "@/assets/solutions/basement-waterproofing/step-1-structure.jpg";
import step2BeamCoatingImg from "@/assets/solutions/basement-waterproofing/step-2-beam-coating.jpg";
import step3SiteConditionsImg from "@/assets/solutions/basement-waterproofing/step-3-site-conditions.jpg";
import step4WallMembraneImg from "@/assets/solutions/basement-waterproofing/step-4-wall-membrane.jpg";
import step5ProgressImg from "@/assets/solutions/basement-waterproofing/step-5-progress.jpg";
import step1SurfacePrepImg from "@/assets/solutions/terrace-waterproofing/step-1-surface-prep.jpg";
import step2MembraneFabricImg from "@/assets/solutions/terrace-waterproofing/step-2-membrane-fabric.jpg";
import step3ScreedPourImg from "@/assets/solutions/terrace-waterproofing/step-3-screed-pour.jpg";
import step4TexturedTopcoatImg from "@/assets/solutions/terrace-waterproofing/step-4-textured-topcoat.jpg";
import step5FinalTopcoatImg from "@/assets/solutions/terrace-waterproofing/step-5-final-topcoat.jpg";
import step1CrackAssessmentImg from "@/assets/solutions/concrete-repair/step-1-crack-assessment.jpg";
import step2SawCuttingImg from "@/assets/solutions/concrete-repair/step-2-saw-cutting.jpg";
import step3DebrisRemovalImg from "@/assets/solutions/concrete-repair/step-3-debris-removal.jpg";
import step4RepairInjectionImg from "@/assets/solutions/concrete-repair/step-4-repair-injection.jpg";
import step5FinishingCuringImg from "@/assets/solutions/concrete-repair/step-5-finishing-curing.jpg";
import step1DiamondGrindingImg from "@/assets/solutions/industrial-flooring/step-1-diamond-grinding.jpg";
import step2JointFillingImg from "@/assets/solutions/industrial-flooring/step-2-joint-filling.jpg";
import step3PrimerCoatImg from "@/assets/solutions/industrial-flooring/step-3-primer-coat.jpg";
import step4SelfLevelingImg from "@/assets/solutions/industrial-flooring/step-4-self-leveling.jpg";
import step5TopcoatCureImg from "@/assets/solutions/industrial-flooring/step-5-topcoat-cure.jpg";
import step1ShoringImg from "@/assets/solutions/structural-rehabilitation/step-1-shoring.jpg";
import step2DowelingImg from "@/assets/solutions/structural-rehabilitation/step-2-doweling.jpg";
import step3RebarCageImg from "@/assets/solutions/structural-rehabilitation/step-3-rebar-cage.jpg";
import step4FormworkImg from "@/assets/solutions/structural-rehabilitation/step-4-formwork.jpg";
import step5FinishedColumnImg from "@/assets/solutions/structural-rehabilitation/step-5-finished-column.jpg";
import paintingHeroImg from "@/assets/solutions/painting/painting-hero.svg";

export interface WorkGalleryStep {
  step: number;
  title: string;
  caption: string;
  image: string;
  alt: string;
}

export interface ProductItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  standard: string;
  dosage: string;
  features: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  faqs?: { q: string; a: string }[];
}

export const allProducts: ProductItem[] = [
  {
    id: "concrete-admixtures",
    slug: "concrete-admixtures",
    title: "Concrete Admixtures",
    category: "Admixtures",
    tagline: "PCE & SNF Superplasticisers, Accelerators & Retarders",
    description:
      "High-performance polycarboxylate ether (PCE) and SNF chemical admixtures engineered for high slump retention, up to 30% water cut, and rapid early strength development.",
    image: admixturesImg,
    alt: "Liquid concrete admixture being dosed into fresh concrete pour",
    standard: "IS 9103 • ASTM C494 Type A, D, F & G",
    dosage: "0.4% – 1.8% by weight of cementitious content",
    features: [
      "Up to 30% water-cement ratio reduction with superior flow",
      "Extended slump retention up to 3 hours for tropical transit",
      "High early 3-day and 7-day strength acceleration",
      "Superior compatibility with OPC, PPC, GGBS & Fly Ash blends",
    ],
    specs: [
      { label: "Specific Gravity", value: "1.08 – 1.14 @ 27°C" },
      { label: "pH Range", value: "6.0 – 8.0" },
      { label: "Chloride Content", value: "< 0.1% (Nil)" },
      { label: "Air Entrainment", value: "< 1.5% additional" },
    ],
    applications: [
      "Ready-Mix Concrete (RMC) long transit dispatch",
      "High-rise vertical pumping (>150m head)",
      "Self-compacting concrete (SCC) with dense rebar",
      "Precast yards requiring 24h rapid cycle demoulding",
    ],
    faqs: [
      {
        q: "Can Vchemics PCE superplasticisers be blended with Fly Ash, GGBS, and Micro-Silica?",
        a: "Yes. Our polycarboxylate ether (PCE) formulations are specifically calibrated with high steric hindrance polymers to remain stable in high-volume supplementary cementitious material (SCM) mixes containing up to 60% GGBS or 35% Class F fly ash, preventing delayed setting or slump loss.",
      },
      {
        q: "Is on-site trial batching required before full-scale batching plant dosing?",
        a: "Yes, mandatory plant and site trial mixes (per IS 456 & IS 9103) should always be conducted with your project-specific cement brand, aggregate grading, and ambient temperature to determine the exact optimum dosage (typically 0.4%–1.8% by weight of cement).",
      },
      {
        q: "What is the shelf life, drum storage requirement, and freezing behavior?",
        a: "The shelf life is 12 months from the date of manufacture when stored in unopened original HDPE barrels or IBC containers between 5°C and 40°C in dry shaded conditions away from direct sunlight. Re-agitate before dosing if stored for extended periods.",
      },
    ],
  },
  {
    id: "waterproofing-chemicals",
    slug: "waterproofing-chemicals",
    title: "Waterproofing Chemicals",
    category: "Waterproofing",
    tagline: "Crystalline & Polymer Formulations for Waterproof Integrity",
    description:
      "Integral crystalline powders, hydrophobic pore-blocking liquids, and acrylic elastomeric barrier chemicals delivering permanent protection against hydrostatic pressure.",
    image: waterproofingImg,
    alt: "Applicator rolling seamless elastomeric waterproofing membrane onto concrete deck",
    standard: "IS 2645 • DIN 1048 • ASTM C1202",
    dosage: "1% to 2% by weight of cement / 1.2 kg/m² 2-coat slurry",
    features: [
      "Active self-healing catalytic crystallization in micro-cracks up to 0.4mm",
      "Withstands high hydrostatic water head pressure (positive & negative)",
      "Zero VOC, non-toxic formulation certified for potable water tanks",
      "Monolithic integration into concrete pore network",
    ],
    specs: [
      { label: "Water Penetration (DIN 1048)", value: "< 15 mm @ 5 bar" },
      { label: "Crack Bridging Ability", value: "Up to 0.4 mm crystalline seal" },
      { label: "Permeability Reduction", value: "> 85% vs control" },
      { label: "Toxicity Rating", value: "Non-toxic / Potable grade" },
    ],
    applications: [
      "Deep basement raft foundations and retaining walls",
      "Water retaining tanks, sumps and STP plants",
      "Podium slabs, tunnels and lift pits",
      "Wet utility areas, sunken slabs and terraces",
    ],
    faqs: [
      {
        q: "How does crystalline waterproofing self-heal micro-cracks over time?",
        a: "Active chemical catalysts within the crystalline slurry react with unhydrated cement minerals and free lime in the presence of water. This catalytic reaction grows non-soluble needle-like dendritic crystals deep inside the capillary tract, permanently sealing micro-cracks up to 0.4mm even under continuous negative water head.",
      },
      {
        q: "Can crystalline waterproofing withstand negative side hydrostatic pressure in deep basements?",
        a: "Yes. Because crystalline chemical growth takes place inside the concrete pore network rather than relying on surface adhesion, it withstands over 5 bar (>50m head) of hydrostatic pressure from both positive (external) and negative (internal) sides without blistering or peeling.",
      },
      {
        q: "What is the surface preparation and moisture curing requirement before application?",
        a: "The concrete substrate must be mechanically scabbled or high-pressure water jetted to expose open capillary pores and pre-wetted to a Saturated Surface Dry (SSD) condition. Following 2 cross-coats (1.2–1.5 kg/m² total), the treated surface must be moist-cured with fine water mist for a minimum of 48 hours to activate crystalline penetration.",
      },
    ],
  },
  {
    id: "pu-injection-grouting",
    slug: "pu-injection-grouting",
    title: "PU Injection Grouting",
    category: "Injection Systems",
    tagline: "Hydro-Active Polyurethane Resins for Live Leak Sealing",
    description:
      "Rapidly expanding single & dual component hydrophobic polyurethane injection resins that react violently with ingress water to form a closed-cell elastomeric barrier.",
    image: puInjectionImg,
    alt: "High-pressure PU injection grouting into wall crack forming waterproof expanding foam",
    standard: "ASTM D1638 • EN 1504-5",
    dosage: "Injected via high-pressure mechanical packers at 50–250 bar",
    features: [
      "Expands up to 30x volume upon contact with water in under 40 seconds",
      "Forms a tough, flexible foam that accommodates ongoing joint vibration",
      "Solvent-free, environmentally safe, resistant to microbiological attack",
      "Excellent adhesion to wet concrete, masonry, and steel surfaces",
    ],
    specs: [
      { label: "Expansion Ratio", value: "20x – 30x free rise" },
      { label: "Reaction Induction Time", value: "15 – 30 seconds" },
      { label: "Full Curing Time", value: "60 – 90 seconds" },
      { label: "Tensile Strength", value: "> 1.8 N/mm²" },
    ],
    applications: [
      "Active water leaking cracks in basement walls and tunnels",
      "Expansion and cold construction joint sealing",
      "Dam penstocks, underground metro stations, and retaining diaphragms",
      "Void filling and soil stabilization around deep culverts",
    ],
    faqs: [
      {
        q: "How fast does hydro-active polyurethane resin react with gushing water?",
        a: "Reaction induction starts within 15–30 seconds upon contact with ingress water, expanding up to 30x in volume into a rigid-flexible closed-cell hydrophobic foam that instantly arrests high-pressure flowing leaks at 50–200 bar injection pressure.",
      },
      {
        q: "When should a single-component vs two-component PU resin system be specified?",
        a: "Single-component hydrophobic PU resins with accelerators are ideal for stopping fast-gushing active leaks in basement diaphragm walls, tunnel joints, and water sumps. Two-component elastic polyurethane resins are specified for non-foaming permanent flexible waterproofing of dynamic movement joints and hairline micro-fissures.",
      },
      {
        q: "What is the correct drilling angle and packer spacing for concrete crack injection?",
        a: "Packer holes should be drilled at a 45-degree angle alternately on both sides of the crack to intersect the fissure at mid-depth (approximately half the thickness of the RCC wall or slab). Mechanical packers are spaced along the crack line at distances equal to half the slab thickness (typically 150mm–300mm apart).",
      },
    ],
  },
  {
    id: "non-shrink-grout",
    slug: "non-shrink-grout",
    title: "Non-Shrink Grout",
    category: "Precision Grouts",
    tagline: "High-Strength Free Flowing Cementitious Precision Mortars",
    description:
      "Factory-blended, shrinkage-compensated cementitious grouts engineered with selected spherical aggregates and reactive expanders for ultimate load transfer.",
    image: nonShrinkGroutImg,
    alt: "Precision non-shrink grout being poured under structural column baseplate",
    standard: "ASTM C1107 Grade A/B/C • IS 4031",
    dosage: "25kg bag requires approx. 3.25 – 3.75 litres of clean water",
    features: [
      "Dual expansion mechanisms (plastic & hardened state) ensuring 100% EBA contact",
      "Compressive strength exceeding 75 N/mm² at 28 days",
      "Self-leveling fluidity without segregation or bleeding",
      "High modulus of elasticity resisting severe dynamic cyclic vibration",
    ],
    specs: [
      { label: "Compressive Strength (1D / 28D)", value: "25 MPa / >75 MPa" },
      { label: "Flow Cone (ASTM C939)", value: "20 – 30 seconds flow" },
      { label: "Expansion (ASTM C1090)", value: "+0.1% to +0.4%" },
      { label: "Flexural Strength (28D)", value: "> 9.5 N/mm²" },
    ],
    applications: [
      "Heavy industrial machine base plates and turbine mountings",
      "Anchor bolts and rebar doweling installations",
      "Precast concrete panel joints and beam pockets",
      "Bridge bearing pedestals and crane runway rails",
    ],
    faqs: [
      {
        q: "What 24-hour and 28-day compressive strengths are achieved by Vchemics non-shrink grout?",
        a: "When mixed at flowable consistency compliant with ASTM C1107 Grade B/C, our cementitious non-shrink grout achieves >25 MPa in 24 hours and exceeds >75 MPa at 28 days, ensuring rapid machinery turnaround and heavy foundation load transfer.",
      },
      {
        q: "What is the maximum and minimum pour thickness per single lift?",
        a: "Unextended grout can be placed from 10mm up to 100mm thickness. For thick sections exceeding 100mm up to 250mm, clean, silt-free 10mm graded coarse aggregate can be added at a ratio of 50% to 100% by weight of dry grout powder without inducing thermal shrinkage cracks.",
      },
      {
        q: "What formwork detailing is necessary to ensure zero trapped air pockets beneath baseplates?",
        a: "Formwork must be leak-proof, rigid, and erected with a minimum 50mm head on the pouring side and 25mm–50mm clearance on the open exit side. Pour continuously from one side only using a flow box or headbox to allow displaced air to escape freely across the underside of the baseplate.",
      },
    ],
  },
  {
    id: "epoxy-grouting",
    slug: "epoxy-grouting",
    title: "Epoxy Grouting",
    category: "Resin Grouts",
    tagline: "High-Performance 3-Component Solvent-Free Epoxy Mortars",
    description:
      "Ultra-high strength 3-part epoxy grouts offering extraordinary compressive, tensile, and shear strengths with total resistance to chemical spills and extreme dynamic shock.",
    image: epoxyGroutImg,
    alt: "Tile and precision machine joint grouting with chemical resistant epoxy grout float",
    standard: "ASTM C579 • ASTM C307 • ASTM C580",
    dosage: "Pre-measured 3-part kits (Resin, Hardener, Aggregate)",
    features: [
      "Compressive strength exceeding 95 N/mm² with unmatched chemical resistance",
      "Superior damp-substrate adhesion and zero volumetric shrinkage",
      "Exceptional dampening capacity absorbing high-frequency mechanical vibrations",
      "Fast curing allowing full operational load in under 24 hours at 30°C",
    ],
    specs: [
      { label: "Compressive Strength (7D)", value: "> 95 N/mm²" },
      { label: "Tensile Strength (7D)", value: "> 18 N/mm²" },
      { label: "Flexural Strength (7D)", value: "> 32 N/mm²" },
      { label: "Chemical Resistance", value: "Resistant to acids, alkalis, oils & fuels" },
    ],
    applications: [
      "Heavy stamping presses, rock crushers, and reciprocating compressors",
      "Crane rail soleplates and container port anchorages",
      "Chemical storage bunds, refinery plinths, and acid tank foundations",
      "High-load seismic anchor bolt fixing in concrete foundations",
    ],
    faqs: [
      {
        q: "How does 3-part epoxy grout perform against severe machinery dynamic fatigue and chemical spills?",
        a: "Vchemics 3-part epoxy grout provides compressive strength >95 MPa, flexural strength >28 MPa, and exceptional vibration dampening capacity. It is 100% impermeable to lubricating oils, hydraulic fluids, sulfuric acid (up to 30%), and battery chemicals beneath stamping presses and turbines.",
      },
      {
        q: "What is the maximum substrate moisture content permitted for epoxy grout placement?",
        a: "The concrete substrate must be completely dry with a moisture content of less than 4% (tested per ASTM F1869 or calcium chloride test) and free from oil, curing compounds, or moisture film to ensure maximum chemical adhesion (>3.5 MPa concrete failure).",
      },
      {
        q: "What is the workable pot life and full cure time under tropical temperatures (30°C–40°C)?",
        a: "Under 30°C ambient conditions, the workable pot life is approximately 35–45 minutes once the 3 components (Resin, Hardener, and Aggregate) are mixed. Initial set is achieved in 12 hours, with full design chemical and mechanical cure achieved at 48 hours.",
      },
    ],
  },
  {
    id: "protective-coatings",
    slug: "protective-coatings",
    title: "Protective Coatings",
    category: "Surface Protection",
    tagline: "Aliphatic Polyurethane, Epoxy & Anti-Carbonation Barrier Systems",
    description:
      "Weather-resistant aliphatic PU topcoats, high-build solvent-free epoxy floorings, and breathable anti-carbonation coatings engineered to shield concrete against UV and weathering.",
    image: protectiveCoatingsImg,
    alt: "Industrial applicator spray-applying protective anti-carbonation barrier coating to wall",
    standard: "EN 1504-2 • ASTM D4541 • ASTM D4060",
    dosage: "0.25 – 0.40 kg/m² per coat (recommended 2–3 coats)",
    features: [
      "UV stable, non-yellowing polyurethane finish with outstanding gloss retention",
      "Carbonation and chloride ion barrier with water vapor breathability",
      "Abrasion and chemical resistant seamless monolithic membrane",
      "Anti-fungal, anti-algal, and easily washable surface aesthetics",
    ],
    specs: [
      { label: "Elongation at Break", value: "> 350% (PU Membranes)" },
      { label: "Adhesion to Concrete", value: "> 2.5 N/mm² (Cohesive concrete failure)" },
      { label: "Shore D Hardness", value: "65 – 75 (Epoxy Floors)" },
      { label: "CO₂ Diffusion Resistance", value: "Equivalent to 100m+ air layer (R > 50m)" },
    ],
    applications: [
      "Exposed building facades, flyover piers, and coastal civil structures",
      "Automotive showrooms, pharmaceutical plants, and industrial flooring",
      "Terrace roofs, car park decks, and swimming pool surrounds",
      "Effluent treatment plant (ETP) concrete containment bunds",
    ],
    faqs: [
      {
        q: "How does the anti-carbonation coating protect concrete facades against industrial smog and coastal air?",
        a: "Vchemics elastomeric anti-carbonation coatings create a selective breathable membrane with equivalent concrete cover (R) exceeding 200 meters against carbon dioxide diffusion while allowing internal moisture vapor to escape (Sd < 0.5m), preventing facade spalling and rebar depassivation.",
      },
      {
        q: "What is the required inter-coat drying window and surface profile (CSP) before application?",
        a: "The substrate should be mechanically prepared to Concrete Surface Profile (CSP) 2–3. The second cross-coat should be applied after 6 to 8 hours under ambient 30°C conditions, ensuring no dust contamination or dew condensation between coats.",
      },
      {
        q: "Is the coating UV-resistant and color-stable under harsh tropical sunlight?",
        a: "Yes. Formulated with pure aliphatic acrylic/polyurethane polymers, it exhibits zero chalking, yellowing, or tensile embrittlement after 3,000+ hours of QUV accelerated weathering tests, retaining elastomeric crack-bridging performance over 10+ years.",
      },
    ],
  },
  {
    id: "concrete-repair",
    slug: "concrete-repair",
    title: "Concrete Repair",
    category: "Repair & Rehabilitation",
    tagline: "Polymer Repair Mortars, Rebar Passivators & Rust Converters",
    description:
      "Thixotropic polymer-modified structural repair mortars, zinc-rich rebar anti-corrosion primers, and epoxy bonding agents for precision concrete restoration.",
    image: concreteRepairImg,
    alt: "Specialist repairing surface crack in concrete slab with polymer modified repair mortar",
    standard: "EN 1504-3 Class R3/R4 • ASTM C1059",
    dosage: "Mortar: 1.85 kg/m² per mm thickness / Primer: 8–10 m²/Litre",
    features: [
      "Thixotropic non-sag consistency for overhead and vertical hand placement up to 50mm",
      "Cathodic zinc protection halting electrolytic corrosion of embedded rebar",
      "Thermal expansion coefficient perfectly matching structural grade concrete",
      "Impenetrable barrier against carbonation and airborne industrial sulfates",
    ],
    specs: [
      { label: "Compressive Strength (28D)", value: "45 – 55 N/mm²" },
      { label: "Flexural Strength", value: "> 8.0 N/mm²" },
      { label: "Tensile Adhesion", value: "> 2.0 N/mm²" },
      { label: "Pot Life @ 30°C", value: "35 – 45 minutes" },
    ],
    applications: [
      "Spalled and delaminated concrete in balconies, lintels, and facades",
      "Rebar rust conversion and anti-carbonation protective coatings",
      "Structural honeycombing and tie-rod hole packing",
      "Heritage building renovation and seismic retrofitting",
    ],
    faqs: [
      {
        q: "Can this thixotropic repair mortar be applied overhead and vertically without sagging?",
        a: "Yes. The polymer-modified thixotropic formulation allows single-pass application of up to 40mm on vertical surfaces and 25mm overhead without slumping, sag, or requiring temporary formwork support.",
      },
      {
        q: "Does this repair mortar prevent future galvanic corrosion around the repair perimeter?",
        a: "Yes. It's formulated with active corrosion inhibitors, high electrical resistivity, and a modulus of elasticity compatible with the parent concrete. This eliminates the 'incipient anode' ring effect — a common cause of secondary rebar corrosion at the repair boundary.",
      },
      {
        q: "What is the minimum application depth and edge preparation to prevent feather-edge spalling?",
        a: "The repair perimeter must be saw-cut to a minimum depth of 10mm perpendicular to the surface. Featheredging (tapering to zero thickness) is strictly prohibited as it leads to edge delamination under thermal cycling.",
      },
    ],
  },
  {
    id: "micro-concrete",
    slug: "micro-concrete",
    title: "Micro Concrete",
    category: "Structural Repair",
    tagline: "Flowable Shrinkage-Compensated Structural Jacketing Concrete",
    description:
      "Pre-bagged, single component, polymer-modified micro concrete designed for structural encasement, heavy section repair, and column enlargement without vibration.",
    image: microConcreteImg,
    alt: "High-fluidity micro concrete pumped and placed onto reinforced concrete foundation",
    standard: "EN 1504-3 Class R4 • IS 516",
    dosage: "25kg bag yields approx. 12.5 litres of mixed micro concrete",
    features: [
      "Self-compacting flow fills congested structural rebar jackets with zero voids",
      "Exceptional interfacial bond strength to parent concrete substrate",
      "Low permeability arresting ingress of chlorides, CO₂ and moisture",
      "Rapid early strength permitting early shuttering strip and loading",
    ],
    specs: [
      { label: "Compressive Strength (28D)", value: "> 60 N/mm²" },
      { label: "Bond Strength (Slant Shear)", value: "> 14 N/mm² (Substrate Failure)" },
      { label: "Modulus of Elasticity", value: "> 28 GPa" },
      { label: "Drying Shrinkage", value: "< 300 microstrains" },
    ],
    applications: [
      "RCC column and beam jacketing / section enlargement",
      "Structural slab repairs and bridge deck renewals",
      "Heavy honeycombing rectification in deep mass concrete",
      "Industrial floor section replacement under heavy rolling loads",
    ],
    faqs: [
      {
        q: "Can micro concrete flow freely through dense rebar cages without mechanical vibration?",
        a: "Yes. Vchemics micro concrete is formulated with spherical micro-aggregates (<5mm) and high-range fluidifying polymers, giving it self-compacting rheology (slump flow >650mm). This lets it fill narrow jackets and complex formwork void-free, with zero needle vibration.",
      },
      {
        q: "What is the recommended minimum and maximum thickness for structural column jacketing?",
        a: "Micro concrete is designed for thicknesses from 40mm up to 150mm per lift. For jackets thicker than 150mm, clean 10mm aggregate can be incorporated to moderate heat of hydration while maintaining compliance with EN 1504-3 Class R4 structural standards.",
      },
      {
        q: "How should the parent concrete and exposed corroded rebar be prepared prior to encasement?",
        a: "Preparation follows five steps: chip away unsound concrete at least 15mm–20mm behind corroded rebar; clean exposed steel to SA 2.5 cleanliness using grit blasting or wire brush; coat with zinc-rich anti-corrosion primer; install shear dowel anchors; and pre-soak the parent concrete to SSD condition before erecting watertight shuttering.",
      },
    ],
  },
];

export const products = allProducts.slice(0, 4);

export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category?: string;
  image: string;
  alt?: string;
  challenge: string;
  solutionDesc: string;
  keyProducts: string[];
  stages: { name: string; desc: string }[];
  applications: string[];
  metrics: string;
  workGalleryType?: "photos" | "diagrams";
  workGallery?: WorkGalleryStep[];
}

export const allSolutions: SolutionItem[] = [
  {
    id: "basement-waterproofing",
    slug: "basement-waterproofing",
    title: "Basement Waterproofing",
    subtitle: "Permanent deep-pore crystalline & membrane envelope against hydrostatic head",
    image: waterproofingImg,
    challenge:
      "High water tables and sub-soil hydrostatic pressure cause continuous dampness, rebar corrosion, and structural weakness in deep subterranean concrete rafts and retaining walls.",
    solutionDesc:
      "Our dual-barrier system combines integral crystalline admixture dosing during concrete pouring with secondary flexible elastomeric slurry coatings and swellable waterstops at construction cold joints.",
    keyProducts: [
      "Vchemics Integral Crystalline Admixture",
      "Vchemics Crystalline Slurry Coating",
      "Hydrophilic Swellable Waterstop Bar",
      "PU Hydro-Active Leak Injection Resin",
    ],
    stages: [
      {
        name: "Substrate & Joint Preparation",
        desc: "High-pressure jetting, honeycombing gouging, and rebar treatment.",
      },
      {
        name: "Cold Joint Detailing",
        desc: "Installation of hydrophilic waterstops and elastomeric joint bandages.",
      },
      {
        name: "Crystalline Matrix Layer",
        desc: "Dual coat deep-penetrating catalytic crystalline slurry application.",
      },
      {
        name: "Post-Cast Quality Audit",
        desc: "Core moisture test & pressure grouting of micro-fissures.",
      },
    ],
    applications: [
      "Multi-level basement parking",
      "Underground lift pits & sump wells",
      "Metro tunnels & subterranean shafts",
      "Commercial raft foundations",
    ],
    metrics: "100% Watertight • Resists >5 Bar Hydrostatic Head",
    workGalleryType: "photos",
    workGallery: [
      {
        step: 1,
        title: "Structural Shell Complete",
        caption:
          "RCC basement walls and column starter bars cast and cured, formwork struck — structure ready to receive waterproofing treatment.",
        image: step1StructureImg,
        alt: "Completed RCC basement walls and column reinforcement before waterproofing",
      },
      {
        step: 2,
        title: "Foundation Beam Waterproof Coating",
        caption:
          "Liquid-applied protective coating brushed onto plinth and tie beams and column pedestals before backfilling, sealing the horizontal foundation network.",
        image: step2BeamCoatingImg,
        alt: "Black waterproof coating applied to foundation tie beams",
      },
      {
        step: 3,
        title: "Site Conditions Managed Mid-Execution",
        caption:
          "Coated beams and rising column reinforcement worked around actual excavated ground conditions — coating maintained through real-world site obstacles, not a clean textbook layout.",
        image: step3SiteConditionsImg,
        alt: "Waterproof coated foundation beams around an excavated boulder on site",
      },
      {
        step: 4,
        title: "Vertical Wall Membrane Installation",
        caption:
          "Studded protection membrane mechanically fixed to the external face of the basement retaining walls, worked in from ground level.",
        image: step4WallMembraneImg,
        alt: "Workers installing studded waterproofing membrane on a basement retaining wall",
      },
      {
        step: 5,
        title: "Round-the-Clock Progress",
        caption:
          "Waterproofed wall base visible at ground level while structural work continues upward under floodlights — work didn't stop at daylight to hold the schedule.",
        image: step5ProgressImg,
        alt: "Night-time construction progress showing waterproofed basement wall base",
      },
    ],
  },
  {
    id: "terrace-waterproofing",
    slug: "terrace-waterproofing",
    title: "Terrace Waterproofing",
    subtitle: "Seamless elastomeric PU & acrylic coatings resistant to thermal expansion & ponding",
    image: terraceWaterproofingImg,
    challenge:
      "Tropical heat causes concrete slabs to expand and contract dramatically, tearing rigid coatings and causing severe ceiling leaks and damp patches in top-floor living areas.",
    solutionDesc:
      "We provide high-elongation (>400%) seamless polyurethane and reinforced polymer matrix systems that bridge dynamic thermal cracks while reflecting UV solar radiation to lower ambient indoor temperatures.",
    keyProducts: [
      "Vchemics Liquid PU Elastomeric Membrane",
      "Fiberglass Mesh Reinforcement Layer",
      "UV-Resistant Aliphatic Topcoat",
      "Polymer Screed Slope Mortar",
    ],
    stages: [
      {
        name: "Slope & Coving Correction",
        desc: "Creating minimum 1:100 drainage gradients and 75mm radius corner fillets.",
      },
      {
        name: "Primer Impregnation",
        desc: "Penetrative moisture-tolerant epoxy/acrylic primer layer.",
      },
      {
        name: "Reinforced Membrane Matrix",
        desc: "Multi-coat elastomeric PU embedded with 45 GSM fiberglass mesh.",
      },
      {
        name: "Water Ponding Test",
        desc: "72-hour continuous water head retention inspection before handover.",
      },
    ],
    applications: [
      "Exposed residential flat roofs",
      "Commercial podiums and sky decks",
      "Green roofs & landscaped terraces",
      "Industrial metal / concrete composite roofs",
    ],
    metrics: ">400% Elongation • 72h Pond Tested",
    workGalleryType: "photos",
    workGallery: [
      {
        step: 1,
        title: "Surface Preparation",
        caption:
          "Terrace slab mechanically ground to remove laitance and surface contaminants, creating a sound, receptive substrate ahead of waterproofing application.",
        image: step1SurfacePrepImg,
        alt: "Worker grinding a concrete terrace slab surface before waterproofing",
      },
      {
        step: 2,
        title: "Base Membrane & Fabric Reinforcement",
        caption:
          "Nitoproof 68RFI polyurethane waterproofing system applied with fabric reinforcement bedded across the full terrace area, forming a seamless, crack-bridging base membrane.",
        image: step2MembraneFabricImg,
        alt: "Fabric-reinforced polyurethane waterproofing membrane laid across a terrace slab",
      },
      {
        step: 3,
        title: "Protective Screed Application",
        caption:
          "Protective screed placed over the cured membrane via concrete pump, shielding the waterproofing layer and preparing a stable base for the finish coats.",
        image: step3ScreedPourImg,
        alt: "Workers placing protective screed over a waterproofed terrace using a concrete pump",
      },
      {
        step: 4,
        title: "Textured Protective Topcoat",
        caption:
          "A reflective textured topcoat rolled onto the cured screed, adding surface durability and helping reduce heat absorption on the finished terrace.",
        image: step4TexturedTopcoatImg,
        alt: "Worker rolling a textured protective topcoat onto a terrace surface",
      },
      {
        step: 5,
        title: "Final Pigmented Waterproof Topcoat",
        caption:
          "Final pigmented waterproof topcoat hand-rolled onto the terrace and parapet upstands, completing a fully sealed, UV-resistant finish.",
        image: step5FinalTopcoatImg,
        alt: "Worker applying green pigmented waterproof topcoat to a terrace and parapet wall",
      },
    ],
  },
  {
    id: "concrete-repair",
    slug: "concrete-repair",
    title: "Concrete Repair",
    subtitle: "Diagnostic restoration of spalled concrete, rebar corrosion & structural cracks",
    image: concreteRepairImg,
    challenge:
      "Chloride attack and atmospheric carbonation depassivate rebar steel, causing expansive rust, surface delamination, spalling, and loss of structural load-bearing cross-section.",
    solutionDesc:
      "A complete restorative chemical protocol: chipping unsound concrete, applying zinc-rich rust passivators to exposed steel, and reforming sections with shrinkage-compensated polymer modified mortars.",
    keyProducts: [
      "Vchemics Zinc-Rich Rebar Primer",
      "Polymer Bonding Interfacial Agent",
      "Structural Repair Mortar Class R4",
      "Anti-Carbonation Protective Topcoat",
    ],
    stages: [
      {
        name: "Sounding & Defect Demarcation",
        desc: "Mapping hollow zones and removing deteriorated concrete beyond rebar depth.",
      },
      {
        name: "Rebar Mechanical De-Rusting",
        desc: "Wire brushing to SA 2.5 cleanliness and immediate zinc-rich passivation.",
      },
      {
        name: "Bonding & Mortar Application",
        desc: "Wet-on-wet polymer bonding coat followed by thixotropic mortar buildup.",
      },
      {
        name: "Surface Sealing",
        desc: "Anti-carbonation, weather-proof protective coating system.",
      },
    ],
    applications: [
      "Coastal building facades & balconies",
      "Bridge piers and crosshead beams",
      "Industrial chemical plant structures",
      "Water tower columns and elevated reservoirs",
    ],
    metrics: ">50 MPa Strength Recovery • IS Compliant",
    workGalleryType: "photos",
    workGallery: [
      {
        step: 1,
        title: "Crack Width & Depth Assessment",
        caption:
          "Crack width and depth measured and classified as structural or non-structural, determining the correct repair method before any work begins.",
        image: step1CrackAssessmentImg,
        alt: "Worker assessing concrete crack width and depth with measuring tools on site",
      },
      {
        step: 2,
        title: "Saw-Cutting & V-Groove Routing",
        caption:
          "The crack is routed into a clean V-groove profile, creating a mechanical key that gives the repair material a stronger bond to the surrounding concrete.",
        image: step2SawCuttingImg,
        alt: "Circular saw cutting a clean V-groove channel along a concrete crack",
      },
      {
        step: 3,
        title: "Debris Removal & Substrate Prep",
        caption:
          "Loose material and dust are fully cleared from the groove using mechanical tools and compressed air, ensuring the repair mortar bonds only to sound concrete.",
        image: step3DebrisRemovalImg,
        alt: "Worker removing loose debris and chiseling concrete crack channel",
      },
      {
        step: 4,
        title: "Repair Mortar / Epoxy Injection",
        caption:
          "Polymer-modified repair mortar is placed in controlled lifts to fully seal the groove without trapping air voids, restoring load transfer across the repair zone.",
        image: step4RepairInjectionImg,
        alt: "Worker troweling polymer-modified repair mortar into the concrete crack channel",
      },
      {
        step: 5,
        title: "Finishing & Curing",
        caption:
          "The surface is finished flush and moist-cured, restoring structural integrity with a near-invisible repair line.",
        image: step5FinishingCuringImg,
        alt: "Worker leveling and smoothing the finished concrete repair mortar",
      },
    ],
  },
  {
    id: "structural-rehabilitation",
    slug: "structural-rehabilitation",
    title: "Structural Rehabilitation",
    subtitle: "Engineered section enlargement, micro concrete encasements & load recovery",
    image: step5FinishedColumnImg,
    challenge:
      "Ageing structures, additional floor additions, or seismic upgrade mandates require increasing column and beam capacities without demolishing existing load-bearing members.",
    solutionDesc:
      "Engineered RCC jacketing using high-fluidity, shrinkage-compensated micro concrete poured into tight shuttering, effectively restoring and enhancing structural cross-sectional load capacities.",
    keyProducts: [
      "Vchemics High-Flow Micro Concrete",
      "Epoxy Anchor & Dowel Mortar",
      "Substrate Interfacial Bonding Resin",
      "High-Pressure Low-Viscosity Epoxy Injection",
    ],
    stages: [
      {
        name: "Structural Shoring & Propping",
        desc: "Temporary load relief with certified heavy-duty shoring towers.",
      },
      {
        name: "Rebar Doweling & Cage Erection",
        desc: "Chemical anchoring of shear studs and additional structural steel cage.",
      },
      {
        name: "Watertight Formwork Erection",
        desc: "Sturdy formwork designed with hopper ports for gravity micro concrete head.",
      },
      {
        name: "Micro Concrete Placement",
        desc: "Continuous pouring of self-compacting micro concrete with zero vibration.",
      },
    ],
    applications: [
      "Column & beam capacity enhancement",
      "Heritage structural retrofitting",
      "Earthquake / seismic compliance upgrades",
      "Industrial frame modernization",
    ],
    metrics: ">65 MPa Compressive • Monolithic Bond",
    workGalleryType: "photos",
    workGallery: [
      {
        step: 1,
        title: "Temporary Shoring & Load Relief",
        caption:
          "Heavy-duty hydraulic props and shoring towers installed around the damaged RCC column to safely relieve live and dead loads during structural restoration.",
        image: step1ShoringImg,
        alt: "Heavy-duty steel shoring props and jack towers supporting a concrete beam and slab on site",
      },
      {
        step: 2,
        title: "Surface Chipping & Rebar Chemical Doweling",
        caption:
          "Deteriorated concrete chipped away to expose sound core, followed by precision drilling and chemical epoxy anchoring of high-yield steel shear dowels.",
        image: step2DowelingImg,
        alt: "Worker drilling anchor holes and installing chemical epoxy rebar dowels on a concrete column",
      },
      {
        step: 3,
        title: "Rebar Encasement Cage Assembly",
        caption:
          "A supplementary high-tensile steel reinforcement cage and confinement stirrups erected around the column, engineered to expand cross-sectional load capacity.",
        image: step3RebarCageImg,
        alt: "Ironworker assembling and tying a dense steel reinforcement cage around a concrete column",
      },
      {
        step: 4,
        title: "Watertight Shuttering with Pouring Hoppers",
        caption:
          "Precision watertight formwork assembled around the column with hopper funnels at the top to create gravity head pressure for complete encasement.",
        image: step4FormworkImg,
        alt: "Watertight formwork shuttering with top funnel hopper erected around a reinforced column",
      },
      {
        step: 5,
        title: "Micro Concrete Placement & Formwork Striking",
        caption:
          "Free-flowing, non-shrink micro concrete poured into the jacket without vibration, achieving monolithic structural bonding (>65 MPa) once formwork is struck.",
        image: step5FinishedColumnImg,
        alt: "Completed enlarged concrete jacketed column structurally restored after formwork striking",
      },
    ],
  },
  {
    id: "industrial-flooring",
    slug: "industrial-flooring",
    title: "Industrial Flooring",
    subtitle: "Heavy-duty monolithic metallic floor hardeners, epoxy & polyurethane screeds",
    image: step5TopcoatCureImg,
    challenge:
      "Forklift rolling shear, heavy pallet drops, chemical drips, and abrasive traffic cause rapid pitting, dusting, and uneven surfaces in manufacturing and warehousing floors.",
    solutionDesc:
      "We provide dry-shake non-metallic/metallic surface hardeners troweled directly into fresh concrete, alongside solvent-free epoxy screeds and anti-microbial polyurethane floor toppings.",
    keyProducts: [
      "Vchemics Metallic Floor Hardener",
      "Solvent-Free Epoxy Floor Screed",
      "High-Build Chemical Resistant PU Topping",
      "Silicate Dust-Proofer & Concrete Densifier",
    ],
    stages: [
      {
        name: "Substrate Profiling & Shot Blasting",
        desc: "Mechanical CSP 3–4 profiling and vacuum dust extraction.",
      },
      { name: "Moisture Barrier Primer", desc: "Deep penetrating moisture-tolerant epoxy primer." },
      {
        name: "Screed / Hardener Layer",
        desc: "Application of engineered self-leveling resin or dry-shake power troweling.",
      },
      {
        name: "Seal & Curing Sealant",
        desc: "Top coat sealing for stain resistance and high-gloss abrasion defense.",
      },
    ],
    applications: [
      "Automotive manufacturing lines",
      "Pharmaceutical Cleanrooms (cGMP)",
      "Heavy warehousing & logistics hubs",
      "Chemical processing and bottling plants",
    ],
    metrics: "Forklift Traffic Ready • High Chemical Defense",
    workGalleryType: "photos",
    workGallery: [
      {
        step: 1,
        title: "Diamond Grinding & Surface Profiling",
        caption:
          "Mechanical diamond grinding removes laitance and contaminants, creating a correctly profiled substrate for coating adhesion.",
        image: step1DiamondGrindingImg,
        alt: "Worker operating planetary diamond grinder on concrete floor",
      },
      {
        step: 2,
        title: "Crack & Joint Filling",
        caption:
          "Every joint and crack is filled flush with semi-rigid epoxy filler before coating, removing weak points under forklift wheel loads.",
        image: step2JointFillingImg,
        alt: "Worker applying epoxy crack and joint filler with a blade on concrete floor",
      },
      {
        step: 3,
        title: "Epoxy Primer Coat",
        caption:
          "A penetrating epoxy primer seals concrete porosity and anchors the coating system above it.",
        image: step3PrimerCoatImg,
        alt: "Worker rolling penetrating epoxy primer onto concrete floor",
      },
      {
        step: 4,
        title: "Self-Levelling Base Coat",
        caption:
          "Self-levelling epoxy is poured and spike-rolled to release entrapped air, giving a flat, seamless floor plane.",
        image: step4SelfLevelingImg,
        alt: "Worker rolling spiked roller across self-levelling epoxy floor",
      },
      {
        step: 5,
        title: "Topcoat & Cure",
        caption:
          "A high-build aliphatic topcoat is applied and cured, delivering a seamless, chemical- and abrasion-resistant finish ready for heavy traffic.",
        image: step5TopcoatCureImg,
        alt: "Finished high-gloss seamless epoxy warehouse floor",
      },
    ],
  },
  {
    id: "painting",
    slug: "painting",
    title: "Protective & Architectural Painting",
    category: "coatings",
    subtitle:
      "Industrial protective coatings and architectural finishes for lasting performance and appearance.",
    image: paintingHeroImg,
    alt: "Illustrative diagram of protective and architectural painting surface coverage",
    metrics: "Weather, chemical & abrasion-resistant finish systems",
    challenge:
      "Uncoated or poorly maintained surfaces — structural steel, tanks, industrial plant, building exteriors and interiors — are exposed to weathering, chemical attack, UV degradation, and general wear, leading to corrosion, discoloration, and reduced service life.",
    solutionDesc:
      "Vchemics supplies and applies protective coating and architectural painting systems matched to the substrate and exposure condition — from heavy-duty industrial protective coatings on tanks and structural steel to durable, weather-resistant architectural finishes for building exteriors and interiors.",
    keyProducts: [
      "Epoxy & Polyurethane Protective Coatings",
      "Anti-Corrosive Primers & Zinc Passivators",
      "High-Performance Weatherproof Architectural Emulsions",
      "Chemical-Resistant Tank & Structural Steel Enamels",
    ],
    stages: [
      {
        name: "Surface Profiling & Preparation",
        desc: "Mechanical blast cleaning, grit blasting or power wire brushing conforming to SA 2.5 cleanliness.",
      },
      {
        name: "Anti-Corrosive / Receptive Primer",
        desc: "Application of substrate-specific zinc-rich, epoxy, or alkali-resistant penetrative primer.",
      },
      {
        name: "Intermediate Build Coat",
        desc: "High-build barrier coating to eliminate pinholes and build specified Dry Film Thickness (DFT).",
      },
      {
        name: "Protective Architectural Finish",
        desc: "UV-stable aliphatic polyurethane or weather-proof exterior finish resisting environmental degradation.",
      },
    ],
    applications: [
      "Structural steel framing & gantry systems",
      "Industrial chemical & water storage tanks",
      "Commercial exterior facades & elevations",
      "High-traffic manufacturing plant interiors",
    ],
    workGallery: undefined,
  },
];

export interface LocationItem {
  id: string;
  slug: string;
  city: string;
  role: string;
  address?: string;
  phone: string;
  email: string;
  dispatchTime: string;
  coverageAreas: string[];
  keyHighlights: string[];
  mapQuery?: string;
}

export const allLocations: LocationItem[] = [
  {
    id: "chennai",
    slug: "chennai",
    city: "Chennai",
    role: "Headquarters, Main Manufacturing Plant & R&D Laboratory",
    address: "Omsakthi Street, Kumaran Nagar Extn-I, Padi, Chennai - 600050",
    phone: "+91 99423-54602",
    email: "vchemics1989@gmail.com",
    dispatchTime: "Same-Day Dispatch (4 to 8 Hours)",
    coverageAreas: [
      "Chennai Metro",
      "Kanchipuram",
      "Chengalpattu",
      "Tiruvallur",
      "Sriperumbudur Industrial Corridor",
      "Oragadam Hub",
    ],
    keyHighlights: [
      "Primary batch manufacturing reactor and automated blending facility",
      "Central quality assurance and concrete testing laboratory",
      "Same-day dispatch for emergency pours and high-volume tanker deliveries",
      "Senior formulation chemists and field troubleshooting team base",
    ],
    mapQuery: "Omsakthi Street, Kumaran Nagar Extn-I, Padi, Chennai - 600050",
  },
  {
    id: "coimbatore",
    slug: "coimbatore",
    city: "Coimbatore",
    role: "Western Tamil Nadu Regional Distribution & Engineering Hub",
    address: "",
    phone: "+91 99423-54602",
    email: "vchemics1989@gmail.com",
    dispatchTime: "Next-Day Direct Delivery (Within 24 Hours)",
    coverageAreas: [
      "Coimbatore City",
      "Tirupur",
      "Pollachi",
      "Mettupalayam",
      "Nilgiris Belt",
      "Palakkad Corridor",
    ],
    keyHighlights: [
      "Dedicated warehouse stocking all 8 core product catalogues in bulk drums & bags",
      "On-site trial batch support for ready-mix concrete batching plants",
      "Specialist support for textile, foundry, and engineering infrastructure works",
      "Fast 24-hour delivery guarantee across western district sites",
    ],
    mapQuery: "",
  },
  {
    id: "erode",
    slug: "erode",
    city: "Erode",
    role: "Central Infrastructure & Textile Logistics Depot",
    address: "302/B9, Indian Nagar, 3rd Street, 46 Pudhur, Modakurichi, Erode - 638002",
    phone: "+91 99423-54602",
    email: "vchemics1989@gmail.com",
    dispatchTime: "Within 24 Hours Delivery",
    coverageAreas: [
      "Erode Metro",
      "Perundurai",
      "Bhavani",
      "Gobichettipalayam",
      "Anthiyur",
      "Sathy Belt",
    ],
    keyHighlights: [
      "Strategic central TN warehouse located near highway artery for rapid routing",
      "Focus on ETP waterproofing, chemical bund linings, and industrial flooring",
      "Full inventory of non-shrink grouts and crystalline waterproofing products",
      "Dedicated field technician available for applicator site demonstrations",
    ],
    mapQuery: "302/B9 Indian Nagar 3rd Street 46 Pudhur Modakurichi Erode 638002",
  },
  {
    id: "krishnagiri",
    slug: "krishnagiri",
    city: "Krishnagiri",
    role: "Regional Office",
    address: "RSF No.: 121/16, Murugar Kovil, Boganapalli, Krishnagiri - 635001, Tamil Nadu, India",
    phone: "+91 99423-54602",
    email: "vchemics1989@gmail.com",
    dispatchTime: "Within 24 Hours Delivery",
    coverageAreas: [
      "Krishnagiri District",
      "Hosur Industrial Belt",
      "Dharmapuri",
      "Bargur",
      "Pochampalli",
      "SIPCOT Industrial Complexes",
    ],
    keyHighlights: [
      "Regional office and distribution point serving Northern Tamil Nadu and industrial corridors",
      "Comprehensive inventory of construction chemicals, waterproofing systems, and grouts",
      "Direct technical consultations and trial batches for infrastructure and industrial works",
      "Fast 24-hour dispatch and delivery across Krishnagiri and neighboring industrial zones",
    ],
    mapQuery: "RSF No. 121/16 Murugar Kovil Boganapalli Krishnagiri 635001 Tamil Nadu",
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  category: "Infrastructure" | "Industrial" | "Commercial" | "Waterproofing";
  location: string;
  scope: string;
  productsUsed: string[];
  metrics: string;
  year: string;
}

export const allProjects: ProjectItem[] = [
  {
    id: "chennai-metro-phase-2",
    title: "Metro Underground Rail Tunneling & Station Rafts",
    category: "Infrastructure",
    location: "Chennai, Tamil Nadu",
    scope:
      "Vchemics supplied crystalline waterproofing admixtures, diaphragm wall PU leak-sealing resin, and high-fluidity superplasticiser formulations for this project's deep station basement and diaphragm wall works.",
    productsUsed: [
      "Vchemics Crystalline Admixture",
      "PU Injection Resin",
      "PCE Superplasticiser 600",
    ],
    metrics: "Formulated for 45,000 m² Watertight Envelope",
    year: "2024",
  },
  {
    id: "sipcot-automobile-plant",
    title: "Global Auto OEM Stamping Press Foundation",
    category: "Industrial",
    location: "Sriperumbudur Corridor",
    scope:
      "Vchemics supplied high-strength epoxy grouts and Class C non-shrink precision grouting formulations for this project's 2,500-ton stamping press baseplate anchoring and dynamic vibration damping.",
    productsUsed: ["Vchemics High-Strength Epoxy Grout", "Non-Shrink Grout Class C"],
    metrics: "Formulation Target: >95 MPa Compressive Strength",
    year: "2023",
  },
  {
    id: "coimbatore-it-park-podium",
    title: "Premium Tech Park Podium & Terrace Deck",
    category: "Commercial",
    location: "Coimbatore, Tamil Nadu",
    scope:
      "Vchemics supplied multi-layer liquid PU elastomeric membranes, aliphatic UV topcoats, and polymer screed formulations for this project's 18,000 sq.m exposed terrace and landscaped podium deck waterproofing.",
    productsUsed: ["Vchemics Liquid PU Membrane", "Aliphatic UV Topcoat", "Polymer Screed"],
    metrics: "Formulation Target: 72h Zero-Leak Ponding",
    year: "2024",
  },
  {
    id: "salem-thermal-rehab",
    title: "Thermal Power Station Cooling Tower & Encasement",
    category: "Infrastructure",
    location: "Mettur / Salem Belt",
    scope:
      "Vchemics supplied Class R4 structural micro concrete, zinc rebar anti-corrosion primers, and anti-carbonation barrier coating formulations for this project's thermal power cooling structure and column jacketing rehabilitation.",
    productsUsed: ["Micro Concrete R4", "Zinc Rebar Primer", "Anti-Carbonation Barrier"],
    metrics: "Formulated for 120 Structural Column Jacketings",
    year: "2023",
  },
  {
    id: "erode-textile-etp",
    title: "Chemical Resistant Effluent Treatment (ETP) Tanks",
    category: "Waterproofing",
    location: "Perundurai SIPCOT, Erode",
    scope:
      "Vchemics supplied heavy chemical-resistant epoxy coatings, crystalline waterproofing slurry, and epoxy mortar formulations for this project's high-salinity industrial effluent sumps and treatment tanks.",
    productsUsed: ["Vchemics Chemical Resistant Epoxy", "Crystalline Slurry", "Epoxy Mortar"],
    metrics: "Formulation Target: pH 2–12 Chemical Resistance",
    year: "2024",
  },
  {
    id: "karur-highrise-rmc",
    title: "Commercial High-Rise Ready-Mix Concrete Supply",
    category: "Commercial",
    location: "Karur & Dindigul",
    scope:
      "Vchemics supplied custom-calibrated PCE retarding superplasticisers and integral waterproofing formulations for this project's high-rise concrete pours, maintaining 180mm slump over 90-minute transit in 39°C ambient temperatures.",
    productsUsed: ["PCE Retarding Superplasticiser", "Integral Waterproofer"],
    metrics: "Formulated for 35,000+ m³ Batch Consistency",
    year: "2024",
  },
];

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  author: string;
  tags: string[];
  image: string;
  imageKey?: string;
  alt: string;
  takeaways?: string[];
  standards?: { code: string; name: string; url: string }[];
}

export const blogTopics = [
  "Admixtures & Mix Design",
  "Waterproofing Guides",
  "Precision Grouts",
  "Site Troubleshooting",
  "Structural Rehabilitation",
] as const;

export const allBlogPosts: BlogPostItem[] = [
  {
    id: "pu-injection-grouting",
    slug: "pu-injection-grouting",
    title: "PU Injection Grouting: Process, Uses, Types & Selection Guide",
    category: "Precision Grouts",
    date: "September 2026",
    readTime: "9 min read",
    author: "Technical Formulation Team",
    excerpt:
      "Learn how PU injection grouting seals concrete leaks and cracks, its types, process, applications, limitations and selection factors.",
    tags: [
      "PU Injection Grouting",
      "Waterproofing",
      "Crack Repair",
      "Basement Waterproofing",
      "Concrete Repair",
    ],
    image: puInjectionSiteHeroImg,
    imageKey: "pu-injection-site",
    alt: "Worker performing PU injection grouting on a concrete ceiling with marked injection grid points, using a hand-held injection hose.",
    takeaways: [
      "PU injection is not one material — hydrophilic, hydrophobic, foaming, and non-foaming resins each suit different water and movement conditions.",
      "A leaking crack is not automatically a structural crack; structural significance must be assessed separately by a qualified engineer.",
      "Injection pressure has no universal value — it depends on the resin, crack geometry, substrate condition, and site water pressure.",
      "Always consult the current product TDS before mixing, application, or curing — generic assumptions between products are a common cause of repair failure.",
    ],
  },
  {
    id: "preventing-cold-joints-tropical-concrete",
    slug: "preventing-cold-joints-tropical-concrete",
    title: "How to Prevent Cold Joints in High-Temperature Concrete Pours",
    category: "Admixtures & Mix Design",
    date: "February 2025",
    readTime: "6 min read",
    author: "Technical Formulation Team",
    excerpt:
      "In South India's high ambient heat, standard hydration accelerates rapidly. Learn how PCE retarding superplasticisers extend open slump retention up to 3 hours without compromising early 3-day strength.",
    tags: ["Concrete Admixtures", "IS 9103", "Hot Weather Pouring", "Mix Design", "Admixtures"],
    image: blogColdJointsImg,
    alt: "How to Prevent Cold Joints in High-Temperature Concrete Pours - Best Practices and Comparison Infographic",
    takeaways: [
      "Tropical ambient heat (>35°C) can accelerate concrete hydration, cutting initial setting time from 180 minutes to under 60.",
      "Retarding PCE superplasticisers compliant with IS 9103 Type G & ASTM C494 Type G safely extend workable slump retention up to 3 hours.",
      "Maintaining low water-cement ratio (w/c < 0.35) achieves ultra-high slump flow (>600mm) without bleeding or segregation.",
      "Internal poker vibrators must penetrate 100mm–150mm into the preceding lift to knit layers into a monolithic matrix.",
    ],
    standards: [
      {
        code: "IS 9103:1999",
        name: "Specification for Admixtures for Concrete",
        url: "https://law.resource.org/pub/in/bis/S03/is.9103.1999.pdf",
      },
      {
        code: "ASTM C494 / C494M",
        name: "Standard Specification for Chemical Admixtures for Concrete",
        url: "https://www.astm.org/c0494_c0494m-19.html",
      },
      {
        code: "ASTM C881",
        name: "Standard Specification for Epoxy-Resin-Base Bonding Systems",
        url: "https://www.astm.org/c0881_c0881m-15.html",
      },
    ],
  },
  {
    id: "crystalline-vs-membrane-waterproofing",
    slug: "crystalline-vs-membrane-waterproofing",
    title: "Crystalline vs Elastomeric Membrane Waterproofing: Engineering Selection Guide",
    category: "Waterproofing Guides",
    date: "January 2025",
    readTime: "7 min read",
    author: "Structural Diagnostics Division",
    excerpt:
      "Deep dive into chemical crystallization vs liquid polyurethane elastomeric membranes: comparative pore sealing chemistry, hydrostatic head resistance, and crack self-healing capabilities.",
    tags: [
      "Waterproofing Chemicals",
      "Crystalline Waterproofing",
      "Basement Waterproofing",
      "Waterproofing",
      "Membrane",
    ],
    image: waterproofingGuideImg,
    imageKey: "waterproofing-guide",
    alt: "Crystalline vs Membrane Waterproofing Engineering Cross Section Guide",
    takeaways: [
      "Crystalline chemistry grows non-soluble dendritic crystals sealing micro-cracks up to 0.4mm.",
      "Withstands over 5 bar hydrostatic head pressure from positive and negative sides.",
      "PU elastomeric membranes provide >400% elongation for dynamic roof movement.",
    ],
    standards: [
      {
        code: "IS 2645",
        name: "Integral Waterproofing Compounds for Cement Mortar and Concrete",
        url: "https://law.resource.org/pub/in/bis/S03/is.2645.2003.pdf",
      },
      {
        code: "DIN 1048",
        name: "Testing Concrete: Water Permeability",
        url: "https://www.din.de",
      },
    ],
  },
  {
    id: "machine-foundation-epoxy-grouting-standards",
    slug: "machine-foundation-epoxy-grouting-standards",
    title: "Heavy Equipment Precision Grouting: ASTM C1107 vs 3-Part Epoxy Grout",
    category: "Precision Grouts",
    date: "January 2025",
    readTime: "5 min read",
    author: "Industrial Flooring & Grouting Team",
    excerpt:
      "Engineering specifications for heavy machine plinths, stamping presses, and dynamic turbine mountings. Comparing Effective Bearing Area (EBA >95%) and vibration dampening.",
    tags: [
      "Epoxy Grouting",
      "Non-Shrink Grout",
      "Precision Grouts",
      "ASTM C1107",
      "Grouts",
      "Resin Grouts",
    ],
    image: epoxyGroutImg,
    imageKey: "grouts",
    alt: "Machine Foundation Precision Epoxy Grouting Diagram",
    takeaways: [
      "ASTM C1107 Grade B/C ensures 100% Effective Bearing Area contact beneath baseplates.",
      "3-part epoxy grouts reach >95 MPa compressive strength with extreme fatigue absorption.",
      "Complete impermeability to machine oils, hydraulic fluids, and industrial acids.",
    ],
    standards: [
      {
        code: "ASTM C1107",
        name: "Standard Specification for Packaged Dry, Hydraulic-Cement Grout (Nonshrink)",
        url: "https://www.astm.org/c1107_c1107m-20.html",
      },
      {
        code: "ASTM C579",
        name: "Standard Test Methods for Compressive Strength of Chemical-Resistant Mortars",
        url: "https://www.astm.org/c0579-18.html",
      },
    ],
  },
  {
    id: "pu-injection-active-leak-sealing",
    slug: "pu-injection-active-leak-sealing",
    title: "High-Pressure PU Injection Grouting for Active Hydrostatic Water Ingress",
    category: "Site Troubleshooting",
    date: "December 2024",
    readTime: "6 min read",
    author: "Waterproofing Field Engineers",
    excerpt:
      "Step-by-step 45-degree mechanical packer installation and hydro-active polyurethane resin injection at 50–250 bar to permanently arrest high-pressure gushing leaks.",
    tags: [
      "PU Injection Grouting",
      "Waterproofing Chemicals",
      "Leak Sealing",
      "Injection Systems",
      "Waterproofing",
    ],
    image: puInjectionImg,
    imageKey: "grouts",
    alt: "PU Injection High-Pressure Leak Sealing Methodology",
    takeaways: [
      "Hydro-active PU expands 20x to 30x in volume within 30 seconds of water contact.",
      "Drill 45-degree injection ports intersecting cracks at structural mid-depth.",
      "Dual-stage injection guarantees both water cut-off and permanent elastic joint sealing.",
    ],
    standards: [
      {
        code: "EN 1504-5",
        name: "Products and Systems for the Protection and Repair of Concrete Structures - Injection",
        url: "https://www.en-standard.eu",
      },
      {
        code: "ASTM D1638",
        name: "Standard Methods of Testing Urethane Foam Isocyanate Raw Materials",
        url: "https://www.astm.org",
      },
    ],
  },
  {
    id: "column-jacketing-micro-concrete-standards",
    slug: "column-jacketing-micro-concrete-standards",
    title: "Structural Column Jacketing & Section Enlargement with Micro Concrete",
    category: "Structural Rehabilitation",
    date: "December 2024",
    readTime: "8 min read",
    author: "Structural Rehabilitation Group",
    excerpt:
      "Best practices for RCC column encasement, rebar passivating primers, shear dowel anchorage, and self-compacting micro concrete placement compliant with EN 1504-3 Class R4.",
    tags: [
      "Micro Concrete",
      "Concrete Repair",
      "Structural Repair",
      "Repair & Rehabilitation",
      "EN 1504",
    ],
    image: microConcreteImg,
    imageKey: "microconcrete",
    alt: "RCC Column Jacketing with Self Compacting Micro Concrete",
    takeaways: [
      "EN 1504-3 Class R4 micro concrete achieves >60 MPa 28-day compressive strength.",
      "High fluidity self-compacting rheology fills congested rebar cages void-free.",
      "Cathodic zinc primer prevents incipient anode corrosion in surrounding rebar.",
    ],
    standards: [
      {
        code: "EN 1504-3",
        name: "Structural and Non-Structural Repair of Concrete Structures",
        url: "https://www.en-standard.eu",
      },
      {
        code: "IS 516",
        name: "Method of Tests for Strength of Concrete",
        url: "https://law.resource.org/pub/in/bis/S03/is.516.1959.pdf",
      },
    ],
  },
  {
    id: "waterproofing-chemicals-guide",
    slug: "waterproofing-chemicals-guide",
    title: "Waterproofing Chemicals: A Simple Guide for Better Building Protection",
    category: "Waterproofing Guides",
    date: "September 2026",
    readTime: "8 min read",
    author: "Vchemics Technical Team",
    excerpt:
      "Learn how waterproofing chemicals control moisture, where to apply them, and how to select the right protection for walls, terraces, basements, wet areas, and water tanks.",
    tags: [
      "Waterproofing Chemicals",
      "Waterproofing",
      "Basement Waterproofing",
      "Terrace Waterproofing",
      "Building Maintenance",
    ],
    image: waterproofingImg,
    imageKey: "waterproofing",
    alt: "Applicator rolling a seamless waterproofing coating across a concrete roof slab",
  },
  {
    id: "protective-coatings-for-buildings",
    slug: "protective-coatings-for-buildings",
    title: "Protective Coatings: Types, Benefits & Uses",
    category: "Waterproofing Guides",
    date: "September 2026",
    readTime: "8 min read",
    author: "Vchemics Technical Team",
    excerpt:
      "Learn about protective coatings, their types, benefits, applications, and selection for concrete, steel, roofs, and industrial surfaces.",
    tags: [
      "Protective Coatings",
      "Protective Coatings for Buildings",
      "Types of Protective Coatings",
      "Benefits of Protective Coatings",
      "Protective Coating for Concrete",
      "Protective Coating for Steel",
      "Polyurethane Protective Coating",
      "Epoxy Protective Coating",
      "Anti-Carbonation Coating",
      "Industrial Protective Coatings",
    ],
    image: protectiveCoatingsBuildingsImg,
    imageKey: "protective-coatings-buildings",
    alt: "Worker applying protective coating to exposed concrete building surface",
    takeaways: [
      "Protective coatings create a specialized barrier against UV, moisture, chemicals, carbonation, and mechanical wear.",
      "Polyurethane, epoxy, and anti-carbonation systems each serve different exposure, movement, and durability needs.",
      "Proper surface preparation and moisture assessment are essential to prevent premature coating failure.",
      "System thickness, recoat windows, and curing times must be strictly followed according to technical specifications.",
    ],
    standards: [
      {
        code: "EN 1504-2",
        name: "Surface Protection Systems for Concrete",
        url: "https://www.en-standard.eu",
      },
      {
        code: "ASTM D4541",
        name: "Standard Test Method for Pull-Off Strength of Coatings Using Portable Adhesion Testers",
        url: "https://www.astm.org",
      },
      {
        code: "ASTM D4060",
        name: "Standard Test Method for Abrasion Resistance of Organic Coatings by the Taber Abraser",
        url: "https://www.astm.org",
      },
    ],
  },
];

export const admixtureUses = [
  "Pumped Concrete",
  "High Fluidity Concrete",
  "High Strength Concrete",
  "Ready-Mix Concrete",
  "Long Distance Transport Concrete",
] as const;

export const industries = [
  "Concrete & Ready-Mix",
  "Civil Infrastructure",
  "Industrial Manufacturing",
  "Flooring Systems",
  "Restoration and Renovation",
  "Mining and Tunneling",
  "Power & Energy",
  "Building & High-Rise",
] as const;

export const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 40, suffix: "+", label: "Chemical Formulations" },
  { value: 4, suffix: " Hubs", label: "TN Regional Centers" },
  { value: 100, suffix: "%", label: "Tested & Certified" },
] as const;

export interface FounderItem {
  name: string;
  titles: string[];
  bio: string[];
  credentials: string[];
  photo: string;
  alt: string;
}

export const founder: FounderItem = {
  name: "Velmurugan Sivanantham",
  titles: [
    "Founder & CEO, Vchemics India Solutions",
    "Managing Director, Robotics Bricks and Blocks",
  ],
  bio: [
    "Velmurugan Sivanantham is the Founder of Vchemics India Solutions and Managing Director of Robotics Bricks and Blocks Private Limited. Under his leadership, both companies have grown into recognized names in the national construction materials market, delivering industrial, civil infrastructure, and residential projects across cities in Tamil Nadu and beyond.",
    "At Vchemics, he has built a specialized construction chemicals business focused on high-performance, sustainable products that improve the strength, durability, and longevity of structures. At Robotics Bricks and Blocks, he directs innovative precast solutions including paver blocks and precast materials.",
    "A strong believer in collaboration, he works closely with clients, partners, and industry experts to build solutions that go beyond stated requirements — backed by a team-first approach and a consistent focus on client satisfaction.",
  ],
  credentials: ["Active Member, Business Networking International (BNI)"],
  photo: founderImg,
  alt: "Velmurugan Sivanantham, Founder of Vchemics India Solutions",
};
