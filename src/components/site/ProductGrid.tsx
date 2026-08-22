import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { products } from "./data";
import { Reveal } from "./Reveal";

export function ProductGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((p, i) => (
        <Reveal key={p.title} as="article" delay={i * 80}>
          <article className="lift group h-full overflow-hidden rounded-sm border border-border bg-background">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-0 top-0 h-1 w-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <Link
                to="/products"
                className="mt-5 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.12em] text-primary transition-colors hover:text-foreground"
              >
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
