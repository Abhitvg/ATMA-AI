import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ATMA AI — IIT & JNU Alumni Driven AI Consultancy in New Delhi",
  description:
    "Meet the founding team of ATMA Consultancy: Abhishek Singh, Avadhesh Kumar, and Chirag Beniwal. Elite AI and IT consultants in Delhi specializing in Enterprise LLM deployment, Neuro-Symbolic AI, and scalable systems. 15+ years of combined experience.",
  keywords: [
    "AI consultancy in Delhi",
    "Enterprise LLM deployment India",
    "Neuro-Symbolic AI experts",
    "Abhishek Singh",
    "Avadhesh Kumar",
    "Chirag Beniwal",
    "ATMA founders",
    "IIT Delhi alumni AI consultant",
    "JNU alumni tech consultant",
    "AI strategy firm New Delhi",
    "Custom LLM development India"
  ],
  openGraph: {
    title: "About ATMA AI Consultancy — Enterprise AI Experts in New Delhi",
    description:
      "Founded by IIT Delhi & JNU alumni, we bridge academic research with enterprise-grade deployment. Specialists in LLMs, Edge Robotics, and Neuro-Symbolic AI.",
    images: [
      {
        url: "/logos/atma-logo.png",
        width: 1200,
        height: 630,
        alt: "ATMA Consultancy & Research Team",
      },
    ],
  },
  alternates: {
    canonical: "https://atma-ai.co.in/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
