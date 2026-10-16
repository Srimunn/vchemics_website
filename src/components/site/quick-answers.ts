// Short, self-contained answers shown at the top of product and solution pages, plus the
// "Last updated" dates for those pages and the blog. AI search tools quote mostly from the
// top of a page, so each answer must make sense on its own (40-60 words, no "as above").
// When you change a page's content, bump its date here.

export interface QuickAnswer {
  /** Question used as the H2 above the answer. */
  q: string;
  a: string;
  /** Lower-case short name used in the question-style section headings. */
  name: string;
  /** True when `name` is plural ("How are ... applied?"). */
  plural?: boolean;
  /** Solutions only: question heading for the "challenge" card. */
  causeQ?: string;
  /** ISO date (YYYY-MM-DD) the page content was last changed. */
  updated: string;
}

export const productAnswers: Record<string, QuickAnswer> = {
  "concrete-admixtures": {
    q: "What are concrete admixtures?",
    a: "Concrete admixtures are liquid chemicals added to concrete during mixing to change how it behaves. Superplasticisers (PCE or SNF) make concrete flow with less water, retarders slow down setting in hot weather, and accelerators speed up early strength. The right dose, usually 0.4% to 1.8% of cement weight, is fixed by a trial mix.",
    name: "concrete admixtures",
    plural: true,
    updated: "2026-10-16",
  },
  "waterproofing-chemicals": {
    q: "What are waterproofing chemicals?",
    a: "Waterproofing chemicals stop water from getting into concrete and masonry. Crystalline products grow crystals inside the concrete's pores and block water even under pressure. Integral liquids are mixed into fresh concrete, and coatings form a flexible layer on the surface. Basements, water tanks and terraces each need a different type, so the choice depends on where the water comes from.",
    name: "waterproofing chemicals",
    plural: true,
    updated: "2026-10-16",
  },
  "pu-injection-grouting": {
    q: "What is PU injection grouting?",
    a: "PU injection grouting seals cracks that are actively leaking water. A polyurethane resin is pumped into the crack through small packers drilled into the concrete. When the resin touches water it expands into a foam or flexible gel that fills the crack and stops the leak. It is used in basements, lift pits, tunnels and water tanks.",
    name: "PU injection grouting",
    updated: "2026-10-16",
  },
  "non-shrink-grout": {
    q: "What is non-shrink grout?",
    a: "Non-shrink grout is a ready-mixed cement powder that you mix with water and pour under machine base plates, steel column bases and bolt pockets. Unlike normal cement mortar, it does not shrink as it hardens, so it stays in full contact with the plate and carries the load evenly. Good grouts are tested to ASTM C1107.",
    name: "non-shrink grout",
    updated: "2026-10-16",
  },
  "epoxy-grouting": {
    q: "What is epoxy grouting?",
    a: "Epoxy grouting uses a three-part mix of resin, hardener and filler instead of cement. It becomes much stronger than cement grout, bonds firmly to steel and concrete, and resists oil, acid and constant vibration. That makes it the usual choice under heavy machines, compressors, crane rails and in chemical plants where cement grout would crack or wear away.",
    name: "epoxy grout",
    updated: "2026-10-16",
  },
  "protective-coatings": {
    q: "What are protective coatings for concrete?",
    a: "Protective coatings are paint-like layers that shield concrete from sun, rain, salt air and chemicals. Anti-carbonation coatings slow down the carbon dioxide and moisture that make the steel inside concrete rust. Epoxy coatings protect floors and tanks, and polyurethane topcoats resist UV. Most systems need two or three coats on a clean, dry, primed surface.",
    name: "protective coatings",
    plural: true,
    updated: "2026-10-16",
  },
  "concrete-repair": {
    q: "What are concrete repair products?",
    a: "Concrete repair products restore concrete that has cracked, spalled or lost its cover over rusting steel. The usual method is to cut away loose concrete, clean the steel, coat it with an anti-rust primer, apply a bonding agent, and rebuild the section with a polymer-modified repair mortar. Repair mortars are graded under EN 1504-3, Class R3 or R4.",
    name: "concrete repair mortar",
    updated: "2026-10-16",
  },
  "micro-concrete": {
    q: "What is micro concrete?",
    a: "Micro concrete is a ready-bagged, free-flowing concrete made with small aggregates. It is mixed with water and poured into formwork, where it fills tight spaces without vibration. Engineers use it for column and beam jacketing, thick structural repairs and filling large honeycombed areas. Because it does not shrink, it bonds well with the old concrete around it.",
    name: "micro concrete",
    updated: "2026-10-16",
  },
};

export const solutionAnswers: Record<string, QuickAnswer> = {
  "basement-waterproofing": {
    q: "How do you waterproof a basement?",
    a: "A basement is waterproofed in layers, because groundwater pushes in from below and from the sides. New basements get a crystalline admixture in the concrete, waterstops at construction joints and a coating on the walls. An existing basement that already leaks is usually sealed from the inside with PU injection in the cracks and a crystalline slurry over the surface.",
    name: "basement waterproofing",
    causeQ: "Why do basements leak?",
    updated: "2026-10-16",
  },
  "terrace-waterproofing": {
    q: "What is the best way to waterproof a terrace?",
    a: "In Tamil Nadu's heat, a terrace needs a coating that can stretch. The roof slab expands during the day and shrinks at night, so rigid coatings crack. A good terrace job cleans the slab, repairs cracks, seals the joint between the parapet wall and the slab, and then applies a flexible PU or acrylic coating. The finished terrace is pond-tested before handover.",
    name: "terrace waterproofing",
    causeQ: "Why do terraces leak?",
    updated: "2026-10-16",
  },
  "concrete-repair": {
    q: "How is damaged concrete repaired?",
    a: "Most concrete damage starts when the steel inside rusts, swells and pushes the concrete off. A proper repair first checks how far the damage goes, cuts back to sound concrete, cleans and primes the steel, and then rebuilds the section with a polymer repair mortar. Patching over rusting steel without treating it usually fails again within a few years.",
    name: "concrete repair",
    causeQ: "What causes concrete damage?",
    updated: "2026-10-16",
  },
  "structural-rehabilitation": {
    q: "What is structural rehabilitation?",
    a: "Structural rehabilitation strengthens columns, beams and slabs that are weak, damaged or need to carry more load, without demolishing the building. The most common method is jacketing: new steel is fixed around the old member and micro concrete is poured around it in formwork. A structural engineer designs the work; the right chemicals make the new and old concrete act as one.",
    name: "structural rehabilitation",
    causeQ: "When does a building need structural rehabilitation?",
    updated: "2026-10-16",
  },
  "industrial-flooring": {
    q: "What is industrial flooring?",
    a: "Industrial flooring is a hard-wearing floor finish for factories, warehouses and food plants. For dry areas with forklift traffic, a floor hardener is trowelled into the fresh concrete. Where chemicals, oil or daily washing are common, an epoxy or polyurethane screed is laid over the concrete. The right choice depends on the traffic, the chemicals and how the floor is cleaned.",
    name: "industrial flooring",
    causeQ: "Why do industrial floors wear out?",
    updated: "2026-10-16",
  },
  painting: {
    q: "What is the difference between protective and architectural painting?",
    a: "Architectural painting is about appearance and weather resistance on walls and buildings. Protective painting is about stopping damage on steel, tanks and plant equipment that face chemicals, salt air or constant moisture. Both need the right primer and surface preparation. Most paint failures come from painting over damp, dusty or rusty surfaces, not from the paint itself.",
    name: "protective and architectural painting",
    causeQ: "Why do painted surfaces fail?",
    updated: "2026-10-16",
  },
};

/**
 * Blog dates as ISO strings. `published` is the exact publish date (the post shows its month);
 * `updated` is the last time the article body was changed.
 */
export const blogDates: Record<string, { published: string; updated: string }> = {
  "terrace-leakage-monsoon-checks": { published: "2026-10-14", updated: "2026-10-14" },
  "why-concrete-repairs-fail-tropical-climates": { published: "2026-10-04", updated: "2026-10-04" },
  "pu-injection-grouting": { published: "2026-09-01", updated: "2026-10-14" },
  "preventing-cold-joints-tropical-concrete": { published: "2026-09-07", updated: "2026-09-13" },
  "crystalline-vs-membrane-waterproofing": { published: "2026-09-21", updated: "2026-10-14" },
  "machine-foundation-epoxy-grouting-standards": { published: "2026-09-14", updated: "2026-10-14" },
  "pu-injection-active-leak-sealing": { published: "2026-08-31", updated: "2026-10-14" },
  "column-jacketing-micro-concrete-standards": { published: "2026-08-24", updated: "2026-10-14" },
  "waterproofing-chemicals-guide": { published: "2026-09-13", updated: "2026-09-15" },
  "protective-coatings-for-buildings": { published: "2026-09-15", updated: "2026-10-14" },
};

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** "2026-10-16" -> "16 October 2026" (fixed format, so server and browser render the same). */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[(m ?? 1) - 1]} ${y}`;
}
