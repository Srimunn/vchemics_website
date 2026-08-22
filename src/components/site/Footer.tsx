import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0b274c] via-[#071933] to-[#0b274c] pt-20 pb-10 text-white overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#054782]/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#669930]/20 blur-3xl pointer-events-none" />
      <div className="blueprint absolute inset-0 opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Main 3-Column Footer Grid (Navigation Column Removed) */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              to="/"
              className="inline-block transition-transform duration-300 hover:scale-[1.02]"
              aria-label="V Chemics India Solutions — home"
            >
              <div className="inline-flex items-center rounded-xl bg-white px-4 py-2 shadow-md shadow-black/20 border border-white/40">
                <img
                  src="/image.png"
                  alt="V Chemics India Solutions Logo"
                  className="h-10 sm:h-11 w-auto object-contain"
                  width={200}
                  height={44}
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-[#b0c7df] max-w-md">
              Specialist manufacturers of high-performance concrete admixtures, non-shrink grouts, crystalline waterproofing, and structural repair formulations engineered in Chennai for lasting durability.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {[
                { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
                { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
                { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                { Icon: Youtube, label: "YouTube", href: "https://youtube.com" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`V Chemics on ${label}`}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-[#b0c7df] transition-all duration-300 hover:scale-110 hover:border-[#669930] hover:bg-[#669930] hover:text-white shadow-xs"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Core Systems */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#669930]" /> Core Systems
            </h3>
            <ul className="space-y-3 text-sm text-[#b0c7df]">
              {[
                "Concrete Admixtures",
                "Non-Shrink Grouts",
                "Waterproofing Solutions",
                "Micro Concrete",
                "Floor Hardeners & Screeds",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="transition-colors hover:text-[#669930] inline-flex items-center gap-1.5"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Office & Works Hub */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#669930]" /> Office &amp; Works
            </h3>
            <ul className="space-y-3.5 text-sm text-[#b0c7df]">
              <li>
                <a
                  href="https://maps.google.com/?q=Omsakthi+Street,+Kumaran+Nagar+Extn-I,+Padi,+Chennai+-+600050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-white group"
                >
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#669930]" />
                  <span className="leading-relaxed">
                    Omsakthi Street, Kumaran Nagar Extn-I, Padi, Chennai - 600050
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919942354602"
                  className="flex items-center gap-3 transition-colors hover:text-white group"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#669930]" />
                  <span className="font-semibold text-white/90 group-hover:text-[#669930]">+91 99423-54602</span>
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=vchemics.info@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-white group"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#669930]" />
                  <span className="break-all">vchemics.info@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#b0c7df]">
          <p>© {new Date().getFullYear()} V Chemics India Solutions. All Rights Reserved.</p>

          <Link to="/terms" className="transition-colors hover:text-[#669930]">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
