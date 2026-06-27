import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles — Technical Deep-Dives & Engineering Analysis",
  description:
    "In-depth technical articles from ATMA's engineering team covering LLM deployment, RAG architectures, edge computing, and enterprise AI systems design.",
  keywords: [
    "ATMA articles",
    "technical AI articles",
    "LLM deployment guide",
    "RAG architecture",
    "edge computing articles",
    "AI engineering India",
  ],
  openGraph: {
    title: "Articles — ATMA Consultancy & Research",
    description:
      "In-depth technical articles on LLM deployment, RAG architectures, and enterprise AI engineering.",
  },
  alternates: {
    canonical: "https://articles.atma-ai.co.in",
  },
};

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
