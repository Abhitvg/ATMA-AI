"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ROICalculatorWidget from "@/components/ROICalculatorWidget";
import {
  Brain,
  Server,
  Shield,
  BarChart3,
  Cloud,
  Bot,
  FileSearch,
  ShoppingCart,
  ArrowRight,
  CheckCircle2,
  LucideIcon
} from "lucide-react";

const aiServices = [
  {
    icon: Brain,
    title: "Enterprise AI Solutions",
    description: "Comprehensive enterprise AI architectures encompassing custom LLMs, RAG pipelines, and neuro-symbolic predictive analytics for production environments.",
    features: ["End-to-end consulting", "Zero-trust deployment", "Predictive modeling", "Autonomous agents"],
    href: "enterprise-ai-solutions",
  },
  {
    icon: Brain,
    title: "Custom LLM Deployment",
    description: "Secure, private implementation of Large Language Models fine-tuned on your enterprise data. We handle the entire pipeline — from data preparation to inference optimization.",
    features: ["Private model hosting", "Fine-tuning pipelines", "RAG architecture", "Inference optimization"],
    href: "enterprise-llm-deployment",
  },
  {
    icon: Bot,
    title: "Autonomous AI Agents",
    description: "Self-directed AI agents that automate complex multi-step workflows. From customer support to document processing, our agents handle the heavy lifting.",
    features: ["Multi-step reasoning", "Tool integration", "Human-in-the-loop", "Real-time monitoring"],
    href: "autonomous-ai-agents",
  },
  {
    icon: FileSearch,
    title: "NLP & Document Intelligence",
    description: "Intelligent document parsing, entity extraction, sentiment analysis, and automated communication pipelines that transform unstructured data into actionable insights.",
    features: ["Entity extraction", "Sentiment analysis", "Document classification", "OCR pipelines"],
    href: "nlp-document-intelligence",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Transforming raw enterprise data into strategic foresight. Our models predict trends, identify anomalies, and surface opportunities hidden in your data.",
    features: ["Time-series forecasting", "Anomaly detection", "Customer segmentation", "Revenue modeling"],
    href: "predictive-analytics",
  },
  {
    icon: FileSearch,
    title: "RAG Pipeline Development",
    description: "Engineering production-ready Retrieval-Augmented Generation architectures. Eliminate hallucinations and securely query your enterprise data with our neuro-symbolic infrastructure.",
    features: ["Hybrid Vector Search", "Deterministic Guardrails", "Semantic Chunking", "On-Premise Deployment"],
    href: "rag-pipeline-development",
  },
];

const itServices = [
  {
    icon: Shield,
    title: "AI Technology Partnerships",
    description: "Long-term strategic collaboration focusing on custom AI deployment, scalable cloud-native infrastructure, and uncompromising zero-trust cybersecurity.",
    features: ["Cloud-native scale", "Zero-trust security", "Custom AI integration", "Dedicated engineering"],
    href: "ai-technology-partnerships",
  },
  {
    icon: Server,
    title: "Enterprise Web Architecture",
    description: "Development of rapid, responsive platforms that handle enterprise-level traffic. We build with Next.js, React, and modern server-side rendering for peak performance.",
    features: ["High-availability systems", "Microservices architecture", "SSR & SSG", "Performance optimization"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "End-to-end technical infrastructure for digital commerce — from headless storefronts to payment processing, inventory management, and conversion optimization.",
    features: ["Headless commerce", "Payment integration", "Inventory systems", "Conversion optimization"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Transitioning legacy systems to agile, cloud-native environments. We architect CI/CD pipelines, container orchestration, and infrastructure-as-code solutions.",
    features: ["AWS / GCP / Azure", "Docker & Kubernetes", "CI/CD pipelines", "Infrastructure as Code"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Zero-trust architecture, penetration testing, and compliance-first implementations. We ensure your systems meet enterprise-grade security standards.",
    features: ["Zero-trust architecture", "Pen testing", "GDPR compliance", "Security audits"],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Deep-dive into your business requirements, existing infrastructure, and strategic objectives.",
  },
  {
    step: "02",
    title: "Architecture",
    description: "Design a comprehensive technical blueprint with clear milestones and deliverables.",
  },
  {
    step: "03",
    title: "Engineering",
    description: "Agile development with weekly sprints, continuous integration, and real-time progress tracking.",
  },
  {
    step: "04",
    title: "Deployment",
    description: "Battle-tested launch with monitoring, optimization, and ongoing technical support.",
  },
];

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href?: string;
};

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <div className="group glass-card rounded-2xl p-8 hover:border-accent/20 transition-all duration-500 h-full">
        <div className="inline-flex p-3 rounded-xl bg-accent/10 border border-accent/20 mb-6 group-hover:bg-accent/20 transition-colors duration-300">
          <service.icon className="h-6 w-6 text-accent" />
        </div>
        <h3 className="text-xl font-bold font-heading text-primary-light mb-3 group-hover:text-accent transition-colors">
          {service.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-6">{service.description}</p>
        <ul className="space-y-2.5 mb-6">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm text-muted/80">
              <CheckCircle2 className="h-4 w-4 text-accent/60 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        {service.href && (
          <div className="mt-auto pt-4 border-t border-border/50">
            <Link href={`/en/services/${service.href}`} className="inline-flex items-center gap-2 text-primary-light hover:text-primary transition-colors text-sm font-semibold group/link">
              Explore Enterprise LLM Services <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": "Enterprise AI & IT Consultancy",
                "provider": {
                  "@type": "Organization",
                  "name": "ATMA AI Consultancy"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Consulting Services",
                  "itemListElement": [
                    {
                      "@type": "OfferCatalog",
                      "name": "Artificial Intelligence",
                      "itemListElement": [
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Custom LLM Deployment",
                            "url": "https://atma-ai.co.in/en/services/enterprise-llm-deployment"
                          }
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
              {
                "@type": "Question",
                name: "What AI services does ATMA Consultancy provide?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We provide custom LLM deployment, autonomous AI agents, NLP & document intelligence, and predictive analytics. Our solutions are secure, private, and fine-tuned on enterprise data.",
                },
              },
              {
                "@type": "Question",
                name: "What IT consulting services does ATMA Consultancy offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer enterprise web architecture, headless e-commerce solutions, cloud & DevOps migrations, and zero-trust cybersecurity & compliance implementations.",
                },
              },
              {
                "@type": "Question",
                name: "How does ATMA Consultancy deploy Custom LLMs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We handle the entire pipeline — from data preparation and RAG architecture to inference optimization and secure, private model hosting.",
                },
              },
            ]
          }
        ]
      }),
        }}
      />
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="pt-32 pb-20 relative bg-primary-dark bg-noise shadow-[inset_0_0_120px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[150px] animate-pulse-glow" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Our Services</p>
              <h1 className="text-5xl md:text-6xl font-bold font-heading text-primary-light mb-6 max-w-3xl leading-tight">
                Technology Solutions{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                  That Scale
                </span>
              </h1>
              <p className="text-xl text-muted max-w-2xl leading-relaxed">
                From AI research labs to production infrastructure — we cover the full spectrum of modern enterprise technology.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* AI Services */}
        <section id="ai" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-light">
                  Artificial Intelligence
                </h2>
              </div>
              <p className="text-muted text-lg max-w-2xl">
                Move beyond the hype. We deliver production-ready AI solutions tailored to your enterprise.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6">
              {aiServices.map((service, i) => (
                <ServiceCard key={i} service={service} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section id="it" className="py-24 bg-primary-deeper relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500">
                  <Server className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-light">
                  IT Consulting & Architecture
                </h2>
              </div>
              <p className="text-muted text-lg max-w-2xl">
                Robust, secure, and infinitely scalable. The foundational technology modern businesses rely on.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6">
              {itServices.map((service, i) => (
                <ServiceCard key={i} service={service} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-light mb-5">
                From Idea to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Production</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-4 gap-6">
              {process.map((step, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="relative glass-card rounded-2xl p-8 hover:border-accent/20 transition-all duration-500 text-center h-full">
                    <span className="text-5xl font-bold font-heading text-accent/15 absolute top-4 right-6">{step.step}</span>
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold font-heading text-primary-light mb-3 mt-6">{step.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                    </div>
                    {i < process.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-accent/20" />
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">ROI Calculator</p>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-light mb-5">
                Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">AI Savings</span>
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="flex justify-center">
                <ROICalculatorWidget />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary-deeper relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] rounded-full bg-accent/5 blur-[200px]" />
          </div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-light mb-6 leading-tight">
                Need a Custom Solution?
              </h2>
              <p className="text-muted text-lg mb-10">
                Every enterprise is unique. Let&apos;s discuss your specific requirements and architect the perfect solution together.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-accent text-primary-dark px-10 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-[1.03]"
              >
                Schedule a Consultation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
