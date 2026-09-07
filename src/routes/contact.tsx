import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Sparkles,
  ArrowRight,
  Truck,
  Building2,
  ShieldCheck,
  FlaskConical,
  MessageCircle,
  Package,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { allLocations } from "@/components/site/data";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { trackWhatsAppClick, trackCallClick, trackEmailClick } from "@/lib/analytics";

const title = "Contact Us & Get Technical Quotes | Vchemics Tamil Nadu";
const description =
  "Request technical quotes, TDS, and trial batches for concrete admixtures, crystalline waterproofing, PU grouts & micro concrete from Vchemics across Chennai, Coimbatore, Erode & Krishnagiri.";

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: title,
  description: description,
  url: "https://www.vchemicsindia.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Vchemics India Solutions",
    telephone: "+91-99423-54602",
    email: "vchemics1989@gmail.com",
    url: "https://www.vchemicsindia.com",
  },
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "contact Vchemics, construction chemicals quote Chennai, buy concrete admixtures Coimbatore, PU injection grouting supplier Erode, Krishnagiri construction chemicals price, micro concrete Tamil Nadu",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.vchemicsindia.com/contact" },
      { property: "og:image", content: "https://www.vchemicsindia.com/image.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.vchemicsindia.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(contactPageSchema),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch / Request Quote"
        title="Direct Factory Supply &amp; Technical Consultation"
        intro="Whether scheduling an on-site concrete mix trial, sizing crystalline waterproofing for basement rafts, or requesting bulk barrel supply — our chemical formulation team responds within 2 hours."
      />

      {/* 2. DEDICATED MASTER CONTACT & LEAD CAPTURE STUDIO */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Left Column: Direct Plant & Hotline Hub */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal>
                <div>
                  <p className="eyebrow mb-3 flex items-center gap-3 text-brand-green">
                    <span className="h-px w-8 bg-brand-green" aria-hidden />
                    Direct Technical Line
                  </p>
                  <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-foreground">
                    Connect With Our Technical Desk
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Have an urgent pour or site problem? Reach our formulation engineers directly by
                    phone or WhatsApp for immediate assistance.
                  </p>
                </div>
              </Reveal>

              {/* Instant WhatsApp & Call Cards */}
              <Reveal delay={80}>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/919942354602?text=Hello%20Vchemics%20Team%2C%20I%20need%20an%20instant%20price%20quote%20for%20construction%20chemicals."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackWhatsAppClick({
                        source: "contact_page_instant_desk",
                        destination: "https://wa.me/919942354602",
                      })
                    }
                    className="group flex items-center justify-between rounded-2xl bg-[#25D366] p-4 text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[#20bd5a]"
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-6 w-6 fill-current" />
                      <div>
                        <p className="font-mono text-xs font-bold uppercase">
                          Instant WhatsApp Desk
                        </p>
                        <p className="text-sm font-bold font-phone">+91 99423-54602</p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href="tel:+919942354602"
                    onClick={() =>
                      trackCallClick({
                        source: "contact_page_helpline",
                        phone_number: "+91 99423-54602",
                      })
                    }
                    className="group flex items-center justify-between rounded-2xl bg-brand-blue p-4 text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[#07599c]"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="h-6 w-6" />
                      <div>
                        <p className="font-mono text-xs font-bold uppercase">Technical Helpline</p>
                        <p className="text-sm font-bold font-phone">+91 99423-54602</p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <ul className="space-y-4 pt-2">
                  {[
                    {
                      Icon: MapPin,
                      label: "Plant & Works Facility",
                      value: "Omsakthi Street, Kumaran Nagar Extn-I, Padi, Chennai - 600050",
                      href: "https://maps.google.com/?q=Omsakthi+Street,+Kumaran+Nagar+Extn-I,+Padi,+Chennai+-+600050",
                      target: "_blank",
                    },
                    {
                      Icon: Mail,
                      label: "Official Support Email",
                      value: "vchemics1989@gmail.com",
                      sub: "Guaranteed Response within 2 Hours",
                      href: "https://mail.google.com/mail/?view=cm&fs=1&to=vchemics1989@gmail.com",
                      target: "_blank",
                    },
                    {
                      Icon: Truck,
                      label: "Tamil Nadu Regional Dispatch",
                      value: "Chennai, Coimbatore, Erode, Krishnagiri",
                      sub: "Same-Day / 24h Direct Site Delivery",
                      href: "/locations",
                    },
                  ].map(({ Icon, label, value, sub, href, target }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={target}
                        rel={target ? "noopener noreferrer" : undefined}
                        onClick={() => {
                          if (label.includes("Email")) {
                            trackEmailClick({ source: "contact_page", email: value });
                          }
                        }}
                        className="group flex items-start gap-4 p-3.5 -ml-3 rounded-2xl transition-colors hover:bg-muted/50"
                      >
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-muted text-brand-blue transition-transform group-hover:scale-105 group-hover:bg-brand-blue group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-brand-green">
                            {label}
                          </p>
                          <p className="mt-0.5 text-sm font-semibold text-foreground group-hover:text-brand-blue transition-colors leading-relaxed">
                            {value}
                          </p>
                          {sub && <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>}
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Right Column: Lead Form Matching PDF Standards */}
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <EnquiryForm mode="full" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
