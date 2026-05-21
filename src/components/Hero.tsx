"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

export default function Hero() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "3", label: "IIT/JNU Founders" },
  ];

  return (
    <div className="relative overflow-hidden bg-primary-dark min-h-screen flex items-center">
      {/* CSS-only floating orbs (no JS animation) */}
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-accent/8 blur-[160px] animate-float" />
      <div className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[180px] animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[50%] left-[50%] w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[120px] animate-float" style={{ animationDelay: "4s" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left content — CSS animation only */}
          <div className="hero-content">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8">
              <Sparkles className="h-3.5 w-3.5" />
              <span>IIT & JNU Alumni Founded</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] mb-8 text-primary-light">
              Engineering the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-accent animate-gradient text-glow">
                Future of Enterprise.
              </span>
            </h1>
            
            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl mb-10">
              We bridge elite academic rigor with practical AI & IT deployment. From custom LLMs to enterprise architecture — we build intelligent systems that scale.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link 
                href="/services" 
                className="group inline-flex justify-center items-center gap-2 bg-accent text-primary-dark px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-[1.03] active:scale-[0.98]"
              >
                Explore AI Solutions
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link 
                href="/portfolio" 
                className="inline-flex justify-center items-center gap-2 border border-foreground/15 text-foreground/90 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:border-accent/40 hover:text-accent hover:bg-accent/5"
              >
                View Case Studies
              </Link>
            </div>

            {/* Stats strip */}
            <div className="flex gap-8 md:gap-12">
              {stats.map((stat, i) => (
                <div key={i} className="relative">
                  <p className="text-3xl md:text-4xl font-bold font-heading text-accent text-glow">{stat.value}</p>
                  <p className="text-xs md:text-sm text-muted mt-1 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Terminal mockup (CSS only, no framer-motion) */}
          <div className="hidden lg:block relative hero-terminal">
            <div className="relative h-[480px] w-full rounded-2xl glass-card overflow-hidden glow-accent">
              <TerminalCode />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-3 flex items-center gap-3 animate-float" style={{ animationDuration: "4s" }}>
              <Zap className="h-5 w-5 text-yellow-400" />
              <div>
                <p className="text-xs font-semibold text-foreground">Lightning Fast</p>
                <p className="text-[10px] text-muted">Sub-100ms Response</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-3 flex items-center gap-3 animate-float" style={{ animationDuration: "5s", animationDelay: "1s" }}>
              <Shield className="h-5 w-5 text-green-400" />
              <div>
                <p className="text-xs font-semibold text-foreground">Zero Trust</p>
                <p className="text-[10px] text-muted">Enterprise Security</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary-dark to-transparent" />
    </div>
  );
}

/* Lightweight terminal — CSS animation only, no framer-motion */
function TerminalCode() {
  return (
    <div className="relative h-full w-full">
      {/* Terminal Chrome */}
      <div className="absolute top-0 left-0 w-full h-12 bg-surface/80 border-b border-border flex items-center px-4 gap-2 rounded-t-2xl">
        <div className="w-3 h-3 rounded-full bg-red-400/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <div className="w-3 h-3 rounded-full bg-green-400/80" />
        <span className="ml-4 text-xs font-mono text-muted/60">atma_deploy.ts</span>
      </div>

      {/* Code Content — pure CSS stagger */}
      <div className="pt-16 px-6 font-mono text-[13px] leading-relaxed">
        <div className="terminal-line" style={{ animationDelay: "0.3s" }}>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-300">solution</span>{" "}
          <span className="text-foreground/40">=</span>{" "}
          <span className="text-purple-400">await</span>{" "}
          <span className="text-yellow-300">ATMA</span>
          <span className="text-foreground/40">.</span>
          <span className="text-green-300">deploy</span>
          <span className="text-foreground/40">{"({"}</span>
        </div>

        <div className="terminal-line ml-6 mt-1" style={{ animationDelay: "0.7s" }}>
          <span className="text-blue-300">model</span>
          <span className="text-foreground/40">: </span>
          <span className="text-accent">&quot;enterprise_llm&quot;</span>
          <span className="text-foreground/40">,</span>
        </div>

        <div className="terminal-line ml-6 mt-1" style={{ animationDelay: "1.1s" }}>
          <span className="text-blue-300">scale</span>
          <span className="text-foreground/40">: </span>
          <span className="text-accent">&quot;auto&quot;</span>
          <span className="text-foreground/40">,</span>
        </div>

        <div className="terminal-line ml-6 mt-1" style={{ animationDelay: "1.5s" }}>
          <span className="text-blue-300">security</span>
          <span className="text-foreground/40">: </span>
          <span className="text-accent">&quot;zero_trust&quot;</span>
          <span className="text-foreground/40">,</span>
        </div>

        <div className="terminal-line ml-6 mt-1" style={{ animationDelay: "1.9s" }}>
          <span className="text-blue-300">infrastructure</span>
          <span className="text-foreground/40">: </span>
          <span className="text-accent">&quot;cloud_native&quot;</span>
        </div>

        <div className="terminal-line mt-1" style={{ animationDelay: "2.3s" }}>
          <span className="text-foreground/40">{"});"}</span>
        </div>

        <div className="terminal-line mt-6" style={{ animationDelay: "2.8s" }}>
          <span className="text-muted/60">{"// "}</span>
          <span className="text-muted/40">Output</span>
        </div>

        <div className="terminal-line mt-2" style={{ animationDelay: "3.2s" }}>
          <span className="text-green-400">✓</span>{" "}
          <span className="text-green-400/80">Neural pipeline initialized</span>
        </div>

        <div className="terminal-line mt-1" style={{ animationDelay: "3.6s" }}>
          <span className="text-green-400">✓</span>{" "}
          <span className="text-green-400/80">Cloud topology optimized</span>
        </div>

        <div className="terminal-line mt-1" style={{ animationDelay: "4.0s" }}>
          <span className="text-green-400">✓</span>{" "}
          <span className="text-green-400/80">System live — 99.99% uptime</span>
        </div>

        {/* Blinking cursor */}
        <div className="inline-block w-2 h-5 bg-accent mt-3 ml-1 animate-typing-cursor" />
      </div>
    </div>
  );
}
