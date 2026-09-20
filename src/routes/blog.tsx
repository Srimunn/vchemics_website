import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles, Search, FileText } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PlaceholderBadge } from "@/components/site/PlaceholderBadge";
import { allBlogPosts, blogTopics } from "@/components/site/data";
import { isGenericBlogImage } from "@/lib/blog";
import { cn } from "@/lib/utils";

const title = "Technical Knowledge Centre & Blog | Vchemics";
const description =
  "Technical engineering guides on concrete admixtures, PU injection grouting, crystalline waterproofing, micro concrete, and structural repair methods.";

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: title,
  description: description,
  publisher: {
    "@type": "Organization",
    name: "Vchemics India Solutions",
    url: "https://www.vchemicsindia.com",
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
      { property: "og:url", content: "https://www.vchemicsindia.com/blog" },
      { property: "og:image", content: "https://www.vchemicsindia.com/image.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.vchemicsindia.com/blog" }],
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
      <section className="bg-[#f7f9fb] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow flex items-center gap-2 text-brand-green">
                <BookOpen className="h-4 w-4" /> Technical whitepapers &amp; field guides
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
                Browse Technical Articles
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search topics, codes, standards…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-border bg-background py-3 pl-10 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"
              />
            </div>
          </div>

          {/* Category Filter Pills Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-2 border-b border-border pb-7">
            <span className="px-1 py-1 font-mono text-xs font-bold uppercase text-muted-foreground">
              Category:
            </span>
            <button
              onClick={() => setActiveCategory(null)}
              className={cn(
                "border px-3.5 py-1.5 font-mono text-xs transition-colors cursor-pointer",
                activeCategory === null
                  ? "border-brand-blue bg-brand-blue font-bold text-white"
                  : "border-border bg-background text-muted-foreground hover:border-brand-blue hover:text-foreground",
              )}
            >
              All Topics ({allBlogPosts.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                className={cn(
                  "border px-3.5 py-1.5 font-mono text-xs transition-colors cursor-pointer",
                  activeCategory === cat
                    ? "border-brand-blue bg-brand-blue font-bold text-white"
                    : "border-border bg-background text-muted-foreground hover:border-brand-blue hover:text-foreground",
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
                <div className="group relative overflow-hidden rounded-3xl border border-border bg-background transition-all duration-500 hover:scale-[1.01] hover:border-brand-green hover:shadow-xl">
                  <div className="grid items-stretch lg:grid-cols-2">
                    {/* Featured Image Slot */}
                    <div className="relative min-h-64 overflow-hidden border-b border-border bg-muted/20 lg:min-h-0 lg:border-b-0 lg:border-r">
                      {featuredPost.image ? (
                        <div className="relative aspect-[16/10] h-full w-full overflow-hidden bg-muted/10">
                          <img
                            src={featuredPost.image}
                            alt={
                              featuredPost.alt ||
                              `${featuredPost.title} - Technical Engineering Guide`
                            }
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                          {/* Amber Placeholder Badge for generic category images */}
                          {isGenericBlogImage(featuredPost) && (
                            <div className="absolute top-3 right-3 z-10 pointer-events-none">
                              <PlaceholderBadge />
                            </div>
                          )}
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
                    <div className="relative flex h-full flex-col justify-between space-y-7 bg-background p-6 sm:p-8 lg:p-10">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-brand-green">
                          <span>{featuredPost.category}</span>
                          <span className="h-1 w-1 bg-brand-green" />
                          <span className="text-muted-foreground">Featured guide</span>
                        </div>

                        <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                          <Link
                            to="/blog/$slug"
                            params={{ slug: featuredPost.slug }}
                            className="hover:text-brand-blue hover:underline transition-colors"
                          >
                            {featuredPost.title}
                          </Link>
                        </h3>

                        <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                          {featuredPost.excerpt}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-mono">
                          <span className="font-semibold text-foreground">
                            By {featuredPost.author}
                          </span>
                          <span className="text-border">
                            |
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5 text-brand-blue" />{" "}
                            {featuredPost.readTime}
                          </span>
                          <span className="text-border">
                            |
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5 text-brand-green" />{" "}
                            {featuredPost.date}
                          </span>
                        </div>

                        <Link
                          to="/blog/$slug"
                          params={{ slug: featuredPost.slug }}
                          className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-brand-blue transition-colors hover:text-brand-green cursor-pointer"
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
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all duration-300 hover:border-brand-blue/40 hover:shadow-xl">
                  {/* Image Slot */}
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted/20">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.alt || `${post.title} - Technical Guide`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <ImagePlaceholder label="+ Add Real Photo" />
                    )}

                    {/* Amber Placeholder Badge for generic category images */}
                    {isGenericBlogImage(post) && (
                      <div className="absolute top-3 right-3 z-10 pointer-events-none">
                        <PlaceholderBadge />
                      </div>
                    )}
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <p className="eyebrow text-[0.65rem] text-brand-green">
                        {post.category}
                      </p>

                      <h3 className="mt-3 font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-brand-blue sm:text-xl">
                        <Link
                          to="/blog/$slug"
                          params={{ slug: post.slug }}
                          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue hover:underline"
                        >
                          {post.title}
                        </Link>
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Bottom Read Guide Link */}
                    <div className="mt-7 flex items-center border-t border-border pt-4">
                      <Link
                        to="/blog/$slug"
                        params={{ slug: post.slug }}
                        className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-brand-blue transition-colors hover:text-brand-green cursor-pointer"
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
