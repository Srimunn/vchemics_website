import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";

const testimonials = [
  {
    quote:
      "Their superplasticiser let us cut water content without losing workability. Our RMC plant hit target strengths two days earlier than the mix design promised.",
    name: "Ramesh Kumar",
    company: "Site Lead, Aravind Infra Projects",
    rating: 5,
  },
  {
    quote:
      "We waterproofed three basement rafts with V Chemics systems. Two monsoons later, not a single damp patch on the walls.",
    name: "Priya Natarajan",
    company: "Project Manager, Coastline Builders",
    rating: 5,
  },
  {
    quote:
      "The non-shrink grout under our turbine base plates performed exactly to spec. Technical support was on-site the same week we called.",
    name: "S. Vetrivel",
    company: "Maintenance Head, Southern Power Works",
    rating: 4,
  },
  {
    quote:
      "Micro concrete repairs on a 40-year-old structure came out clean and strong. Honest guidance on dosage, no overselling.",
    name: "Anand Sridhar",
    company: "Structural Consultant, ASD Associates",
    rating: 5,
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const total = testimonials.length;
  const go = (d: number) => setI((v) => (v + d + total) % total);

  return (
    <section className="bg-concrete py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Testimonials" title="Our Clients Say!" align="center" />
        </Reveal>

        <Reveal className="mt-14" delay={100}>
          <div className="relative mx-auto max-w-3xl">
            <article className="relative rounded-sm border border-border bg-background p-8 shadow-[var(--shadow-lift)] sm:p-12">
              <Quote className="h-10 w-10 text-primary" aria-hidden />
              <p className="mt-6 font-display text-xl leading-relaxed text-foreground sm:text-2xl">
                “{testimonials[i].quote}”
              </p>
              <div className="mt-8 flex items-center gap-1" aria-label={`${testimonials[i].rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={cn(
                      "h-4 w-4",
                      s < testimonials[i].rating ? "fill-primary text-primary" : "text-border",
                    )}
                  />
                ))}
              </div>
              <p className="mt-4 font-display text-base font-bold text-foreground">{testimonials[i].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[i].company}</p>
            </article>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => go(-1)}
                className="grid h-11 w-11 place-items-center rounded-sm border border-foreground/20 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((t, idx) => (
                  <button
                    key={t.name}
                    type="button"
                    aria-label={`Show testimonial ${idx + 1}`}
                    aria-current={idx === i}
                    onClick={() => setI(idx)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      idx === i ? "w-8 bg-primary" : "w-2 bg-foreground/25 hover:bg-foreground/50",
                    )}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => go(1)}
                className="grid h-11 w-11 place-items-center rounded-sm border border-foreground/20 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
