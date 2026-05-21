"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { GraduationCap, Code2, Lightbulb, Target, BookOpen, Trophy } from "lucide-react";

const founders = [
  {
    name: "Abhishek Singh",
    role: "Co-Founder & CEO",
    institution: "MTech, JNU",
    specialty: "Full-Stack Architecture & AI Systems",
    bio: "Abhishek leads the technical vision at ATMA. With a Master's in Technology from Jawaharlal Nehru University, he brings deep expertise in full-stack web architecture, AI/ML systems integration, and modern DevOps practices. He has architected platforms serving institutions, e-commerce businesses, and international research organizations.",
    image: "/founders/abhishek.webp",
  },
  {
    name: "Avadhesh Kumar",
    role: "Co-Founder & Lead Engineer",
    institution: "MTech, IIT Delhi",
    specialty: "Machine Learning & Cloud Infrastructure",
    bio: "An IITian with a relentless passion for scalable engineering, Avadhesh specializes in machine learning pipelines, cloud-native architectures, and education technology. His work on the NCERT digital platform demonstrates his ability to deliver fully engineered products that serve millions of users.",
    image: "/founders/avadhesh.webp",
  },
  {
    name: "Chirag Beniwal",
    role: "Co-Founder & Tech Lead",
    institution: "MTech, JNU",
    specialty: "Enterprise Systems & Data Engineering",
    bio: "Chirag brings precision engineering to every project. A JNU alumnus specializing in enterprise data systems, he leads the design and implementation of robust, high-throughput architectures. His methodical approach ensures that every system we deliver is production-ready and battle-tested.",
    image: "/founders/chirag.webp",
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
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="pt-32 pb-20 relative bg-primary-dark">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[150px]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">About ATMA</p>
              <h1 className="text-5xl md:text-6xl font-bold font-heading text-primary-light mb-6 max-w-3xl leading-tight">
                World-Class Engineering Begins with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">World-Class Minds</span>
              </h1>
              <p className="text-xl text-muted max-w-2xl leading-relaxed">
                Born from a shared vision at India&apos;s premier institutes, ATMA bridges the gap between cutting-edge research and enterprise-grade execution.
              </p>
            </AnimatedSection>
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
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Leadership</p>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-light mb-5">
                Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Founders</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {founders.map((founder, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="group glass-card rounded-2xl overflow-hidden hover:border-accent/20 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                    {/* Photo */}
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={i === 0}
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
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
                      <p className="text-xs text-accent/60 mt-4 pt-4 border-t border-border font-medium">{founder.specialty}</p>
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
      </main>
      <Footer />
    </>
  );
}
