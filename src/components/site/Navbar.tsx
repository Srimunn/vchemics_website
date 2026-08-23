import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  FlaskConical,
  Droplets,
  Waves,
  Layers,
  Building2,
  Wrench,
  Factory,
  ShieldCheck,
  MapPin,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { allProducts, allSolutions, allLocations } from "./data";

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Mobile accordion state
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  const isHome = pathname === "/";
  const overHero = isHome && !scrolled;

  const toggleMobileSubmenu = (menu: string) => {
    setMobileExpanded((prev) => (prev === menu ? null : menu));
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        overHero
          ? "bg-transparent text-white"
          : "border-b border-border/80 bg-white/95 backdrop-blur-md shadow-sm text-foreground",
      )}
    >
      <nav className="mx-auto flex h-20 sm:h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo onDark={overHero} />

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {/* 1. HOME */}
          <li>
            <Link
              to="/"
              className={cn(
                "group relative flex items-center py-2 font-display text-xs xl:text-sm font-bold tracking-wider transition-colors",
                overHero
                  ? pathname === "/"
                    ? "text-white font-extrabold"
                    : "text-white/80 hover:text-white"
                  : pathname === "/"
                    ? "text-[#054782] font-extrabold"
                    : "text-muted-foreground hover:text-[#054782]",
              )}
            >
              <span>HOME</span>
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-[2px] w-full rounded-full transition-all duration-300 origin-left",
                  pathname === "/"
                    ? "bg-gradient-to-r from-[#054782] to-[#669930] opacity-100 scale-x-100"
                    : "bg-gradient-to-r from-[#054782] to-[#669930] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100",
                )}
              />
            </Link>
          </li>

          {/* 2. ABOUT US */}
          <li>
            <Link
              to="/about"
              className={cn(
                "group relative flex items-center py-2 font-display text-xs xl:text-sm font-bold tracking-wider transition-colors",
                overHero
                  ? pathname.startsWith("/about")
                    ? "text-white font-extrabold"
                    : "text-white/80 hover:text-white"
                  : pathname.startsWith("/about")
                    ? "text-[#054782] font-extrabold"
                    : "text-muted-foreground hover:text-[#054782]",
              )}
            >
              <span>ABOUT US</span>
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-[2px] w-full rounded-full transition-all duration-300 origin-left",
                  pathname.startsWith("/about")
                    ? "bg-gradient-to-r from-[#054782] to-[#669930] opacity-100 scale-x-100"
                    : "bg-gradient-to-r from-[#054782] to-[#669930] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100",
                )}
              />
            </Link>
          </li>

          {/* 3. PRODUCTS (Dropdown with 8 items) */}
          <li className="relative group">
            <Link
              to="/products"
              className={cn(
                "relative flex items-center gap-1 py-2 font-display text-xs xl:text-sm font-bold tracking-wider transition-colors",
                overHero
                  ? pathname.startsWith("/products")
                    ? "text-white font-extrabold"
                    : "text-white/80 hover:text-white"
                  : pathname.startsWith("/products")
                    ? "text-[#054782] font-extrabold"
                    : "text-muted-foreground hover:text-[#054782]",
              )}
            >
              <span>PRODUCTS</span>
              <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-[2px] w-full rounded-full transition-all duration-300 origin-left",
                  pathname.startsWith("/products")
                    ? "bg-gradient-to-r from-[#054782] to-[#669930] opacity-100 scale-x-100"
                    : "bg-gradient-to-r from-[#054782] to-[#669930] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100",
                )}
              />
            </Link>

            {/* Desktop Products Dropdown Menu */}
            <div className="absolute top-full left-0 w-72 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-50 pt-2">
              <div className="rounded-2xl border border-border/80 bg-white/98 dark:bg-card/98 p-2 shadow-2xl backdrop-blur-xl">
                <div className="grid grid-cols-1 gap-0.5">
                  {allProducts.map((p) => {
                    const ProdIcon =
                      p.id === "concrete-admixtures"
                        ? FlaskConical
                        : p.id === "waterproofing-chemicals"
                          ? Droplets
                          : p.id === "pu-injection-grouting"
                            ? Waves
                            : p.id === "non-shrink-grout"
                              ? Layers
                              : p.id === "micro-concrete"
                                ? Building2
                                : p.id === "concrete-repair"
                                  ? Wrench
                                  : p.id === "epoxy-grouting"
                                    ? Factory
                                    : ShieldCheck;
                    return (
                      <Link
                        key={p.id}
                        to="/products"
                        hash={p.id}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold text-foreground/90 transition-all hover:bg-[#054782]/10 hover:text-[#054782] group/item"
                      >
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#054782]/10 text-[#054782] group-hover/item:bg-[#054782] group-hover/item:text-white transition-colors">
                          <ProdIcon className="h-3.5 w-3.5" />
                        </span>
                        <span className="truncate">{p.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </li>

          {/* 4. SOLUTIONS (Dropdown with 5 items) */}
          <li className="relative group">
            <Link
              to="/solutions"
              className={cn(
                "relative flex items-center gap-1 py-2 font-display text-xs xl:text-sm font-bold tracking-wider transition-colors",
                overHero
                  ? pathname.startsWith("/solutions")
                    ? "text-white font-extrabold"
                    : "text-white/80 hover:text-white"
                  : pathname.startsWith("/solutions")
                    ? "text-[#054782] font-extrabold"
                    : "text-muted-foreground hover:text-[#054782]",
              )}
            >
              <span>SOLUTIONS</span>
              <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-[2px] w-full rounded-full transition-all duration-300 origin-left",
                  pathname.startsWith("/solutions")
                    ? "bg-gradient-to-r from-[#054782] to-[#669930] opacity-100 scale-x-100"
                    : "bg-gradient-to-r from-[#054782] to-[#669930] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100",
                )}
              />
            </Link>

            {/* Desktop Solutions Dropdown */}
            <div className="absolute top-full left-0 w-72 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-50 pt-2">
              <div className="rounded-2xl border border-border/80 bg-white/98 dark:bg-card/98 p-2 shadow-2xl backdrop-blur-xl">
                <div className="grid grid-cols-1 gap-0.5">
                  {allSolutions.map((s) => {
                    const SolIcon =
                      s.id === "basement-waterproofing"
                        ? Droplets
                        : s.id === "terrace-waterproofing"
                          ? ShieldCheck
                          : s.id === "concrete-repair"
                            ? Wrench
                            : s.id === "structural-rehabilitation"
                              ? Building2
                              : Factory;
                    return (
                      <Link
                        key={s.id}
                        to="/solutions"
                        hash={s.id}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold text-foreground/90 transition-all hover:bg-[#054782]/10 hover:text-[#054782] group/item"
                      >
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#669930]/10 text-[#669930] group-hover/item:bg-[#669930] group-hover/item:text-white transition-colors">
                          <SolIcon className="h-3.5 w-3.5" />
                        </span>
                        <span className="truncate">{s.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </li>

          {/* 5. PROJECTS */}
          <li>
            <Link
              to="/projects"
              className={cn(
                "group relative flex items-center py-2 font-display text-xs xl:text-sm font-bold tracking-wider transition-colors",
                overHero
                  ? pathname.startsWith("/projects")
                    ? "text-white font-extrabold"
                    : "text-white/80 hover:text-white"
                  : pathname.startsWith("/projects")
                    ? "text-[#054782] font-extrabold"
                    : "text-muted-foreground hover:text-[#054782]",
              )}
            >
              <span>PROJECTS</span>
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-[2px] w-full rounded-full transition-all duration-300 origin-left",
                  pathname.startsWith("/projects")
                    ? "bg-gradient-to-r from-[#054782] to-[#669930] opacity-100 scale-x-100"
                    : "bg-gradient-to-r from-[#054782] to-[#669930] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100",
                )}
              />
            </Link>
          </li>

          {/* 6. BLOG / KNOWLEDGE CENTER */}
          <li>
            <Link
              to="/blog"
              className={cn(
                "group relative flex items-center py-2 font-display text-xs xl:text-sm font-bold tracking-wider transition-colors",
                overHero
                  ? pathname.startsWith("/blog")
                    ? "text-white font-extrabold"
                    : "text-white/80 hover:text-white"
                  : pathname.startsWith("/blog")
                    ? "text-[#054782] font-extrabold"
                    : "text-muted-foreground hover:text-[#054782]",
              )}
            >
              <span>BLOG / KNOWLEDGE</span>
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-[2px] w-full rounded-full transition-all duration-300 origin-left",
                  pathname.startsWith("/blog")
                    ? "bg-gradient-to-r from-[#054782] to-[#669930] opacity-100 scale-x-100"
                    : "bg-gradient-to-r from-[#054782] to-[#669930] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100",
                )}
              />
            </Link>
          </li>



          {/* 8. CONTACT / GET A QUOTE CTA BUTTON */}
          <li>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#054782] to-[#669930] px-4 xl:px-5 py-2.5 font-display text-xs xl:text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-[#054782]/20 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-xl border transition-colors cursor-pointer",
              overHero
                ? "border-white/20 text-white hover:border-[#669930] hover:text-[#669930]"
                : "border-border text-foreground hover:border-[#054782] hover:text-[#054782]",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "overflow-y-auto max-h-[85vh] border-t transition-all duration-300 lg:hidden",
          overHero ? "border-white/10 bg-[#0b274c]" : "border-border bg-white shadow-2xl",
          open ? "block" : "hidden",
        )}
      >
        <div className="px-5 py-6 space-y-3">
          {/* Mobile HOME */}
          <Link
            to="/"
            className="block py-2 font-display text-sm font-bold tracking-wider text-foreground hover:text-[#054782]"
          >
            HOME
          </Link>

          {/* Mobile ABOUT US */}
          <Link
            to="/about"
            className="block py-2 font-display text-sm font-bold tracking-wider text-foreground hover:text-[#054782]"
          >
            ABOUT US
          </Link>

          {/* Mobile PRODUCTS Accordion */}
          <div className="border-t border-border/60 pt-2">
            <button
              onClick={() => toggleMobileSubmenu("products")}
              className="flex w-full items-center justify-between py-2 font-display text-sm font-bold tracking-wider text-foreground cursor-pointer"
            >
              <span>PRODUCTS (8)</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  mobileExpanded === "products" && "rotate-180",
                )}
              />
            </button>
            {mobileExpanded === "products" && (
              <div className="pl-3 py-2 space-y-2 border-l-2 border-[#669930]/40 my-1">
                {allProducts.map((p) => (
                  <Link
                    key={p.id}
                    to="/products"
                    hash={p.id}
                    className="block text-xs font-semibold text-muted-foreground hover:text-[#054782] py-1"
                  >
                    • {p.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile SOLUTIONS Accordion */}
          <div className="border-t border-border/60 pt-2">
            <button
              onClick={() => toggleMobileSubmenu("solutions")}
              className="flex w-full items-center justify-between py-2 font-display text-sm font-bold tracking-wider text-foreground cursor-pointer"
            >
              <span>SOLUTIONS (5)</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  mobileExpanded === "solutions" && "rotate-180",
                )}
              />
            </button>
            {mobileExpanded === "solutions" && (
              <div className="pl-3 py-2 space-y-2 border-l-2 border-[#669930]/40 my-1">
                {allSolutions.map((s) => (
                  <Link
                    key={s.id}
                    to="/solutions"
                    hash={s.id}
                    className="block text-xs font-semibold text-muted-foreground hover:text-[#054782] py-1"
                  >
                    • {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile PROJECTS */}
          <Link
            to="/projects"
            className="block border-t border-border/60 pt-3 font-display text-sm font-bold tracking-wider text-foreground hover:text-[#054782]"
          >
            PROJECTS
          </Link>

          {/* Mobile BLOG / KNOWLEDGE CENTER */}
          <Link
            to="/blog"
            className="block border-t border-border/60 pt-3 font-display text-sm font-bold tracking-wider text-foreground hover:text-[#054782]"
          >
            BLOG / KNOWLEDGE CENTER
          </Link>



          {/* Mobile GET A QUOTE / CONTACT CTA */}
          <div className="pt-4 border-t border-border/80">
            <Link
              to="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#054782] to-[#669930] py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white shadow-md"
            >
              <span>CONTACT / GET A QUOTE</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
