import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: "ATMA-AI in the News | Press & Media Mentions",
    description: "Read the latest news, press releases, and media mentions about ATMA Consultancy Services and its founders.",
    openGraph: {
      title: "ATMA-AI in the News | Press & Media Mentions",
      description: "Read the latest news, press releases, and media mentions about ATMA Consultancy Services and its founders.",
    },
  };
}

const mentions = [
  {
    title: "ATMA-AI Deploys Custom LLM for EdTech Giant",
    publication: "Tech News India",
    date: "2024-05-15",
    url: "https://example.com/news/atma-ai-edtech-llm"
  },
  {
    title: "IIT Delhi Alumnus Avadhesh Kumar Launches Enterprise AI Firm",
    publication: "Startup Times",
    date: "2024-02-10",
    url: "https://example.com/news/avadhesh-kumar-atma-ai"
  },
  {
    title: "How ATMA Consultancy is Redefining Civic Tech",
    publication: "GovTech Review",
    date: "2023-11-22",
    url: "https://example.com/news/atma-civic-tech-review"
  }
];

export default async function PressPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: mentions.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Article",
                headline: item.title,
                publisher: {
                  "@type": "Organization",
                  name: item.publication
                },
                datePublished: item.date,
                url: item.url,
                mentions: {
                  "@type": "Organization",
                  "@id": "https://atma-ai.co.in/#organization"
                }
              }
            }))
          })
        }}
      />
      <Navbar />
      <main className="flex-grow pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-light mb-4 text-center">
          ATMA-AI in the News
        </h1>
        <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
          Media mentions, press releases, and features highlighting our work in enterprise architecture and artificial intelligence.
        </p>

        <div className="grid gap-6">
          {mentions.map((mention, index) => (
            <a
              key={index}
              href={mention.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-6 rounded-2xl border hover:border-accent/30 transition-all duration-300 flex justify-between items-center"
            >
              <div>
                <p className="text-accent text-sm mb-2">{mention.publication} • {new Date(mention.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                <h2 className="text-xl font-bold font-heading text-primary-light group-hover:text-accent transition-colors">{mention.title}</h2>
              </div>
              <ExternalLink className="h-5 w-5 text-muted group-hover:text-accent transition-colors" />
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
