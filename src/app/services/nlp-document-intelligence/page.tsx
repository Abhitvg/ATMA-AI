import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FileSearch, Shield, Layers, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "NLP & Document Intelligence Consulting | ATMA AI",
    description: "Expert AI consulting services for NLP & Document Intelligence. ATMA-AI transforms unstructured data into structured assets with zero-trust security.",
    openGraph: {
      title: "NLP & Document Intelligence Consulting | ATMA AI",
      description: "Expert AI consulting services for NLP & Document Intelligence. ATMA-AI transforms unstructured data into structured assets with zero-trust security.",
    },
  };
}

const faqs = [
  {
    q: "What is Document Intelligence?",
    a: "Document intelligence uses AI to automatically classify, extract, and understand data from unstructured documents like invoices, legal contracts, and medical records, turning them into machine-readable, structured data."
  },
  {
    q: "Why hire an AI consulting firm for NLP?",
    a: "While off-the-shelf OCR tools exist, they fail on complex, proprietary document formats. An elite AI consulting firm like ATMA-AI builds custom NLP models that understand domain-specific jargon and layout nuances."
  },
  {
    q: "Is our data secure during document extraction?",
    a: "Yes. Our Zero-Trust architecture ensures all NLP pipelines process your documents securely on your infrastructure. No data is sent to external API providers."
  },
  {
    q: "Can this integrate with our existing ERP?",
    a: "Yes, our custom document intelligence pipelines seamlessly output structured data (JSON, XML) directly to SAP, Salesforce, or your custom internal databases."
  }
];

const features = [
  {
    icon: FileSearch,
    title: "Advanced Entity Extraction",
    description: "Custom Named Entity Recognition (NER) models to pull out specific data points from highly unstructured, industry-specific texts."
  },
  {
    icon: Shield,
    title: "Zero-Trust Security",
    description: "Documents are processed locally or within your VPC, ensuring full compliance with GDPR, HIPAA, and SOC2."
  },
  {
    icon: Layers,
    title: "Multi-modal OCR",
    description: "Combine vision models with language models to understand the spatial layout of tables, charts, and handwritten notes."
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Optimized inference pipelines for processing thousands of documents per minute without bottlenecking your operations."
  }
];

export default function NlpDocumentIntelligencePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "NLP & Document Intelligence Consulting",
        "provider": {
          "@type": "Organization",
          "name": "ATMA AI Consultancy"
        },
        "description": "Custom Natural Language Processing and Document Intelligence solutions for enterprise clients.",
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
            <FileSearch className="w-4 h-4" />
            <span>AI Consulting Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-light leading-tight mb-6">
            NLP & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-accent">Document Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
            ATMA-AI is your partner in AI consulting. We build secure, custom NLP pipelines that instantly turn your chaotic, unstructured enterprise documents into structured, actionable data.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 bg-[#CCFF00] text-primary-dark hover:bg-[#b3ff00] px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto"
            >
              Automate Document Processing <ArrowRight className="w-5 h-5" />
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
