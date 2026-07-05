"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowUpRight, ArrowUp } from "lucide-react";
import DisplayAd from "@/components/DisplayAd";

export default function Footer() {
  const isDev = process.env.NODE_ENV === "development";

  const getSubdomainUrl = (subdomain: string, internalPath: string) => {
    if (isDev) return `${internalPath}`;
    return `https://${subdomain}`;
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="relative bg-primary-deeper border-t border-border mt-auto">
      {/* Gradient accent line at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logos/atma-logo.png" alt="ATMA" width={28} height={28} className="object-contain rounded-md" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-none">ATMA</span>
                <span className="text-[9px] tracking-[0.2em] text-foreground/80 uppercase leading-none mt-0.5">Consultancy & Research</span>
              </div>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed mb-6 max-w-xs">
              Engineering the Future of Enterprise. Built on academic excellence and real-world execution.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/atma.tvg" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-surface hover:bg-accent/10 text-muted hover:text-accent transition-all duration-300" aria-label="Instagram">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/atma-research-consultancy" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-surface hover:bg-accent/10 text-muted hover:text-accent transition-all duration-300" aria-label="LinkedIn">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-heading font-semibold text-foreground text-sm uppercase tracking-wider mb-5">Services</p>
            <ul className="space-y-3">
              {[
                { name: "AI Consulting & GenAI", href: "/services" },
                { name: "Data Science & Analytics", href: "/services" },
                { name: "Enterprise Architecture", href: "/services" },
                { name: "Cloud Infrastructure", href: "/services" },
                { name: "E-Commerce Solutions", href: "/services" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="group text-sm text-muted hover:text-foreground transition-colors duration-300 flex items-center gap-1">
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-heading font-semibold text-foreground text-sm uppercase tracking-wider mb-5">Company</p>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Research Labs", href: "/research" },
                { name: "Case Studies", href: "/portfolio" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="group text-sm text-muted hover:text-foreground transition-colors duration-300 flex items-center gap-1">
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Knowledge Hub */}
          <div>
            <p className="font-heading font-semibold text-foreground text-sm uppercase tracking-wider mb-5">Knowledge Hub</p>
            <ul className="space-y-3">
              {[
                { name: "Blog", href: getSubdomainUrl("blog.atma-ai.co.in", "/blog") },
                { name: "Articles", href: getSubdomainUrl("articles.atma-ai.co.in", "/articles") },
                { name: "Whitepapers", href: getSubdomainUrl("whitepaper.atma-ai.co.in", "/whitepapers") },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="group text-sm text-muted hover:text-foreground transition-colors duration-300 flex items-center gap-1">
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-heading font-semibold text-foreground text-sm uppercase tracking-wider mb-5">Get in Touch</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-muted">A-2, Yadav Complex, A-block, Saket, New Delhi-110068</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a href="mailto:ceo@atma-ai.co.in" className="text-sm text-muted hover:text-accent transition-colors">ceo@atma-ai.co.in</a>
              </li>
            </ul>

            {/* CTA in footer */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg bg-accent/10 border border-accent/20 text-accent text-sm font-medium hover:bg-accent/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)]"
            >
              Schedule a Call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Global Display Ad */}
        <div className="w-full max-w-4xl mx-auto mb-8">
          <DisplayAd />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative">
          <button 
            onClick={scrollToTop}
            className="md:absolute md:left-1/2 md:-translate-x-1/2 -top-4 bg-surface border border-border text-muted hover:text-accent p-2 rounded-full transition-colors duration-300 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] z-10"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} ATMA Consultancy Services. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-muted">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
