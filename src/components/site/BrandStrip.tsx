import fosrocImg from "@/assets/brands/fosroc.png";
import basfImg from "@/assets/brands/basf.png";
import masterBuildersImg from "@/assets/brands/master-builders.png";
import sikaImg from "@/assets/brands/sika.png";
import bergerImg from "@/assets/brands/berger-home-shield.png";
import renaconImg from "@/assets/brands/renacon.png";
import mykArmentImg from "@/assets/brands/myk-arment.png";
import stpImg from "@/assets/brands/stp-limited.png";
import ardexEnduraImg from "@/assets/brands/ardex-endura.png";

interface BrandItem {
  name: string;
  image: string;
  alt: string;
}

const brands: BrandItem[] = [
  {
    name: "Fosroc",
    image: fosrocImg,
    alt: "Fosroc Authorized Distributor Logo",
  },
  {
    name: "BASF",
    image: basfImg,
    alt: "BASF Construction Chemicals Logo",
  },
  {
    name: "Master Builders Solutions",
    image: masterBuildersImg,
    alt: "Master Builders Solutions Logo",
  },
  {
    name: "Sika",
    image: sikaImg,
    alt: "Sika Building Trust Logo",
  },
  {
    name: "Berger Home Shield",
    image: bergerImg,
    alt: "Berger Home Shield Scientific Waterproofing Logo",
  },
  {
    name: "Renacon",
    image: renaconImg,
    alt: "Renacon AAC Blocks Logo",
  },
  {
    name: "MYK Arment",
    image: mykArmentImg,
    alt: "MYK Arment Construction Chemicals Logo",
  },
  {
    name: "STP Limited",
    image: stpImg,
    alt: "STP Limited Logo",
  },
  {
    name: "Ardex Endura",
    image: ardexEnduraImg,
    alt: "Ardex Endura Logo",
  },
];

export function BrandStrip() {
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section
      aria-label="Authorized Distributor and Partner Brands"
      className="overflow-hidden border-t border-border/70 bg-concrete py-10 sm:py-12"
    >
      {/* Eyebrow Heading Container (Constrained Width) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center">
        <p className="eyebrow inline-flex items-center justify-center gap-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-green">
          <span className="h-0.5 w-6 bg-brand-green" aria-hidden />
          <span>Authorized Distributor / Dealer</span>
          <span className="h-0.5 w-6 bg-brand-green" aria-hidden />
        </p>
      </div>

      {/* Full-Bleed Infinite Scrolling Marquee Track with Raised Card Tiles */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge gradient fades */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-concrete to-transparent z-10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-concrete to-transparent z-10"
          aria-hidden
        />

        {/* Marquee Inner Flex Track */}
        <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused] py-3">
          {duplicatedBrands.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex shrink-0 items-center justify-center px-3 sm:px-4"
            >
              {/* 3D Raised White Card Tile */}
              <div className="lift flex h-20 sm:h-24 min-w-[160px] sm:min-w-[200px] items-center justify-center rounded-2xl border border-border/80 bg-card px-6 py-4 shadow-sm transition-all duration-300 hover:border-brand-blue/40 hover:shadow-md">
                <img
                  src={brand.image}
                  alt={brand.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-10 sm:h-12 w-auto max-w-[130px] sm:max-w-[160px] object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
