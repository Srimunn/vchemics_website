import fosrocImg from "@/assets/brands/fosroc.png";
import basfImg from "@/assets/brands/logo-BASF.png";
import masterBuildersImg from "@/assets/brands/basf.jpg.jpeg";
import sikaImg from "@/assets/brands/Sika-Symbol-500x281.png";
import bergerImg from "@/assets/brands/berger-home-shield.jpg";
import renaconImg from "@/assets/brands/renacon.png";
import mykArmentImg from "@/assets/brands/myk.png";
import stpImg from "@/assets/brands/STP-logo.jpg (1).jpeg";
import ardexEnduraImg from "@/assets/brands/ardex-1000x1000.png";

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
