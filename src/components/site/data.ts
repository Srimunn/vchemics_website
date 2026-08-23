import admixturesImg from "@/assets/product-admixtures.jpg";
import groutsImg from "@/assets/product-grouts.jpg";
import waterproofingImg from "@/assets/product-waterproofing.jpg";
import microConcreteImg from "@/assets/product-microconcrete.jpg";

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
}

export const allProducts: ProductItem[] = [
  {
    id: "concrete-admixtures",
    slug: "concrete-admixtures",
    title: "Concrete Admixtures",
    category: "Admixtures",
    tagline: "PCE & SNF Superplasticisers, Accelerators & Retarders",
    description: "High-performance polycarboxylate ether (PCE) and SNF chemical admixtures engineered for high slump retention, up to 30% water cut, and rapid early strength development.",
    image: admixturesImg,
    alt: "Liquid concrete admixture being dosed into a batching plant mixer",
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
  },
  {
    id: "waterproofing-chemicals",
    slug: "waterproofing-chemicals",
    title: "Waterproofing Chemicals",
    category: "Waterproofing",
    tagline: "Crystalline & Polymer Formulations for Waterproof Integrity",
    description: "Integral crystalline powders, hydrophobic pore-blocking liquids, and acrylic elastomeric barrier chemicals delivering permanent protection against hydrostatic pressure.",
    image: waterproofingImg,
    alt: "Applicator applying crystalline waterproofing coat to concrete raft foundation",
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
  },
  {
    id: "pu-injection-grouting",
    slug: "pu-injection-grouting",
    title: "PU Injection Grouting",
    category: "Injection Systems",
    tagline: "Hydro-Active Polyurethane Resins for Live Leak Sealing",
    description: "Rapidly expanding single & dual component hydrophobic polyurethane injection resins that react violently with ingress water to form a closed-cell elastomeric barrier.",
    image: groutsImg,
    alt: "Technician injecting hydro-active PU grout through packers into leaking diaphragm wall",
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
  },
  {
    id: "non-shrink-grout",
    slug: "non-shrink-grout",
    title: "Non-Shrink Grout",
    category: "Precision Grouts",
    tagline: "High-Strength Free Flowing Cementitious Precision Mortars",
    description: "Factory-blended, shrinkage-compensated cementitious grouts engineered with selected spherical aggregates and reactive expanders for ultimate load transfer.",
    image: groutsImg,
    alt: "Free-flowing non-shrink grout placed beneath heavy industrial machine base plate",
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
  },
  {
    id: "micro-concrete",
    slug: "micro-concrete",
    title: "Micro Concrete",
    category: "Structural Repair",
    tagline: "Flowable Shrinkage-Compensated Structural Jacketing Concrete",
    description: "Pre-bagged, single component, polymer-modified micro concrete designed for structural encasement, heavy section repair, and column enlargement without vibration.",
    image: microConcreteImg,
    alt: "Micro concrete pumped into shuttering around a corroded structural column",
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
  },
  {
    id: "concrete-repair",
    slug: "concrete-repair",
    title: "Concrete Repair",
    category: "Repair & Rehabilitation",
    tagline: "Polymer Repair Mortars, Rebar Passivators & Rust Converters",
    description: "Thixotropic polymer-modified structural repair mortars, zinc-rich rebar anti-corrosion primers, and epoxy bonding agents for precision concrete restoration.",
    image: microConcreteImg,
    alt: "Structural repair technician applying polymer mortar to spalled concrete soffit",
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
  },
  {
    id: "epoxy-grouting",
    slug: "epoxy-grouting",
    title: "Epoxy Grouting",
    category: "Resin Grouts",
    tagline: "High-Performance 3-Component Solvent-Free Epoxy Mortars",
    description: "Ultra-high strength 3-part epoxy grouts offering extraordinary compressive, tensile, and shear strengths with total resistance to chemical spills and extreme dynamic shock.",
    image: groutsImg,
    alt: "Three-part solvent-free epoxy grout being poured beneath stamping press foundation",
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
  },
  {
    id: "protective-coatings",
    slug: "protective-coatings",
    title: "Protective Coatings",
    category: "Surface Protection",
    tagline: "Aliphatic Polyurethane, Epoxy & Anti-Carbonation Barrier Systems",
    description: "Weather-resistant aliphatic PU topcoats, high-build solvent-free epoxy floorings, and breathable anti-carbonation coatings engineered to shield concrete against UV and weathering.",
    image: waterproofingImg,
    alt: "Applicator rolling high-gloss protective polyurethane coating onto industrial warehouse floor",
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
  },
];

export const products = allProducts.slice(0, 4);

export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  challenge: string;
  solutionDesc: string;
  keyProducts: string[];
  stages: { name: string; desc: string }[];
  applications: string[];
  metrics: string;
}

export const allSolutions: SolutionItem[] = [
  {
    id: "basement-waterproofing",
    slug: "basement-waterproofing",
    title: "Basement Waterproofing",
    subtitle: "Permanent deep-pore crystalline & membrane envelope against hydrostatic head",
    image: waterproofingImg,
    challenge: "High water tables and sub-soil hydrostatic pressure cause continuous dampness, rebar corrosion, and structural weakness in deep subterranean concrete rafts and retaining walls.",
    solutionDesc: "Our dual-barrier system combines integral crystalline admixture dosing during concrete pouring with secondary flexible elastomeric slurry coatings and swellable waterstops at construction cold joints.",
    keyProducts: [
      "V-Chemics Integral Crystalline Admixture",
      "V-Chemics Crystalline Slurry Coating",
      "Hydrophilic Swellable Waterstop Bar",
      "PU Hydro-Active Leak Injection Resin",
    ],
    stages: [
      { name: "Substrate & Joint Preparation", desc: "High-pressure jetting, honeycombing gouging, and rebar treatment." },
      { name: "Cold Joint Detailing", desc: "Installation of hydrophilic waterstops and elastomeric joint bandages." },
      { name: "Crystalline Matrix Layer", desc: "Dual coat deep-penetrating catalytic crystalline slurry application." },
      { name: "Post-Cast Quality Audit", desc: "Core moisture test & pressure grouting of micro-fissures." },
    ],
    applications: ["Multi-level basement parking", "Underground lift pits & sump wells", "Metro tunnels & subterranean shafts", "Commercial raft foundations"],
    metrics: "100% Watertight • Resists >5 Bar Hydrostatic Head",
  },
  {
    id: "terrace-waterproofing",
    slug: "terrace-waterproofing",
    title: "Terrace Waterproofing",
    subtitle: "Seamless elastomeric PU & acrylic coatings resistant to thermal expansion & ponding",
    image: waterproofingImg,
    challenge: "Tropical heat causes concrete slabs to expand and contract dramatically, tearing rigid coatings and causing severe ceiling leaks and damp patches in top-floor living areas.",
    solutionDesc: "We provide high-elongation (>400%) seamless polyurethane and reinforced polymer matrix systems that bridge dynamic thermal cracks while reflecting UV solar radiation to lower ambient indoor temperatures.",
    keyProducts: [
      "V-Chemics Liquid PU Elastomeric Membrane",
      "Fiberglass Mesh Reinforcement Layer",
      "UV-Resistant Aliphatic Topcoat",
      "Polymer Screed Slope Mortar",
    ],
    stages: [
      { name: "Slope & Coving Correction", desc: "Creating minimum 1:100 drainage gradients and 75mm radius corner fillets." },
      { name: "Primer Impregnation", desc: "Penetrative moisture-tolerant epoxy/acrylic primer layer." },
      { name: "Reinforced Membrane Matrix", desc: "Multi-coat elastomeric PU embedded with 45 GSM fiberglass mesh." },
      { name: "Water Ponding Test", desc: "72-hour continuous water head retention inspection before handover." },
    ],
    applications: ["Exposed residential flat roofs", "Commercial podiums and sky decks", "Green roofs & landscaped terraces", "Industrial metal / concrete composite roofs"],
    metrics: ">400% Elongation • 72h Pond Tested",
  },
  {
    id: "concrete-repair",
    slug: "concrete-repair",
    title: "Concrete Repair",
    subtitle: "Diagnostic restoration of spalled concrete, rebar corrosion & structural cracks",
    image: microConcreteImg,
    challenge: "Chloride attack and atmospheric carbonation depassivate rebar steel, causing expansive rust, surface delamination, spalling, and loss of structural load-bearing cross-section.",
    solutionDesc: "A complete restorative chemical protocol: chipping unsound concrete, applying zinc-rich rust passivators to exposed steel, and reforming sections with shrinkage-compensated polymer modified mortars.",
    keyProducts: [
      "V-Chemics Zinc-Rich Rebar Primer",
      "Polymer Bonding Interfacial Agent",
      "Structural Repair Mortar Class R4",
      "Anti-Carbonation Protective Topcoat",
    ],
    stages: [
      { name: "Sounding & Defect Demarcation", desc: "Mapping hollow zones and removing deteriorated concrete beyond rebar depth." },
      { name: "Rebar Mechanical De-Rusting", desc: "Wire brushing to SA 2.5 cleanliness and immediate zinc-rich passivation." },
      { name: "Bonding & Mortar Application", desc: "Wet-on-wet polymer bonding coat followed by thixotropic mortar buildup." },
      { name: "Surface Sealing", desc: "Anti-carbonation, weather-proof protective coating system." },
    ],
    applications: ["Coastal building facades & balconies", "Bridge piers and crosshead beams", "Industrial chemical plant structures", "Water tower columns and elevated reservoirs"],
    metrics: ">50 MPa Strength Recovery • IS Compliant",
  },
  {
    id: "structural-rehabilitation",
    slug: "structural-rehabilitation",
    title: "Structural Rehabilitation",
    subtitle: "Engineered section enlargement, micro concrete encasements & load recovery",
    image: microConcreteImg,
    challenge: "Ageing structures, additional floor additions, or seismic upgrade mandates require increasing column and beam capacities without demolishing existing load-bearing members.",
    solutionDesc: "Engineered RCC jacketing using high-fluidity, shrinkage-compensated micro concrete poured into tight shuttering, effectively restoring and enhancing structural cross-sectional load capacities.",
    keyProducts: [
      "V-Chemics High-Flow Micro Concrete",
      "Epoxy Anchor & Dowel Mortar",
      "Substrate Interfacial Bonding Resin",
      "High-Pressure Low-Viscosity Epoxy Injection",
    ],
    stages: [
      { name: "Structural Shoring & Propping", desc: "Temporary load relief with certified heavy-duty shoring towers." },
      { name: "Rebar Doweling & Cage Erection", desc: "Chemical anchoring of shear studs and additional structural steel cage." },
      { name: "Watertight Formwork Erection", desc: "Sturdy formwork designed with hopper ports for gravity micro concrete head." },
      { name: "Micro Concrete Placement", desc: "Continuous pouring of self-compacting micro concrete with zero vibration." },
    ],
    applications: ["Column & beam capacity enhancement", "Heritage structural retrofitting", "Earthquake / seismic compliance upgrades", "Industrial frame modernization"],
    metrics: ">65 MPa Compressive • Monolithic Bond",
  },
  {
    id: "industrial-flooring",
    slug: "industrial-flooring",
    title: "Industrial Flooring",
    subtitle: "Heavy-duty monolithic metallic floor hardeners, epoxy & polyurethane screeds",
    image: groutsImg,
    challenge: "Forklift rolling shear, heavy pallet drops, chemical drips, and abrasive traffic cause rapid pitting, dusting, and uneven surfaces in manufacturing and warehousing floors.",
    solutionDesc: "We provide dry-shake non-metallic/metallic surface hardeners troweled directly into fresh concrete, alongside solvent-free epoxy screeds and anti-microbial polyurethane floor toppings.",
    keyProducts: [
      "V-Chemics Metallic Floor Hardener",
      "Solvent-Free Epoxy Floor Screed",
      "High-Build Chemical Resistant PU Topping",
      "Silicate Dust-Proofer & Concrete Densifier",
    ],
    stages: [
      { name: "Substrate Profiling & Shot Blasting", desc: "Mechanical CSP 3–4 profiling and vacuum dust extraction." },
      { name: "Moisture Barrier Primer", desc: "Deep penetrating moisture-tolerant epoxy primer." },
      { name: "Screed / Hardener Layer", desc: "Application of engineered self-leveling resin or dry-shake power troweling." },
      { name: "Seal & Curing Sealant", desc: "Top coat sealing for stain resistance and high-gloss abrasion defense." },
    ],
    applications: ["Automotive manufacturing lines", "Pharmaceutical Cleanrooms (cGMP)", "Heavy warehousing & logistics hubs", "Chemical processing and bottling plants"],
    metrics: "Forklift Traffic Ready • High Chemical Defense",
  },
];

export interface LocationItem {
  id: string;
  slug: string;
  city: string;
  role: string;
  address: string;
  phone: string;
  email: string;
  dispatchTime: string;
  coverageAreas: string[];
  keyHighlights: string[];
  mapQuery: string;
}

export const allLocations: LocationItem[] = [
  {
    id: "chennai",
    slug: "chennai",
    city: "Chennai",
    role: "Headquarters, Main Manufacturing Plant & R&D Laboratory",
    address: "Omsakthi Street, Kumaran Nagar Extn-I, Padi, Chennai - 600050",
    phone: "+91 99423-54602",
    email: "vchemics.info@gmail.com",
    dispatchTime: "Same-Day Dispatch (4 to 8 Hours)",
    coverageAreas: ["Chennai Metro", "Kanchipuram", "Chengalpattu", "Tiruvallur", "Sriperumbudur Industrial Corridor", "Oragadam Hub"],
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
    address: "Avinashi Road Industrial Area, Peelamedu, Coimbatore - 641004",
    phone: "+91 99423-54602",
    email: "coimbatore@vchemics.com",
    dispatchTime: "Next-Day Direct Delivery (Within 24 Hours)",
    coverageAreas: ["Coimbatore City", "Tirupur", "Pollachi", "Mettupalayam", "Nilgiris Belt", "Palakkad Corridor"],
    keyHighlights: [
      "Dedicated warehouse stocking all 8 core product catalogues in bulk drums & bags",
      "On-site trial batch support for ready-mix concrete batching plants",
      "Specialist support for textile, foundry, and engineering infrastructure works",
      "Fast 24-hour delivery guarantee across western district sites",
    ],
    mapQuery: "Peelamedu, Coimbatore, Tamil Nadu",
  },
  {
    id: "erode",
    slug: "erode",
    city: "Erode",
    role: "Central Infrastructure & Textile Logistics Depot",
    address: "Perundurai SIPCOT Industrial Complex, Erode - 638052",
    phone: "+91 99423-54602",
    email: "erode@vchemics.com",
    dispatchTime: "Within 24 Hours Delivery",
    coverageAreas: ["Erode Metro", "Perundurai", "Bhavani", "Gobichettipalayam", "Anthiyur", "Sathy Belt"],
    keyHighlights: [
      "Strategic central TN warehouse located near highway artery for rapid routing",
      "Focus on ETP waterproofing, chemical bund linings, and industrial flooring",
      "Full inventory of non-shrink grouts and crystalline waterproofing products",
      "Dedicated field technician available for applicator site demonstrations",
    ],
    mapQuery: "SIPCOT Industrial Complex, Perundurai, Erode, Tamil Nadu",
  },
  {
    id: "salem",
    slug: "salem",
    city: "Salem",
    role: "Mining, Heavy Civil & Energy Project Center",
    address: "Steel Plant Road, Jagir Ammapalayam, Salem - 636302",
    phone: "+91 99423-54602",
    email: "salem@vchemics.com",
    dispatchTime: "Within 24 Hours Delivery",
    coverageAreas: ["Salem District", "Namakkal", "Dharmapuri", "Krishnagiri", "Attur", "Mettur Dam Industrial Zone"],
    keyHighlights: [
      "Specialized in high-strength dynamic machine foundation grouting solutions",
      "Mining & tunneling shotcrete accelerators and rock bolting mortars",
      "Direct technical service for steel mills, power stations, and highway bridge projects",
      "Full pallet stocking of micro concrete and epoxy grouts for rapid mobilization",
    ],
    mapQuery: "Steel Plant Road, Salem, Tamil Nadu",
  },
  {
    id: "karur",
    slug: "karur",
    city: "Karur",
    role: "Commercial Infrastructure & Ready-Mix Support Depot",
    address: "Bypass Road, Gandhigramam, Karur - 639004",
    phone: "+91 99423-54602",
    email: "karur@vchemics.com",
    dispatchTime: "Within 24 Hours Delivery",
    coverageAreas: ["Karur Town", "Kulithalai", "Aravakurichi", "Dindigul North", "Tiruchirappalli Border Corridor"],
    keyHighlights: [
      "Dedicated technical assistance for RMC plants and civil contractors",
      "High-slump retention superplasticisers formulated for high summer temperatures",
      "Residential & commercial basement and roof waterproofing products in stock",
      "Rapid dispatch via daily company distribution vehicles",
    ],
    mapQuery: "Gandhigramam, Karur, Tamil Nadu",
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
    scope: "Deep station basement waterproofing, diaphragm wall PU leak sealing, and high-fluidity M60 pumped concrete admixtures.",
    productsUsed: ["V-Chemics Crystalline Admixture", "PU Injection Resin", "PCE Superplasticiser 600"],
    metrics: "45,000 m² Watertight Envelope",
    year: "2024",
  },
  {
    id: "sipcot-automobile-plant",
    title: "Global Auto OEM Stamping Press Foundation",
    category: "Industrial",
    location: "Sriperumbudur Corridor",
    scope: "Heavy 2,500-ton stamping press baseplate precision anchoring with zero-shrink dynamic vibration-proof epoxy grout.",
    productsUsed: ["V-Chemics High-Strength Epoxy Grout", "Non-Shrink Grout Class C"],
    metrics: ">95 MPa Compressive Strength",
    year: "2023",
  },
  {
    id: "coimbatore-it-park-podium",
    title: "Premium Tech Park Podium & Terrace Deck",
    category: "Commercial",
    location: "Coimbatore, Tamil Nadu",
    scope: "Multi-layer elastomeric PU membrane waterproofing over 18,000 sq.m of exposed terrace and landscaped podium deck.",
    productsUsed: ["V-Chemics Liquid PU Membrane", "Aliphatic UV Topcoat", "Polymer Screed"],
    metrics: "72h Zero-Leak Ponding Signoff",
    year: "2024",
  },
  {
    id: "salem-thermal-rehab",
    title: "Thermal Power Station Cooling Tower & Encasement",
    category: "Infrastructure",
    location: "Mettur / Salem Belt",
    scope: "Structural rehabilitation and column micro concrete jacketing of thermal plant cooling structure exposed to high sulfate conditions.",
    productsUsed: ["Micro Concrete R4", "Zinc Rebar Primer", "Anti-Carbonation Barrier"],
    metrics: "120 Structural Columns Restored",
    year: "2023",
  },
  {
    id: "erode-textile-etp",
    title: "Chemical Resistant Effluent Treatment (ETP) Tanks",
    category: "Waterproofing",
    location: "Perundurai SIPCOT, Erode",
    scope: "Heavy chemical-resistant internal liner coating and crystalline waterproofing for high-salinity industrial effluent sumps.",
    productsUsed: ["V-Chemics Chemical Resistant Epoxy", "Crystalline Slurry", "Epoxy Mortar"],
    metrics: "pH 2–12 Chemical Resistance",
    year: "2024",
  },
  {
    id: "karur-highrise-rmc",
    title: "Commercial High-Rise Ready-Mix Concrete Supply",
    category: "Commercial",
    location: "Karur & Dindigul",
    scope: "Custom-calibrated superplasticisers maintaining 180mm slump over 90-minute transit in 39°C ambient summer temperatures.",
    productsUsed: ["PCE Retarding Superplasticiser", "Integral Waterproofer"],
    metrics: "35,000+ m³ Batch Consistency",
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
}

export const allBlogPosts: BlogPostItem[] = [
  {
    id: "preventing-cold-joints-tropical-concrete",
    slug: "preventing-cold-joints-tropical-concrete",
    title: "How to Prevent Cold Joints in High-Temperature Concrete Pours",
    category: "Admixtures & Mix Design",
    date: "February 2025",
    readTime: "6 min read",
    author: "Technical Formulation Team",
    excerpt: "In South India's high ambient heat, standard hydration accelerates rapidly. Learn how PCE retarding superplasticisers extend open slump retention up to 3 hours without compromising early 3-day strength.",
    tags: ["Concrete Admixtures", "IS 9103", "Hot Weather Pouring", "Mix Design"],
  },
  {
    id: "crystalline-vs-membrane-waterproofing",
    slug: "crystalline-vs-membrane-waterproofing",
    title: "Crystalline vs Membrane Waterproofing: Which System to Choose?",
    category: "Waterproofing Guides",
    date: "January 2025",
    readTime: "8 min read",
    author: "Civil Engineering Division",
    excerpt: "Understanding the fundamental engineering differences between monolithic catalytic crystalline self-healing technology and flexible elastomeric PU membranes for deep basements vs exposed roofs.",
    tags: ["Waterproofing", "Crystalline", "PU Membrane", "Basements"],
  },
  {
    id: "machine-foundation-epoxy-grouting-standards",
    slug: "machine-foundation-epoxy-grouting-standards",
    title: "Precision Grouting for Dynamic Machine Bases (ASTM C1107 vs Epoxy)",
    category: "Precision Grouts",
    date: "December 2024",
    readTime: "7 min read",
    author: "Structural Materials Lab",
    excerpt: "A deep dive into effective bearing area (EBA), dynamic vibration dampening, and why 3-part epoxy grouts outperform cementitious grouts in heavy industrial stamping and turbine plinths.",
    tags: ["Epoxy Grouting", "Non-Shrink Grout", "ASTM C1107", "Machine Plinths"],
  },
  {
    id: "pu-injection-active-leak-sealing",
    slug: "pu-injection-active-leak-sealing",
    title: "Sealing Active High-Pressure Water Ingress Using Hydro-Active PU Resins",
    category: "Site Troubleshooting",
    date: "November 2024",
    readTime: "5 min read",
    author: "Field Applications Engineer",
    excerpt: "Step-by-step procedure for drilling 45-degree angle packer holes, selecting single vs dual component polyurethane resins, and stopping high-pressure water gushing in basements and tunnels.",
    tags: ["PU Injection", "Waterproofing", "Leak Sealing", "Packers"],
  },
  {
    id: "column-jacketing-micro-concrete-standards",
    slug: "column-jacketing-micro-concrete-standards",
    title: "Structural Column Encasement & Section Enlargement with Micro Concrete",
    category: "Structural Rehabilitation",
    date: "October 2024",
    readTime: "9 min read",
    author: "Rehabilitation Specialist",
    excerpt: "Engineering protocols for shoring, surface roughening, rebar doweling with epoxy anchors, and pouring self-compacting shrinkage-compensated micro concrete compliant with EN 1504 Class R4.",
    tags: ["Micro Concrete", "Column Jacketing", "Structural Repair", "EN 1504"],
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
  { value: 5, suffix: " Hubs", label: "TN Regional Centers" },
  { value: 100, suffix: "%", label: "Tested & Certified" },
] as const;
