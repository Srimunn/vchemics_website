import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
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
import { allProducts, allLocations } from "@/components/site/data";

const title = "Contact & Get Technical Quote | V Chemics India Solutions Chennai";
const description =
  "Request instant quotations, technical data sheets (TDS), and sample trial batches for concrete admixtures, crystalline waterproofing, PU grouting & micro concrete. Phone: +91 99423-54602.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "contact V Chemics, construction chemicals quote Chennai, buy concrete admixtures Chennai, PU injection grouting supplier, micro concrete Chennai price" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

type Fields = {
  name: string;
  company: string;
  phone: string;
  email: string;
  requirement: string;
  quantity: string;
  location: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  company: "",
  phone: "",
  email: "",
  requirement: "Concrete Admixtures",
  quantity: "",
  location: "Chennai",
  message: "",
};

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[\d\s+()-]{8,16}$/.test(f.phone.trim()))
    e.phone = "Please enter a valid 10-digit mobile number.";
  if (f.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim()))
    e.email = "Please enter a valid email address.";
  if (!f.location.trim()) e.location = "Please provide project site location.";
  return e;
}

function ContactPage() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Fields) => (ev: { target: { value: string } }) => {
    setFields((f) => ({ ...f, [k]: ev.target.value }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate(fields);
    setErrors(e);
    if (Object.keys(e).length) return;
    setSent(true);
    setFields(empty);
  };

  const inputCls =
    "w-full rounded-xl border border-border/80 bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-[#054782] focus:ring-2 focus:ring-[#054782]/15";

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
                  <p className="eyebrow mb-3 flex items-center gap-3 text-[#669930]">
                    <span className="h-px w-8 bg-[#669930]" aria-hidden />
                    Direct Technical Line
                  </p>
                  <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-foreground">
                    Connect With Our Technical Desk
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Have an urgent pour or site problem? Reach our formulation engineers directly by phone or WhatsApp for immediate assistance.
                  </p>
                </div>
              </Reveal>

              {/* Instant WhatsApp & Call Cards */}
              <Reveal delay={80}>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/919942354602?text=Hello%20V%20Chemics%20Team%2C%20I%20need%20an%20instant%20price%20quote%20for%20construction%20chemicals."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl bg-[#25D366] p-4 text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[#20bd5a]"
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-6 w-6 fill-current" />
                      <div>
                        <p className="font-mono text-xs font-bold uppercase">Instant WhatsApp Desk</p>
                        <p className="text-sm font-bold">+91 99423-54602</p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href="tel:+919942354602"
                    className="group flex items-center justify-between rounded-2xl bg-[#054782] p-4 text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[#07599c]"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="h-6 w-6" />
                      <div>
                        <p className="font-mono text-xs font-bold uppercase">Technical Helpline</p>
                        <p className="text-sm font-bold">+91 99423-54602</p>
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
                      value: "vchemics.info@gmail.com",
                      sub: "Guaranteed Response within 2 Hours",
                      href: "https://mail.google.com/mail/?view=cm&fs=1&to=vchemics.info@gmail.com",
                      target: "_blank",
                    },
                    {
                      Icon: Truck,
                      label: "Tamil Nadu Regional Dispatch",
                      value: "Chennai, Coimbatore, Erode, Salem, Karur",
                      sub: "Same-Day / 24h Direct Site Delivery",
                      href: "/locations",
                    },
                  ].map(({ Icon, label, value, sub, href, target }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={target}
                        rel={target ? "noopener noreferrer" : undefined}
                        className="group flex items-start gap-4 p-3.5 -ml-3 rounded-2xl transition-colors hover:bg-muted/50"
                      >
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-muted text-[#054782] transition-transform group-hover:scale-105 group-hover:bg-[#054782] group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-[#669930]">
                            {label}
                          </p>
                          <p className="mt-0.5 text-sm font-semibold text-foreground group-hover:text-[#054782] transition-colors leading-relaxed">
                            {value}
                          </p>
                          {sub && (
                            <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
                          )}
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
                <div className="rounded-3xl border border-border/80 bg-card p-7 sm:p-10 shadow-sm relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#054782] via-[#669930] to-[#054782]" />

                  <div className="mb-6">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Request Technical Quotation / Trial Batch
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Fill in your project requirements for custom dosage calibration and factory-direct pricing.
                    </p>
                  </div>

                  <form onSubmit={onSubmit} noValidate className="space-y-4">
                    {/* Row 1: Name & Company */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Full Name <span className="text-[#669930]">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="e.g. Rajesh Kumar"
                          value={fields.name}
                          onChange={set("name")}
                          className={cn(inputCls, errors.name && "border-destructive focus:ring-destructive/15")}
                        />
                        {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="company" className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Company / Builder Name
                        </label>
                        <input
                          id="company"
                          type="text"
                          placeholder="e.g. Apex Infra Ltd"
                          value={fields.company}
                          onChange={set("company")}
                          className={inputCls}
                        />
                      </div>
                    </div>

                    {/* Row 2: Mobile & Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Mobile Number <span className="text-[#669930]">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="+91 99423 54602"
                          value={fields.phone}
                          onChange={set("phone")}
                          className={cn(inputCls, errors.phone && "border-destructive focus:ring-destructive/15")}
                        />
                        {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          value={fields.email}
                          onChange={set("email")}
                          className={cn(inputCls, errors.email && "border-destructive focus:ring-destructive/15")}
                        />
                        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Row 3: Product Requirement & Estimated Quantity */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="requirement" className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Product Category <span className="text-[#669930]">*</span>
                        </label>
                        <select
                          id="requirement"
                          value={fields.requirement}
                          onChange={set("requirement")}
                          className={inputCls}
                        >
                          {allProducts.map((p) => (
                            <option key={p.id} value={p.title}>
                              {p.title}
                            </option>
                          ))}
                          <option value="Basement Waterproofing Solution">Basement Waterproofing Solution</option>
                          <option value="Terrace Waterproofing Solution">Terrace Waterproofing Solution</option>
                          <option value="Structural Rehabilitation">Structural Rehabilitation</option>
                          <option value="Industrial Flooring">Industrial Flooring</option>
                          <option value="Other Technical Query">Other Technical Query</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="quantity" className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Quantity / Volume
                        </label>
                        <input
                          id="quantity"
                          type="text"
                          placeholder="e.g. 500 Litres / 50 Bags"
                          value={fields.quantity}
                          onChange={set("quantity")}
                          className={inputCls}
                        />
                      </div>
                    </div>

                    {/* Row 4: Project Location */}
                    <div>
                      <label htmlFor="location" className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Project Site Location <span className="text-[#669930]">*</span>
                      </label>
                      <input
                        id="location"
                        type="text"
                        placeholder="e.g. Guindy / Sriperumbudur / Coimbatore Site"
                        value={fields.location}
                        onChange={set("location")}
                        className={cn(inputCls, errors.location && "border-destructive focus:ring-destructive/15")}
                      />
                      {errors.location && <p className="mt-1 text-xs text-destructive">{errors.location}</p>}
                    </div>

                    {/* Row 5: Message */}
                    <div>
                      <label htmlFor="message" className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Project Details / Mix Specifications
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        placeholder="Target grade (M40, M60), aggregate type, transit duration, or specific site challenge…"
                        value={fields.message}
                        onChange={set("message")}
                        className={cn(inputCls, "resize-y")}
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#054782] to-[#669930] py-4 px-9 font-display text-sm font-bold uppercase tracking-[0.1em] text-white shadow-md shadow-[#054782]/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                      >
                        Submit Technical Enquiry <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>

                    {sent && (
                      <div className="mt-4 flex items-center gap-3 rounded-xl border border-[#669930]/30 bg-[#669930]/10 p-4 text-sm text-foreground">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#669930]" />
                        <p>
                          <strong>Enquiry Recorded!</strong> Our chemical formulation specialist will contact you with product TDS and pricing within 2 hours.
                        </p>
                      </div>
                    )}
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
