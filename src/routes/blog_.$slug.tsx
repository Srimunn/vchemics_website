import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState, useEffect, useMemo, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  List,
  ZoomIn,
  Maximize2,
  X,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PlaceholderBadge } from "@/components/site/PlaceholderBadge";
import { getBlogPostBySlug, isGenericBlogImage } from "@/lib/blog";
import { trackGetQuoteClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const blogMetaTitles: Record<string, string> = {
  "pu-injection-grouting": "PU Injection Grouting: Process, Uses & Types",
  "protective-coatings-for-buildings": "Protective Coatings: Types, Benefits & Uses",
  "column-jacketing-micro-concrete-standards": "Column Jacketing & Section Enlargement | Vchemics",
  "crystalline-vs-membrane-waterproofing": "Crystalline vs Elastomeric Waterproofing | Vchemics",
  "machine-foundation-epoxy-grouting-standards":
    "Precision Grouting: ASTM C1107 vs Epoxy | Vchemics",
  "pu-injection-active-leak-sealing": "PU Injection Grouting for Active Leak Sealing | Vchemics",
};

const blogMetaDescriptions: Record<string, string> = {
  "pu-injection-grouting":
    "Learn how PU injection grouting seals concrete leaks and cracks, its types, process, applications, limitations and selection factors.",
  "preventing-cold-joints-tropical-concrete":
    "Learn how PCE retarding superplasticisers extend open slump retention up to 3 hours in tropical heat without compromising early 3-day compressive strength.",
  "crystalline-vs-membrane-waterproofing":
    "Engineering comparison of catalytic crystalline waterproofing and polyurethane elastomeric membranes for subterranean and exposed concrete structures.",
  "machine-foundation-epoxy-grouting-standards":
    "Engineering specifications for heavy machine plinths and turbines: comparing ASTM C1107 non-shrink cementitious grouts with 3-part chemical epoxy grouts.",
  "pu-injection-active-leak-sealing":
    "Step-by-step guide to 45-degree mechanical packer installation and hydro-active PU injection grouting at 50-250 bar to permanently arrest water leaks.",
  "column-jacketing-micro-concrete-standards":
    "Best practices for RCC structural column encasement, rebar passivating primers, shear dowel anchorage, and self-compacting micro concrete pouring.",
  "protective-coatings-for-buildings":
    "Learn about protective coatings, their types, benefits, applications, and selection for concrete, steel, roofs, and industrial surfaces.",
};

export const Route = createFileRoute("/blog_/$slug")({
  loader: ({ params }) => {
    const post = getBlogPostBySlug(params.slug);
    if (!post) {
      throw notFound();
    }
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.post) return {};
    const { post } = loaderData;
    const title =
      blogMetaTitles[post.id] || blogMetaTitles[post.slug] || `${post.title} | Vchemics`;
    const description =
      blogMetaDescriptions[post.id] || blogMetaDescriptions[post.slug] || post.excerpt;
    const url = `https://www.vchemicsindia.com/blog/${post.slug}`;
    const ogImage =
      typeof post.image === "string" && post.image.startsWith("http")
        ? post.image
        : "https://www.vchemicsindia.com/image.png";

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: description,
      image: ogImage,
      datePublished: "2025-01-01",
      author: {
        "@type": "Organization",
        name: post.author,
      },
      publisher: {
        "@type": "Organization",
        name: "Vchemics India Solutions",
        url: "https://www.vchemicsindia.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.vchemicsindia.com/image.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.vchemicsindia.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.vchemicsindia.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: url,
        },
      ],
    };

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: ogImage },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(articleSchema),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(breadcrumbSchema),
        },
      ],
    };
  },
  component: BlogPostDetailPage,
});

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function extractTextFromChildren(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join("");
  }
  if (children && typeof children === "object" && "props" in children) {
    const element = children as { props?: { children?: ReactNode } };
    return extractTextFromChildren(element.props?.children);
  }
  return "";
}

const productTagMap: Record<string, string> = {
  "concrete admixtures": "/products#concrete-admixtures",
  waterproofing: "/products#waterproofing-chemicals",
  "waterproofing chemicals": "/products#waterproofing-chemicals",
  "pu injection": "/products#pu-injection-grouting",
  "pu injection grouting": "/products#pu-injection-grouting",
  "non-shrink grout": "/products#non-shrink-grout",
  "non shrink grout": "/products#non-shrink-grout",
  "micro concrete": "/products#micro-concrete",
  "concrete repair": "/products#concrete-repair",
  "epoxy grouting": "/products#epoxy-grouting",
  "protective coatings": "/products#protective-coatings",
};

function getTagLink(tag: string): string {
  const normalized = tag.toLowerCase().trim();
  if (productTagMap[normalized]) {
    return productTagMap[normalized];
  }
  return `/blog?category=${encodeURIComponent(tag)}`;
}

function BlogPostDetailPage() {
  const { post } = Route.useLoaderData();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Close popup modal with Escape key and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsImageModalOpen(false);
      }
    };
    if (isImageModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isImageModalOpen]);

  // Only long articles need a table of contents.
  const tocItems = useMemo(() => {
    const h2Regex = /^##\s+(.+)$/gm;
    const matches: { text: string; id: string }[] = [];
    let match;
    while ((match = h2Regex.exec(post.content)) !== null) {
      const matchedText = match[1];
      if (!matchedText) continue;
      const text = matchedText.trim();
      matches.push({
        text,
        id: slugify(text),
      });
    }
    const majorSections = matches.filter(
      ({ text }) => !/^(frequently asked questions|faqs|conclusion)$/i.test(text),
    );
    return majorSections.length >= 5 ? majorSections.slice(0, 8) : [];
  }, [post.content]);

  const markdownComponents = useMemo(
    () => ({
      h2: ({ children, ...props }: { children?: ReactNode }) => {
        const text = extractTextFromChildren(children);
        const id = slugify(text);
        return (
          <h2
            id={id}
            className="scroll-mt-28 font-display text-2xl sm:text-3xl font-bold text-foreground mt-10 mb-4 pb-2 border-b border-border/60"
            {...props}
          >
            {children}
          </h2>
        );
      },
      h3: ({ children, ...props }: { children?: ReactNode }) => {
        const text = extractTextFromChildren(children);
        const id = slugify(text);
        return (
          <h3
            id={id}
            className="scroll-mt-28 font-display text-xl sm:text-2xl font-bold text-foreground mt-8 mb-3"
            {...props}
          >
            {children}
          </h3>
        );
      },
      table: ({ children, ...props }: { children?: ReactNode }) => (
        <div className="my-8 overflow-x-auto rounded-2xl border border-border/80 bg-card shadow-xs">
          <table className="w-full text-left text-sm font-sans" {...props}>
            {children}
          </table>
        </div>
      ),
      thead: ({ children, ...props }: { children?: ReactNode }) => (
        <thead
          className="bg-muted/70 border-b border-border/80 font-mono text-xs font-bold uppercase tracking-wider text-foreground"
          {...props}
        >
          {children}
        </thead>
      ),
      th: ({ children, ...props }: { children?: ReactNode }) => (
        <th className="px-5 py-3.5 text-foreground font-bold" {...props}>
          {children}
        </th>
      ),
      td: ({ children, ...props }: { children?: ReactNode }) => (
        <td
          className="px-5 py-3.5 border-b border-border/40 text-foreground/90 font-medium"
          {...props}
        >
          {children}
        </td>
      ),
      tr: ({ children, ...props }: { children?: ReactNode }) => (
        <tr className="hover:bg-muted/30 transition-colors even:bg-muted/15" {...props}>
          {children}
        </tr>
      ),
      a: ({ children, className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a
          className={cn(
            "font-semibold text-brand-green underline underline-offset-4 decoration-brand-green transition-colors hover:text-brand-navy hover:decoration-brand-navy",
            className,
          )}
          {...props}
        >
          {children}
        </a>
      ),
    }),
    [],
  );

  return (
    <div className="min-h-screen bg-background py-12 lg:py-20">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        {/* Navigation Breadcrumb & Back Link */}
        <Reveal>
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/60">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-green transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to all articles</span>
            </Link>

            <nav
              aria-label="Breadcrumb"
              className="flex items-center flex-wrap gap-1.5 text-xs text-muted-foreground"
            >
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
              <Link to="/blog" className="hover:text-foreground transition-colors">
                Blog
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
              <span className="text-brand-green font-semibold truncate max-w-[200px] sm:max-w-none">
                {post.title}
              </span>
            </nav>
          </div>
        </Reveal>

        {/* Article Hero Header */}
        <Reveal delay={60}>
          <header className="space-y-5">
            {/* Category Pill */}
            <p className="eyebrow text-brand-green">{post.category}</p>

            {/* Title */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              {post.title}
            </h1>

            {/* Meta Row: Author, Date, Read Time */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-muted-foreground pt-2 pb-6 border-b border-border/80">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <span>By {post.author}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-brand-green" />
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-brand-blue" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Banner Hero Image / Interactive Technical Diagram */}
            <div className="my-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-card shadow-xl transition-all duration-300">
              {post.image ? (
                <div className="relative group">
                  <button
                    type="button"
                    onClick={() => setIsImageModalOpen(true)}
                    className="w-full block text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                    title="Click to view full diagram in high resolution"
                  >
                    <img
                      src={post.image}
                      alt={post.alt || `${post.title} - Technical Engineering Diagram`}
                      className="block aspect-[16/9] h-auto max-h-[36rem] w-full object-cover transition-transform duration-300 group-hover:scale-[1.008]"
                    />

                    {/* Amber Placeholder Badge for generic stock/category images */}
                    {isGenericBlogImage(post) && (
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 pointer-events-none">
                        <PlaceholderBadge />
                      </div>
                    )}

                    {/* Subtle Hover Action Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 rounded-2xl sm:rounded-3xl flex items-center justify-center pointer-events-none">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 flex items-center gap-2 rounded-full bg-black/80 backdrop-blur-md px-4 py-2 text-white font-mono text-xs font-semibold shadow-2xl border border-white/20">
                        <ZoomIn className="h-4 w-4 text-brand-green" />
                        <span>View image</span>
                      </div>
                    </div>

                    {/* Corner Tag */}
                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/75 backdrop-blur-md px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-white border border-white/20 shadow-md transition-transform group-hover:scale-105">
                        <Maximize2 className="h-3 w-3 text-brand-green" />
                        <span>Expand image</span>
                      </span>
                    </div>
                  </button>
                </div>
              ) : (
                <ImagePlaceholder label={`+ Add ${post.title.slice(0, 30)}... Photo`} />
              )}
            </div>
          </header>
        </Reveal>

        {tocItems.length > 0 && (
          <Reveal delay={100}>
            <nav
              aria-label="Table of Contents"
              className="mb-10 border border-border bg-concrete/60 p-6 sm:p-7"
            >
              <div className="mb-4 flex items-center gap-2">
                <List className="h-4 w-4 text-brand-blue" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                  Table of Contents
                </span>
              </div>
              <ol className="space-y-2 font-display text-sm sm:text-base">
                {tocItems.map((item, idx) => (
                  <li key={item.id} className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-brand-green">
                      {String(idx + 1).padStart(2, "0")}.
                    </span>
                    <a
                      href={`#${item.id}`}
                      className="font-medium text-foreground/80 transition-colors hover:text-brand-blue hover:underline"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        )}

        <Reveal delay={120}>
          <article className="mx-auto max-w-3xl prose prose-slate prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-p:font-sans prose-p:text-base sm:prose-p:text-lg prose-p:leading-relaxed prose-p:text-foreground/80 prose-li:font-sans prose-li:text-base sm:prose-li:text-lg prose-li:leading-relaxed prose-li:text-foreground/80 prose-a:text-brand-green prose-a:font-semibold prose-a:underline prose-a:underline-offset-4 prose-a:decoration-brand-green hover:prose-a:text-brand-navy hover:prose-a:decoration-brand-navy prose-strong:text-foreground prose-strong:font-bold">
            {post.content.trimStart().startsWith("##") && (
              <p className="!mb-8 !text-lg !leading-relaxed !text-foreground/90 sm:!text-xl">
                {post.excerpt}
              </p>
            )}
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {post.content}
            </ReactMarkdown>
          </article>
        </Reveal>

        {/* Related Products Box */}
        {post.relatedProducts && post.relatedProducts.length > 0 && (
          <Reveal delay={180}>
            <div className="mx-auto mt-10 max-w-3xl border-t border-border pt-7 sm:pt-8">
              <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-wider text-brand-green">
                Related resources
              </span>
              <h3 className="mb-4 font-display text-xl font-bold text-foreground">
                Explore relevant Vchemics products and solutions
              </h3>
              <div className="flex flex-wrap gap-3">
                {post.relatedProducts.map((rp) => (
                  <Link
                    key={rp.name}
                    to={rp.link}
                    className="inline-flex items-center gap-2 border border-border bg-background px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-brand-blue hover:text-brand-blue sm:text-sm"
                  >
                    <span>{rp.name}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-brand-green" />
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* Direct Technical Consultation CTA */}
        <Reveal delay={200}>
          <div className="mx-auto mt-12 max-w-3xl border border-brand-blue/30 bg-graphite-deep p-8 text-white sm:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-green">
                  Direct Technical Support
                </span>
                <h4 className="font-display text-2xl font-bold text-white">
                  Need help applying this guidance to your project?
                </h4>
                <p className="text-sm text-[#b0c7df] max-w-xl leading-relaxed">
                  Share your project conditions with the Vchemics technical team for product
                  selection, application guidance, or a quotation.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to="/contact"
                  onClick={() =>
                    trackGetQuoteClick({
                      button_location: "blog_post_footer",
                      label: "Request Quote",
                      source: `/blog/${post.slug}`,
                    })
                  }
                  className="inline-flex items-center gap-2 btn-brand-gradient px-5 py-3 font-display text-xs font-bold uppercase text-white transition-opacity hover:opacity-90"
                >
                  <span>Request technical guidance</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom Back To Blog Link */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-brand-blue transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to all knowledge center articles</span>
          </Link>
        </div>
      </div>

      {/* Lightbox / High-Resolution Image Popup Modal */}
      {isImageModalOpen && post.image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6 md:p-10 animate-in fade-in duration-200"
          onClick={() => setIsImageModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={post.title}
        >
          {/* Top Floating Bar with Title & Close Button */}
          <div className="absolute top-4 inset-x-4 sm:top-6 sm:inset-x-8 flex items-center justify-between z-20 pointer-events-none">
            <div className="hidden sm:flex items-center gap-2 rounded-full bg-black/70 backdrop-blur-md px-4 py-1.5 border border-white/15 text-white/90 font-mono text-xs shadow-xl">
              <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse" />
              <span className="truncate max-w-md">{post.title}</span>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsImageModalOpen(false);
              }}
              className="pointer-events-auto ml-auto flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white/35 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-2xl cursor-pointer"
              title="Close (Esc)"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close popup</span>
            </button>
          </div>

          {/* Modal Image Card */}
          <div
            className="relative max-h-[92vh] max-w-[96vw] overflow-hidden rounded-2xl bg-black/50 p-1 sm:p-2 shadow-2xl border border-white/15 flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={post.image}
              alt={post.alt || `${post.title} - Technical Engineering Diagram (High Resolution)`}
              className="max-h-[84vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
            />
            <div className="mt-2 flex w-full items-center justify-between px-3 py-1 text-xs font-mono text-white/70">
              <span className="truncate">{post.alt || "High-Resolution Technical Reference"}</span>
              <button
                type="button"
                onClick={() => setIsImageModalOpen(false)}
                className="text-brand-green hover:text-white transition-colors ml-4 shrink-0 font-bold uppercase tracking-wider cursor-pointer"
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
