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
    <section className="blueprint clip-slant-b relative bg-[#061933] pt-32 sm:pt-40 pb-20 sm:pb-28 text-white overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {eyebrow && (
          <p className="eyebrow mb-3 flex items-center gap-2.5 text-brand-green font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">
            <span className="h-0.5 w-6 bg-brand-green" aria-hidden />
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-[1.12] text-white">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-[#b0c7df]">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
