import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Our Services" },
  { to: "/contact", label: "Contact Us" },
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

  const overHero = pathname === "/" && !scrolled;
  const solid = !overHero;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "border-b border-on-dark/10 bg-graphite-deep/95 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo onDark />

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                inactiveProps={{ className: "text-on-dark/80" }}
                className="relative font-display text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            hash="quote"
            className="hidden rounded-sm bg-primary px-5 py-2.5 font-display text-sm font-bold uppercase tracking-[0.08em] text-primary-foreground transition-all duration-300 hover:bg-on-dark hover:text-graphite sm:inline-flex"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-sm border border-on-dark/20 text-on-dark transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-on-dark/10 bg-graphite-deep transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0",
        )}
      >
        <ul className="px-5 py-4">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                inactiveProps={{ className: "text-on-dark/85" }}
                className="block border-b border-on-dark/10 py-3 font-display text-sm font-semibold tracking-wide"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              to="/contact"
              hash="quote"
              className="block rounded-sm bg-primary px-5 py-3 text-center font-display text-sm font-bold uppercase tracking-[0.08em] text-primary-foreground"
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
