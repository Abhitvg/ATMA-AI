import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Labs — Neuro-Symbolic AI, Edge Robotics, Autonomous Systems",
  description:
    "ATMA Research Labs: building neuro-symbolic AI architecture for GPS-denied edge robotics, cognitive surveillance, autonomous industrial systems, and adaptive manipulation. Deployed on NVIDIA Jetson Orin with <15ms latency. Research led by Avadhesh Kumar (IIT Delhi).",
  keywords: [
    "ATMA Research Labs",
    "neuro-symbolic AI",
    "edge robotics India",
    "GPS-denied navigation AI",
    "autonomous systems research",
    "NVIDIA Jetson AI",
    "AI research India",
    "cognitive surveillance",
    "Avadhesh Kumar research",
    "IIT Delhi AI research",
  ],
  openGraph: {
    title: "Research Labs — ATMA Consultancy & Research",
    description:
      "The Prefrontal Cortex for Edge Robotics. Neuro-symbolic AI for GPS-denied, high-stakes environments. <15ms latency on Jetson Orin.",
  },
  alternates: {
    canonical: "https://atma-ai.co.in/research",
  },
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
