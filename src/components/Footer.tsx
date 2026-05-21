"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ExternalLink, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-primary-deeper border-t border-border">
      {/* Gradient accent line at top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logos/atma-logo.svg" alt="ATMA" width={28} height={28} className="object-contain" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-none">ATMA</span>
                <span className="text-[9px] tracking-[0.2em] text-muted uppercase leading-none mt-0.5">Consultancy & Research</span>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-6 max-w-xs">
              Engineering the Future of Enterprise. Built on academic excellence and real-world execution.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-surface hover:bg-accent/10 text-muted hover:text-accent transition-all duration-300">
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground text-sm uppercase tracking-wider mb-5">Services</h4>
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
            <h4 className="font-heading font-semibold text-foreground text-sm uppercase tracking-wider mb-5">Company</h4>
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

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground text-sm uppercase tracking-wider mb-5">Get in Touch</h4>
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
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg bg-accent/10 border border-accent/20 text-accent text-sm font-medium hover:bg-accent/20 transition-all duration-300"
            >
              Schedule a Call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted/60">&copy; {new Date().getFullYear()} ATMA Consultancy Services. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-muted/60">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
