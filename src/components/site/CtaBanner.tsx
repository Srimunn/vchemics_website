import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CtaBanner() {
  return (
    <section className="hatch clip-slant-both relative py-24">
      <div className="absolute inset-0 bg-primary/92" aria-hidden />
      <Reveal className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-5 text-center lg:px-8">
        <h2 className="max-w-3xl text-3xl leading-tight text-primary-foreground sm:text-4xl lg:text-[2.75rem]">
          Are You Ready to Explore the Future of Smarter Construction?
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-sm bg-graphite-deep px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.08em] text-on-dark transition-all duration-300 hover:bg-on-dark hover:text-graphite"
        >
          Get In Touch <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  );
}
