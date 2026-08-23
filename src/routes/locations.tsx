import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Truck,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  Navigation,
  Globe,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/ui";
import { allLocations, type LocationItem } from "@/components/site/data";
import { cn } from "@/lib/utils";

const title = "Construction Chemical Suppliers in Chennai, Coimbatore, Erode, Salem & Karur | V Chemics";
const description =
  "Locate V Chemics regional supply hubs across Tamil Nadu: Chennai Plant & HQ, Coimbatore Hub, Erode Depot, Salem Mining Center, and Karur Hub. Same-day & 24h direct site delivery.";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "construction chemicals Tamil Nadu, construction chemical supplier Chennai, Coimbatore waterproofing chemicals, Erode construction chemicals, Salem grouting supplier, Karur concrete admixtures" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  const [activeTab, setActiveTab] = useState(allLocations[0].id);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      const match = allLocations.find((l) => l.id === hash || l.slug === hash);
      if (match) {
        setActiveTab(match.id);
        const el = document.getElementById(match.id);
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
        }
      }
    }
  }, []);

  const activeLoc = allLocations.find((l) => l.id === activeTab) || allLocations[0];

  return (
    <>
      <PageHero
        eyebrow="Regional Network"
        title="Supply Hubs & Engineering Centers Across South India"
        intro="With strategically positioned manufacturing plants, regional distribution warehouses, and local technical specialists in Chennai, Coimbatore, Erode, Salem, and Karur — we ensure rapid direct-to-site supply."
      />

      {/* 2. INTERACTIVE LOCATION SWITCHER */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our 5 Strategic Hubs"
              title="Statewide Footprint & Same-Day Dispatch"
              intro="Select a city hub below to view facility specifications, coverage zones, direct logistics timelines, and dedicated contacts."
            />
          </Reveal>

          {/* City Hub Tabs */}
          <div className="mt-10 flex flex-wrap gap-2.5 sm:gap-3 border-b border-border/80 pb-6">
            {allLocations.map((loc) => {
              const isActive = loc.id === activeTab;
              return (
                <button
                  key={loc.id}
                  onClick={() => {
                    setActiveTab(loc.id);
                    if (typeof window !== "undefined") {
                      window.history.replaceState(null, "", `#${loc.id}`);
                    }
                  }}
                  className={cn(
                    "group flex items-center gap-2 rounded-xl px-5 py-3 font-display text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer",
                    isActive
                      ? "bg-gradient-to-r from-[#054782] to-[#669930] text-white shadow-md shadow-[#054782]/20 scale-[1.02]"
                      : "border border-border/80 bg-card text-muted-foreground hover:border-[#054782]/40 hover:text-foreground",
                  )}
                >
                  <MapPin className={cn("h-4 w-4", isActive ? "text-white" : "text-[#669930]")} />
                  <span>{loc.city}</span>
                </button>
              );
            })}
          </div>

          {/* Active Location Detail Card */}
          <div id={activeLoc.id} className="mt-12">
            <Reveal key={activeLoc.id}>
              <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-sm relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#054782] via-[#669930] to-[#054782]" />

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#669930]">
                      Regional Center
                    </span>
                    <h3 className="font-display text-2xl sm:text-4xl font-bold text-foreground">
                      {activeLoc.city} Facility
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full border border-[#669930]/30 bg-[#669930]/10 px-4 py-1.5 font-mono text-xs font-bold text-[#669930]">
                    <Truck className="h-3.5 w-3.5" />
                    {activeLoc.dispatchTime}
                  </span>
                </div>

                <p className="mt-3 text-base sm:text-lg font-medium text-foreground/90 leading-relaxed">
                  {activeLoc.role}
                </p>

                {/* Hub Specifics Grid */}
                <div className="mt-8 grid gap-6 lg:grid-cols-12">
                  {/* Left info column */}
                  <div className="lg:col-span-6 space-y-4">
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Facility Contact & Address
                    </h4>

                    <div className="space-y-3">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(activeLoc.mapQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-3.5 rounded-2xl border border-border/80 bg-muted/20 p-4 transition-all hover:border-[#054782]/40 hover:bg-muted/50"
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#054782]/10 text-[#054782]">
                          <MapPin className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-mono text-[0.68rem] font-bold uppercase text-[#669930]">
                            Physical Depot Address
                          </p>
                          <p className="text-sm font-semibold text-foreground group-hover:text-[#054782] transition-colors leading-relaxed">
                            {activeLoc.address}
                          </p>
                          <span className="mt-1 inline-flex items-center gap-1 font-mono text-xs text-[#054782]">
                            Open in Google Maps <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </a>

                      <a
                        href={`tel:${activeLoc.phone}`}
                        className="group flex items-center gap-3.5 rounded-2xl border border-border/80 bg-muted/20 p-4 transition-all hover:border-[#054782]/40 hover:bg-muted/50"
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#669930]/10 text-[#669930]">
                          <Phone className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-mono text-[0.68rem] font-bold uppercase text-[#669930]">
                            Direct Technical Hotline
                          </p>
                          <p className="text-sm font-semibold text-foreground group-hover:text-[#669930] transition-colors">
                            {activeLoc.phone}
                          </p>
                        </div>
                      </a>

                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${activeLoc.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3.5 rounded-2xl border border-border/80 bg-muted/20 p-4 transition-all hover:border-[#054782]/40 hover:bg-muted/50"
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#054782]/10 text-[#054782]">
                          <Mail className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-mono text-[0.68rem] font-bold uppercase text-[#669930]">
                            Regional Email Desk
                          </p>
                          <p className="text-sm font-semibold text-foreground group-hover:text-[#054782] transition-colors">
                            {activeLoc.email}
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Right coverage & highlights column */}
                  <div className="lg:col-span-6 space-y-6">
                    <div>
                      <h4 className="font-display text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                        Operational Capabilities
                      </h4>
                      <ul className="space-y-2.5">
                        {activeLoc.keyHighlights.map((hl) => (
                          <li
                            key={hl}
                            className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-muted/30 p-3 text-xs sm:text-sm text-foreground"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#669930] mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-display text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                        Direct Delivery Coverage Zones
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeLoc.coverageAreas.map((area) => (
                          <span
                            key={area}
                            className="rounded-lg border border-border/80 bg-background px-3 py-1 font-mono text-xs font-medium text-foreground"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 pt-6 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="font-mono text-xs text-muted-foreground">
                    Looking for bulk supply or an on-site sample trial in {activeLoc.city}?
                  </span>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#054782] to-[#669930] px-6 py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:scale-[1.02]"
                  >
                    Request Delivery To {activeLoc.city} Site <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. ALL 5 CITIES QUICK CARDS */}
      <section className="bg-concrete py-20 lg:py-28 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Network Overview"
              title="Complete Regional Directory"
              intro="Connect with our technical managers at any of our five primary operating centers."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {allLocations.map((loc, idx) => (
              <Reveal key={loc.id} delay={idx * 60}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-500 hover:-translate-y-1.5 hover:border-[#054782]/40 hover:shadow-xl">
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#054782] via-[#669930] to-[#054782] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#054782]/10 to-[#669930]/10 text-[#054782]">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-[0.65rem] font-bold text-[#669930] bg-[#669930]/10 px-2 py-0.5 rounded-full">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-lg font-bold text-foreground group-hover:text-[#054782] transition-colors">
                      {loc.city}
                    </h3>

                    <p className="mt-1 font-mono text-[0.68rem] font-semibold text-[#669930]">
                      {loc.dispatchTime}
                    </p>

                    <p className="mt-2 text-xs text-muted-foreground line-clamp-3">
                      {loc.address}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-border/60">
                    <button
                      onClick={() => {
                        setActiveTab(loc.id);
                        window.scrollTo({ top: 400, behavior: "smooth" });
                      }}
                      className="w-full text-center font-display text-xs font-bold uppercase text-[#054782] group-hover:text-[#669930] transition-colors cursor-pointer"
                    >
                      View Hub Details →
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
