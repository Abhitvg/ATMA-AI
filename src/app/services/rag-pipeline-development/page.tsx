import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Search, Shield, Database, Zap, ArrowRight, CheckCircle2, Layers } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Top Custom AI Development Company for RAG Pipelines | ATMA AI",
    description: "ATMA AI is a top custom AI development company specializing in RAG pipelines and enterprise production deployment. Build hallucination-free AI.",
    openGraph: {
      title: "Top Custom AI Development Company for RAG Pipelines | ATMA AI",
      description: "ATMA AI is a top custom AI development company specializing in RAG pipelines and enterprise production deployment. Build hallucination-free AI.",
    },
  };
}

const faqs = [
  {
    q: "Why do I need a custom AI development company for RAG pipelines?",
    a: "Building a reliable Retrieval-Augmented Generation (RAG) pipeline requires deep expertise in data engineering, vector search optimization, and deterministic reasoning. Off-the-shelf solutions often fail at scale in production environments due to hallucinations and high latency."
  },
  {
    q: "What makes ATMA AI a top custom AI development company for production deployment?",
    a: "We focus on neuro-symbolic architectures, ensuring verifiable safety and zero hallucinations. Our production deployments include edge-native optimizations (INT8 quantization) and Zero-Trust VPC integrations, making us the preferred choice for high-stakes industries."
  },
  {
    q: "How do you handle sensitive enterprise data in a RAG architecture?",
    a: "Your data never leaves your secure environment. We integrate open-source or custom-trained LLMs directly into your on-premise infrastructure or Virtual Private Cloud (VPC) with rigorous Role-Based Access Controls (RBAC) at the document chunk level."
  },
  {
    q: "Can RAG pipelines be deployed on edge devices?",
    a: "Yes. We specialize in edge deployment, compressing complex RAG architectures to run on hardware like NVIDIA Jetson Orin with sub-15ms latency, operating independently of cloud networks."
  }
];

const features = [
  {
    icon: Database,
    title: "Advanced Vector Search",
    description: "We optimize hybrid search architectures combining dense vector embeddings with sparse keyword retrieval for maximum precision."
  },
  {
    icon: Shield,
    title: "Verifiable Accuracy",
    description: "By integrating symbolic logic constraints, we prevent LLM hallucinations, ensuring every generated output is factually backed by your data."
  },
  {
    icon: Search,
    title: "Dynamic Chunking Strategies",
    description: "We process complex PDFs, wikis, and tabular data using semantic chunking rules that preserve context and improve retrieval relevance."
  },
  {
    icon: Zap,
    title: "High-Concurrency MLOps",
    description: "Our production deployments are built to handle thousands of requests per second with autoscaling inference clusters."
  }
];

export default function RagPipelineDevelopmentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "RAG Pipeline Development and Production Deployment",
        "provider": {
          "@type": "Organization",
          "name": "ATMA AI Consultancy"
        },
        "description": "Expert custom AI development for building, optimizing, and deploying enterprise Retrieval-Augmented Generation (RAG) pipelines.",
        "areaServed": "Global"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-[#CCFF00] text-sm font-medium mb-8">
            <Layers className="w-4 h-4" />
            <span>Custom AI Development</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-light leading-tight mb-6">
            Top Custom AI Development for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-accent">RAG Pipelines</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
            ATMA AI engineers production-ready Retrieval-Augmented Generation (RAG) architectures. Eliminate hallucinations and securely query your enterprise data with our neuro-symbolic infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/contact`}
              className="inline-flex items-center justify-center gap-2 bg-[#CCFF00] text-primary-dark hover:bg-[#b3ff00] px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto"
            >
              Start Your RAG Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="glass-card p-8 rounded-2xl border border-border/50 hover:border-[#CCFF00]/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-[#CCFF00]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-[#CCFF00]" />
                </div>
                <h3 className="text-xl font-bold font-heading text-primary-light mb-4">{feature.title}</h3>
                <p className="text-muted leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits List */}
        <section className="bg-primary-deeper/50 py-20 border-y border-border/50 mb-24">
          <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-light text-center mb-12">Production Deployment Standards</h2>
            <div className="space-y-6">
              {[
                "Strict Data Governance and On-Premise capability.",
                "Hybrid Search implementation for maximum context retrieval accuracy.",
                "Real-time evaluation metrics to detect data drift and hallucinations.",
                "CI/CD pipelines explicitly designed for MLOps and prompt versioning."
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 glass-card p-6 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-[#CCFF00] flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/90 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-primary-light text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card p-6 rounded-xl border border-border/50">
                <h3 className="text-lg font-bold font-heading text-primary-light mb-2">{faq.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
        
      </main>
      <Footer />
    </>
  );
}
