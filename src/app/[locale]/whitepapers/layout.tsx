import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whitepapers — Research Publications & Technical Reports",
  description:
    "ATMA whitepapers: comprehensive technical reports on neuro-symbolic AI, autonomous systems, edge computing architectures, and enterprise AI deployment frameworks.",
  keywords: [
    "ATMA whitepapers",
    "AI research papers",
    "neuro-symbolic AI whitepaper",
    "autonomous systems research",
    "edge computing whitepaper",
    "enterprise AI reports",
  ],
  openGraph: {
    title: "Whitepapers — ATMA Consultancy & Research",
    description:
      "Comprehensive technical reports on neuro-symbolic AI, autonomous systems, and enterprise AI deployment.",
  },
  alternates: {
    canonical: "https://whitepaper.atma-ai.co.in",
  },
};

export default function WhitepapersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
