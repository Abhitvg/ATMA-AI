import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { getBlogPosts } from "@/lib/mdx";
import { ArrowRight, PenLine, Calendar, Clock, User } from "lucide-react";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* ── HERO ── */}
        <section className="pt-32 pb-24 relative bg-primary-dark overflow-hidden min-h-[60vh] flex items-center bg-noise">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="hidden md:block absolute top-[20%] left-[15%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[200px] animate-pulse-glow" />
          <div className="hidden md:block absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#8B5CF6]/5 blur-[180px] animate-pulse-glow" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-mono font-medium mb-8">
                <PenLine className="w-3.5 h-3.5" />
                BLOG
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-bold font-heading leading-[0.9] mb-8 text-primary-light tracking-tight">
                Insights &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#8B5CF6]">
                  Perspectives
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
                Expert takes on AI strategy, enterprise architecture, and the future
                of technology — from the minds behind ATMA Consultancy.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── POSTS GRID ── */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <AnimatedSection>
                <div className="glass-card rounded-2xl p-12 text-center">
                  <PenLine className="h-12 w-12 text-muted/30 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold font-heading text-primary-light mb-2">
                    Coming Soon
                  </h2>
                  <p className="text-muted">
                    Our first blog posts are being written. Check back soon.
                  </p>
                </div>
              </AnimatedSection>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {posts.map((post, i) => (
                  <AnimatedSection key={post.slug} delay={i * 0.1}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block group glass-card rounded-2xl p-8 hover:border-accent/30 transition-all duration-500 h-full relative overflow-hidden"
                    >
                      {/* Hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 2).map((tag: string) => (
                              <span
                                key={tag}
                                className="px-2.5 py-0.5 rounded-md bg-accent/10 text-[10px] font-mono tracking-wider text-accent"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Title */}
                        <h2 className="text-xl font-bold font-heading text-primary-light mb-3 group-hover:text-accent transition-colors leading-tight">
                          {post.title}
                        </h2>

                        {/* Summary */}
                        <p className="text-muted text-sm line-clamp-3 mb-6 leading-relaxed">
                          {post.summary}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center gap-4 text-xs text-muted/60 font-mono mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(post.date)}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readingTime}
                          </span>
                        </div>

                        {/* Read link */}
                        <div className="flex items-center text-accent text-sm font-medium group-hover:text-accent-soft">
                          Read Post
                          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>

                      {/* Corner accent */}
                      <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-accent/20 group-hover:border-r-accent transition-colors duration-300" />
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-primary-deeper relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-light mb-4">
                Want to discuss a topic?
              </h2>
              <p className="text-muted text-lg mb-8">
                We&apos;re always open to conversations about AI, technology, and
                enterprise strategy.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-accent text-primary-dark px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-[1.03]"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
