import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Mail, Lock, Eye, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

const title = "Privacy Policy & Data Protection | Vchemics India";
const description =
  "Read the Privacy Policy for Vchemics India Solutions. Learn how we handle customer inquiries, technical quotes, orders, and personal information.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.vchemicsindia.com/privacy" },
      { property: "og:image", content: "https://www.vchemicsindia.com/image.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.vchemicsindia.com/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Data Protection & Trust"
        title="Privacy Policy"
        intro="How Vchemics India Solutions collects, uses, and safeguards your technical inquiries, project requirements, and personal information."
      />

      <div className="bg-background py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8 sm:space-y-10">
            {/* Overview Card */}
            <Reveal>
              <div className="rounded-3xl border border-border/80 bg-card p-5 sm:p-8 lg:p-10 shadow-sm space-y-6">
                <div className="flex items-center gap-3 text-brand-green">
                  <ShieldCheck className="h-6 w-6" />
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                    Information We Collect
                  </h2>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  When you submit a quote request, contact form inquiry, or reach out for technical
                  data sheets (TDS) on our website, we collect information such as your name, email
                  address, phone number, company name, delivery location, and specific chemical
                  material requirements.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 pt-2">
                  <div className="flex items-start gap-3 rounded-2xl bg-concrete/60 p-4 border border-border/60">
                    <CheckCircle2 className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-sm text-foreground">
                        Technical Quotations
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Used solely to prepare pricing, dosage recommendations, and trial batches.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl bg-concrete/60 p-4 border border-border/60">
                    <CheckCircle2 className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-sm text-foreground">Direct Dispatch</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Contact details enable our logistics team to coordinate site deliveries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* How We Protect Data */}
            <Reveal delay={50}>
              <div className="rounded-3xl border border-border/80 bg-card p-5 sm:p-8 lg:p-10 shadow-sm space-y-6">
                <div className="flex items-center gap-3 text-brand-blue">
                  <Lock className="h-6 w-6" />
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                    Data Security & Confidentiality
                  </h2>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  We implement robust technical and administrative security measures to protect your
                  personal and project data. We do not sell, trade, or rent your personally
                  identifiable information to third-party marketing networks.
                </p>
                <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
                    <span>
                      All web communications and form submissions are transmitted over secure SSL
                      encryption.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
                    <span>
                      Project mix designs and proprietary contractor specifications remain strictly
                      confidential.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
                    <span>
                      Payment transactions (where applicable) are processed through certified,
                      encrypted banking gateways.
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Contact for Privacy Questions */}
            <Reveal delay={100}>
              <div className="rounded-3xl border-2 border-brand-green/30 bg-gradient-to-br from-card via-card to-brand-green/5 p-5 sm:p-8 lg:p-10 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    Have Questions About Your Data?
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Reach out to our privacy and compliance officer for data access or correction
                    requests.
                  </p>
                </div>
                <a
                  href="mailto:vchemics1989@gmail.com"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-brand-blue/90 shrink-0 shadow-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email Privacy Officer</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}
