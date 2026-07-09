import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { getWhitepaperPosts } from "@/lib/mdx";
import { ArrowRight, BookOpen, Calendar, Clock, User, Download } from "lucide-react";

export default async function WhitepapersPage() {
  const posts = await getWhitepaperPosts();

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* ── HERO ── */}
        <section className="pt-32 pb-24 relative bg-primary-dark overflow-hidden min-h-[60vh] flex items-center bg-noise shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="hidden md:block absolute top-[15%] left-[20%] w-[600px] h-[600px] rounded-full bg-[#10B981]/5 blur-[200px] animate-pulse-glow" />
          <div className="hidden md:block absolute bottom-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#6366F1]/5 blur-[180px] animate-pulse-glow" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-sm font-mono font-medium mb-8">
                <BookOpen className="w-3.5 h-3.5" />
                WHITEPAPERS
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-bold font-heading leading-[0.9] mb-8 text-primary-light tracking-tight">
                Research{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#6366F1]">
                  Publications
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
                Comprehensive technical reports and research publications from
                ATMA Research Labs — covering neuro-symbolic AI, autonomous
                systems, and enterprise AI deployment frameworks.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── PAPERS LIST ── */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <AnimatedSection>
                <div className="glass-card rounded-2xl p-12 text-center">
                  <BookOpen className="h-12 w-12 text-muted/30 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold font-heading text-primary-light mb-2">
                    Coming Soon
                  </h2>
                  <p className="text-muted">
                    Our whitepapers are being finalized. Check back soon.
                  </p>
                </div>
              </AnimatedSection>
            ) : (
              <div className="space-y-6">
                {posts.map((post, i) => (
                  <AnimatedSection key={post.slug} delay={i * 0.1}>
                    <Link
                      href={`/whitepapers/${post.slug}`}
                      className="block group glass-card rounded-2xl p-8 md:p-10 hover:border-[#10B981]/30 transition-all duration-500 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/0 to-[#10B981]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                        {/* Icon */}
                        <div className="shrink-0 p-4 rounded-xl bg-[#10B981]/5 border border-[#10B981]/10 text-[#10B981] group-hover:bg-[#10B981]/10 transition-colors">
                          <BookOpen className="h-8 w-8" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          {/* Tags */}
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {post.tags.map((tag: string) => (
                                <span
                                  key={tag}
                                  className="px-2.5 py-0.5 rounded-md bg-[#10B981]/10 text-[10px] font-mono tracking-wider text-[#10B981]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          <h2 className="text-2xl font-bold font-heading text-primary-light mb-3 group-hover:text-[#10B981] transition-colors leading-tight">
                            {post.title}
                          </h2>

                          <p className="text-muted text-sm leading-relaxed mb-4 max-w-3xl">
                            {post.summary}
                          </p>

                          <div className="flex items-center gap-6 text-xs text-muted/60 font-mono">
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
                        </div>

                        {/* Read button */}
                        <div className="shrink-0 flex items-center">
                          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-sm font-medium group-hover:bg-[#10B981]/20 transition-all">
                            <Download className="h-4 w-4" />
                            Read Paper
                          </span>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-primary-deeper relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#10B981]/30 to-transparent" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-light mb-4">
                Collaborate with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#6366F1]">
                  ATMA Research Labs
                </span>
              </h2>
              <p className="text-muted text-lg mb-8">
                Interested in co-authoring research or commissioning a technical
                report? Let&apos;s discuss.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#10B981] text-primary-dark px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#10B981]/30 hover:scale-[1.03]"
              >
                Contact Research Team
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
