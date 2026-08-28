export type CatalogueCategory =
  "admixtures" | "waterproofing" | "grouts" | "repair-micro-concrete" | "coatings";

export interface CatalogueVariant {
  label: string;
}

export interface CatalogueProduct {
  id: string;
  make: string;
  type: string;
  category: CatalogueCategory;
  name: string;
  variants: CatalogueVariant[];
  featured: boolean;
  description?: string;
}

export const catalogueProducts: CatalogueProduct[] = [
  {
    id: "brushbond-grey",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "repair-micro-concrete",
    name: "Brushbond Grey",
    variants: [{ label: "35.58KG" }],
    featured: false,
    description:
      "A cementitious bonding and rendering coat used to key new concrete or plaster to old, prepared surfaces. Commonly used ahead of plastering, screeding, or repair mortar application to ensure strong adhesion between old and new layers.",
  },
  {
    id: "brushbond-rfx-grey",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "repair-micro-concrete",
    name: "Brushbond RFX Grey",
    variants: [{ label: "30KG" }],
    featured: true,
    description:
      "A reinforced bonding agent from the Brushbond range, formulated for higher-bond-strength applications where standard bonding coats aren't sufficient — typically specified for structural repair and rehabilitation work.",
  },
  // VERIFY: Exact technical figures (dosage %, strength values, coverage rates) must be checked against the current official Fosroc datasheet before the site goes live — the description below is accurate at the product-family/function level only.
  {
    id: "nitobond-ep",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "repair-micro-concrete",
    name: "Nitobond EP",
    variants: [{ label: "4L" }, { label: "1L" }],
    featured: false,
    description:
      "A two-part epoxy resin bonding agent used to achieve a high-strength structural bond between old and new concrete, widely used in repair work, overlays, and structural strengthening where mechanical bond strength is critical. VERIFY exact pot life and strength figures against current datasheet.",
  },
  {
    id: "brushbond-roofguard-terracota",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "waterproofing",
    name: "Brushbond Roofguard Terracota",
    variants: [{ label: "20L" }],
    featured: true,
    description:
      "A weatherproof roof coating in terracotta finish, designed to protect concrete and masonry roof surfaces from water ingress, UV degradation, and thermal cracking while maintaining an aesthetic finish.",
  },
  {
    id: "brushbond-roofguard-white",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "waterproofing",
    name: "Brushbond Roofguard White",
    variants: [{ label: "20L" }],
    featured: false,
    description:
      "The white-finish variant of Brushbond Roofguard — a reflective waterproof roof coating that helps reduce surface heat absorption in addition to protecting against water ingress, useful for terrace and flat-roof applications in hot climates.",
  },
  {
    id: "cebex-100",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "grouts",
    name: "Cebex 100",
    variants: [{ label: "225GMS" }],
    featured: false,
    description:
      "An expansion-compensating additive dosed into cementitious grouts and mortars to offset natural shrinkage during curing, helping maintain full contact and load transfer in precision grouting applications.",
  },
  // VERIFY: Exact technical figures (dosage %, strength values, coverage rates) must be checked against the current official Fosroc datasheet before the site goes live — the description below is accurate at the product-family/function level only.
  {
    id: "rebaklens-rr",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "repair-micro-concrete",
    name: "Fosroc Rebaklens RR",
    variants: [{ label: "1LTR" }],
    featured: false,
    description:
      "A surface preparation/release-aid product used ahead of repair or coating application to improve surface receptiveness. VERIFY exact application and product category against current datasheet — naming suggests it may be related to the Reebaklens line (see separate entry).",
  },
  {
    id: "rendroc-rg",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "repair-micro-concrete",
    name: "Rendroc RG",
    variants: [{ label: "30KG" }],
    featured: false,
    description:
      "A polymer-modified repair mortar from the Renderoc/Rendroc range, used for reinstating concrete sections and structural repair work where a trowel-applied, durable patching material is required.",
  },
  {
    id: "nitozinc-primer",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "repair-micro-concrete",
    name: "Nitozinc Primer",
    variants: [{ label: "1LTR" }, { label: "5LTR" }],
    featured: false,
    description:
      "A zinc-rich anti-corrosive primer applied to exposed reinforcement steel before repair mortar application, forming a protective barrier that inhibits further corrosion and improves bond with the subsequent repair layer.",
  },
  // VERIFY: Exact technical figures (dosage %, strength values, coverage rates) must be checked against the current official Fosroc datasheet before the site goes live — the description below is accurate at the product-family/function level only.
  {
    id: "conplast-sp430-20l",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "admixtures",
    name: "Conplast SP430",
    variants: [{ label: "20L" }],
    featured: true,
    description:
      "A high-range water-reducing superplasticiser used to produce flowing, workable concrete at reduced water-cement ratios, improving both placement ease and hardened concrete strength/durability. VERIFY exact dosage rate against current datasheet.",
  },
  {
    id: "concure-wb-white",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "repair-micro-concrete",
    name: "Concure WB White",
    variants: [{ label: "20LTR" }, { label: "200KG" }],
    featured: false,
    description:
      "A wax-based white-pigmented curing compound sprayed onto freshly placed concrete to retain moisture during the critical early curing period, reducing plastic shrinkage cracking while reflecting heat via its white finish.",
  },
  {
    id: "conplast-wl-xtra",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "admixtures",
    name: "Conplast WL Xtra",
    variants: [{ label: "20L" }, { label: "200L" }],
    featured: true,
    description:
      "An extended-workability admixture from the Conplast range, formulated to maintain slump retention over longer transit or placement windows — particularly useful in hot-weather concreting and long-haul ready-mix deliveries.",
  },
  {
    id: "cebex-112",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "grouts",
    name: "Cebex 112",
    variants: [{ label: "20L" }, { label: "200KG" }],
    featured: false,
    description:
      "A non-shrink grouting aid used in cementitious grout formulations to compensate for shrinkage and ensure complete, void-free contact under machinery bases, bearing plates, and precision grouting applications.",
  },
  {
    id: "conplast-nc",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "admixtures",
    name: "Conplast NC",
    variants: [{ label: "20 Ltr" }],
    featured: false,
    description:
      "A normal-class water-reducing admixture used to improve concrete workability at standard dosage rates, suited to general RMC and site-batched concrete applications where moderate water reduction is required.",
  },
  {
    id: "conplast-sd110",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "admixtures",
    name: "Conplast SD110",
    variants: [{ label: "20 KG" }, { label: "200L" }],
    featured: false,
    description:
      "A set-retarding admixture used to delay initial setting time of concrete, particularly valuable for hot-weather concreting, long transit distances, or large pours requiring extended workable time before finishing.",
  },
  {
    id: "conbextra-gp2",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "grouts",
    name: "Conbextra GP2",
    variants: [{ label: "30KG" }],
    featured: true,
    description:
      "A free-flowing, non-shrink cementitious precision grout used for baseplates, machine foundations, and structural bearing applications where guaranteed full contact and load transfer are essential.",
  },
  {
    id: "conplast-crystalline",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "waterproofing",
    name: "Conplast Crystalline",
    variants: [{ label: "30KG" }],
    featured: true,
    description:
      "A crystalline waterproofing admixture that reacts with moisture within concrete to form insoluble crystals blocking capillary water paths, providing permanent, self-sealing waterproofing integral to the concrete mass.",
  },
  {
    id: "lokfix-s",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "grouts",
    name: "Lokfix S",
    variants: [{ label: "0.5L" }],
    featured: true,
    description:
      "A chemical anchoring/fixing compound used for securing rebar, bolts, and fixings into hardened concrete or masonry, providing high pull-out resistance for structural and non-structural fixings.",
  },
  {
    id: "nitoflor-hardtop-standard",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "coatings",
    name: "Nitoflor Hardtop Standard",
    variants: [{ label: "30KG" }],
    featured: true,
    description:
      "A dry-shake floor hardener from the Nitoflor range, trowelled into freshly placed concrete floors to significantly improve abrasion resistance and surface durability — commonly specified for industrial and warehouse flooring.",
  },
  {
    id: "nitobond-ar",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "repair-micro-concrete",
    name: "Nitobond AR",
    variants: [{ label: "20L" }],
    featured: false,
    description:
      "An acrylic-resin-based bonding agent used to improve adhesion between repair mortars/renders and existing concrete substrates, suited to general repair and rendering work.",
  },
  {
    id: "nitobond-sbr",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "repair-micro-concrete",
    name: "Nitobond SBR",
    variants: [{ label: "5LTR" }, { label: "25L" }],
    featured: false,
    description:
      "A styrene-butadiene rubber (SBR) polymer bonding agent, used both as a concrete bonding aid and as a polymer additive in repair mortars to improve flexibility, adhesion, and water resistance.",
  },
  {
    id: "nitobond-sbr-latex",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "repair-micro-concrete",
    name: "Nitobond SBR Latex",
    variants: [{ label: "25L" }],
    featured: false,
    description:
      "The latex-concentrate variant of Nitobond SBR, used as a polymer modifier in repair mortar and rendering mixes to enhance bond strength, crack resistance, and durability of the finished repair.",
  },
  // VERIFY: Exact technical figures (dosage %, strength values, coverage rates) must be checked against the current official Fosroc datasheet before the site goes live — the description below is accurate at the product-family/function level only.
  {
    id: "nitobond-pc40",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "repair-micro-concrete",
    name: "Nitobond PC40",
    variants: [{ label: "6kg" }],
    featured: false,
    description:
      "A polymer-modified cementitious bonding/patching compound used for smaller-scale repair and surface reinstatement work. VERIFY exact application scope against current datasheet.",
  },
  {
    id: "rendroc-sp40",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "repair-micro-concrete",
    name: "Rendroc SP40",
    variants: [{ label: "25KG" }],
    featured: false,
    description:
      "A single-component, polymer-modified structural repair mortar from the Renderoc/Rendroc range, trowel-applied for reinstating spalled or damaged concrete sections in structural repair work.",
  },
  {
    id: "nitocote-cm210-white",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "waterproofing",
    name: "Nitocote CM210 White",
    variants: [{ label: "23KG" }],
    featured: true,
    description:
      "A cementitious protective coating used to waterproof and protect concrete surfaces such as water tanks, terraces, and exposed structural elements, combining waterproofing performance with a durable finish.",
  },
  // VERIFY: Exact technical figures (dosage %, strength values, coverage rates) must be checked against the current official Fosroc datasheet before the site goes live — the description below is accurate at the product-family/function level only.
  {
    id: "reebaklens",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "repair-micro-concrete",
    name: "Reebaklens",
    variants: [{ label: "1L" }],
    featured: false,
    description:
      "A surface treatment product used in concrete finishing/release applications. VERIFY exact product category and relationship to the separately listed Fosroc Rebaklens RR — naming suggests these may be the same product line.",
  },
  {
    id: "rendroc-cs-white",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "repair-micro-concrete",
    name: "Rendroc CS White",
    variants: [{ label: "1KG" }],
    featured: false,
    description:
      "A cementitious surface repair/skim compound in white finish, used for small-scale patching and surface reinstatement where an aesthetic, paintable finish is required.",
  },
  {
    id: "rendroc-plug",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "repair-micro-concrete",
    name: "Rendroc Plug",
    variants: [{ label: "5 Kgs" }, { label: "15KG" }],
    featured: false,
    description:
      "A rapid-setting cementitious plugging compound used to instantly stop active water leaks/seepage in concrete and masonry — a first-response product for water-stop repair before permanent waterproofing is applied.",
  },
  {
    id: "super-cast-sw20",
    make: "Fosroc",
    type: "Non-Admixture",
    category: "waterproofing",
    name: "Super Cast SW20",
    variants: [{ label: "10m x 20mm x 5m" }],
    featured: false,
    description:
      "A pre-formed waterstop/joint sealing strip used at construction joints in concrete pours (e.g. basement walls, water-retaining structures) to prevent water migration through the joint.",
  },
  // VERIFY: Exact technical figures (dosage %, strength values, coverage rates) must be checked against the current official Fosroc datasheet before the site goes live — the description below is accurate at the product-family/function level only.
  {
    id: "auracast-102",
    make: "Fosroc",
    type: "Admixture",
    category: "admixtures",
    name: "Auracast 102",
    variants: [{ label: "250KG" }],
    featured: false,
    description:
      "A concrete admixture from Fosroc's Auracast range used to enhance workability and finishing characteristics in cast concrete applications. VERIFY exact chemistry and dosage against current datasheet.",
  },
  {
    id: "auramix-200",
    make: "Fosroc",
    type: "Admixture",
    category: "admixtures",
    name: "Auramix 200",
    variants: [{ label: "200-41, 250KG" }, { label: "200-20, 250KG" }],
    featured: false,
    description:
      "A PCE (polycarboxylate ether) based superplasticiser from the Auramix range, used to achieve high water reduction and workability retention in ready-mix and precast concrete production.",
  },
  {
    id: "auramix-300",
    make: "Fosroc",
    type: "Admixture",
    category: "admixtures",
    name: "Auramix 300",
    variants: [{ label: "300, 250KG" }, { label: "300 Plus, 250KG" }, { label: "350, 250Kg" }],
    featured: false,
    description:
      "A higher-performance tier of the Auramix PCE superplasticiser family, formulated for demanding ready-mix and precast applications requiring extended slump retention and high early strength development.",
  },
  {
    id: "auramix-400",
    make: "Fosroc",
    type: "Admixture",
    category: "admixtures",
    name: "Auramix 400",
    variants: [{ label: "250KG" }],
    featured: false,
    description:
      "The top tier of the Auramix PCE superplasticiser range, used where the highest water reduction and workability performance is required, such as in high-strength or self-compacting concrete mixes.",
  },
  {
    id: "conplast-sp430-family",
    make: "Fosroc",
    type: "Admixture",
    category: "admixtures",
    name: "Conplast SP430 Series",
    variants: [
      { label: "SP430, 250KG" },
      { label: "SP430 G, 230KG" },
      { label: "SP430 G8, 250KG" },
      { label: "SP439, 250KG" },
      { label: "SP430 ES2, 250KG" },
    ],
    featured: false,
    description:
      "The bulk-supply admixture tier of the Conplast SP430 superplasticiser family, used by RMC plants and large-scale concrete producers for consistent high-range water reduction across large batch volumes.",
  },
  {
    id: "moulding-oil",
    make: "Fosroc",
    type: "Admixture",
    category: "repair-micro-concrete",
    name: "Moulding Oil",
    variants: [{ label: "220KG" }],
    featured: false,
    description:
      "A shuttering/formwork release oil applied to mould surfaces before concrete casting, allowing clean release of hardened concrete from formwork and reducing surface defects.",
  },
  {
    id: "reebol",
    make: "Fosroc",
    type: "Admixture",
    category: "repair-micro-concrete",
    name: "Reebol",
    variants: [{ label: "Emulsion Xtra, 200L" }, { label: "Standard, 200L" }],
    featured: false,
    description:
      "A curing/release compound range used in precast and cast-in-place concrete work to aid demoulding and support proper curing of the finished surface.",
  },
];
