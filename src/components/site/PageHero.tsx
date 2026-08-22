import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="blueprint clip-slant-b relative bg-graphite-deep pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-on-dark-muted">
          <Link to="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-primary">{eyebrow}</span>
        </nav>
        <h1 className="max-w-3xl text-4xl leading-[1.05] text-on-dark sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-on-dark-muted sm:text-lg">{intro}</p>
      </div>
    </section>
  );
}
