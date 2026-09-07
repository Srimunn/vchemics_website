import { Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";
import { EnquiryForm } from "./EnquiryForm";
import { trackCallClick, trackEmailClick } from "@/lib/analytics";

export function ContactSection() {
  return (
    <section
      id="quote"
      className="scroll-mt-24 bg-background pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16"
    >
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
                    value: "vchemics1989@gmail.com",
                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=vchemics1989@gmail.com",
                    target: "_blank",
                  },
                ].map(({ Icon, label, value, href, target }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={target}
                      rel={target ? "noopener noreferrer" : undefined}
                      onClick={() => {
                        if (label === "Phone") {
                          trackCallClick({ source: "contact_section", phone_number: value });
                        } else if (label === "Email") {
                          trackEmailClick({ source: "contact_section", email: value });
                        }
                      }}
                      className="group flex items-start gap-4 p-2 -ml-2 rounded-xl transition-colors hover:bg-muted/40"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-navy text-white shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:from-brand-blue group-hover:to-brand-green">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-mono text-xs font-bold uppercase tracking-wider text-brand-green">
                          {label}
                        </p>
                        <p
                          className={cn(
                            "mt-0.5 text-sm font-medium text-foreground transition-colors group-hover:text-brand-blue break-words",
                            label === "Phone" && "font-phone",
                          )}
                        >
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
              <EnquiryForm
                mode="compact"
                title="Send an Enquiry"
                subtitle="Reach our Chennai engineering & formulation team directly."
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
