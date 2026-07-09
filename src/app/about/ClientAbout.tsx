"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { GraduationCap, Code2, Lightbulb, Target, BookOpen, Trophy, ArrowRight } from "lucide-react";

const founders = [
  {
    name: "Abhishek Singh",
    role: "Co-Founder & CEO",
    institution: "Master's, JNU",
    specialty: "Visionary Leadership & Technical Architecture",
    bio: "Abhishek leads the technical vision at ATMA. With a Master's in Technology from Jawaharlal Nehru University, he brings deep expertise in full-stack web architecture, AI/ML systems integration, and modern DevOps practices. He has architected platforms serving institutions, e-commerce businesses, and international research organizations.",
    image: "/founders/abhishek.webp",
    linkedin: "https://www.linkedin.com/in/abhisheksingh22141",
  },
  {
    name: "Avadhesh Kumar",
    role: "Co-Founder & CTO",
    institution: "Master's, IIT Delhi",
    specialty: "AI Innovation & Core Infrastructure",
    bio: "An IITian with a relentless passion for scalable engineering, Avadhesh specializes in machine learning pipelines, cloud-native architectures, and education technology. His work on the NCERT digital platform demonstrates his ability to deliver fully engineered products that serve millions of users.",
    image: "/founders/avadhesh.webp",
    linkedin: "https://www.linkedin.com/in/avadhak",
  },
  {
    name: "Chirag Beniwal",
    role: "Co-Founder & CMO",
    institution: "Master's, JNU",
    specialty: "Brand Strategy & Enterprise Growth",
    bio: "Chirag brings precision engineering to every project. A JNU alumnus specializing in enterprise data systems, he leads the design and implementation of robust, high-throughput architectures. His methodical approach ensures that every system we deliver is production-ready and battle-tested.",
    image: "/founders/chirag.webp",
    linkedin: "https://www.linkedin.com/in/chirag-beniwal-08691a1b4",
  },
  {
    name: "Kumar Pratyay",
    role: "Co-Founder & CFO",
    institution: "BTech & Master's in Management, JNU",
    specialty: "Financial Strategy & Operations",
    bio: "Kumar Pratyay is a full-stack developer bridging engineering with management. With a BTech in Computer Science and a Master's in Management from JNU, he brings a unique blend of technical execution and product strategy to the team, delivering scalable and maintainable solutions.",
    image: "/founders/pratyay.jpeg",
    linkedin: "",
  },
];

const milestones = [
  { icon: Trophy, label: "Projects Delivered", value: "50+" },
  { icon: BookOpen, label: "Years Combined Experience", value: "15+" },
  { icon: Code2, label: "Lines of Production Code", value: "500K+" },
  { icon: Target, label: "Client Retention Rate", value: "98%" },
];

const philosophy = [
  {
    icon: GraduationCap,
    title: "Academic Foundation",
    description: "We don't chase trends. Our solutions are grounded in peer-reviewed research, mathematical rigor, and first-principles thinking from India's top institutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation with Purpose",
    description: "Every technology choice we make is deliberate. We evaluate frameworks, models, and architectures against real-world constraints — not just benchmarks.",
  },
  {
    icon: Target,
    title: "Results-Driven Execution",
    description: "Theory without execution is academic exercise. We ship production-ready systems that handle enterprise traffic, meet compliance requirements, and deliver measurable ROI.",
  },
];

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who founded ATMA Consultancy Services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ATMA Consultancy Services was founded by Abhishek Singh (CEO), Avadhesh Kumar (Lead Engineer), Chirag Beniwal (Tech Lead), and Kumar Pratyay. The founders are alumni of Jawaharlal Nehru University (JNU) and Indian Institute of Technology (IIT) Delhi.",
                },
              },
              {
                "@type": "Question",
                name: "What is the philosophy behind ATMA Consultancy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our philosophy is grounded in academic rigor, first-principles thinking, and results-driven execution. We bridge the gap between cutting-edge AI/IT research and enterprise-grade deployment.",
                },
              },
              {
                "@type": "Question",
                name: "What kind of experience does the ATMA team have?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The ATMA team has over 15 years of combined experience, having delivered 50+ enterprise projects and written over 500K lines of production code with a 98% client retention rate.",
                },
              },
            ],
          }),
        }}
      />
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="pt-32 pb-20 relative bg-primary-dark bg-noise shadow-[inset_0_0_120px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="hidden md:block absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[150px] animate-pulse-glow" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="animate-float" style={{ animationDuration: '8s' }}>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">About ATMA</p>
              <h1 className="text-5xl md:text-6xl font-bold font-heading text-primary-light mb-6 max-w-3xl leading-tight">
                World-Class Engineering Begins with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">World-Class Minds</span>
              </h1>
              <p className="text-xl text-muted max-w-2xl leading-relaxed">
                Born from a shared vision at India&apos;s premier institutes, ATMA bridges the gap between cutting-edge research and enterprise-grade execution.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-primary-deeper relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-light mb-6">Our Story</h2>
                <div className="space-y-5 text-muted leading-relaxed">
                  <p>
                    ATMA Consultancy Services was founded by three engineers who shared a singular belief: that India&apos;s brightest technical minds could solve the world&apos;s most complex enterprise challenges — if given the right framework.
                  </p>
                  <p>
                    We met in the corridors of JNU and IIT, where late-night research sessions and intense technical debates forged not just friendships, but a shared standard of excellence. When we stepped into industry, we found a gap — between what AI and IT could achieve and what most agencies were delivering.
                  </p>
                  <p>
                    ATMA exists to close that gap. We don&apos;t just write code — we engineer strategic advantages. Whether it&apos;s deploying large language models for enterprise automation, architecting high-traffic e-commerce ecosystems, or contributing to critical open-source civic tech, we apply the same rigorous standard.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.15}>
                <div className="grid grid-cols-2 gap-4">
                  {milestones.map((m, i) => (
                    <div key={i} className="glass-card rounded-2xl p-6 text-center hover:border-accent/20 transition-all duration-500">
                      <m.icon className="h-6 w-6 text-accent mx-auto mb-3" />
                      <p className="text-3xl font-bold font-heading text-accent text-glow mb-1">{m.value}</p>
                      <p className="text-xs text-muted">{m.label}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Leadership & Core</p>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-light mb-5">
                Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Directors & Team</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {founders.map((founder, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="group glass-card rounded-2xl overflow-hidden hover:border-accent/20 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                    {/* Photo */}
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={founder.image}
                        alt={`${founder.name} - ${founder.role} at ATMA Consultancy`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        priority={i === 0}
                        className={`group-hover:scale-105 transition-transform duration-700 ${founder.name === 'Kumar Pratyay' ? 'object-contain p-12 opacity-40' : 'object-cover object-top'}`}
                        onError={(e) => { e.currentTarget.src = "/logos/atma-logo.svg"; e.currentTarget.className = "object-contain p-8 group-hover:scale-105 transition-transform duration-700 opacity-50"; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                      {/* Institution badge over photo */}
                      <div className="absolute bottom-4 left-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-dark/80 backdrop-blur-sm border border-accent/20 text-accent text-xs font-medium">
                          <GraduationCap className="h-3 w-3" />
                          {founder.institution}
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold font-heading text-primary-light">{founder.name}</h3>
                        <p className="text-accent text-sm font-medium mt-1">{founder.role}</p>
                      </div>
                      
                      <p className="text-muted text-sm leading-relaxed flex-grow">{founder.bio}</p>
                      
                      {/* Social links */}
                      <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                        {founder.linkedin && (
                          <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-surface hover:bg-accent/10 text-muted hover:text-accent transition-all duration-300" aria-label={`${founder.name} LinkedIn`}>
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                          </a>
                        )}
                        <span className="ml-auto text-xs text-accent/60 self-center font-medium">{founder.specialty}</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 bg-primary-deeper relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Philosophy</p>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-light">
                How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Think</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {philosophy.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="glass-card rounded-2xl p-8 hover:border-accent/20 transition-all duration-500 h-full">
                    <div className="inline-flex p-3 rounded-xl bg-accent/10 border border-accent/20 mb-5">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-primary-light mb-3">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden bg-primary-dark">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-light mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
                Partner with India&apos;s leading AI consultancy to deploy secure, custom Large Language Models and scale your business with agentic AI.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-primary-dark bg-accent hover:bg-accent-light rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(var(--accent-rgb),0.3)] hover:shadow-[0_0_50px_rgba(var(--accent-rgb),0.5)] transform hover:-translate-y-1"
              >
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
