import { Link } from "@tanstack/react-router";

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="V Chemics India Solutions — home">
      <span className="hatch grid h-10 w-10 place-items-center rounded-sm font-display text-lg font-bold text-primary-foreground transition-transform duration-300 group-hover:-rotate-6">
        V
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-base font-bold tracking-tight ${
            onDark ? "text-on-dark" : "text-foreground"
          }`}
        >
          V CHEMICS
        </span>
        <span
          className={`block text-[0.6rem] font-semibold uppercase tracking-[0.22em] ${
            onDark ? "text-on-dark-muted" : "text-muted-foreground"
          }`}
        >
          India Solutions
        </span>
      </span>
    </Link>
  );
}
