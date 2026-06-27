import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — AI Consultancy in Saket, New Delhi | ceo@atma-ai.co.in",
  description:
    "Get in touch with ATMA Consultancy Services. Schedule a consultation for AI integration, enterprise architecture, LLM deployment, or digital transformation. Office: A-2, Yadav Complex, A-block, Saket, New Delhi-110068. Email: ceo@atma-ai.co.in",
  keywords: [
    "contact ATMA Consultancy",
    "AI consultancy contact New Delhi",
    "hire AI consultants India",
    "ceo@atma-ai.co.in",
    "ATMA Saket New Delhi",
    "AI consultancy quote",
  ],
  openGraph: {
    title: "Contact — ATMA Consultancy & Research",
    description:
      "Schedule a consultation. A-2, Yadav Complex, Saket, New Delhi. Email: ceo@atma-ai.co.in",
  },
  alternates: {
    canonical: "https://atma-ai.co.in/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
