import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & IT Services — LLM Deployment, Enterprise Architecture, Cloud, E-Commerce",
  description:
    "ATMA Consultancy delivers enterprise AI consulting, custom LLM deployment, GenAI integration, data science, cloud infrastructure (AWS/GCP/Azure), e-commerce development, and cybersecurity. IIT & JNU alumni team. New Delhi, India.",
  keywords: [
    "AI consulting services India",
    "LLM deployment service",
    "GenAI consulting",
    "enterprise architecture India",
    "cloud infrastructure service",
    "e-commerce development India",
    "cybersecurity consulting India",
    "data science consultancy",
  ],
  openGraph: {
    title: "Services — ATMA Consultancy & Research",
    description:
      "Enterprise AI, custom LLMs, cloud architecture, e-commerce, and cybersecurity from IIT & JNU alumni.",
  },
  alternates: {
    canonical: "https://atma-ai.co.in/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
