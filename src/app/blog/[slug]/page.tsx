import { getBlogPostBySlug, getBlogPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import AdUnit from "@/components/AdUnit";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";

/* ── Author data ── */
const authors: Record<string, { role: string; bio: string }> = {
  "Abhishek Singh": { role: "Co-Founder & CEO, ATMA-AI", bio: "Full-stack AI architect with expertise in LLM deployment and enterprise systems. JNU alumnus." },
  "Avadhesh Kumar": { role: "Co-Founder & CTO, ATMA-AI", bio: "Edge AI & neuro-symbolic systems specialist. IIT Delhi alumnus with deep ML research experience." },
  "Chirag Beniwal": { role: "Co-Founder & CMO, ATMA-AI", bio: "Data engineering and backend architecture expert. JNU alumnus focused on scalable enterprise systems." },
  "Ayush Chaurasia": { role: "Assistant Professor, KIET", bio: "Academic researcher specializing in machine learning, computer vision, and AI system design." },
  "Saurabh Kumar": { role: "IT Engineer, IBM", bio: "Enterprise infrastructure and cloud computing specialist with deep experience in production AI systems." },
  "Naman Sharma": { role: "ETO, Eastern Pacific Shipping", bio: "Maritime technology officer bringing cross-industry perspective on IoT, automation, and AI-driven operations." },
  "Sujeet Mishra": { role: "SDE 2, Sophos", bio: "Security-focused software engineer specializing in cybersecurity, threat detection, and secure system design." },
  "Dinesh Dhandhal": { role: "Senior Industry Expert", bio: "Seasoned technology leader with extensive experience in enterprise digital transformation and AI strategy." },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.meta.title} | ATMA Blog`,
    description: post.meta.summary,
    keywords: post.meta.keywords,
    openGraph: {
      title: post.meta.title,
      description: post.meta.summary,
    keywords: post.meta.keywords,
      type: "article",
      publishedTime: post.meta.date,
      authors: [post.meta.author],
      url: `https://blog.atma-ai.co.in/${slug}`,
    },
    alternates: {
      canonical: `https://blog.atma-ai.co.in/${slug}`,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related blog posts (same tags, excluding current)
  const allPosts = await getBlogPosts();
  const currentTags = new Set(post.meta.tags || []);
  const relatedPosts = allPosts
    .filter(p => p.slug !== slug && p.tags?.some((t: string) => currentTags.has(t)))
    .slice(0, 3);

  const authorInfo = authors[post.meta.author];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.meta.title,
            description: post.meta.summary,
    keywords: post.meta.keywords,
            author: {
              "@type": "Person",
              name: post.meta.author,
              ...(authorInfo ? { jobTitle: authorInfo.role } : {}),
            },
            publisher: {
              "@type": "Organization",
              name: "ATMA Consultancy Services",
              url: "https://atma-ai.co.in",
              logo: {
                "@type": "ImageObject",
                url: "https://atma-ai.co.in/logos/atma-logo.png",
              },
            },
            datePublished: post.meta.date,
            dateModified: post.meta.date,
            url: `https://blog.atma-ai.co.in/${slug}`,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://blog.atma-ai.co.in/${slug}`,
            },
          }),
        }}
      />
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-24 relative bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-6 md:mb-8 font-mono"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mb-8 md:mb-12">
              {/* Tags */}
              {post.meta.tags && post.meta.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.meta.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-accent/10 text-xs font-mono tracking-wider text-accent border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="text-3xl md:text-5xl font-bold font-heading text-primary-light mb-4">
                {post.meta.title}
              </h1>
              <div className="flex flex-wrap gap-3 md:gap-4 text-muted text-sm font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-accent" />
                  {formatDate(post.meta.date)}
                </span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5" />
                  {post.meta.author}
                </span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  <span className="text-accent">{post.meta.readingTime}</span>
                </span>
              </div>
            </div>

            <article className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-a:text-accent hover:prose-a:text-accent-soft prose-img:rounded-xl">
              <MDXRemote source={post.content} components={{ AdUnit }} />
            </article>

            {/* Default Ad Unit placed automatically at the end of the article */}
            <AdUnit />

            {/* ── Author Bio Card ── */}
            {authorInfo && (
              <div className="mt-12 md:mt-16 p-6 md:p-8 rounded-2xl glass-card border border-accent/10">
                <p className="text-[10px] font-mono tracking-[0.2em] text-muted uppercase mb-3">Written by</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <User className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary-light text-lg">{post.meta.author}</h3>
                    <p className="text-accent text-sm font-medium mb-2">{authorInfo.role}</p>
                    <p className="text-muted text-sm leading-relaxed">{authorInfo.bio}</p>
                  </div>
                </div>
              </div>
            )}

            {/* ── Related Posts ── */}
            {relatedPosts.length > 0 && (
              <div className="mt-12 md:mt-16">
                <h2 className="text-2xl font-bold font-heading text-primary-light mb-6">Related Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group block p-5 rounded-xl glass-card hover:border-accent/30 transition-all duration-300"
                    >
                      {related.tags && related.tags.length > 0 && (
                        <span className="inline-block px-2 py-0.5 rounded-md bg-accent/10 text-[9px] font-mono tracking-wider text-accent mb-2">
                          {related.tags[0]}
                        </span>
                      )}
                      <h3 className="text-sm font-bold font-heading text-primary-light mb-2 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                        {related.title}
                      </h3>
                      <div className="flex items-center text-accent text-xs font-medium mt-auto">
                        Read
                        <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Table of Contents Sidebar */}
          {post.headings && post.headings.length > 0 && (
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-32 p-6 rounded-2xl glass-card">
                <h3 className="font-heading font-bold text-primary-light mb-4 text-lg border-b border-border pb-2">
                  Table of Contents
                </h3>
                <nav className="flex flex-col gap-2.5">
                  {post.headings.map((heading: { id: string; text: string; level: number }, idx: number) => (
                    <a
                      key={idx}
                      href={`#${heading.id}`}
                      className={`text-sm transition-colors hover:text-accent ${
                        heading.level === 3 ? "ml-4 text-muted" : "text-primary-light font-medium"
                      }`}
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
