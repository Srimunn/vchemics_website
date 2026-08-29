import { useState, useEffect, useRef } from "react";
import { Star, Sparkles, CheckCircle2, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";

const testimonials = [
  {
    initials: "RK",
    name: "Ramesh Kumar",
    company: "Site Lead, Aravind Infra Projects",
    project: "RMC Plant Mix Optimization",
    impact: "Hit Target Strength 2 Days Early",
    quote:
      "Their superplasticiser let us cut water content without losing workability. Our RMC plant hit target strengths two days earlier than the mix design promised, saving significant curing time on-site.",
    rating: 5,
    sector: "Infrastructure",
  },
  {
    initials: "PN",
    name: "Priya Natarajan",
    company: "Project Manager, Coastline Builders",
    project: "Basement Raft Waterproofing",
    impact: "Zero Dampness Across 2 Monsoons",
    quote:
      "We waterproofed three basement rafts with Vchemics crystalline systems. Two intense monsoons later, not a single damp patch or moisture ingress appeared on the retaining walls.",
    rating: 5,
    sector: "Commercial Real Estate",
  },
  {
    initials: "SV",
    name: "S. Vetrivel",
    company: "Maintenance Head, Southern Power Works",
    project: "Turbine Base Plate Grouting",
    impact: "Zero Shrinkage Under Heavy Vibrations",
    quote:
      "The non-shrink grout under our turbine base plates performed exactly to spec. Technical support was on-site the same week we called to validate dosage and flowability before pour.",
    rating: 5,
    sector: "Power & Utilities",
  },
  {
    initials: "AS",
    name: "Anand Sridhar",
    company: "Structural Consultant, ASD Associates",
    project: "Column Jacketing & Restoration",
    impact: "Restored Full Design Load Capacity",
    quote:
      "Micro concrete repairs on a 40-year-old commercial structure came out clean, dense, and structurally sound. Honest guidance on mix ratios, with unmatched batch consistency.",
    rating: 5,
    sector: "Structural Rehabilitation",
  },
  {
    initials: "KR",
    name: "K. Rajeshwaran",
    company: "Chief Project Engineer, Apex Logistics Hubs",
    project: "Heavy-Duty Industrial Floor Screed",
    impact: "High Abrasion & Dust-Free Finish",
    quote:
      "Vchemics floor hardeners and polymer screeds withstand continuous forklift traffic and heavy dynamic racking loads without surface dusting or micro-cracking.",
    rating: 5,
    sector: "Industrial Flooring",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  return (
    <section className="relative overflow-hidden bg-concrete py-20 lg:py-28 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Our Clients Say!"
            intro="Real feedback from project managers, RMC operators, and structural consultants using Vchemics formulations."
          />
        </Reveal>

        {/* Animated Side-by-Side Carousel Track with Floating Left & Right Arrows */}
        <div
          className="relative mt-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Desktop Left Arrow Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Review"
            className="hidden sm:grid absolute -left-6 sm:-left-8 lg:-left-10 top-1/2 -translate-y-1/2 z-20 h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-2xl border border-border/80 bg-card text-foreground shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-brand-blue hover:bg-brand-blue hover:text-white cursor-pointer"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Desktop Right Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Review"
            className="hidden sm:grid absolute -right-6 sm:-right-8 lg:-right-10 top-1/2 -translate-y-1/2 z-20 h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-2xl border border-border/80 bg-card text-foreground shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-brand-blue hover:bg-brand-blue hover:text-white cursor-pointer"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Sliding Cards Track */}
          <div className="overflow-hidden px-1 sm:px-4 py-2 sm:py-4">
            <div
              className="flex transition-transform duration-700 ease-out gap-6"
              style={{
                transform: `translateX(calc(-${currentIndex} * (min(100%, 390px) + 24px)))`,
              }}
            >
              {[...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
                <div
                  key={`${t.name}-${idx}`}
                  className="w-full sm:w-[370px] lg:w-[390px] shrink-0 flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-blue/40 hover:shadow-xl relative group"
                >
                  {/* Top Accent Gradient Line */}
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Header: Stars + Sector */}
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div
                        className="flex items-center gap-1"
                        aria-label={`${t.rating} out of 5 stars`}
                      >
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} className="h-4 w-4 fill-brand-green text-brand-green" />
                        ))}
                      </div>

                      <span className="font-mono text-[0.65rem] font-bold uppercase tracking-wider text-brand-green bg-brand-green/10 px-2.5 py-1 rounded-full border border-brand-green/20">
                        {t.sector}
                      </span>
                    </div>

                    {/* Impact Tag */}
                    <div className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-muted/60 px-3 py-1.5 text-xs font-semibold text-foreground">
                      <Sparkles className="h-3.5 w-3.5 text-brand-green" />
                      <span>{t.impact}</span>
                    </div>

                    {/* Quote Text */}
                    <blockquote className="mt-5 font-display text-sm sm:text-base leading-relaxed text-foreground font-medium">
                      “{t.quote}”
                    </blockquote>
                  </div>

                  {/* Author Card Footer */}
                  <div className="mt-8 pt-5 border-t border-border/60 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-navy text-xs font-bold text-white shadow-xs group-hover:from-brand-blue group-hover:to-brand-green transition-colors duration-300">
                        {t.initials}
                      </div>
                      <div>
                        <h4 className="font-display text-sm font-bold text-foreground group-hover:text-brand-blue transition-colors">
                          {t.name}
                        </h4>
                        <p className="text-[0.75rem] text-muted-foreground">{t.company}</p>
                        <p className="text-[0.7rem] font-mono text-brand-green mt-0.5">
                          {t.project}
                        </p>
                      </div>
                    </div>

                    <span className="hidden sm:inline-flex items-center gap-1 text-[0.68rem] font-mono text-muted-foreground bg-muted/40 px-2 py-0.5 rounded-md">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-green" /> Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Bottom Navigation Controls */}
          <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Review"
              className="grid h-10 w-10 place-items-center rounded-xl border border-border/80 bg-card text-foreground shadow-sm active:scale-95 transition-transform cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground font-bold">
              <span className="text-brand-green">0{currentIndex + 1}</span>
              <span>/</span>
              <span>0{total}</span>
            </div>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Review"
              className="grid h-10 w-10 place-items-center rounded-xl border border-border/80 bg-card text-foreground shadow-sm active:scale-95 transition-transform cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
