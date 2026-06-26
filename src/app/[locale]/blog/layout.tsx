import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — AI Insights, Strategy & Industry Perspectives",
  description:
    "The ATMA blog: expert perspectives on AI strategy, enterprise architecture, machine learning deployment, and digital transformation from IIT Delhi & JNU alumni.",
  keywords: [
    "ATMA blog",
    "AI strategy blog",
    "enterprise AI insights",
    "machine learning blog India",
    "digital transformation perspectives",
    "AI consulting blog",
  ],
  openGraph: {
    title: "Blog — ATMA Consultancy & Research",
    description:
      "Expert perspectives on AI strategy, enterprise architecture, and digital transformation.",
  },
  alternates: {
    canonical: "https://blog.atma-ai.co.in",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
