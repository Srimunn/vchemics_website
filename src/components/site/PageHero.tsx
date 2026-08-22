export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="blueprint clip-slant-b relative bg-graphite-deep pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {eyebrow && (
          <p className="eyebrow mb-4 flex items-center gap-3 text-[#669930]">
            <span className="h-px w-8 bg-[#669930]" aria-hidden />
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl leading-[1.05] text-on-dark sm:text-5xl lg:text-6xl font-display font-bold">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-on-dark-muted sm:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
