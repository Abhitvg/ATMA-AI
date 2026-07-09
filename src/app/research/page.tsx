import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { getResearchPosts } from "@/lib/mdx";
import {
  Brain,
  Cpu,
  Zap,
  Plane,
  Factory,
  Eye,
  Radio,
  ArrowRight,
  BrainCircuit,
  ShieldCheck,
  Activity,
} from "lucide-react";

/* ── DATA ── */

const techItems = [
  {
    title: "Hierarchical Reasoning",
    subtitle:
      "Utilizing explicit executive Working Memory and bilateral PFC-parietal circuits for multi-step stateful decision making.",
    icon: Brain,
  },
  {
    title: "INT8 Quantization",
    subtitle:
      "Deployed on NVIDIA Jetson Orin/Xavier. Custom TensorRT export pipeline. <15W Power Envelope.",
    icon: Cpu,
  },
  {
    title: "Linear-Time Context",
    subtitle:
      "Selective state-space mechanisms to solve Transformer latency bottlenecks in GPS-denied environments.",
    icon: Zap,
  },
];

const useCases = [
  {
    icon: Plane,
    title: "GPS-Denied Navigation",
    sector: "Aerospace / Defense",
    problem:
      "In signal-jammed environments, UAVs relying on GPS or cloud-link become inert or erratic.",
    solution:
      "ATMA runs fully onboard (Edge). It builds a symbolic 3D world model from raw visual feed to navigate complex topographies without external signals.",
  },
  {
    icon: Factory,
    title: "Adaptive Manipulation",
    sector: "Industrial Robotics",
    problem:
      "Hard-coded robots fail when objects are slightly displaced. LLMs are too slow (latency) for real-time control.",
    solution:
      "Our 'Slot-Attention' encoder decomposes the scene into discrete objects, allowing the arm to reason about displacement physics in <15ms.",
  },
  {
    icon: Eye,
    title: "Cognitive Surveillance",
    sector: "Security",
    problem:
      "Current vision systems flood operators with false positives (motion detection) and lack context.",
    solution:
      "ATMA understands intent. It distinguishes between a 'workman carrying a drill' and a 'threat actor', reducing analyst load by 94%.",
  },
  {
    icon: Radio,
    title: "Autonomous Repair",
    sector: "Infrastructure",
    problem:
      "Remote energy assets require costly human inspection. Stochastic AI misses subtle hairline fractures.",
    solution:
      "Symbolic verification ensures the AI checks every safety parameter against a rigorous rule set before authorizing a 'safe' status.",
  },
];

const roadmap = [
  {
    year: "2024",
    quarter: "Q4",
    title: "Seed Foundation",
    description:
      "Core team assembly. Alpha version of Slot-Attention encoder trained on synthetic datasets.",
  },
  {
    year: "2025",
    quarter: "Q2",
    title: "Symbolic Integration",
    description:
      "Integration of neuro-symbolic solver. First successful demo of counterfactual reasoning in robotic manipulation.",
  },
  {
    year: "2026",
    quarter: "Q1",
    title: "Commercial Pilot",
    description:
      "Deployment of ATMA V1 in controlled industrial warehouse environments. 99.9% safety guarantee.",
  },
  {
    year: "2027",
    quarter: "Q3",
    title: "General Autonomy",
    description:
      "Expansion to unstructured outdoor environments. Defense and Search & Rescue contracts initiated.",
  },
];

const stats = [
  { label: "Latency", value: "<15ms" },
  { label: "Hardware", value: "Jetson Orin" },
  { label: "Model", value: "Neuro-Symbolic" },
  { label: "Status", value: "Operational" },
];

const coreCapabilities = [
  {
    title: "Deterministic Logic",
    description:
      "Unlike probabilistic transformers, our symbolic solver guarantees logical consistency in critical decision paths.",
    icon: BrainCircuit,
  },
  {
    title: "Edge Native",
    description:
      "Running full inference on Jetson Orin at <15ms latency. No cloud dependency. No lag.",
    icon: Zap,
  },
  {
    title: "Verifiable Safety",
    description:
      "Mathematical bounds on agent behavior ensure safety compliance in industrial & defense sectors.",
    icon: ShieldCheck,
  },
];

/* ── PAGE ── */

export default async function Research() {
  const posts = await getResearchPosts();

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* ── HERO ── */}
        <section className="pt-32 pb-24 relative bg-primary-dark overflow-hidden min-h-[85vh] flex items-center bg-noise shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="hidden md:block absolute top-[20%] left-[10%] w-[600px] h-[600px] rounded-full bg-[#CCFF00]/5 blur-[200px] animate-pulse-glow" />
          <div className="hidden md:block absolute bottom-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[180px] animate-pulse-glow" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-[#CCFF00] text-sm font-mono font-medium mb-8">
                <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full animate-pulse" />
                SYSTEM ONLINE
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-[0.9] mb-8 text-primary-light tracking-tight">
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-accent">
                  Prefrontal Cortex
                </span>{" "}
                <br className="hidden md:block" />
                for Edge Robotics
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-12">
                Synthesizing Computational Neuroscience with Control Theory.
                Building the first neuro-symbolic architecture designed for
                GPS-denied, high-stakes environments where &quot;approximate&quot; is
                not enough.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
                {stats.map((stat, i) => (
                  <div key={i} className="border-l border-[#CCFF00]/30 pl-4">
                    <span className="text-[10px] font-mono text-muted/60 tracking-widest uppercase block mb-1">
                      {stat.label}
                    </span>
                    <span className="font-mono text-sm md:text-base text-[#CCFF00] font-bold">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── MANIFESTO ── */}
        <section className="py-28 bg-primary-deeper relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#CCFF00]/30 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="border-l-2 border-[#CCFF00] pl-8 mb-20 max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-bold font-heading leading-tight text-primary-light mb-8">
                  Standard LLMs Hallucinate.{" "}
                  <span className="text-[#CCFF00]">ATMA Reasons.</span>
                </h2>
                <p className="text-xl text-muted font-light max-w-3xl leading-relaxed">
                  We are building the first neuro-symbolic architecture designed
                  specifically for GPS-denied, high-stakes environments where
                  &quot;approximate&quot; is not enough.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              {coreCapabilities.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="group glass-card rounded-2xl p-8 hover:border-[#CCFF00]/30 transition-all duration-500 h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/0 to-[#CCFF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="mb-6 text-muted/50 group-hover:text-[#CCFF00] group-hover:scale-110 transition-all duration-300">
                        <item.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold font-heading text-primary-light mb-4 group-hover:text-[#CCFF00] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {item.description}
                      </p>
                      <div className="w-12 h-[1px] bg-border mt-6 group-hover:w-full group-hover:bg-[#CCFF00]/30 transition-all duration-500" />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH ARCHITECTURE ── */}
        <section className="py-28 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#CCFF00] to-accent">
                  <Cpu className="h-5 w-5 text-primary-dark" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-light">
                  Technical Architecture
                </h2>
              </div>
              <p className="text-muted text-lg max-w-2xl">
                Three pillars of our neuro-symbolic stack, designed for
                deterministic reasoning on edge hardware.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              {techItems.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="group glass-card rounded-2xl p-8 hover:border-[#CCFF00]/30 transition-all duration-500 h-full min-h-[300px] flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 border-t border-r border-[#CCFF00]" />
                    </div>
                    <div>
                      <div className="mb-6 text-muted/50 group-hover:text-[#CCFF00] transition-colors duration-300">
                        <item.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold font-heading text-primary-light mb-4 tracking-tight group-hover:text-[#CCFF00] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <div>
                      <div className="w-8 h-[1px] bg-[#CCFF00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4" />
                      <p className="text-muted text-sm leading-relaxed font-mono">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.4} className="mt-12">
              <div className="glass-card rounded-xl p-6 font-mono text-xs text-muted/50">
                &gt; REFERENCES: KUMAR, A. (2025). &quot;Thesis:
                Neuro-Symbolic Agents in Unstructured Environments.&quot; IIT
                DELHI.
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section className="py-28 bg-primary-deeper relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-20">
              <div className="border-l-2 border-[#CCFF00] pl-6">
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-light mb-4">
                  Operational Scenarios
                </h2>
                <p className="text-xl text-muted max-w-2xl font-light">
                  High-stakes environments where standard stochastic models
                  fail. Neuro-symbolic reliability is non-negotiable.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((c, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="group glass-card rounded-2xl p-8 hover:border-[#CCFF00]/30 transition-all duration-300 h-full relative overflow-hidden">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 rounded-xl bg-[#CCFF00]/5 border border-[#CCFF00]/10 text-[#CCFF00] group-hover:bg-[#CCFF00]/10 transition-colors">
                        <c.icon className="h-6 w-6" />
                      </div>
                      <div className="font-mono text-xs text-muted/40 tracking-widest">
                        SCENARIO_{String(i + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Title */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold font-heading text-primary-light mb-2 group-hover:text-[#CCFF00] transition-colors">
                        {c.title}
                      </h3>
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#CCFF00]/10 text-[10px] font-mono tracking-wider text-[#CCFF00]">
                        {c.sector}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="space-y-4 text-sm leading-relaxed">
                      <div>
                        <span className="text-red-400 block text-[10px] tracking-widest mb-1 font-mono">
                          PROBLEM:
                        </span>
                        <p className="text-muted">{c.problem}</p>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <span className="text-[#CCFF00] block text-[10px] tracking-widest mb-1 font-mono">
                          ATMA RESOLUTION:
                        </span>
                        <p className="text-primary-light/80">{c.solution}</p>
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-[#CCFF00]/20 group-hover:border-r-[#CCFF00] transition-colors duration-300" />
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.5} className="mt-12">
              <div className="flex items-center justify-between glass-card rounded-xl p-6 border-[#CCFF00]/20">
                <div className="flex items-center gap-4">
                  <Activity className="text-[#CCFF00] h-6 w-6" />
                  <div>
                    <span className="block text-xs text-muted/60 tracking-widest font-mono">
                      DEPLOYMENT READINESS
                    </span>
                    <span className="text-primary-light font-mono text-sm">
                      TRL-7 (SYSTEM PROTOTYPE DEMONSTRATION)
                    </span>
                  </div>
                </div>
                <span className="hidden md:block font-mono text-xs text-[#CCFF00] animate-pulse">
                  AWAITING_INSTRUCTIONS...
                </span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── RECENT RESEARCH (MDX CMS) ── */}
        <section className="py-28 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-light mb-4">
                Recent Publications
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-[#CCFF00] to-accent rounded-full" />
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <AnimatedSection key={post.slug} delay={i * 0.1}>
                  <Link href={`/research/${post.slug}`} className="block group glass-card rounded-2xl p-8 hover:border-[#CCFF00]/30 transition-all duration-500 h-full relative overflow-hidden">
                    <div className="font-mono text-xs text-[#CCFF00] mb-4">{post.date}</div>
                    <h3 className="text-xl font-bold font-heading text-primary-light mb-3 group-hover:text-[#CCFF00] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted text-sm line-clamp-3 mb-6">
                      {post.summary}
                    </p>
                    <div className="flex items-center text-accent text-sm font-medium group-hover:text-accent-soft">
                      Read Paper
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── ROADMAP ── */}
        <section className="py-28 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold font-heading text-primary-light mb-6 tracking-tight">
                Execution Protocol
              </h2>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#CCFF00] to-accent rounded-full" />
            </AnimatedSection>

            <div className="relative max-w-4xl mx-auto">
              {/* Central line */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-border" />

              {roadmap.map((m, i) => {
                const isEven = i % 2 === 0;
                return (
                  <AnimatedSection key={i} delay={i * 0.15}>
                    <div
                      className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-20 ${
                        isEven ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      <div
                        className={`w-full md:w-[42%] ${
                          isEven
                            ? "md:text-right md:pr-12"
                            : "md:text-left md:pl-12"
                        } text-center px-4 md:px-0`}
                      >
                        <div className="font-mono text-xs tracking-widest mb-2 text-[#CCFF00]">
                          {m.quarter} {"//"} {m.year}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-primary-light mb-4 tracking-tight">
                          {m.title}
                        </h3>
                        <p className="text-muted font-light leading-relaxed text-sm">
                          {m.description}
                        </p>
                      </div>

                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-[#CCFF00] border-2 border-[#CCFF00] z-20 shadow-[0_0_15px_rgba(204,255,0,0.5)]" />
                      </div>

                      <div className="hidden md:block w-[42%]" />
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 bg-primary-deeper relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#CCFF00]/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="hidden md:block w-[500px] h-[500px] rounded-full bg-[#CCFF00]/5 blur-[200px]" />
          </div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-light mb-6 leading-tight">
                Partner with ATMA{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-accent">
                  Research Labs
                </span>
              </h2>
              <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
                If your organization operates in high-stakes environments where
                AI reliability is non-negotiable, let&apos;s talk.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#CCFF00] text-primary-dark px-10 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#CCFF00]/30 hover:scale-[1.03]"
              >
                Initiate Contact
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
