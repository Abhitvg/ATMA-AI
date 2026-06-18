"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Portfolio3D from "@/components/Portfolio3D";
import Image from "next/image";
import { ExternalLink, Globe, ArrowUpRight, Grid3x3, Box } from "lucide-react";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

const projects = [
  {
    title: "India Eurasia Research Forum",
    category: "Institutional Platform",
    description: "A comprehensive research platform connecting scholars and institutions across India and Eurasia. Features a custom CMS, team management, publication tracking, and responsive multilingual design.",
    url: "https://indiaeurasia.org/",
    type: "web" as const,
    tags: ["Next.js", "CMS", "Multilingual", "Research"],
    featured: true,
    logo: "/logos/ierf.webp",
    accent: "from-cyan-400 to-blue-500",
    filter: "web",
  },
  {
    title: "IPO Mehta Mural",
    category: "Cultural Showcase",
    description: "A premium single-page tribute website celebrating the cultural bridge between India and Israel through Zubin Mehta and the Israel Philharmonic Orchestra. Features dark-themed UI with gold accents and scroll-triggered animations.",
    url: "https://ipomehta-mural.com/",
    type: "web" as const,
    tags: ["React", "Vite", "Animations", "i18n"],
    featured: true,
    logo: "/logos/israel-embassy.webp",
    accent: "from-amber-400 to-yellow-600",
    filter: "web",
  },
  {
    title: "JNU Alumni Association",
    category: "Institutional Network",
    description: "A networking platform for Jawaharlal Nehru University alumni, featuring member directories, event management, and community engagement tools.",
    url: "https://www.jnualumniassociation.com/",
    type: "web" as const,
    tags: ["Web Platform", "Community", "Directory"],
    featured: false,
    logo: "/logos/jnu-alumni.webp",
    accent: "from-purple-400 to-indigo-500",
    filter: "web",
  },
  {
    title: "Doon Silk",
    category: "E-Commerce",
    description: "A full-featured e-commerce storefront for premium silk products from the Doon Valley. Includes product catalogs, secure checkout, and inventory management.",
    url: "https://doonsilk.com/",
    type: "web" as const,
    tags: ["E-Commerce", "Payments", "Product Catalog"],
    featured: false,
    logo: "/logos/doonsilk.webp",
    accent: "from-emerald-400 to-green-500",
    filter: "ecommerce",
  },
  {
    title: "UKCDP",
    category: "Enterprise Platform",
    description: "A robust enterprise web platform with custom dashboards, user management, and data visualization tools designed for organizational efficiency.",
    url: "https://www.ukcdp.com/",
    type: "web" as const,
    tags: ["Enterprise", "Dashboard", "Analytics"],
    featured: true,
    logo: "/logos/ukcdp.webp",
    accent: "from-blue-400 to-indigo-500",
    filter: "web",
  },
  {
    title: "Himalayan Goat Meat",
    category: "E-Commerce Store",
    description: "A complete e-commerce solution for a specialty food brand. Features product listings, cart management, secure payments, and order tracking.",
    url: "https://shop.himalayangoatmeat.com/",
    type: "web" as const,
    tags: ["Shopify", "E-Commerce", "Food & Beverage"],
    featured: false,
    logo: "/logos/himalayan-goat.webp",
    accent: "from-orange-400 to-red-500",
    filter: "ecommerce",
  },
  {
    title: "NCERT Digital Platform",
    category: "EdTech / Education",
    description: "A comprehensive digital platform built to make NCERT educational content accessible and interactive. A fully engineered product covering content management, structured navigation, and responsive design for students and educators.",
    url: "https://ncert-ruby.vercel.app/explore",
    type: "web" as const,
    tags: ["Python", "Education", "EdTech"],
    featured: true,
    logo: "/logos/ncert.svg",
    accent: "from-green-400 to-teal-500",
    filter: "edtech",
  },
  {
    title: "Uttarakhand Cooperative Society",
    category: "Civic Tech Platform",
    description: "A full-stack civic technology platform built for cooperative organizations in Uttarakhand, featuring community governance tools, member management, and transparent decision-making frameworks.",
    url: "https://uk-coop-main.vercel.app/",
    type: "web" as const,
    tags: ["TypeScript", "Civic Tech", "Platform"],
    featured: false,
    logo: "/logos/uttarakhand.webp",
    accent: "from-violet-400 to-purple-500",
    filter: "civic",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Web Platforms", value: "web" },
  { label: "E-Commerce", value: "ecommerce" },
  { label: "EdTech", value: "edtech" },
  { label: "Civic Tech", value: "civic" },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "3d">("grid");

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.filter === activeFilter);

  const featured = filteredProjects.filter(p => p.featured);
  const others = filteredProjects.filter(p => !p.featured);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="pt-32 pb-20 relative bg-primary-dark bg-noise shadow-[inset_0_0_120px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[160px] animate-pulse-glow" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Portfolio</p>
              <h1 className="text-5xl md:text-6xl font-bold font-heading text-primary-light mb-6 max-w-3xl leading-tight">
                Our Work Speaks{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">For Itself</span>
              </h1>
              <p className="text-xl text-muted max-w-2xl leading-relaxed">
                From institutional research platforms to e-commerce engines — every project is engineered to the highest standard.
              </p>
            </AnimatedSection>

            {/* Filter Tabs */}
            <AnimatedSection delay={0.15} className="mt-10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeFilter === filter.value
                        ? "bg-accent text-primary-dark shadow-lg shadow-accent/20"
                        : "bg-surface border border-border text-muted hover:text-foreground hover:border-accent/30"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
              <div className="flex bg-surface border border-border p-1 rounded-full ml-auto">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-full transition-colors ${viewMode === "grid" ? "bg-accent text-primary-dark" : "text-muted hover:text-foreground"}`}
                  title="Grid View"
                >
                  <Grid3x3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("3d")}
                  className={`p-2 rounded-full transition-colors ${viewMode === "3d" ? "bg-accent text-primary-dark" : "text-muted hover:text-foreground"}`}
                  title="3D View"
                >
                  <Box className="w-5 h-5" />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {viewMode === "3d" ? (
          <section className="py-24 relative bg-primary-deeper">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection className="mb-14 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-light">
                  Interactive Showcase
                </h2>
                <p className="text-muted mt-2">Drag to rotate the carousel</p>
              </AnimatedSection>
              <Portfolio3D projects={filteredProjects} />
            </div>
          </section>
        ) : (
          <>
            {/* Featured Projects */}
        {featured.length > 0 && (
          <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection className="mb-14">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-light">
                  Featured Projects
                </h2>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-8">
                {featured.map((project, i) => (
                  <AnimatedSection key={project.title} delay={i * 0.1}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group glass-card rounded-2xl overflow-hidden hover:border-accent/20 transition-all duration-500 hover:-translate-y-1 block h-full"
                    >
                      {/* Gradient header */}
                      <div className={`h-52 bg-gradient-to-br ${project.accent} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute inset-0 bg-grid opacity-20" />
                        
                        {/* Large centered logo */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-2xl bg-white/95 flex items-center justify-center p-3 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                            {project.logo ? (
                              <Image src={project.logo} alt={project.title} width={56} height={56} className="object-contain w-full h-full" />
                            ) : (
                              <Globe className="h-10 w-10 text-primary-dark" />
                            )}
                          </div>
                        </div>

                        {/* Top bar */}
                        <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
                          <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-medium">
                            {project.category}
                          </span>
                          <ArrowUpRight className="h-5 w-5 text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </div>

                        {/* Title overlay */}
                        <div className="absolute bottom-5 left-5 right-5">
                          <h3 className="text-2xl font-bold font-heading text-white drop-shadow-lg">{project.title}</h3>
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="text-muted text-sm leading-relaxed mb-5">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, j) => (
                            <span key={j} className="px-2.5 py-1 rounded-md bg-accent/10 text-accent text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </a>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other Projects */}
        {others.length > 0 && (
          <section className="py-24 bg-primary-deeper relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection className="mb-14">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-light">
                  More Projects
                </h2>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {others.map((project, i) => (
                  <AnimatedSection key={project.title} delay={i * 0.08}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group glass-card rounded-2xl overflow-hidden hover:border-accent/20 transition-all duration-500 hover:-translate-y-1 block h-full"
                    >
                      {/* Color bar */}
                      <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center overflow-hidden p-1">
                            {project.logo ? (
                              <Image src={project.logo} alt={project.title} width={32} height={32} className="object-contain w-full h-full" />
                            ) : (
                              <Globe className="h-5 w-5 text-primary-dark" />
                            )}
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs uppercase tracking-wider text-accent/60 font-medium mb-1">{project.category}</p>
                        <p className="font-heading font-bold text-primary-light mb-2 group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </p>
                        <p className="text-xs text-muted leading-relaxed mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag, j) => (
                            <span key={j} className="px-2 py-0.5 rounded bg-accent/5 text-accent/60 text-[10px] font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </a>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}
        </>
        )}

        {/* CTA */}
        <section className="py-24 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] rounded-full bg-accent/5 blur-[200px]" />
          </div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-light mb-6 leading-tight">
                Have a Project in Mind?
              </h2>
              <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
                Let&apos;s discuss how ATMA can engineer the perfect solution for your business.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-accent text-primary-dark px-10 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-[1.03]"
              >
                Start a Conversation
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
