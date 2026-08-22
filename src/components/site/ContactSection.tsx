import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";

type Fields = { name: string; email: string; phone: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", phone: "", message: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim()))
    e.email = "Please enter a valid email address.";
  if (!/^[\d\s+()-]{8,16}$/.test(f.phone.trim()))
    e.phone = "Please enter a valid phone number.";
  if (f.message.trim().length < 10)
    e.message = "Tell us a little more (10+ characters).";
  return e;
}

export function ContactSection() {
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
    "w-full rounded-xl border border-border/80 bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-[#054782] focus:ring-3 focus:ring-[#054782]/15";

  return (
    <section id="quote" className="scroll-mt-24 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="Get In Touch"
                intro="Tell us about your site, your mix, or your problem — our technical team responds within one working day."
              />
            </Reveal>

            <Reveal delay={100}>
              <ul className="space-y-5 pt-2">
                {[
                  {
                    Icon: MapPin,
                    label: "Address",
                    value: "Omsakthi Street, Kumaran Nagar Extn-I, Padi, Chennai - 600050",
                    href: "https://maps.google.com/?q=Omsakthi+Street,+Kumaran+Nagar+Extn-I,+Padi,+Chennai+-+600050",
                    target: "_blank",
                  },
                  {
                    Icon: Phone,
                    label: "Phone",
                    value: "+91 99423-54602",
                    href: "tel:+919942354602",
                  },
                  {
                    Icon: Mail,
                    label: "Email",
                    value: "vchemics.info@gmail.com",
                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=vchemics.info@gmail.com",
                    target: "_blank",
                  },
                ].map(({ Icon, label, value, href, target }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={target}
                      rel={target ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-4 p-2 -ml-2 rounded-xl transition-colors hover:bg-muted/40"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#054782] to-[#0b274c] text-white shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:from-[#054782] group-hover:to-[#669930]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#669930]">
                          {label}
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-foreground transition-colors group-hover:text-[#054782] break-words">
                          {value}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right Column: Clean Form Card */}
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="rounded-3xl border border-border/80 bg-card p-8 sm:p-10 shadow-sm relative overflow-hidden">
                {/* Top Accent Gradient Border */}
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#054782] via-[#669930] to-[#054782]" />

                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  {(
                    [
                      { k: "name", label: "Name", type: "text", ph: "Your full name" },
                      { k: "email", label: "Email", type: "email", ph: "you@company.com" },
                      { k: "phone", label: "Phone", type: "tel", ph: "+91 90000 00000" },
                    ] as const
                  ).map((f) => (
                    <div key={f.k}>
                      <label htmlFor={f.k} className="mb-2 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {f.label}
                      </label>
                      <input
                        id={f.k}
                        name={f.k}
                        type={f.type}
                        placeholder={f.ph}
                        value={fields[f.k]}
                        onChange={set(f.k)}
                        aria-invalid={Boolean(errors[f.k])}
                        className={cn(inputCls, errors[f.k] && "border-destructive focus:ring-destructive/15")}
                      />
                      {errors[f.k] && (
                        <p className="mt-1.5 text-xs text-destructive">{errors[f.k]}</p>
                      )}
                    </div>
                  ))}

                  <div>
                    <label htmlFor="message" className="mb-2 block font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Project type, quantities, timeline…"
                      value={fields.message}
                      onChange={set("message")}
                      aria-invalid={Boolean(errors.message)}
                      className={cn(inputCls, "resize-y", errors.message && "border-destructive focus:ring-destructive/15")}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#054782] to-[#669930] py-3.5 px-8 font-display text-sm font-bold uppercase tracking-[0.1em] text-white shadow-md shadow-[#054782]/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                    >
                      Send Enquiry <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  {sent && (
                    <div className="mt-4 flex items-center gap-3 rounded-xl border border-[#669930]/30 bg-[#669930]/10 p-4 text-sm text-foreground">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#669930]" />
                      <p>
                        <strong>Thank you!</strong> Your enquiry has been recorded. We'll be in touch shortly.
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
  );
}
