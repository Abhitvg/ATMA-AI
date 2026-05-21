import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Abhishek Singh, Avadhesh Kumar & Chirag Beniwal | IIT & JNU Alumni",
  description:
    "Meet the founding team of ATMA Consultancy: Abhishek Singh (CEO, MTech JNU), Avadhesh Kumar (Lead Engineer, MTech IIT Delhi), and Chirag Beniwal (Tech Lead, MTech JNU). 15+ years combined experience in AI, enterprise architecture, and scalable systems.",
  keywords: [
    "Abhishek Singh",
    "Avadhesh Kumar",
    "Chirag Beniwal",
    "ATMA founders",
    "IIT Delhi alumni consultant",
    "JNU alumni consultant",
    "AI consultancy founders",
  ],
  openGraph: {
    title: "About ATMA — Abhishek Singh, Avadhesh Kumar & Chirag Beniwal",
    description:
      "IIT & JNU alumni founding an AI consultancy that bridges academic research with enterprise deployment. 50+ projects delivered.",
  },
  alternates: {
    canonical: "https://atma-ai.co.in/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
