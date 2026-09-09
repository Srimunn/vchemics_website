import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { allProducts, allSolutions, allLocations } from "./data";
import { trackCallClick, trackEmailClick } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0b274c] via-[#071933] to-[#0b274c] pt-16 sm:pt-20 pb-10 text-white overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-brand-blue/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-brand-green/20 blur-3xl pointer-events-none" />
      <div className="blueprint absolute inset-0 opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Main 4-Column Structured Footer Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-14 border-b border-white/10 items-start">
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-5 pr-0 lg:pr-6">
            <Link
              to="/"
              className="block w-full max-w-sm transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Vchemics India Solutions — home"
            >
              <div className="flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3.5 sm:py-4 shadow-md shadow-black/20 border border-white/40">
                <img
                  src="/image.png"
                  alt="Vchemics India Solutions Logo"
                  className="h-12 sm:h-14 w-auto max-w-[280px] object-contain"
                  width={280}
                  height={56}
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-[#b0c7df] max-w-sm text-left">
              Specialist manufacturers of high-performance concrete admixtures, non-shrink precision
              grouts, crystalline waterproofing, and structural repair formulations engineered in
              Chennai for lasting durability.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {[
                {
                  Icon: Facebook,
                  label: "Facebook",
                  href: "https://www.facebook.com/profile.php?id=61593645627034",
                },
                {
                  Icon: Twitter,
                  label: "X (Twitter)",
                  href: "https://x.com/vchemics_india",
                },
                {
                  Icon: Instagram,
                  label: "Instagram",
                  href: "https://www.instagram.com/vchemics_india/",
                },
                { Icon: Youtube, label: "YouTube", href: "https://youtube.com" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Vchemics on ${label}`}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/5 text-[#b0c7df] transition-all duration-300 hover:scale-110 hover:border-brand-green hover:bg-brand-green hover:text-white shadow-xs"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Products (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" /> Products
            </h3>
            <ul className="space-y-2 text-xs text-[#b0c7df]">
              {allProducts.map((p) => (
                <li key={p.id}>
                  <Link
                    to="/products/$slug"
                    params={{ slug: p.id }}
                    className="transition-colors hover:text-brand-green inline-flex items-center gap-1.5"
                  >
                    <span className="text-white/30">•</span> {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Solutions (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" /> Solutions
            </h3>
            <ul className="space-y-2 text-xs text-[#b0c7df]">
              {allSolutions.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/solutions/$slug"
                    params={{ slug: s.id }}
                    className="transition-colors hover:text-brand-green inline-flex items-center gap-1.5"
                  >
                    <span className="text-white/30">•</span>{" "}
                    {s.id === "painting" ? "Painting" : s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Our Offices & Contact Hub (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" /> Our Offices
            </h3>
            <ul className="space-y-3.5 text-xs text-[#b0c7df]">
              <li>
                <a
                  href="https://maps.google.com/?q=Omsakthi+Street,+Kumaran+Nagar+Extn-I,+Padi,+Chennai+-+600050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 transition-colors hover:text-white group"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  <span className="leading-relaxed">
                    Omsakthi Street, Kumaran Nagar Extn-I, Padi, Chennai - 600050
                  </span>
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://maps.google.com/?q=302/B9+Indian+Nagar+3rd+Street+46+Pudhur+Modakurichi+Erode+638002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 transition-colors hover:text-white group"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  <span className="leading-relaxed">
                    302/B9, Indian Nagar, 3rd Street, 46 Pudhur, Modakurichi, Erode - 638002
                  </span>
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://maps.google.com/?q=RSF+No.+121/16+Murugar+Kovil+Boganapalli+Krishnagiri+635001+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 transition-colors hover:text-white group"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  <span className="leading-relaxed">
                    RSF No.: 121/16, Murugar Kovil, Boganapalli, Krishnagiri - 635001
                  </span>
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="tel:+919942354602"
                  onClick={() =>
                    trackCallClick({ source: "footer", phone_number: "+91 99423-54602" })
                  }
                  className="flex items-center gap-2.5 transition-colors hover:text-white group"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-green" />
                  <span className="font-semibold text-white/90 group-hover:text-brand-green font-phone">
                    +91 99423-54602
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:vchemics1989@gmail.com"
                  onClick={() =>
                    trackEmailClick({ source: "footer", email: "vchemics1989@gmail.com" })
                  }
                  className="flex items-center gap-2.5 transition-colors hover:text-white group"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-green" />
                  <span className="break-all">vchemics1989@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 5 REGIONAL LOCATIONS - CLEAN BUTTONS ONLY */}
        <div className="my-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {allLocations.map((loc) => (
            <Link
              key={loc.id}
              to="/locations"
              hash={loc.id}
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 font-display text-xs font-semibold text-white/90 transition-all duration-300 hover:border-brand-green hover:bg-brand-green hover:text-white hover:scale-105"
            >
              {loc.city}
            </Link>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#b0c7df]">
          <p>© {new Date().getFullYear()} Vchemics India Solutions. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <Link to="/terms" className="transition-colors hover:text-brand-green">
              Terms &amp; Conditions
            </Link>
            <Link to="/privacy" className="transition-colors hover:text-brand-green">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
