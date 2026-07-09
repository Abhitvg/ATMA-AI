import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Shield, ArrowRight, Lock, Workflow, Cloud, BookOpen } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "AI Technology Partnerships | Cloud-Native & Cybersecurity",
    description: "Looking for a long-term AI technology partner? We architect scalable cloud-native infrastructure and zero-trust cybersecurity for enterprise AI implementations.",
    openGraph: {
      title: "AI Technology Partnerships | Cloud-Native & Cybersecurity",
      description: "Looking for a long-term AI technology partner? We architect scalable cloud-native infrastructure and zero-trust cybersecurity for enterprise AI implementations.",
    },
  };
}

const pillars = [
  {
    icon: Cloud,
    title: "Cloud-Native Infrastructure",
    description: "We build scalable, highly available architectures using Kubernetes and microservices, ensuring your AI applications can handle massive enterprise workloads effortlessly."
  },
  {
    icon: Lock,
    title: "Zero-Trust Cybersecurity",
    description: "Security is non-negotiable. We deploy models in isolated VPCs with strict Role-Based Access Control (RBAC) to ensure your proprietary data remains safe."
  },
  {
    icon: Workflow,
    title: "Custom AI Pipelines",
    description: "Beyond basic API wrappers, we engineer deep integrations—from ETL data pipelines to Retrieval-Augmented Generation (RAG) and predictive models."
  },
  {
    icon: Shield,
    title: "Deterministic Reliability",
    description: "We utilize Neuro-Symbolic AI approaches to ground large language models, eliminating hallucinations and ensuring factual, deterministic outcomes."
  }
];

export default function AITechPartnershipsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "AI Technology Partnerships | Cloud-Native Infrastructure",
        "url": "https://atma-ai.co.in/services/ai-technology-partnerships",
        "description": "Enterprise AI partnerships focusing on custom deployment, cloud-native scalability, and zero-trust security."
      },
      {
        "@type": "Service",
        "name": "AI Technology Partnerships",
        "provider": {
          "@type": "Organization",
          "name": "ATMA AI Consultancy"
        },
        "description": "Long-term technology partnerships for enterprises requiring secure, scalable, and custom AI implementations.",
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
            <Shield className="w-4 h-4" />
            <span>Your Strategic Technology Partner</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-light leading-tight mb-6">
            Long-Term <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">AI Technology Partnerships</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
            Stop relying on generic AI wrappers. Partner with ATMA-AI to architect custom, cloud-native intelligence platforms secured by uncompromising zero-trust cybersecurity standards.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/contact`}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-[#00E5FF] text-primary-deeper px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto"
            >
              Consult an Architect <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl font-bold font-heading text-primary-light text-center mb-12">The Pillars of a Reliable AI Partner</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="glass-card p-8 rounded-2xl border border-border/50 hover:border-accent/30 transition-colors flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <pillar.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold font-heading text-primary-light mb-4">{pillar.title}</h3>
                <p className="text-muted leading-relaxed mb-6 flex-grow">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Dive Guide Callout */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-20">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-accent/30 relative overflow-hidden">
            <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-3xl rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary-light mb-4">How do you evaluate an AI Partner?</h2>
                <p className="text-muted mb-6">
                  Read our in-depth research guide: <strong className="text-foreground/90">&quot;How to Find a Long-Term AI Technology Partner for Cloud-Native Infrastructure and Cybersecurity Implementation.&quot;</strong> Learn the specific technical questions you must ask before signing an enterprise contract.
                </p>
                <Link
                  href={`/research/finding-long-term-ai-technology-partner`}
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
