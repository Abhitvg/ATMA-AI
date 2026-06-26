import { getWhitepaperPostBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getWhitepaperPostBySlug(slug);

  if (!post) {
    return { title: "Whitepaper Not Found" };
  }

  return {
    title: `${post.meta.title} | ATMA Whitepapers`,
    description: post.meta.summary,
    openGraph: {
      title: post.meta.title,
      description: post.meta.summary,
      type: "article",
      publishedTime: post.meta.date,
      authors: [post.meta.author],
      url: `https://whitepaper.atma-ai.co.in/${slug}`,
    },
    alternates: {
      canonical: `https://whitepaper.atma-ai.co.in/${slug}`,
    },
  };
}

export default async function WhitepaperPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getWhitepaperPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            headline: post.meta.title,
            description: post.meta.summary,
            author: {
              "@type": "Person",
              name: post.meta.author,
            },
            publisher: {
              "@type": "Organization",
              name: "ATMA Research Labs",
              url: "https://atma-ai.co.in",
            },
            datePublished: post.meta.date,
            url: `https://whitepaper.atma-ai.co.in/${slug}`,
          }),
        }}
      />
      <Navbar />
      <main className="flex-grow pt-32 pb-24 relative bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-12">
          <div className="flex-1 max-w-4xl">
            <Link
              href="/whitepapers"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-[#10B981] transition-colors mb-8 font-mono"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Whitepapers
            </Link>

            <div className="mb-12">
              {post.meta.tags && post.meta.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.meta.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#10B981]/10 text-xs font-mono tracking-wider text-[#10B981] border border-[#10B981]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-light mb-4">
                {post.meta.title}
              </h1>
              <div className="flex gap-4 text-muted text-sm font-mono flex-wrap">
                <span>{post.meta.date}</span>
                <span>•</span>
                <span>{post.meta.author}</span>
                <span>•</span>
                <span className="text-[#10B981]">{post.meta.readingTime}</span>
              </div>
            </div>

            <article className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-a:text-[#10B981] hover:prose-a:text-[#059669] prose-img:rounded-xl prose-table:text-sm">
              <MDXRemote source={post.content} />
            </article>
          </div>

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
                      className={`text-sm transition-colors hover:text-[#10B981] ${
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
