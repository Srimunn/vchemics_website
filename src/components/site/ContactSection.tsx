import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading, btnAccent } from "./ui";

type Fields = { name: string; email: string; phone: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", phone: "", message: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (!/^[\d\s+()-]{8,16}$/.test(f.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (f.message.trim().length < 10) e.message = "Tell us a little more (10+ characters).";
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
    "w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <section id="quote" className="scroll-mt-24 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Get In Touch"
            intro="Tell us about your site, your mix, or your problem — our technical team responds within one working day."
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              {(
                [
                  { k: "name", label: "Name", type: "text", ph: "Your full name" },
                  { k: "email", label: "Email", type: "email", ph: "you@company.com" },
                  { k: "phone", label: "Phone", type: "tel", ph: "+91 90000 00000" },
                ] as const
              ).map((f) => (
                <div key={f.k}>
                  <label htmlFor={f.k} className="eyebrow mb-2 block text-muted-foreground">
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
                    className={cn(inputCls, errors[f.k] && "border-destructive")}
                  />
                  {errors[f.k] && <p className="mt-1.5 text-xs text-destructive">{errors[f.k]}</p>}
                </div>
              ))}

              <div>
                <label htmlFor="message" className="eyebrow mb-2 block text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Project type, quantities, timeline…"
                  value={fields.message}
                  onChange={set("message")}
                  aria-invalid={Boolean(errors.message)}
                  className={cn(inputCls, "resize-y", errors.message && "border-destructive")}
                />
                {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
              </div>

              <button type="submit" className={btnAccent}>
                Send Enquiry
              </button>

              {sent && (
                <p className="flex items-center gap-2 rounded-sm bg-secondary px-4 py-3 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Thanks — your enquiry has been recorded. We'll be in touch shortly.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={120} className="space-y-6">
            <ul className="space-y-4">
              {[
                {
                  Icon: MapPin,
                  label: "Address",
                  value: "Omsakthi Street, Kumaran Nagar Extn-I, Padi, Chennai - 600050",
                  href: undefined,
                },
                { Icon: Phone, label: "Phone", value: "+91 99423-54602", href: "tel:+919942354602" },
                {
                  Icon: Mail,
                  label: "Email",
                  value: "vchemics.info@gmail.com",
                  href: "mailto:vchemics.info@gmail.com",
                },
              ].map(({ Icon, label, value, href }) => (
                <li
                  key={label}
                  className="lift flex gap-4 rounded-sm border border-border bg-secondary/60 p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="eyebrow block text-muted-foreground">{label}</span>
                    {href ? (
                      <a href={href} className="text-sm font-medium transition-colors hover:text-primary">
                        {value}
                      </a>
                    ) : (
                      <span className="block text-sm font-medium">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <div className="overflow-hidden rounded-sm border border-border">
              <iframe
                title="V Chemics India Solutions location in Padi, Chennai"
                src="https://www.google.com/maps?q=Kumaran%20Nagar%20Extension%20Padi%20Chennai%20600050&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block border-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
