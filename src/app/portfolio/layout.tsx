import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies — Enterprise Websites, E-Commerce, EdTech Projects",
  description:
    "Explore ATMA Consultancy's portfolio: India Eurasia Research Forum, NCERT Digital Platform, JNU Alumni Association, Doon Silk E-Commerce, UKCDP Enterprise Platform, Zubin Mehta Mural, Himalayan Goat Meat Shop, and Uttarakhand Cooperative Society. All projects fully built by our team.",
  keywords: [
    "ATMA portfolio",
    "India Eurasia Research Forum",
    "NCERT digital platform",
    "JNU Alumni Association website",
    "UKCDP platform",
    "Doon Silk e-commerce",
    "IPO Mehta Mural",
    "Himalayan Goat Meat",
    "Uttarakhand Cooperative",
    "web development case studies India",
  ],
  openGraph: {
    title: "Portfolio — ATMA Consultancy & Research",
    description:
      "50+ enterprise projects: institutional platforms, e-commerce stores, EdTech products, and civic tech solutions.",
  },
  alternates: {
    canonical: "https://atma-ai.co.in/portfolio",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
