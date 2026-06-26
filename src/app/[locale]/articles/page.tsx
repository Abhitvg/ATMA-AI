import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { getArticlePosts } from "@/lib/mdx";
import { ArrowRight, FileText, Calendar, Clock, User } from "lucide-react";

export default async function ArticlesPage() {
  const posts = await getArticlePosts();

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* ── HERO ── */}
        <section className="pt-32 pb-24 relative bg-primary-dark overflow-hidden min-h-[60vh] flex items-center bg-noise">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute top-[20%] right-[15%] w-[500px] h-[500px] rounded-full bg-[#F59E0B]/5 blur-[200px] animate-pulse-glow" />
          <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[180px] animate-pulse-glow" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-sm font-mono font-medium mb-8">
                <FileText className="w-3.5 h-3.5" />
                ARTICLES
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-bold font-heading leading-[0.9] mb-8 text-primary-light tracking-tight">
                Technical{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#EF4444]">
                  Deep-Dives
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
                In-depth engineering analysis on LLM deployment, RAG architectures,
                edge computing, and the systems behind modern AI infrastructure.
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
                  <FileText className="h-12 w-12 text-muted/30 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold font-heading text-primary-light mb-2">
                    Coming Soon
                  </h2>
                  <p className="text-muted">
                    Our technical articles are being prepared. Check back soon.
                  </p>
                </div>
              </AnimatedSection>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {posts.map((post, i) => (
                  <AnimatedSection key={post.slug} delay={i * 0.1}>
                    <Link
                      href={`/articles/${post.slug}`}
                      className="block group glass-card rounded-2xl p-8 hover:border-[#F59E0B]/30 transition-all duration-500 h-full relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/0 to-[#F59E0B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag: string) => (
                              <span
                                key={tag}
                                className="px-2.5 py-0.5 rounded-md bg-[#F59E0B]/10 text-[10px] font-mono tracking-wider text-[#F59E0B]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <h2 className="text-xl font-bold font-heading text-primary-light mb-3 group-hover:text-[#F59E0B] transition-colors leading-tight">
                          {post.title}
                        </h2>

                        <p className="text-muted text-sm line-clamp-3 mb-6 leading-relaxed">
                          {post.summary}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-muted/60 font-mono mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.date}
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

                        <div className="flex items-center text-[#F59E0B] text-sm font-medium">
                          Read Article
                          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>

                      <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-[#F59E0B]/20 group-hover:border-r-[#F59E0B] transition-colors duration-300" />
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-primary-deeper relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F59E0B]/30 to-transparent" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-light mb-4">
                Need a custom technical analysis?
              </h2>
              <p className="text-muted text-lg mb-8">
                Our engineering team can produce detailed technical assessments
                tailored to your infrastructure.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F59E0B] text-primary-dark px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#F59E0B]/30 hover:scale-[1.03]"
              >
                Contact Engineering
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
