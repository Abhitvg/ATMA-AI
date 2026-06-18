import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Bot, Shield, Cpu, Zap, ArrowRight, CheckCircle2, Layers } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Autonomous AI Agents Consulting Services | ATMA AI",
    description: "Expert AI consulting services for Autonomous AI Agents. ATMA-AI builds self-directed, neuro-symbolic agents that automate complex enterprise workflows securely.",
    openGraph: {
      title: "Autonomous AI Agents Consulting Services | ATMA AI",
      description: "Expert AI consulting services for Autonomous AI Agents. ATMA-AI builds self-directed, neuro-symbolic agents that automate complex enterprise workflows securely.",
    },
  };
}

const faqs = [
  {
    q: "What is an autonomous AI agent?",
    a: "An autonomous AI agent is a system that can understand a high-level goal, break it down into a multi-step plan, and execute those steps by interacting with various software tools, APIs, and databases without constant human intervention."
  },
  {
    q: "How does ATMA-AI approach AI consulting for autonomous agents?",
    a: "As an elite AI consulting firm, we don't just use standard APIs. We architect custom, neuro-symbolic agents that use deterministic reasoning to guarantee safe and predictable execution of enterprise workflows."
  },
  {
    q: "Are these AI agents secure for enterprise data?",
    a: "Absolutely. Our agents operate strictly within your Virtual Private Cloud (VPC) with granular Role-Based Access Control (RBAC). We implement 'human-in-the-loop' checkpoints for any critical or destructive actions."
  },
  {
    q: "What kind of workflows can autonomous agents automate?",
    a: "They excel at complex, repetitive tasks like multi-source data aggregation, customer support ticket resolution, automated software testing, and dynamic supply chain route optimization."
  }
];

const features = [
  {
    icon: Cpu,
    title: "Multi-Step Reasoning",
    description: "Agents capable of chain-of-thought reasoning to navigate ambiguity and execute complex, dependent tasks flawlessly."
  },
  {
    icon: Shield,
    title: "Verifiable Safety Bounds",
    description: "Mathematical safety constraints that prevent runaway agent loops and ensure compliance with enterprise policies."
  },
  {
    icon: Bot,
    title: "Custom Tool Integration",
    description: "We give our agents 'hands' by integrating them securely with your existing tech stack—Salesforce, SAP, AWS, and proprietary APIs."
  },
  {
    icon: Zap,
    title: "Edge & On-Premise Capabilities",
    description: "Run autonomous agents locally on edge hardware or internal servers for absolute privacy and zero cloud latency."
  }
];

export default async function AutonomousAgentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Autonomous AI Agent Consulting Services",
        "provider": {
          "@type": "Organization",
          "name": "ATMA AI Consultancy"
        },
        "description": "Custom development and deployment of autonomous, multi-step AI agents for enterprise automation.",
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
            <span>AI Consulting Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-light leading-tight mb-6">
            Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-accent">Autonomous AI Agents</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
            ATMA-AI is a premier AI consulting partner. We engineer self-directed, neuro-symbolic AI agents that automate complex, multi-step workflows securely within your enterprise infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 bg-[#CCFF00] text-primary-dark hover:bg-[#b3ff00] px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto"
            >
              Automate Your Workflows <ArrowRight className="w-5 h-5" />
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
            <h2 className="text-3xl font-bold font-heading text-primary-light text-center mb-12">Why Choose ATMA-AI?</h2>
            <div className="space-y-6">
              {[
                "Unmatched academic rigor from IIT and JNU alumni.",
                "Deterministic execution ensures zero unexpected API behaviors.",
                "Human-in-the-loop (HITL) interfaces for critical business decisions.",
                "Complete ownership of your models and data."
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
