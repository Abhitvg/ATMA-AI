"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Brain,
  Server,
  Shield,
  BarChart3,
  Cloud,
  Code2,
  GraduationCap,
  ArrowRight,
  ExternalLink,

  Globe,
  Users,
  Lightbulb,
  Target,
} from "lucide-react";

/* ====== DATA ====== */

const services = [
  {
    icon: Brain,
    title: "AI & GenAI Solutions",
    description: "Custom LLM deployment, RAG pipelines, and autonomous agents built for your enterprise data.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: BarChart3,
    title: "Data Science & Analytics",
    description: "Transform raw data into strategic foresight with predictive models and real-time dashboards.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Server,
    title: "Enterprise Architecture",
    description: "High-performance, scalable systems designed for millions of users and zero downtime.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Cloud-native migrations and DevOps pipelines that cut costs and accelerate deployment.",
    color: "from-orange-400 to-red-500",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "End-to-end web and mobile applications using modern frameworks like Next.js, React, and Node.",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity Consulting",
    description: "Zero-trust architecture, penetration testing, and compliance-first security implementations.",
    color: "from-yellow-400 to-amber-500",
  },
];

const founders = [
  {
    name: "Abhishek Singh",
    role: "Co-Founder & CEO",
    institution: "MTech, JNU",
    specialty: "Full-Stack Architecture & AI Systems",
    image: "/founders/abhishek.webp",
  },
  {
    name: "Avadhesh Kumar",
    role: "Co-Founder & Lead Engineer",
    institution: "MTech, IIT Delhi",
    specialty: "Machine Learning & Cloud Infrastructure",
    image: "/founders/avadhesh.webp",
  },
  {
    name: "Chirag Beniwal",
    role: "Co-Founder & Tech Lead",
    institution: "MTech, JNU",
    specialty: "Enterprise Systems & Data Engineering",
    image: "/founders/chirag.webp",
  },
  {
    name: "Kumar Pratyay",
    role: "Co-Founder & Full-Stack Developer",
    institution: "BTech & MBA, JNU",
    specialty: "Full-Stack Development",
    image: "/logos/atma-logo.svg",
  },
];

const portfolio = [
  {
    title: "India Eurasia Research Forum",
    category: "Institutional Platform",
    url: "https://indiaeurasia.org/",
    type: "web",
    logo: "/logos/ierf.webp",
  },
  {
    title: "IPO Mehta Mural",
    category: "Cultural Showcase",
    url: "https://ipomehta-mural.com/",
    type: "web",
    logo: "/logos/israel-embassy.webp",
  },
  {
    title: "JNU Alumni Association",
    category: "Institutional Network",
    url: "https://www.jnualumniassociation.com/",
    type: "web",
    logo: "/logos/jnu-alumni.webp",
  },
  {
    title: "Doon Silk",
    category: "E-Commerce",
    url: "https://doonsilk.com/",
    type: "web",
    logo: "/logos/doonsilk.webp",
  },
  {
    title: "UKCDP",
    category: "Enterprise Platform",
    url: "https://www.ukcdp.com/",
    type: "web",
    logo: "/logos/ukcdp.webp",
  },
  {
    title: "Himalayan Goat Meat",
    category: "E-Commerce Store",
    url: "https://shop.himalayangoatmeat.com/",
    type: "web",
    logo: "/logos/himalayan-goat.webp",
  },
  {
    title: "NCERT Digital Platform",
    category: "EdTech / Education",
    url: "https://ncert-ruby.vercel.app/explore",
    type: "web",
    logo: "/logos/ncert.svg",
  },
  {
    title: "Uttarakhand Cooperative Society",
    category: "Civic Tech Platform",
    url: "https://uk-coop-main.vercel.app/",
    type: "web",
    logo: "/logos/uttarakhand.webp",
  },
];

const values = [
  {
    icon: GraduationCap,
    title: "Academic Rigor",
    description: "Rooted in IIT and JNU research methodology. We understand the math behind the models.",
  },
  {
    icon: Target,
    title: "Precision Engineering",
    description: "Every system we build is tested, benchmarked, and optimized for peak performance.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of the curve — deploying cutting-edge tech before it becomes mainstream.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We don't just deliver projects. We become your long-term technology partners.",
  },
];

/* ====== COMPONENTS ====== */

function ServicesSection() {
  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-5 text-primary-light">
            Solutions Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Scale</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            From AI research to production deployment — our services cover the full spectrum of enterprise technology.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="group relative glass-card rounded-2xl p-8 hover:border-accent/20 transition-all duration-500 h-full cursor-pointer overflow-hidden">
                {/* Gradient accent on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading text-primary-light mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function FoundersSection() {
  return (
    <section className="py-28 relative bg-primary-deeper">
      <div className="absolute inset-0 bg-grid opacity-20" />
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Leadership</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-5 text-primary-light">
            Built by India&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Best Minds</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Our founding team brings elite academic training from IIT and JNU, combined with deep industry experience.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {founders.map((founder, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group relative glass-card rounded-2xl p-8 text-center hover:border-accent/20 transition-all duration-500 hover:-translate-y-1">
                {/* Photo */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-accent/30 group-hover:border-accent/50 transition-all duration-300 relative">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="96px"
                    className={`group-hover:scale-110 transition-transform duration-500 ${founder.name === 'Kumar Pratyay' ? 'object-contain p-3 opacity-60' : 'object-cover object-top'}`}
                  />
                </div>
                <h3 className="text-xl font-bold font-heading text-primary-light mb-1">{founder.name}</h3>
                <p className="text-accent text-sm font-medium mb-3">{founder.role}</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-4">
                  <GraduationCap className="h-3 w-3" />
                  {founder.institution}
                </div>
                <p className="text-muted text-sm">{founder.specialty}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-5 text-primary-light">
            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Track Record</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Enterprise sites, e-commerce platforms, institutional networks, and open-source civic tech.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {portfolio.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block glass-card rounded-2xl overflow-hidden hover:border-accent/20 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Color bar */}
                <div className="h-1 w-full bg-gradient-to-r from-accent to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center overflow-hidden p-1">
                      {item.logo ? (
                        <Image src={item.logo} alt={item.title} width={32} height={32} className="object-contain w-full h-full" />
                      ) : (
                        <Globe className="h-5 w-5 text-primary-dark" />
                      )}
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="font-heading font-bold text-primary-light text-sm mb-1 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted">{item.category}</p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all duration-300"
          >
            View All Case Studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="py-28 relative bg-primary-deeper">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-accent/10 border border-accent/20 mb-5">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold font-heading text-primary-light mb-2">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-accent/10 blur-[200px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-primary-light leading-tight">
            Ready to Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 animate-gradient">
              Extraordinary?
            </span>
          </h2>
          <p className="text-muted text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how ATMA can engineer the perfect technology solution for your enterprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex justify-center items-center gap-2 bg-accent text-primary-dark px-10 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-[1.03]"
            >
              Start a Conversation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex justify-center items-center gap-2 border border-foreground/15 text-foreground/90 px-10 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:border-accent/40 hover:text-accent"
            >
              Explore Services
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

const clientLogos = [
  { src: "/logos/ierf.webp", alt: "India Eurasia Research Forum" },
  { src: "/logos/israel-embassy.webp", alt: "Embassy of Israel" },
  { src: "/logos/jnu-alumni.webp", alt: "JNU Alumni Association" },
  { src: "/logos/ukcdp.webp", alt: "UKCDP" },
  { src: "/logos/himalayan-goat.webp", alt: "Himalayan Goat Meat" },
  { src: "/logos/doonsilk.webp", alt: "Doon Silk" },
  { src: "/logos/ncert.svg", alt: "NCERT" },
  { src: "/logos/uttarakhand.webp", alt: "Uttarakhand Government" },
];

function TrustedBySection() {
  return (
    <section className="py-20 bg-primary-deeper relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-muted text-sm font-semibold uppercase tracking-widest">
            Trusted by Organizations Across Sectors
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo, i) => (
              <div
                key={i}
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/90 flex items-center justify-center p-3 hover:scale-110 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 cursor-default"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
}

/* ====== HOME PAGE ====== */

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <FoundersSection />
        <PortfolioSection />
        <TrustedBySection />
        <ValuesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
