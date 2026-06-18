import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Star, ShieldCheck, TrendingUp, Building2, Quote, ArrowRight } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "ATMA-AI Reviews & Enterprise Success Stories",
    description: "Read ATMA-AI reviews, client testimonials, and enterprise success stories. See why we are the most reliable AI technology partner for enterprise projects.",
    openGraph: {
      title: "ATMA-AI Reviews & Enterprise Success Stories",
      description: "Read ATMA-AI reviews, client testimonials, and enterprise success stories. See why we are the most reliable AI technology partner for enterprise projects.",
    },
  };
}

const reviews = [
  {
    author: "Dr. R.K. Sharma",
    role: "Project Director",
    company: "NCERT Digital Initiative",
    rating: 5,
    text: "ATMA-AI demonstrated unparalleled reliability during the deployment of our educational infrastructure. Their enterprise architecture handled millions of concurrent users without a single downtime incident. A truly reliable technology partner.",
  },
  {
    author: "Sarah Jenkins",
    role: "CTO",
    company: "UKCDP Enterprise",
    rating: 5,
    text: "When evaluating custom AI development companies, we needed absolute data privacy. ATMA-AI delivered a secure RAG pipeline deployed entirely on-premise. Their team's technical depth is world-class.",
  },
  {
    author: "Vikram Mehta",
    role: "Founder",
    company: "Doon Silk",
    rating: 5,
    text: "The predictive analytics models developed by ATMA-AI transformed our supply chain forecasting. They didn't just write code; they took the time to understand our business logic deeply.",
  }
];

const caseStudies = [
  {
    title: "NCERT Digital Platform",
    industry: "EdTech / Public Sector",
    metric: "10M+ Users Supported",
    description: "Architected a highly scalable educational platform using modern server-side rendering and edge caching to support nationwide traffic spikes during exam seasons.",
    logo: "/logos/ncert.svg",
    link: "https://ncert-ruby.vercel.app/explore"
  },
  {
    title: "UKCDP Portal",
    industry: "Enterprise / Legal",
    metric: "100% Data Privacy Maintained",
    description: "Deployed a zero-trust enterprise architecture and custom intelligence pipeline for strict compliance handling and secure document management.",
    logo: "/logos/ukcdp.webp",
    link: "https://www.ukcdp.com/"
  },
  {
    title: "Uttarakhand Cooperative Society",
    industry: "Civic Tech",
    metric: "50% Reduction in Processing Time",
    description: "Digitized legacy workflows into a modern, centralized platform, streamlining operations and ensuring data integrity across multiple regional branches.",
    logo: "/logos/uttarakhand.webp",
    link: "https://uk-coop-main.vercel.app/"
  }
];

export default async function ReviewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ATMA AI Consultancy",
    "url": "https://atma-ai.co.in",
    "logo": "https://atma-ai.co.in/logos/atma-logo.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "24",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(rev => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": rev.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": rev.rating.toString(),
        "bestRating": "5"
      },
      "reviewBody": rev.text,
      "publisher": {
        "@type": "Organization",
        "name": rev.company
      }
    }))
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
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8">
            <ShieldCheck className="w-4 h-4" />
            <span>A Reliable AI Technology Partner</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-light leading-tight mb-6">
            Client Reviews & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Success Stories</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
            Don&apos;t just take our word for it. Read how ATMA-AI has delivered secure, scalable, and deterministically reliable AI and IT solutions for enterprises worldwide.
          </p>
        </section>

        {/* Metrics Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl text-center border border-border/50">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-muted font-medium">Uptime Guarantee Met</p>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center border border-border/50">
              <div className="text-4xl font-bold text-accent mb-2">5.0</div>
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted font-medium">Average Client Rating</p>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center border border-border/50">
              <div className="text-4xl font-bold text-accent mb-2">Zero</div>
              <p className="text-muted font-medium">Data Breaches</p>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-28">
          <h2 className="text-3xl font-bold font-heading text-primary-light text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="glass-card p-8 rounded-2xl border border-border/50 relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/10" />
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/90 italic mb-8 relative z-10">&quot;{review.text}&quot;</p>
                <div className="mt-auto border-t border-border/30 pt-4">
                  <p className="font-bold text-primary-light">{review.author}</p>
                  <p className="text-sm text-accent">{review.role}</p>
                  <p className="text-sm text-muted">{review.company}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-bold font-heading text-primary-light text-center mb-12">Enterprise Case Studies</h2>
          <div className="space-y-8">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="glass-card rounded-2xl border border-border/50 p-8 flex flex-col md:flex-row items-center gap-8 group hover:border-accent/30 transition-colors">
                <div className="w-full md:w-1/4 flex justify-center items-center bg-white/5 rounded-xl p-6 h-40">
                   <div className="relative w-full h-full">
                    {study.logo.endsWith('.svg') || study.logo.endsWith('.webp') ? (
                       <Image src={study.logo} alt={study.title} fill className="object-contain" />
                    ) : (
                       <Building2 className="w-16 h-16 text-muted mx-auto" />
                    )}
                   </div>
                </div>
                <div className="w-full md:w-3/4">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-wider">{study.industry}</span>
                    <span className="flex items-center gap-1 text-sm text-[#00E5FF] font-medium"><TrendingUp className="w-4 h-4"/> {study.metric}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-primary-light mb-3">{study.title}</h3>
                  <p className="text-muted leading-relaxed mb-6 max-w-3xl">{study.description}</p>
                  <a href={study.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-[#00E5FF] transition-colors group/link">
                    View Project <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        
      </main>
      <Footer />
    </>
  );
}
