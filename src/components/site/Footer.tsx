import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

const productLinks = [
  "Concrete Admixtures",
  "Non-shrink Grouts",
  "Waterproofing Solutions",
  "Micro Concrete",
  "Epoxy & PU Grouts",
];

export function Footer() {
  return (
    <footer className="blueprint relative bg-graphite-deep pt-20 pb-8">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo onDark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-on-dark-muted">
              Construction chemicals engineered in Chennai for concrete that lasts longer, performs
              harder, and stays watertight.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={`V Chemics on ${label}`}
                  className="grid h-10 w-10 place-items-center rounded-sm border border-on-dark/15 text-on-dark-muted transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="eyebrow text-on-dark">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-on-dark-muted transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-on-dark">Products</h3>
            <ul className="mt-5 space-y-3">
              {productLinks.map((p) => (
                <li key={p}>
                  <Link
                    to="/products"
                    className="text-sm text-on-dark-muted transition-colors hover:text-primary"
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-on-dark">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-on-dark-muted">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  Omsakthi Street, Kumaran Nagar Extn-I,
                  <br />
                  Padi, Chennai - 600050
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+919942354602" className="transition-colors hover:text-primary">
                  +91 99423-54602
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:vchemics.info@gmail.com"
                  className="break-all transition-colors hover:text-primary"
                >
                  vchemics.info@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-on-dark/10 pt-6 text-xs text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 V Chemics India Solutions. All Rights Reserved.</p>
          <a href="#" className="transition-colors hover:text-primary">
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
