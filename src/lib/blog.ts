import { allBlogPosts, type BlogPostItem } from "@/components/site/data";

export interface BlogPost extends BlogPostItem {
  content: string; // Markdown formatted content
  takeaways?: string[];
  standards?: { code: string; name: string; url: string }[];
  relatedProducts?: { name: string; link: string }[];
}

export const blogPostMarkdownData: Record<
  string,
  {
    content: string;
    takeaways?: string[];
    standards?: { code: string; name: string; url: string }[];
    relatedProducts: { name: string; link: string }[];
  }
> = {
  "preventing-cold-joints-tropical-concrete": {
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
    content: `
## The Hydration Challenge in Tropical Ambient Temperatures

In tropical climates where daytime ambient temperatures frequently exceed 35°C to 40°C, the rate of cement hydration accelerates dramatically. The initial setting time of concrete drops from 180 minutes to less than 60 minutes. When subsequent concrete batches arrive on-site and are placed against stiffening prior layers, inadequate intermixing creates weak, permeable boundary planes known as **cold joints**.

These discontinuities severely compromise structural monolithic action, expose reinforcing steel to rapid carbonation and chloride attack, and create paths for chronic groundwater ingress in basements, retaining walls, and water retaining structures.

## Extended Slump Retention with Retarding PCE Admixtures

Polycarboxylate Ether (PCE) [concrete admixtures](/products/concrete-admixtures) engineered with specialized retarding molecules control the initial dissolution of tricalcium aluminate ($C_3A$) and tricalcium silicate ($C_3S$). By introducing steric hindrance and controlled retardation compliant with **IS 9103 Type G** and **ASTM C494 Type G**, open slump retention is safely extended up to 3 hours while preserving robust 3-day and 28-day compressive strength gains.

### Electrostatic Repulsion & Steric Hindrance

Long polymer side chains prevent premature agglomeration of cement grains, preserving fluidity under high ambient temperatures.

### Controlled Hydration Passivation

Temporary chemical retarding complexes keep the mix workable across long transit delays in metropolitan traffic without cold joints.

### Low Water-to-Cement Ratio (w/c < 0.35)

Achieves ultra-high fluidity (slump flow > 600mm) without water bleeding, aggregate segregation, or compressive strength compromise.

| Parameter | Value |
|---|---|
| Ambient temperature threshold | 35°C – 40°C |
| Normal initial setting time | ~180 minutes |
| Setting time in high heat (untreated) | < 60 minutes |
| Extended slump retention (with retarding PCE) | Up to 3 hours |
| Recommended water-cement ratio | < 0.35 |
| Standards compliance | IS 9103 Type G, ASTM C494 Type G |

## Site Best Practices & Cold Joint Prevention Protocols

Engineering oversight on the pour day is vital to ensure zero joint defects:

### Vibrator Insertion Protocol

Ensure internal poker vibrators penetrate at least 100mm to 150mm into the preceding lift to re-liquefy and knit the interfacial zone into a monolithic matrix.

### Logistics Buffer Management

Schedule transit mixers with staggered 20-minute dispatch buffers rather than batch arrivals to avoid idling in ambient heat.

### Aggregate Stockpile Shading & Chilled Water

Keep aggregates covered and use chilled batching water to ensure fresh concrete placement temperature remains below 32°C.

### Emergency Bonding Agents

Keep structural [epoxy bonding and grouting agents](/products/epoxy-grouting) (conforming to ASTM C881) ready on site if placement is halted unexpectedly for more than 45 minutes.
`,
    relatedProducts: [
      { name: "Concrete Admixtures (PCE)", link: "/products/concrete-admixtures" },
      { name: "Waterproofing Chemicals", link: "/products/waterproofing-chemicals" },
    ],
  },
  "crystalline-vs-membrane-waterproofing": {
    content: `
## 1. The Chemistry of Integral Catalytic Crystallization

Integral catalytic [waterproofing chemicals](/products/waterproofing-chemicals) react chemically with unhydrated cement particles and moisture in the capillary tract. This reaction precipitates millions of insoluble needle-like crystalline dendrites throughout the concrete pore matrix, permanently blocking water ingress up to 5 bar hydrostatic pressure and self-healing micro-cracks up to 0.4mm.

Unlike surface coatings that can puncture, blister, or delaminate over time, crystalline chemistry transforms the entire concrete mass into a permanent waterproof barrier that becomes an integral component of the structural element.

## 2. Elastomeric Polyurethane Membranes for Exposed Surfaces

Liquid-applied polyurethane (PU) membranes and elastomeric [protective coatings](/products/protective-coatings) form a seamless, highly flexible barrier with elongation values exceeding 400%. They are ideally suited for exposed terraces, podium slabs, and expansion joints where dynamic structural thermal movement would cause rigid cementitious coatings to fracture.

### Comparison Overview:
- **Crystalline Waterproofing**: Hydrophilic catalytic mechanism, non-degradable, ideal for continuous positive and negative hydrostatic pressure in underground structures.
- **Polyurethane Membranes**: High-tensile elastomeric barrier, excellent crack-bridging capability, ideal for UV-exposed roofs and dynamic podium decks.

## 3. Substructure vs Superstructure Selection Matrix

- **Below-Ground Foundations & Basements**: Raft foundations, retaining walls, and lift pits benefit most from engineered [basement waterproofing](/solutions/basement-waterproofing) systems, crystalline [waterproofing chemicals](/products/waterproofing-chemicals) and slurry coatings, supplemented by [PU injection grouting](/products/pu-injection-grouting) for active water ingress.
- **Podiums, Roof Decks & Terraces**: Continuous exposure to diurnal thermal expansion requires [terrace waterproofing](/solutions/terrace-waterproofing) protocols with multi-coat aliphatic polyurethane membranes and [protective coatings](/products/protective-coatings) with reinforcing geotextile scrims.
`,
    relatedProducts: [
      { name: "Waterproofing Chemicals", link: "/products/waterproofing-chemicals" },
      { name: "PU Injection Grouting", link: "/products/pu-injection-grouting" },
      { name: "Protective Coatings", link: "/products/protective-coatings" },
      { name: "Basement Waterproofing", link: "/solutions/basement-waterproofing" },
      { name: "Terrace Waterproofing", link: "/solutions/terrace-waterproofing" },
    ],
  },
  "machine-foundation-epoxy-grouting-standards": {
    content: `
## 1. Dynamic Vibration & High-Frequency Shock Forces in Heavy Plinths

Industrial machinery such as reciprocating compressors, stamping presses, ball mills, and turbines transmit continuous dynamic cyclic loads into foundation soleplates and [heavy-duty industrial flooring plinths](/solutions/industrial-flooring). Standard cementitious mortars suffer micro-fracturing and fatigue failure under sustained high-frequency shock, where precision [non-shrink grouts](/products/non-shrink-grout) and polymer matrices are vital.

## 2. Effective Bearing Area (EBA >95%) and Zero-Shrinkage Physics

Compliant with ASTM C1107, precision [non-shrink grouts](/products/non-shrink-grout) utilize spherical aggregate grading and shrinkage compensation to ensure a minimum of 95% Effective Bearing Area (EBA) beneath machine baseplates, preventing point loading, alignment shifts, and premature bearing wear.

## 3. Performance Comparison: 3-Part Epoxy vs Cementitious Non-Shrink Formulations

While Class C cementitious [non-shrink grouts](/products/non-shrink-grout) achieve 75 MPa compressive strength, 3-component [epoxy grouting systems](/products/epoxy-grouting) achieve >95 MPa compressive strength, >18 MPa tensile strength, and exceptional vibration dampening capacity along with complete resistance to lubricating oils and industrial acids.
`,
    relatedProducts: [
      { name: "Epoxy Grouting", link: "/products/epoxy-grouting" },
      { name: "Non-Shrink Grout", link: "/products/non-shrink-grout" },
      { name: "Industrial Flooring & Plinths", link: "/solutions/industrial-flooring" },
    ],
  },
  "pu-injection-active-leak-sealing": {
    content: `
## 1. Hydro-Active Polyurethane Chemistry & Rapid 30x Closed-Cell Expansion

Hydro-active polyurethane resins used in [PU injection grouting](/products/pu-injection-grouting) are low-viscosity prepolymers that react aggressively with incoming water. Upon contact with moisture, the resin initiates a rapid foaming reaction, expanding up to 30 times its original volume within 30 to 45 seconds to create a tough, flexible closed-cell elastomeric plug.

## 2. Step-by-Step 45-Degree High-Pressure Mechanical Packer Installation

Packer holes are drilled alternately on both sides of the crack at a 45-degree angle to intersect the crack plane at mid-depth of the structural element. High-pressure mechanical packers are locked into place and flushed prior to injecting specialized [polyurethane injection grouts](/products/pu-injection-grouting) at pressures between 50 and 250 bar.

## 3. Dual-Stage Injection: Water Cut-Off Foam Followed by Flexible Resin Seal

In severe active water bursts, a rapid-foaming single-component PU resin is first injected to instantly stop the gushing water. A secondary low-viscosity elastic polyurethane resin is then injected to permanently seal micro-fissures, complementing primary [structural waterproofing chemicals](/products/waterproofing-chemicals) and accommodating ongoing structural movement.
`,
    relatedProducts: [
      { name: "PU Injection Grouting", link: "/products/pu-injection-grouting" },
      { name: "Waterproofing Chemicals", link: "/products/waterproofing-chemicals" },
      { name: "Basement Waterproofing", link: "/solutions/basement-waterproofing" },
    ],
  },
  "column-jacketing-micro-concrete-standards": {
    content: `
## 1. Structural Section Enlargement & Jacketing Principles

When existing RCC columns require higher axial load capacity or seismic retrofitting, [structural rehabilitation and column encasement](/solutions/structural-rehabilitation) with high-performance [micro concrete](/products/micro-concrete) is the engineering gold standard. The existing substrate is scabbled to expose sound aggregate, dowel rebar is anchored with structural epoxy, and steel reinforcement cages are installed.

## 2. Self-Compacting Flow Properties Through Congested Rebar Cages

Formwork around jacketed columns is extremely narrow and congested with steel. Pre-bagged [micro concrete](/products/micro-concrete) incorporates selected aggregates (<5mm) and high-range plasticisers that flow freely into tight 40mm–100mm annular spaces with zero compaction vibration and zero honeycombing.

## 3. EN 1504 Class R4 Standards, Bonding Primers, and Compressive Strength

Compliant with EN 1504-3 Class R4 standards for [concrete repair and rehabilitation](/products/concrete-repair), specialized [micro concrete](/products/micro-concrete) achieves >60 MPa at 28 days, has a high modulus of elasticity (>28 GPa), and features controlled dual expansion to guarantee monolithic stress transfer from the parent structural column to the new jacket.
`,
    relatedProducts: [
      { name: "Micro Concrete", link: "/products/micro-concrete" },
      { name: "Concrete Repair Mortars", link: "/products/concrete-repair" },
      { name: "Structural Rehabilitation", link: "/solutions/structural-rehabilitation" },
    ],
  },
};

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const base = allBlogPosts.find((p) => p.slug === slug || p.id === slug);
  if (!base) return undefined;

  const detail = blogPostMarkdownData[base.id] || blogPostMarkdownData[base.slug];
  const markdown = detail?.content || `## Overview\n\n${base.excerpt}`;

  return {
    ...base,
    content: markdown,
    takeaways: detail?.takeaways || base.takeaways || [],
    standards: detail?.standards || base.standards || [],
    relatedProducts: detail?.relatedProducts || [],
  };
}

export function getAllBlogPosts(): BlogPostItem[] {
  return allBlogPosts;
}
