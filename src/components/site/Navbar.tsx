import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT US" },
  { to: "/products", label: "PRODUCTS" },
  { to: "/services", label: "OUR SERVICES" },
  { to: "/contact", label: "CONTACT US" },
] as const;

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isHome = pathname === "/";
  const overHero = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        overHero
          ? "bg-transparent text-white"
          : "border-b border-border/80 bg-white/95 backdrop-blur-md shadow-sm text-foreground",
      )}
    >
      <nav className="mx-auto flex h-24 sm:h-28 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo onDark={overHero} />

        {/* Clean nav items with blue-to-green active underline */}
        <ul className="hidden items-center gap-8 xl:gap-10 lg:flex">
          {links.map((l) => {
            const isActive = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="group relative flex flex-col py-2 font-display text-sm font-bold tracking-wider transition-colors duration-200"
                >
                  <span
                    className={cn(
                      "transition-colors duration-200",
                      overHero
                        ? isActive
                          ? "text-white font-extrabold"
                          : "text-white/80 group-hover:text-white"
                        : isActive
                          ? "text-foreground font-extrabold"
                          : "text-muted-foreground group-hover:text-[#054782]",
                    )}
                  >
                    {l.label}
                  </span>

                  {/* Active/hover bottom gradient underline indicator */}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-[2px] w-full rounded-full transition-all duration-300 origin-left",
                      isActive
                        ? "bg-gradient-to-r from-[#054782] to-[#669930] opacity-100 scale-x-100"
                        : "bg-gradient-to-r from-[#054782] to-[#669930] opacity-0 scale-x-0 group-hover:opacity-75 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu trigger */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "grid h-11 w-11 place-items-center rounded-sm border transition-colors",
              overHero
                ? "border-white/20 text-white hover:border-[#669930] hover:text-[#669930]"
                : "border-border text-foreground hover:border-primary hover:text-primary",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={cn(
          "overflow-hidden border-t transition-[max-height] duration-300 lg:hidden",
          overHero
            ? "border-white/10 bg-[#0b274c]"
            : "border-border bg-white shadow-lg",
          open ? "max-h-96" : "max-h-0 border-t-0",
        )}
      >
        <ul className="px-5 py-4">
          {links.map((l) => {
            const isActive = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={cn(
                    "block border-b py-3.5 font-display text-sm font-bold tracking-wider",
                    overHero ? "border-white/10" : "border-border/60",
                  )}
                >
                  <span
                    className={cn(
                      "transition-colors",
                      overHero
                        ? isActive
                          ? "text-white font-extrabold"
                          : "text-white/80"
                        : isActive
                          ? "text-foreground font-extrabold"
                          : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    {l.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
