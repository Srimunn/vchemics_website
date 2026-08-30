import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Building2,
  Factory,
  Layers,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/ui";
import { allProjects, type ProjectItem } from "@/components/site/data";
import { cn } from "@/lib/utils";

const title = "Projects & Civil Case Studies Portfolio | Vchemics";
const description =
  "Explore landmark civil, industrial, and commercial projects across South India built with Vchemics concrete admixtures, grouts, and waterproofing systems.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.vchemicsindia.com/projects" },
      { property: "og:image", content: "https://www.vchemicsindia.com/image.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.vchemicsindia.com/projects" }],
  }),
  component: ProjectsPage,
});

const categories = ["All", "Infrastructure", "Industrial", "Commercial", "Waterproofing"] as const;

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow="Proven Track Record"
        title="Engineering Success Across South India"
        intro="From underground metro tunnels and 2,500-ton OEM press foundations to high-rise commercial podiums and chemical ETP sumps — our formulations ensure zero-failure performance."
      />

      {/* 2. PROJECT PORTFOLIO GRID */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Key Installations"
              title="Featured Landmark Projects"
              intro="Filter by sector to see how our materials deliver compressive strength, watertight integrity, and long-term durability."
            />
          </Reveal>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground mr-2">
              <Filter className="h-3.5 w-3.5" /> Filter By:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-xl px-4 py-2 font-display text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 cursor-pointer",
                  activeCategory === cat
                    ? "bg-brand-blue text-white shadow-sm"
                    : "border border-border/80 bg-card text-muted-foreground hover:border-brand-blue/40 hover:text-foreground",
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((proj, idx) => (
              <Reveal key={proj.id} delay={idx * 60}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-7 shadow-xs transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-2xl">
                  {/* Accent Top Bar */}
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    {/* Top Meta */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-brand-green bg-brand-green/10 px-2.5 py-1 rounded-full border border-brand-green/20">
                        {proj.category}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 text-brand-blue" /> {proj.year}
                      </span>
                    </div>

                    <p className="mt-2.5 font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-muted-foreground">
                      Chemical Formulation Supplier
                    </p>

                    <h3 className="mt-2 font-display text-xl font-bold text-foreground group-hover:text-brand-blue transition-colors leading-snug">
                      {proj.title}
                    </h3>

                    <p className="mt-2 flex items-center gap-1.5 font-mono text-xs font-semibold text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 text-brand-green shrink-0" />
                      {proj.location}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {proj.scope}
                    </p>

                    {/* Products Used */}
                    <div className="mt-6 space-y-2">
                      <span className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-brand-blue">
                        Formulations Deployed
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.productsUsed.map((prod) => (
                          <span
                            key={prod}
                            className="rounded-md border border-border/80 bg-muted/40 px-2.5 py-1 font-mono text-[0.7rem] font-medium text-foreground"
                          >
                            {prod}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Key Metric */}
                  <div className="mt-7 pt-4 border-t border-border/60 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-brand-green">
                      <Sparkles className="h-3.5 w-3.5" />
                      {proj.metrics}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-green" /> Supply Reference
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom Consultation Banner */}
          <div className="mt-16 rounded-3xl border border-border/80 bg-gradient-to-r from-[#0b274c] to-[#071933] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-brand-green/20 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 text-center md:text-left">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-green">
                  Have a challenging site specification?
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold">
                  Work With Our Senior Chemical Specialists
                </h3>
                <p className="text-sm text-[#b0c7df] max-w-xl">
                  We supply custom trial batches, concrete mix design calibrations, and on-site
                  application supervision for large-scale infrastructure and industrial projects.
                </p>
              </div>

              <Link
                to="/contact"
                className="shrink-0 inline-flex items-center gap-2 rounded-xl btn-brand-gradient px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:scale-105"
              >
                Discuss Your Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
