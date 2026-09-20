import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { trackGetQuoteClick } from "@/lib/analytics";

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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const overHero = isHome && !scrolled;

  const navLinks = [
    { label: "HOME", to: "/", exact: true },
    { label: "ABOUT US", to: "/about" },
    { label: "PRODUCTS", to: "/products" },
    { label: "SOLUTIONS", to: "/solutions" },
    { label: "BRANCHES", to: "/locations" },
    { label: "PROJECTS", to: "/projects" },
    { label: "BLOG / KNOWLEDGE", to: "/blog" },
  ];

  const isLinkActive = (to: string, exact?: boolean) => {
    if (exact) return pathname === "/";
    return pathname.startsWith(to);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out",
        overHero
          ? "bg-transparent text-white"
          : "border-b border-border/80 bg-white/95 backdrop-blur-md shadow-sm text-foreground",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8 transition-all duration-300 ease-in-out",
          scrolled ? "h-14 sm:h-16" : "h-20 sm:h-24",
        )}
      >
        <Logo onDark={overHero} compact={scrolled} />

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-4 xl:gap-6 lg:flex">
          {navLinks.map(({ label, to, exact }) => {
            const active = isLinkActive(to, exact);
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={cn(
                    "group relative flex items-center font-display font-bold tracking-wider transition-all duration-300",
                    scrolled ? "py-1 text-xs xl:text-[0.82rem]" : "py-2 text-xs xl:text-sm",
                    overHero
                      ? active
                        ? "text-white font-extrabold"
                        : "text-white/80 hover:text-white"
                      : active
                        ? "text-brand-blue font-extrabold"
                        : "text-muted-foreground hover:text-brand-blue",
                  )}
                >
                  <span>{label}</span>
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-[2px] w-full rounded-full transition-all duration-300 origin-left",
                      active
                        ? "bg-gradient-to-r from-brand-blue to-brand-green opacity-100 scale-x-100"
                        : "bg-gradient-to-r from-brand-blue to-brand-green opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              </li>
            );
          })}

          {/* GET A QUOTE CTA BUTTON */}
          <li>
            <Link
              to="/contact"
              onClick={() =>
                trackGetQuoteClick({
                  button_location: "navbar_desktop",
                  label: "GET A QUOTE",
                  source: pathname,
                })
              }
              className={cn(
                "inline-flex items-center gap-2 rounded-xl btn-brand-gradient font-display font-bold uppercase tracking-wider text-white shadow-md shadow-brand-blue/20 transition-all duration-300 hover:scale-105 hover:shadow-lg",
                scrolled ? "px-3.5 xl:px-4 py-2 text-xs" : "px-4 xl:px-5 py-2.5 text-xs xl:text-sm",
              )}
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
              "grid place-items-center rounded-xl border transition-all duration-300 cursor-pointer",
              scrolled ? "h-9 w-9" : "h-10 w-10",
              overHero
                ? "border-white/20 text-white hover:border-brand-green hover:text-brand-green"
                : "border-border text-foreground hover:border-brand-blue hover:text-brand-blue",
            )}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "overflow-y-auto max-h-[85vh] border-t border-border/80 bg-card/98 backdrop-blur-xl shadow-2xl transition-all duration-300 lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="px-5 py-6 space-y-2">
          {navLinks.map(({ label, to, exact }, idx) => {
            const active = isLinkActive(to, exact);
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded-xl px-4 py-3 font-display text-sm font-bold tracking-wider transition-all",
                  active
                    ? "bg-brand-blue/10 text-brand-blue"
                    : "text-foreground hover:bg-muted hover:text-brand-blue",
                  idx > 0 && "border-t border-border/40 mt-1",
                )}
              >
                <span>{label}</span>
                {active && <span className="h-2 w-2 rounded-full bg-brand-green" />}
              </Link>
            );
          })}

          {/* Mobile GET A QUOTE / CONTACT CTA */}
          <div className="pt-4 border-t border-border/80">
            <Link
              to="/contact"
              onClick={() => {
                setOpen(false);
                trackGetQuoteClick({
                  button_location: "navbar_mobile",
                  label: "CONTACT / GET A QUOTE",
                  source: pathname,
                });
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl btn-brand-gradient py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-brand-blue/25"
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
