import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { products } from "./data";
import { Reveal } from "./Reveal";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function ProductGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
      {products.map((p, i) => (
        <Reveal key={p.title} as="article" delay={i * 80} className="h-full">
          <Link
            to="/products"
            hash={p.id}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-xl"
          >
            {/* Top Accent Gradient Bar */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20" />

            {/* Image Slot */}
            <div className="relative aspect-[4/3] overflow-hidden bg-muted/30 rounded-t-2xl">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.alt || `${p.title} - High Performance Construction Chemical`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <ImagePlaceholder label={`+ Add ${p.title} Photo`} />
              )}

              {/* Ambient Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              {/* Floating System Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-white border border-white/15">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />0{i + 1}
                </span>
              </div>

              {/* Top Right Floating Arrow Button */}
              <div className="absolute top-3 right-3 z-10">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-brand-green group-hover:text-white group-hover:scale-110">
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex flex-1 flex-col justify-between p-5">
              <div className="flex-1 flex flex-col">
                <h3 className="font-display text-base font-bold text-foreground transition-colors duration-300 group-hover:text-brand-blue flex items-center leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground flex-1">
                  {p.description}
                </p>
              </div>

              {/* Bottom Subtle Accent Line */}
              <div className="mt-5 pt-3 border-t border-border/60">
                <div className="h-1 w-8 rounded-full bg-border transition-all duration-500 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-green" />
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
