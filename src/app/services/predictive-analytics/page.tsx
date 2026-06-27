import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { LineChart, BarChart3, Database, Shield, ArrowRight, Activity, TrendingUp } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Predictive Analytics Consulting | ATMA AI",
    description: "Expert AI consulting for Predictive Analytics and Data Science. Turn raw data into strategic foresight with ATMA-AI's scalable machine learning solutions.",
    openGraph: {
      title: "Predictive Analytics Consulting | ATMA AI",
      description: "Expert AI consulting for Predictive Analytics and Data Science. Turn raw data into strategic foresight with ATMA-AI's scalable machine learning solutions.",
    },
  };
}

const faqs = [
  {
    q: "What does ATMA-AI offer in Predictive Analytics?",
    a: "We offer end-to-end AI consulting services. We take your historical enterprise data, engineer relevant features, and build highly accurate machine learning models to forecast future trends, sales, churn, and operational risks."
  },
  {
    q: "Do you integrate these models into existing dashboards?",
    a: "Yes. We don't just deliver a Jupyter notebook. We deploy these predictive models as robust APIs and integrate them directly into your existing business intelligence tools like Tableau, PowerBI, or custom React/Next.js dashboards."
  },
  {
    q: "How do you ensure the models remain accurate over time?",
    a: "Our deployments include continuous MLOps pipelines. We monitor data drift and model degradation in real-time, triggering automated retraining workflows so your forecasts never go stale."
  },
  {
    q: "Can you work with real-time streaming data?",
    a: "Absolutely. Our enterprise architecture team specializes in deploying streaming infrastructure (Kafka, Kinesis) paired with real-time inference endpoints for instant analytical insights."
  }
];

const features = [
  {
    icon: TrendingUp,
    title: "Demand Forecasting",
    description: "Predict inventory needs, sales volumes, and market trends with hyper-localized machine learning models."
  },
  {
    icon: Activity,
    title: "Real-time Anomaly Detection",
    description: "Identify fraud, network intrusions, or manufacturing defects the millisecond they occur using edge AI."
  },
  {
    icon: Database,
    title: "Scalable Data Lakes",
    description: "We architect the underlying data infrastructure needed to fuel massive predictive models without latency."
  },
  {
    icon: Shield,
    title: "Privacy-Preserving ML",
    description: "Train models on sensitive customer data using federated learning and differential privacy techniques."
  }
];

export default function PredictiveAnalyticsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Predictive Analytics Consulting",
        "provider": {
          "@type": "Organization",
          "name": "ATMA AI Consultancy"
        },
        "description": "Enterprise machine learning models for forecasting, anomaly detection, and data-driven decision making.",
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
            <LineChart className="w-4 h-4" />
            <span>AI Consulting Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-light leading-tight mb-6">
            Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-accent">Predictive Analytics</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
            ATMA-AI turns raw data into strategic foresight. As an elite AI consulting firm, we deploy scalable machine learning models that predict outcomes, optimize operations, and mitigate risks before they happen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/contact`}
              className="inline-flex items-center justify-center gap-2 bg-[#CCFF00] text-primary-dark hover:bg-[#b3ff00] px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto"
            >
              Start Forecasting <ArrowRight className="w-5 h-5" />
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
