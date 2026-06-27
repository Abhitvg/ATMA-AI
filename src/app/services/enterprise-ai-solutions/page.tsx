import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Brain, Shield, Database, ArrowRight, Server, BookOpen } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Enterprise AI Solutions | ATMA AI Consultancy",
    description: "Explore ATMA-AI's comprehensive Enterprise AI Solutions. We architect secure, highly reliable custom LLMs and RAG pipelines for production environments.",
    openGraph: {
      title: "Enterprise AI Solutions | ATMA AI Consultancy",
      description: "Explore ATMA-AI's comprehensive Enterprise AI Solutions. We architect secure, highly reliable custom LLMs and RAG pipelines for production environments.",
    },
  };
}

const features = [
  {
    icon: Database,
    title: "RAG Pipeline Architecture",
    description: "We connect Large Language Models directly to your internal enterprise data silos, ensuring factual accuracy.",
    href: "/services/rag-pipeline-development"
  },
  {
    icon: Server,
    title: "Custom LLM Deployment",
    description: "Secure implementation of open-weights models deployed on-premise or within your Virtual Private Cloud.",
    href: "/services/enterprise-llm-deployment"
  },
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "Harness enterprise data to forecast trends and automate complex operational decision-making.",
    href: "/services/predictive-analytics"
  },
  {
    icon: Shield,
    title: "Zero-Trust Security",
    description: "We guarantee complete data privacy. Your proprietary data never leaves your environment and is never used to train public models.",
    href: "/services/enterprise-llm-deployment"
  }
];

export default function EnterpriseAISolutionsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Enterprise AI Solutions",
        "url": "https://atma-ai.co.in/services/enterprise-ai-solutions",
        "description": "Comprehensive suite of enterprise AI services including custom LLM deployment, RAG architectures, and predictive analytics."
      },
      {
        "@type": "Service",
        "name": "Enterprise AI Solutions",
        "provider": {
          "@type": "Organization",
          "name": "ATMA AI Consultancy"
        },
        "description": "Secure, custom implementation of Large Language Models and RAG pipelines for enterprise clients.",
        "areaServed": "Global"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8">
            <Server className="w-4 h-4" />
            <span>Scalable & Deterministic</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-light leading-tight mb-6">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Enterprise AI Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
            Transition from prototype to production. We architect and deploy secure, highly-optimized Generative AI systems and RAG pipelines tailored specifically for your proprietary data.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/contact`}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-[#00E5FF] text-primary-deeper px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto"
            >
              Consult an Architect <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/research/deploying-custom-llm-rag-pipelines-enterprise`}
              className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface-light border border-border text-primary-light px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto"
            >
              <BookOpen className="w-5 h-5" /> Read the Enterprise Guide
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl font-bold font-heading text-primary-light text-center mb-12">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="glass-card p-8 rounded-2xl border border-border/50 hover:border-accent/30 transition-colors flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold font-heading text-primary-light mb-4">{feature.title}</h3>
                <p className="text-muted leading-relaxed mb-6 flex-grow">{feature.description}</p>
                <Link href={`${feature.href}`} className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:text-[#00E5FF] transition-colors">
                  Explore Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Dive Guide Callout */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-20">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-accent/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-3xl rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary-light mb-4">Want to learn how we deploy custom LLMs?</h2>
                <p className="text-muted mb-6">
                  Read our comprehensive research guide: <strong className="text-foreground/90">&quot;How do I deploy a custom LLM with RAG pipelines into production for my enterprise?&quot;</strong> We dive deep into data vectorization, zero-trust security, and hybrid search architectures.
                </p>
                <Link
                  href={`/research/deploying-custom-llm-rag-pipelines-enterprise`}
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:text-[#00E5FF] transition-colors group"
                >
                  Read the Full Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-accent/10 rounded-full flex items-center justify-center border border-accent/20">
                  <BookOpen className="w-12 h-12 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </>
  );
}
