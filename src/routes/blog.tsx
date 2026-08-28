import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles, Search, FileText } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { allBlogPosts, blogTopics } from "@/components/site/data";
import { cn } from "@/lib/utils";

const title = "Technical Knowledge Centre & Blog | V Chemics";
const description =
  "Technical engineering guides on concrete admixtures, PU injection grouting, crystalline waterproofing, micro concrete, and structural repair methods.";

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: title,
  description: description,
  publisher: {
    "@type": "Organization",
    name: "VChemics India Solutions",
    url: "https://vchemics.com",
  },
  blogPost: allBlogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: "2025-01-01",
    author: {
      "@type": "Organization",
      name: post.author,
    },
  })),
};

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "concrete admixture guide, PU injection grouting Chennai, crystalline waterproofing guide, micro concrete standards, non shrink grout ASTM C1107, concrete crack repair",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vchemics.com/blog" },
      { property: "og:image", content: "https://vchemics.com/image.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://vchemics.com/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(blogSchema),
      },
    ],
  }),
  component: KnowledgeCenterPage,
});

function KnowledgeCenterPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = blogTopics;

  const filteredPosts = allBlogPosts.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(search.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCat = activeCategory ? art.category === activeCategory : true;
    return matchesSearch && matchesCat;
  });

  const isDefaultView = !search.trim() && activeCategory === null;
  const featuredPost = isDefaultView ? allBlogPosts[0] : null;
  const gridPosts = featuredPost
    ? filteredPosts.filter((p) => p.id !== featuredPost.id)
    : filteredPosts;

  return (
    <>
      <PageHero
        eyebrow="Knowledge Centre &amp; Engineering Blog"
        title="Technical Whitepapers, Standards &amp; Practical Guides"
        intro="In-depth engineering articles answering real construction site questions — written by our formulation chemists, materials engineers, and structural repair specialists."
      />

      {/* 2. SEARCH & CATEGORY FILTER BAR */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-border/80">
            <div>
              <p className="eyebrow flex items-center gap-2 text-brand-green">
                <BookOpen className="h-4 w-4" /> Technical Whitepapers &amp; Field Guides
              </p>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-foreground">
                Browse Technical Articles
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search topics, codes, standards…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-border/80 bg-card pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none transition-all"
              />
            </div>
          </div>

          {/* Category Filter Pills Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-muted/20 border border-border/60">
            <span className="font-mono text-xs font-bold uppercase text-muted-foreground px-3 py-1">
              Category:
            </span>
            <button
              onClick={() => setActiveCategory(null)}
              className={cn(
                "rounded-xl px-3.5 py-1.5 font-mono text-xs transition-all cursor-pointer",
                activeCategory === null
                  ? "bg-brand-blue text-white font-bold shadow-xs"
                  : "bg-card border border-border/70 text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              All Topics ({allBlogPosts.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                className={cn(
                  "rounded-xl px-3.5 py-1.5 font-mono text-xs transition-all cursor-pointer",
                  activeCategory === cat
                    ? "bg-brand-blue text-white font-bold shadow-xs"
                    : "bg-card border border-border/70 text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 3. FEATURED POST HERO (Latest Guide) */}
          {featuredPost && (
            <Reveal className="mt-12">
              <div>
                <p className="eyebrow flex items-center gap-2 text-brand-green mb-3 font-mono text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5 text-brand-green" /> Latest Guide
                </p>
                <div className="group lift relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-lg hover:border-brand-blue/40 transition-all duration-300">
                  {/* Top Accent Gradient Bar */}
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20" />

                  <div className="grid gap-6 lg:gap-8 lg:grid-cols-12 items-center p-6 sm:p-8 lg:p-10">
                    {/* Featured Image Slot */}
                    <div className="lg:col-span-6 relative overflow-hidden rounded-2xl border border-border/70 bg-card shadow-xs">
                      {featuredPost.image ? (
                        <div className="relative aspect-[16/10] w-full flex items-center justify-center overflow-hidden bg-muted/10">
                          <img
                            src={featuredPost.image}
                            alt={
                              featuredPost.alt ||
                              `${featuredPost.title} - Technical Engineering Guide`
                            }
                            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                          {/* Floating Category Badge */}
                          <div className="absolute top-3 left-3 z-10 pointer-events-none">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/75 backdrop-blur-md px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-white border border-white/20 shadow-md">
                              <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
                              {featuredPost.category}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="aspect-[16/10] w-full">
                          <ImagePlaceholder
                            label={`+ Add ${featuredPost.title.slice(0, 24)}... Photo`}
                          />
                        </div>
                      )}
                    </div>

                    {/* Content Side */}
                    <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-5">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground">
                          <span className="font-semibold text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-md border border-brand-blue/15">
                            Featured Engineering Whitepaper
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5 text-brand-blue" />
                            {featuredPost.readTime}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5 text-brand-green" />
                            {featuredPost.date}
                          </span>
                        </div>

                        <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-foreground group-hover:text-brand-blue transition-colors leading-tight">
                          <Link
                            to="/blog/$slug"
                            params={{ slug: featuredPost.slug }}
                            className="hover:underline"
                          >
                            {featuredPost.title}
                          </Link>
                        </h3>

                        <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                          {featuredPost.excerpt}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {featuredPost.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full bg-brand-blue/10 px-3 py-1 font-mono text-[0.68rem] font-semibold text-brand-blue border border-brand-blue/15"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-5 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                          <span className="font-semibold text-foreground">
                            By {featuredPost.author}
                          </span>
                        </div>

                        <Link
                          to="/blog/$slug"
                          params={{ slug: featuredPost.slug }}
                          className="inline-flex items-center gap-2 rounded-xl btn-brand-gradient px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-white shadow-md hover:scale-105 transition-all cursor-pointer"
                        >
                          <span>Read Full Guide</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* 4. REDESIGNED BLOG POST CARDS GRID */}
          <div
            className={cn(
              "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
              featuredPost ? "mt-14" : "mt-12",
            )}
          >
            {gridPosts.map((post, idx) => (
              <Reveal key={post.id} delay={idx * 50}>
                <article className="group lift relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xs hover:border-brand-blue/40">
                  {/* Top Accent Gradient Bar */}
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20" />

                  {/* Image Slot */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted/20 rounded-t-3xl flex items-center justify-center">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.alt || `${post.title} - Technical Guide`}
                        className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <ImagePlaceholder label="+ Add Real Photo" />
                    )}

                    {/* Category Badge Overlay (top-left) */}
                    <div className="absolute top-3 left-3 z-10 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/75 backdrop-blur-md px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-white border border-white/20 shadow-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-foreground transition-colors group-hover:text-brand-blue leading-snug">
                        {post.title}
                      </h3>

                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Author, Read Time, Date Footer Row */}
                      <div className="mt-4 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground font-mono">
                        <span className="truncate">{post.author}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>

                      {/* Restyled Tag Pills */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {post.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-brand-blue/10 px-2.5 py-1 font-mono text-[0.68rem] font-semibold text-brand-blue"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Read Guide Link */}
                    <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 text-brand-green" /> {post.date}
                      </span>

                      <Link
                        to="/blog/$slug"
                        params={{ slug: post.slug }}
                        className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-brand-blue group-hover:text-brand-green transition-colors cursor-pointer"
                      >
                        <span>Read Guide</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="mt-12 rounded-3xl border border-border/80 bg-card p-10 sm:p-14 text-center max-w-2xl mx-auto shadow-sm">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                {activeCategory ? `${activeCategory} Guide Under Formulation` : "No Articles Found"}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
                {activeCategory
                  ? `Our formulation chemists and structural materials engineers are finalizing the verified site case study for ${activeCategory}. Contact our technical department for instant technical datasheets or project advice.`
                  : "We couldn't find any articles matching your search query. Try another keyword or browse all topics."}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl btn-brand-gradient px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-md hover:scale-105 transition-all"
                >
                  <span>Request Technical Advice</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory(null);
                  }}
                  className="rounded-xl border border-border/80 bg-muted/40 px-4 py-2.5 font-mono text-xs font-bold uppercase text-foreground hover:bg-muted transition-colors cursor-pointer"
                >
                  View All Topics
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
