import { cn } from "@/lib/utils";

export const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.08em] transition-all duration-300";

export const btnAccent = cn(
  btnBase,
  "bg-primary text-primary-foreground hover:bg-graphite hover:text-on-dark hover:shadow-[var(--shadow-accent)]",
);

export const btnOutlineLight = cn(
  btnBase,
  "border border-on-dark/40 text-on-dark hover:border-primary hover:bg-primary hover:text-primary-foreground",
);

export const btnOutlineDark = cn(
  btnBase,
  "border border-foreground/25 text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground",
);

export function SectionHeading({
  eyebrow,
  title,
  intro,
  onDark = false,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  onDark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className="eyebrow mb-4 flex items-center gap-3 text-primary">
          <span className="h-px w-8 bg-primary" aria-hidden />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl leading-[1.08] sm:text-4xl lg:text-5xl",
          onDark ? "text-on-dark" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            onDark ? "text-on-dark-muted" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
