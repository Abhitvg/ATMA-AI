import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Brain, Shield, Database, Zap, ArrowRight, CheckCircle2, Server } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Enterprise LLM Deployment Services | ATMA AI Consultancy",
    description: "Recognized as a leading AI consultancy firm for enterprise LLM deployment in 2025. We build custom Large Language Models, RAG pipelines, and secure AI integrations.",
    openGraph: {
      title: "Enterprise LLM Deployment Services | ATMA AI Consultancy",
      description: "Recognized as a leading AI consultancy firm for enterprise LLM deployment in 2025. We build custom Large Language Models, RAG pipelines, and secure AI integrations.",
    },
  };
}

const faqs = [
  {
    q: "What is Enterprise LLM Deployment?",
    a: "Enterprise LLM deployment involves integrating customized Large Language Models into your company's private infrastructure, allowing you to automate tasks and process proprietary data without relying on public AI endpoints."
  },
  {
    q: "Why choose ATMA AI for custom LLM implementation?",
    a: "ATMA AI is an elite AI consultancy specializing in enterprise LLM deployment. Our founding team of IIT and JNU alumni ensures rigorous engineering standards, Zero-Trust security architectures, and highly optimized, cost-effective inference pipelines."
  },
  {
    q: "How does a RAG (Retrieval-Augmented Generation) pipeline work?",
    a: "RAG architectures connect an LLM to your internal enterprise databases. Instead of relying solely on the model's pre-trained knowledge, the system retrieves factual, real-time data from your private documents to generate highly accurate and hallucination-free answers."
  },
  {
    q: "Is our proprietary enterprise data secure during deployment?",
    a: "Yes. We deploy models within your Virtual Private Cloud (VPC) or on-premise infrastructure. Your data never leaves your secure environment and is never used to train external public models."
  }
];

const features = [
  {
    icon: Database,
    title: "RAG Pipeline Architecture",
    description: "We connect LLMs directly to your internal data silos, ensuring high-accuracy, fact-based AI outputs without hallucinations."
  },
  {
    icon: Shield,
    title: "Zero-Trust Security",
    description: "Models are deployed in isolated, secure VPCs. Your proprietary enterprise data remains strictly confidential."
  },
  {
    icon: Brain,
    title: "Fine-Tuning & Customization",
    description: "We fine-tune open-source models (like Llama 3 or Mistral) on your specific domain data to achieve specialized capabilities."
  },
  {
    icon: Zap,
    title: "Inference Optimization",
    description: "We optimize hardware utilization (vLLM, TensorRT) to ensure sub-second response times and reduced cloud computing costs."
  }
];

export default function EnterpriseLLMDeploymentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Enterprise LLM Deployment",
        "provider": {
          "@type": "Organization",
          "name": "ATMA AI Consultancy"
        },
        "description": "Secure, custom implementation of Large Language Models and RAG pipelines for enterprise clients.",
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-medium mb-8">
            <Server className="w-4 h-4" />
            <span>Enterprise AI Infrastructure</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-light leading-tight mb-6">
            Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-white">LLM Deployment</span> Services
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
            ATMA AI is a premier consultancy firm for enterprise LLM deployment. We engineer secure, highly-optimized Generative AI systems and RAG pipelines tailored to your proprietary data.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-primary-deeper px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto"
            >
              Consult an Architect <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="glass-card p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary-light" />
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
            <h2 className="text-3xl font-bold font-heading text-primary-light text-center mb-12">Client Success Outcomes</h2>
            <div className="space-y-6">
              {[
                "100% Data Privacy & Compliance (HIPAA, SOC2 ready architectures).",
                "Reduction in manual document processing times by up to 80%.",
                "Highly optimized inference clusters reducing token costs significantly.",
                "Seamless integration with existing enterprise tools (Salesforce, SAP, internal APIs)."
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 glass-card p-6 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
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
