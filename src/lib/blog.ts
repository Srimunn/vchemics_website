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
  "pu-injection-grouting": {
    takeaways: [
      "PU injection is not one material — hydrophilic, hydrophobic, foaming, and non-foaming resins each suit different water and movement conditions.",
      "A leaking crack is not automatically a structural crack; structural significance must be assessed separately by a qualified engineer.",
      "Injection pressure has no universal value — it depends on the resin, crack geometry, substrate condition, and site water pressure.",
      "Always consult the current product TDS before mixing, application, or curing — generic assumptions between products are a common cause of repair failure.",
    ],
    relatedProducts: [
      { name: "PU Injection Grouting", link: "/products/pu-injection-grouting" },
      { name: "Non-Shrink Grout", link: "/products/non-shrink-grout" },
      { name: "Waterproofing Chemicals", link: "/products/waterproofing-chemicals" },
      { name: "Basement Waterproofing", link: "/solutions/basement-waterproofing" },
    ],
    content: `
Water leakage in concrete rarely stays a small problem for long. A crack that looks unimportant can let water find its way through the tiniest openings, especially in basements, underground parking garages, tunnels, retaining structures, and other underground construction. PU injection grouting is one of the primary methods used to combat this kind of leakage.

PU injection grouting is a method of injecting polyurethane-based resins into cracks, joints, voids, or leakage paths in concrete or masonry. But PU injection is not one specific material. Depending on site conditions and the desired outcome, different resin types are used — some react with water and expand, others cure into a flexible sealant. Experience and correct assessment of actual site conditions are essential, since local environment, water pressure, crack geometry, movement potential, and intended use all factor into material selection.

A successful injection repair always starts with correct problem assessment — not with selecting a PU resin based on a label.

## What Is PU Injection Grouting?

PU injection grouting is a repair and waterproofing technique where polyurethane-based material is injected into a crack, joint, void, or leakage path. Once injected, the material either reacts with water and swells, or cures into a flexible plug — which is why PU injection is commonly used for immediate water ingress concerns requiring a long-term solution.

PU injection should not be assumed to be a structural repair method. The presence of a leak does not mean a crack is structurally significant. If there is structural concern, it needs to be assessed as such, and the injection system chosen accordingly.

## How Does PU Injection Grouting Work?

While the process sounds straightforward — drill, install packers, inject — the quality of the repair depends heavily on the preparatory work before injection begins.

The first step is determining the source of water ingress and its path of travel through the concrete. The crack or joint is examined for:

- Crack width and geometry
- Moisture condition
- Water pressure
- Crack movement
- Concrete or masonry condition
- Whether the defect is structural or waterproofing-related

Once the defect is understood, injection points or packers are installed along the crack or leakage path. Depending on the system used, the surface may be sealed to control injection material flow.

Drilling pattern, packer spacing, injection pressure, mixing procedure, and curing requirements should follow the project method statement and the current product Technical Data Sheet (TDS).

## Types of PU Injection Grouting Systems

One of the most common errors is treating every PU injection material as the same. Polyurethane injection systems vary significantly in reaction, flexibility, moisture requirements, and application.

### PU Injection Foam

Designed to react with water, expand, and seal actively flowing leaks. Reaction mechanism, expansion, and technical properties depend on the specific product.

### PU Injection Resin

Designed primarily for flexible, watertight sealing rather than foaming. Depending on the product, these resins may be applicable in damp or dry conditions.

### Hydrophilic PU

Designed to interact with water — selected for particular wet or water-bearing applications depending on the product.

### Hydrophobic PU

Has different moisture and water interaction properties, selected for particular waterproofing applications.

Hydrophilic and hydrophobic are not synonyms — the product TDS and actual site condition should always determine selection.

## What Problems Can PU Injection Grouting Solve?

**Active Water Leakage** — a water-reactive PU system may be considered where water is actively passing through cracks or joints, controlling the water pathway rather than just covering the surface.

**Concrete Cracks** — selected cracks may be treated where the goal is to waterproof or seal. Before material selection, it's important to understand if the crack is moving, dormant, structural, or simply allowing water to pass through.

**Construction Joints** — cold or construction joints can become leakage points depending on joint detail and surrounding concrete condition.

**Expansion and Movement Joints** — joints experiencing movement need particular attention; a rigid material may not be appropriate where flexibility is required.

**Honeycombing and Voids** — certain honeycombed or voided areas may be treated using injection where the material can reach the area and is compatible with the substrate.

**Underground Structures** — below-ground structures often experience pressure from surrounding soil or groundwater, making injection a consideration for selected leakage paths.

## Where Is PU Injection Grouting Used?

- Basements
- Underground parking areas
- Tunnels
- Retaining structures
- Underground concrete structures
- Water-bearing concrete cracks
- Construction and cold joints
- Selected movement joints
- Certain honeycombed or voided concrete areas

Basement walls and slabs, for example, may develop leakage points due to cracks, joints, or water pressure from surrounding ground. Injection provides a way to deal with the leakage pathway without removing large areas of otherwise sound concrete. The material must always be compatible with the substrate and service condition.

## PU Injection Grouting Process: Step by Step

1. **Inspect the Leakage** — find the actual water source and its passage; a visible soaked path isn't necessarily where water entered.
2. **Prepare the Crack or Joint** — clean and prepare the area so the defect can be properly assessed.
3. **Mark the Injection Points** — location and spacing established based on actual crack/leakage geometry.
4. **Drill and Install Packers** — provide controlled access for pumping material into the defect.
5. **Apply Surface Seal if Required** — control the flow of injection material where needed.
6. **Prepare the PU Material** — mixed strictly per the manufacturer's current TDS.
7. **Inject the Material** — using suitable equipment, allowed to travel along the leakage pathway.
8. **Monitor the Injection** — flow and water response tracked during the process.
9. **Complete the Injection** — sequence finished without exceeding the system or substrate's limits.
10. **Finish and Inspect** — packers removed where appropriate, surface finished, repair inspected, and work documented for future reference.

## What Injection Pressure Is Used?

There is no single injection pressure applicable to every project. Required pressure depends on:

- Type of resin
- Crack width and geometry
- Concrete thickness
- Substrate condition
- Packer system
- Injection equipment
- Surrounding water pressure
- Manufacturer's instructions

Too much pressure can damage weak concrete or push material into unintended areas. Pressure should always be regulated according to the product, equipment, substrate, and method statement — not a value carried over from another project.

## PU Injection Foam vs PU Injection Resin

PU foam may react with water and expand, making certain formulations suited to active leakage conditions. PU resin may be non-foaming and formulated for a flexible seal. Neither is inherently better — the right choice depends on the leakage condition, moisture presence, movement, and the specific product's attributes. Always check the current TDS before selection.

## PU Injection Grouting vs Epoxy Injection

PU and epoxy are sometimes compared since both can be used for crack injection, but they typically serve different purposes. PU is often used where the design intent is waterproofing and flexible leak sealing. Epoxy may be used for suitable dormant structural cracks requiring rigid bonding.

| Condition | Possible Approach |
|---|---|
| Active water leakage | Suitable PU injection system may be considered |
| Flexible waterproofing requirement | PU may be suitable |
| Dormant structural crack | Rigid structural injection such as epoxy may be considered |
| Moving crack | System should accommodate the required movement |
| Unknown crack condition | Assess the defect before selecting the material |

The final selection should always be based on actual project condition.

## Advantages of PU Injection Grouting

- Targets selected water leakage paths
- Applicable to certain water-bearing cracks
- Flexible seal with suitable formulations
- Treats localized leakage without removing large areas of good concrete
- Applicable to some challenging below-ground waterproofing situations

The real benefit isn't just that it's "PU" — it's specifying the right injection system for the actual problem.

## Limitations of PU Injection Grouting

PU injection is valuable, but not a cure-all. Injection may not address the root cause when leakage stems from:

- Ongoing structural movement
- Poor drainage
- Defective joint detailing
- Significant structural distress
- An incorrectly diagnosed leakage pathway

Repair quality can also be compromised by poor packer placement, inappropriate material selection, or uncontrolled injection pressure. A structural crack should never be treated as an ordinary waterproofing crack — structural significance must be considered on its own terms.

## Common Mistakes to Avoid

**Choosing the material before understanding the leakage** — the first question should be "why is water coming through here," not "which PU should we use."

**Assuming every PU expands** — some formulations foam and expand, others don't. The behavior is product-specific.

**Using the same injection pressure everywhere** — pressure should be determined by the actual system and site conditions.

**Treating a structural crack as a waterproofing problem** — a leaking crack may also have structural significance; these are separate issues.

**Ignoring movement** — a repair proven on a dormant crack may not suit a moving one.

**Skipping the TDS** — product-specific mixing, application, and curing instructions matter and should always be checked before application.

## How Much Does PU Injection Grouting Cost?

There isn't a single price for PU injection grouting — cost varies significantly project to project, based on:

- Length and number of cracks
- Number of injection packers
- Accessibility of the affected area
- Amount of active leakage
- Water pressure
- Quantity of resin required
- Type of PU formulation
- Injection equipment
- Labour
- Surface preparation
- Site conditions
- Finishing and post-treatment requirements

A proper site assessment is far more useful than a generic per-metre or per-kilogram estimate.

## How Long Does PU Injection Grouting Last?

There isn't a single service-life figure that applies to every PU injection repair. Durability depends on the specific product used, the substrate condition, ongoing movement at the crack, water exposure conditions, and the quality of the installation itself. A repair carried out with correct diagnosis, the right product for the site's water and movement conditions, and proper application practice will generally perform far more reliably over time than one selected without that assessment — which is why the diagnostic step at the start of this guide matters as much as the material itself.

## Is PU Injection Suitable for Structural Cracks?

Not automatically. A leaking crack is not necessarily structural, and a structural crack does not necessarily call for PU. The reason for the crack, its width, movement, moisture condition, concrete condition, and surrounding reinforcement all need consideration. For a dormant structural crack requiring rigid bonding, a suitable epoxy injection system may be considered — this decision should be made by the responsible engineer based on structural requirement and project specification.

## How to Choose the Right PU Injection System

1. **What type of defect do you have?** Crack, construction joint, movement joint, void, or other leakage path?
2. **Is water flowing?** Material behavior may need to correspond to the water condition.
3. **Dry, damp, or wet environment?** Different products suit different conditions.
4. **Is the crack moving?** Movement influences the sealing system to select.
5. **What is the water pressure?** Hydrostatic pressure influences repair strategy and injection process.
6. **Is the crack structurally significant?** If there's structural concern, obtain proper engineering assessment.
7. **What does the product TDS say?** Always check intended use, mixing, application, and curing requirements.
8. **Is the equipment suitable?** Pump, packers, and accessories need to be compatible with the selected system.
9. **Does the applicator have the required experience?** Injection work requires proper preparation and controlled application.

## Practical Site Scenarios

**Scenario 1: Active basement wall leakage** — the first step isn't immediately pumping resin. The leakage path is identified and crack geometry, water condition, and surrounding concrete assessed first; a suitable water-reactive or flexible PU system is then chosen, and the response monitored after injection.

**Scenario 2: Leaking construction joint** — the reason for leakage may be the joint itself, an adjacent crack, or a void. Assessing the actual defect determines whether a flexible, watertight system is appropriate, with movement considerations factored in.

**Scenario 3: Water-bearing underground crack** — the crack is mapped and suitable injection access located. Material selection must be compatible with water condition, with injection pressure controlled and the cured seal inspected afterward.

**Scenario 4: Dormant structural crack** — even if leaking, a structurally significant dormant crack needs engineering assessment first. If rigid structural rebonding is appropriate, epoxy may be used instead — PU should not be specified purely because the crack is leaking water.

## Before Starting PU Injection Grouting

- Where is the water coming from?
- What is the actual leakage pathway?
- Is the crack active or dormant?
- Is there movement?
- What is the condition of the concrete?
- Is the defect structural?
- What type of PU system is appropriate?
- Does the product TDS support the intended application?
- Is the injection equipment suitable?
- Has a proper method statement been prepared?
- Is the work being carried out by trained applicators?

Time spent considering these questions upfront avoids far more rework later.

## Frequently Asked Questions

### What is PU injection grouting?

PU injection grouting is a pressure-injection technique using polyurethane-based materials to seal selected cracks, joints, voids, and water leakage pathways in concrete or masonry.

### Can PU injection stop active water leakage?

Certain water-reactive PU systems are designed for active leakage conditions. Suitability depends on the product and actual site condition.

### Does PU injection foam?

Some PU formulations foam and expand, while others are non-foaming. Always check the product TDS.

### Does PU injection require water?

Not all PU systems behave the same. Some water-reactive foams require water to react or foam, while other PU resins can suit damp or dry conditions.

### Can PU injection be used in concrete cracks?

Yes, for suitable waterproofing and sealing applications. The structural significance of the crack should be separately assessed.

### Is PU suitable for basement leakage?

PU injection is commonly considered for selected basement leakage and water-ingress conditions, when the injection system is appropriate for the defect.

### Is PU better than epoxy?

Not always. PU is often considered for flexible waterproofing and leak sealing, while epoxy may be considered for appropriate dormant structural cracks requiring rigid bonding.

### How is PU injection performed?

A typical process involves diagnosis, preparation, packer installation, surface sealing where required, controlled injection, finishing, and inspection.

### What affects the cost of PU injection?

Crack length, number of packers, accessibility, leakage severity, water pressure, resin quantity, equipment, labour, and preparation can all affect cost.

### How long does PU injection last?

There is no single service-life figure that applies to every repair. Durability depends on the product, substrate, movement, water exposure, and installation quality.

### Can PU repair structural cracks?

It shouldn't be assumed that it can. Structural cracks require proper engineering assessment and a system selected for the structural objective.

### What equipment is needed?

Typical injection work requires suitable pumps, packers, and preparation/finishing equipment, depending on the injection system used.

### How do I select the right PU material?

Start with the crack or defect itself. Consider water condition, movement, structural significance, and intended outcome, then check the current product TDS and method statement.

## Final Thoughts

PU injection grouting can be a viable solution to water ingress problems when specified correctly for the defect type, with the right material and application method. There is no one-size-fits-all PU product for every crack, joint, or leakage issue — the condition of the structure should be addressed by evaluating the source of water ingress, whether the crack is active or passive, the substrate condition, and the intended repair outcome. Based on this assessment, an appropriate injection system can be chosen.

For any concrete crack, basement leakage, construction joint, or other water ingress issue, it's recommended to provide the leakage condition, substrate, site access, and overall project specification to the Vchemics India technical team. The suitable product TDS and application guidelines should be reviewed before an injection material is specified.
`,
  },
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
