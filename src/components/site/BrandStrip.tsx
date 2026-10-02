import fosrocImg from "@/assets/brands/fosroc.webp";
import basfImg from "@/assets/brands/logo-BASF.webp";
import masterBuildersImg from "@/assets/brands/basf.webp";
import sikaImg from "@/assets/brands/Sika-Symbol-500x281.webp";
import bergerImg from "@/assets/brands/berger-home-shield.webp";
import renaconImg from "@/assets/brands/renacon.webp";
import mykArmentImg from "@/assets/brands/myk.webp";
import stpImg from "@/assets/brands/stp-logo.webp";
import ardexEnduraImg from "@/assets/brands/ardex-1000x1000.webp";

interface BrandItem {
  name: string;
  image: string;
  width: number;
  height: number;
  alt: string;
}

const brands: BrandItem[] = [
  {
    name: "Fosroc",
    image: fosrocImg,
    width: 600,
    height: 600,
    alt: "Fosroc Authorized Distributor Logo",
  },
  {
    name: "BASF",
    image: basfImg,
    width: 600,
    height: 300,
    alt: "BASF Construction Chemicals Logo",
  },
  {
    name: "Master Builders Solutions",
    image: masterBuildersImg,
    width: 404,
    height: 316,
    alt: "Master Builders Solutions Logo",
  },
  {
    name: "Sika",
    image: sikaImg,
    width: 500,
    height: 281,
    alt: "Sika Building Trust Logo",
  },
  {
    name: "Berger Home Shield",
    image: bergerImg,
    width: 600,
    height: 600,
    alt: "Berger Home Shield Scientific Waterproofing Logo",
  },
  {
    name: "Renacon",
    image: renaconImg,
    width: 600,
    height: 316,
    alt: "Renacon AAC Blocks Logo",
  },
  {
    name: "MYK Arment",
    image: mykArmentImg,
    width: 600,
    height: 220,
    alt: "MYK Arment Construction Chemicals Logo",
  },
  {
    name: "STP Limited",
    image: stpImg,
    width: 600,
    height: 483,
    alt: "STP Limited Logo",
  },
  {
    name: "Ardex Endura",
    image: ardexEnduraImg,
    width: 600,
    height: 199,
    alt: "Ardex Endura Logo",
  },
];

export function BrandStrip() {
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section
      aria-label="Authorized Distributor and Partner Brands"
      className="overflow-hidden border-t border-border/70 bg-concrete py-12 sm:py-16"
    >
      {/* Eyebrow Heading Container (Constrained Width) */}
      <div className="mx-auto max-w-7xl px-5 lg:px-8 mb-8 sm:mb-10 text-center">
        <p className="eyebrow inline-flex items-center justify-center gap-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-green">
          <span className="h-0.5 w-6 bg-brand-green" aria-hidden />
          <span>Authorized Distributor / Dealer</span>
          <span className="h-0.5 w-6 bg-brand-green" aria-hidden />
        </p>
      </div>

      {/* Full-Bleed Infinite Scrolling Marquee Track */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge gradient fades */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-concrete to-transparent z-10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-concrete to-transparent z-10"
          aria-hidden
        />

        {/* Marquee Inner Flex Track with Expanded Spacing */}
        <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused] py-4 gap-x-12 px-6">
          {duplicatedBrands.map((brand, idx) => (
            <div key={`${brand.name}-${idx}`} className="flex shrink-0 items-center justify-center">
              {/* Lightened, Translucent, Borderless Tile Container */}
              <div className="flex items-center justify-center rounded-2xl bg-white/40 backdrop-blur-sm px-10 py-6 shadow-xs transition-all duration-300 hover:bg-white/70 hover:shadow-sm">
                <img
                  src={brand.image}
                  alt={brand.alt}
                  width={brand.width}
                  height={brand.height}
                  loading="lazy"
                  decoding="async"
                  className="h-20 sm:h-24 w-auto max-w-[200px] sm:max-w-[260px] object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
