import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import {
  ShieldCheck,
  Mail,
  FileText,
  Scale,
  CreditCard,
  Building2,
  RefreshCw,
  AlertTriangle,
  Lock,
  Search,
  BookOpen,
  CheckCircle,
  Clock,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const title = "Terms & Conditions of Service | Vchemics India";
const description =
  "Terms and conditions of service, product warranties, and governing policies for Vchemics India Solutions, leading construction chemicals manufacturer.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.vchemicsindia.com/terms" },
      { property: "og:image", content: "https://www.vchemicsindia.com/image.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.vchemicsindia.com/terms" }],
  }),
  component: TermsPage,
});

const sections = [
  {
    id: "section-1",
    num: "SECTION 1",
    title: "GENERAL CONDITIONS",
    icon: ShieldCheck,
    content:
      "We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to the technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us. The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.",
  },
  {
    id: "section-2",
    num: "SECTION 2",
    title: "ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION",
    icon: CheckCircle,
    content:
      "We are not responsible if the information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk. This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.",
  },
  {
    id: "section-3",
    num: "SECTION 3",
    title: "MODIFICATIONS TO THE SERVICE AND PRICES",
    icon: RefreshCw,
    content:
      "Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third party for any modification, price change, suspension or discontinuance of the Service.",
  },
  {
    id: "section-4",
    num: "SECTION 4",
    title: "PRODUCTS OR SERVICES (if applicable)",
    icon: Sparkles,
    content:
      "Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy. We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate. We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at any time without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited. We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.",
  },
  {
    id: "section-5",
    num: "SECTION 5",
    title: "OPTIONAL TOOLS",
    icon: FileText,
    content:
      "We may provide you with access to third-party tools over which we neither monitor nor have any control nor input. You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations, or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools. Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s). We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.",
  },
  {
    id: "section-6",
    num: "SECTION 6",
    title: "THIRD-PARTY LINKS",
    icon: ArrowUpRight,
    content:
      "Certain content, products and services available via our Service may include materials from third-parties. Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties. We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.",
  },
  {
    id: "section-7",
    num: "SECTION 7",
    title: "USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS",
    icon: BookOpen,
    content:
      "If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments. We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service. You agree that your comments will not violate any right of any third party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third party.",
  },
  {
    id: "section-8",
    num: "SECTION 8",
    title: "PERSONAL INFORMATION",
    icon: Lock,
    content:
      "Your submission of personal information through the store is governed by our Privacy Policy.",
  },
  {
    id: "section-9",
    num: "SECTION 9",
    title: "ERRORS, INACCURACIES AND OMISSIONS",
    icon: AlertTriangle,
    content:
      "Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order). We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.",
  },
  {
    id: "section-10",
    num: "SECTION 10",
    title: "PROHIBITED USES",
    icon: ShieldCheck,
    content:
      "In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.",
  },
  {
    id: "section-11",
    num: "SECTION 11",
    title: "DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY",
    icon: Scale,
    content:
      "We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free. We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable. You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you. You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement. In no case shall Vchemics India Solutions, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.",
  },
  {
    id: "section-12",
    num: "SECTION 12",
    title: "INDEMNIFICATION",
    icon: ShieldCheck,
    content:
      "You agree to indemnify, defend and hold harmless Vchemics India Solutions and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.",
  },
  {
    id: "section-13",
    num: "SECTION 13",
    title: "SEVERABILITY",
    icon: Scale,
    content:
      "In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.",
  },
  {
    id: "section-14",
    num: "SECTION 14",
    title: "TERMINATION",
    icon: AlertTriangle,
    content:
      "The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes. These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site. If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).",
  },
  {
    id: "section-15",
    num: "SECTION 15",
    title: "ENTIRE AGREEMENT",
    icon: BookOpen,
    content:
      "The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision. These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service). Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.",
  },
  {
    id: "section-16",
    num: "SECTION 16",
    title: "GOVERNING LAW",
    icon: Building2,
    content:
      "This Agreement is governed by the laws of Tamilnadu India. You hereby consent to the exclusive jurisdiction and venue of courts in Chennai, Tamilnadu, India, in all disputes arising out of or relating to the use of this site.",
  },
  {
    id: "section-17",
    num: "SECTION 17",
    title: "CHANGES TO TERMS OF SERVICE",
    icon: RefreshCw,
    content:
      "You can review the most current version of the Terms of Service at any time at this page. We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.",
  },
  {
    id: "section-18",
    num: "SECTION 18",
    title: "LINE OF CREDIT",
    icon: CreditCard,
    content:
      "The Line of Credit which is offered can only be availed for purchasing Products displayed on www.vchemicsindiasolutions.com",
  },
  {
    id: "section-19",
    num: "SECTION 19",
    title: "CONTACT INFORMATION",
    icon: Mail,
    content: "Questions about the Terms of Service should be sent to us at vchemics1989@gmail.com",
  },
];

function TermsPage() {
  const [query, setQuery] = useState("");

  const filteredSections = sections.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.num.toLowerCase().includes(query.toLowerCase()) ||
      s.content.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <PageHero
        eyebrow="Terms & Conditions"
        title="Terms & Conditions of Service"
        intro="Governing policies, product warranties, and operating terms for Vchemics India Solutions — specialist manufacturer of high-performance construction chemicals."
      />

      <div className="bg-background py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Header Key Info Card */}
          <Reveal>
            <div className="mb-12 rounded-2xl border border-border/80 bg-card p-5 sm:p-8 lg:p-10 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-6">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    <Building2 className="h-3.5 w-3.5" /> Vchemics India Solutions
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                    Website Operating Agreement
                  </h2>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-3 py-1.5">
                    <Clock className="h-3.5 w-3.5 text-primary" /> Effective: 2026
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-3 py-1.5">
                    <Scale className="h-3.5 w-3.5 text-primary" /> Chennai Jurisdiction
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-left text-sm leading-relaxed text-muted-foreground sm:text-[15px] sm:leading-7">
                <p>
                  This website is operated by{" "}
                  <strong className="font-semibold text-foreground">
                    Vchemics India Solutions
                  </strong>
                  . Throughout the site, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo; and
                  &ldquo;our&rdquo; refer to Vchemics India Solutions. Vchemics India Solutions
                  offers this website, including all information, tools, and services available from
                  this site to you, the user, conditioned upon your acceptance of all terms,
                  conditions, policies, and notices stated here.
                </p>
                <p>
                  By visiting our site and/or purchasing something from us, you engage in our
                  &ldquo;Service&rdquo; and agree to be bound by the following terms and conditions
                  (&ldquo;Terms of Service&rdquo;, &ldquo;Terms&rdquo;), including those additional
                  terms and conditions and policies referenced herein and/or available by hyperlink.
                  These Terms of Service apply to all users of the site, including without
                  limitation users who are browsers, vendors, customers, merchants, and/or
                  contributors of content.
                </p>
                <p>
                  Please read these Terms of Service carefully before accessing or using our
                  website. By accessing or using any part of the site, you agree to be bound by
                  these Terms of Service. If you do not agree to all the terms and conditions of
                  this agreement, then you may not access the website or use any services. If these
                  Terms of Service are considered an offer, acceptance is expressly limited to these
                  Terms of Service.
                </p>
                <p>
                  Any new features or tools that are added to the current store shall also be
                  subject to the Terms of Service. You can review the most current version of the
                  Terms of Service at any time on this page. We reserve the right to update, change,
                  or replace any part of these Terms of Service by posting updates and/or changes to
                  our website. It is your responsibility to check this page periodically for
                  changes. Your continued use of or access to the website following the posting of
                  any changes constitutes acceptance of those changes.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Main Content Layout with Sidebar */}
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-14">
            {/* Sticky Navigation Sidebar on Desktop */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-5 rounded-xl border border-border/80 bg-card p-5 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                    Table of Contents
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono">19 Sections</span>
                </div>

                {/* Quick Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search terms..."
                    className="w-full rounded-md border border-input bg-background pl-8 pr-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>

                <nav className="max-h-[calc(100vh-320px)] space-y-1 overflow-y-auto pr-1 text-xs">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="group flex items-center justify-between rounded-md px-2.5 py-1.5 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                    >
                      <span className="truncate font-medium group-hover:text-primary">
                        {s.num}: {s.title}
                      </span>
                    </a>
                  ))}
                  <a
                    href="#privacy-policy"
                    className="group mt-2 flex items-center gap-2 rounded-md bg-primary/5 px-2.5 py-2 font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Privacy Policy
                  </a>
                </nav>
              </div>
            </aside>

            {/* Sections Content List */}
            <div className="space-y-8">
              {/* Mobile Quick Search */}
              <div className="block lg:hidden">
                <div className="relative">
                  <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Filter sections by keywords (e.g. pricing, credit, liability)..."
                    className="w-full rounded-lg border border-input bg-card pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
              </div>

              {filteredSections.length === 0 ? (
                <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
                  No sections found matching &ldquo;{query}&rdquo;.
                </div>
              ) : (
                filteredSections.map((sec, idx) => {
                  const Icon = sec.icon;
                  return (
                    <Reveal key={sec.id} delay={(idx % 3) * 30}>
                      <article
                        id={sec.id}
                        className="scroll-mt-28 rounded-xl border border-border/80 bg-card p-5 sm:p-8 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/50 pb-4">
                          <div className="flex items-center gap-3">
                            <div className="grid h-8 w-8 place-items-center rounded-md bg-primary/10 text-primary">
                              <Icon className="h-4 w-4" />
                            </div>
                            <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                              {sec.num}
                            </span>
                          </div>
                          <a
                            href={`#${sec.id}`}
                            className="text-xs text-muted-foreground/60 transition-colors hover:text-primary"
                            aria-label={`Link to ${sec.num}`}
                          >
                            #{sec.id}
                          </a>
                        </div>

                        <h3 className="mt-4 font-display text-lg font-bold text-foreground sm:text-xl break-words">
                          {sec.title}
                        </h3>

                        <div className="mt-4 text-left text-sm leading-relaxed text-muted-foreground sm:text-[15px] sm:leading-7 break-words">
                          {sec.id === "section-19" ? (
                            <p>
                              Questions about the Terms of Service should be sent to us at{" "}
                              <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=vchemics1989@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80 transition-colors break-all"
                              >
                                vchemics1989@gmail.com
                              </a>
                            </p>
                          ) : sec.id === "section-18" ? (
                            <p>
                              The Line of Credit which is offered can only be availed for purchasing
                              Products displayed on{" "}
                              <a
                                href="/"
                                className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80 transition-colors break-all"
                              >
                                www.vchemicsindiasolutions.com
                              </a>
                            </p>
                          ) : (
                            <p>{sec.content}</p>
                          )}
                        </div>
                      </article>
                    </Reveal>
                  );
                })
              )}

              {/* Privacy Policy Dedicated Card */}
              <Reveal>
                <article
                  id="privacy-policy"
                  className="scroll-mt-28 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 p-5 sm:p-8 lg:p-10 shadow-md"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <span className="inline-block rounded-sm bg-primary/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-primary">
                          Privacy &amp; Data Protection
                        </span>
                        <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
                          Privacy Policy
                        </h2>
                      </div>

                      <div className="space-y-4 text-left text-sm leading-relaxed text-muted-foreground sm:text-[15px] sm:leading-7">
                        <p>
                          This privacy policy has been compiled to better serve those who are
                          concerned with how their Personal information is being used online.
                          Privacy Policy tells about the information that can be used on its own or
                          with other information to identify, contact, or locate a single person, or
                          to identify an individual in context.
                        </p>
                        <p>
                          Please read our privacy policy carefully to get a clear understanding of
                          how we collect, use, protect, or otherwise handle your Personally
                          Identifiable Information on our website.
                        </p>
                      </div>

                      <div className="pt-2">
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=vchemics1989@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all duration-200 hover:opacity-90 max-w-full break-all"
                        >
                          <Mail className="h-4 w-4 shrink-0" />
                          <span>Contact Privacy Team: vchemics1989@gmail.com</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
