"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown, PenLine, FileText, BookOpen } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const insightsRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setIsOpen(false); }, [pathname]);

  const isDev = process.env.NODE_ENV === "development";

  const getSubdomainUrl = (subdomain: string, internalPath: string) => {
    if (isDev) return `${internalPath}`;
    return `https://${subdomain}`;
  };

  const getMainUrl = (path: string) => {
    if (isDev) return `${path}`;
    return `https://atma-ai.co.in${path === '/' ? '' : path}`;
  };

  const navLinks = [
    { name: "Home", href: getMainUrl("/"), activePath: "/" },
    { name: "About", href: getMainUrl("/about"), activePath: "/about" },
    { name: "Services", href: getMainUrl("/services"), activePath: "/services" },
    { name: "Research", href: getMainUrl("/research"), activePath: "/research" },
    { name: "Portfolio", href: getMainUrl("/portfolio"), activePath: "/portfolio" },
  ];

  const insightsLinks = [
    { name: "Blog", href: getSubdomainUrl("blog.atma-ai.co.in", "/blog"), activePath: "/blog", icon: PenLine, color: "text-accent" },
    { name: "Articles", href: getSubdomainUrl("articles.atma-ai.co.in", "/articles"), activePath: "/articles", icon: FileText, color: "text-[#F59E0B]" },
    { name: "Whitepapers", href: getSubdomainUrl("whitepaper.atma-ai.co.in", "/whitepapers"), activePath: "/whitepapers", icon: BookOpen, color: "text-[#10B981]" },
  ];

  const isInsightsActive = ["/blog", "/articles", "/whitepapers"].some(p => pathname.startsWith(p));

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 navbar-enter ${
        scrolled
          ? "bg-primary-dark/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              {/* Dark mode logo */}
              <Image
                src="/logos/atma-logo.png"
                alt="ATMA"
                width={36}
                height={36}
                priority
                className="hidden dark:block object-contain transition-transform duration-300 group-hover:scale-110"
              />
              {/* Light mode logo */}
              <Image
                src="/logos/atma-logo-light.png"
                alt="ATMA"
                width={36}
                height={36}
                priority
                className="block dark:hidden object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-tight leading-none">ATMA</span>
              <span className="hidden sm:block text-[9px] tracking-[0.2em] text-muted uppercase leading-none mt-0.5">Consultancy & Research</span>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg group ${
                  isActive(link.activePath)
                    ? "text-accent"
                    : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {link.name}
                {/* Active/Hover Indicator */}
                <span 
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 ${
                    isActive(link.activePath) ? "w-[20px] bg-accent" : "w-0 bg-foreground/30 group-hover:w-[20px]"
                  }`} 
                />
              </a>
            ))}
            {/* Insights Dropdown */}
            <div className="relative" ref={insightsRef} onMouseEnter={() => setInsightsOpen(true)} onMouseLeave={() => setInsightsOpen(false)}>
              <button
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg group flex items-center gap-1 ${
                  isInsightsActive
                    ? "text-accent"
                    : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                Insights
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${insightsOpen ? "rotate-180" : ""}`} />
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 ${
                    isInsightsActive ? "w-[20px] bg-accent" : "w-0 bg-foreground/30 group-hover:w-[20px]"
                  }`}
                />
              </button>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                  insightsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="bg-primary-dark/95 backdrop-blur-xl rounded-xl border border-border shadow-xl shadow-black/20 p-2 min-w-[200px]">
                  {insightsLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        pathname.startsWith(item.activePath)
                          ? `${item.color} bg-foreground/5`
                          : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                      }`}
                    >
                      <item.icon className={`h-4 w-4 ${item.color}`} />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-px h-5 bg-border mx-2" />
            <Link 
              href="/portal"
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg group ${
                isActive("/portal")
                  ? "text-accent"
                  : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              Client Portal
            </Link>
            <ThemeToggle />
            <Link 
              href="/contact"
              className="ml-4 relative overflow-hidden bg-accent text-primary-dark px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:scale-105 active:scale-95 animate-shimmer"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Toggle & Theme */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2.5 rounded-lg bg-foreground/5 text-foreground hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`md:hidden fixed inset-0 bg-primary-dark/60 backdrop-blur-sm z-[-1] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu — CSS transition, no framer-motion */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out absolute w-full top-20 ${
          isOpen ? "max-h-[500px] opacity-100 shadow-[0_20px_40px_rgba(0,0,0,0.5)]" : "max-h-0 opacity-0"
        } bg-primary-dark/95 backdrop-blur-2xl border-b border-border`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 transform ${
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              } ${
                isActive(link.activePath)
                  ? "text-accent bg-accent/10 border border-accent/20"
                  : "text-foreground/80 hover:text-accent hover:bg-foreground/5 border border-transparent"
              }`}
            >
              {link.name}
            </a>
          ))}
          {/* Mobile Insights Section */}
          <div className="h-px w-full bg-border my-2" />
          <p className="px-4 pt-2 pb-1 text-[10px] tracking-[0.2em] text-muted uppercase font-mono">Insights</p>
          {insightsLinks.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${(navLinks.length + i) * 50}ms` : '0ms' }}
              className={`flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 transform ${
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              } ${
                pathname.startsWith(item.activePath)
                  ? `${item.color} bg-foreground/5 border border-foreground/10`
                  : "text-foreground/80 hover:text-foreground hover:bg-foreground/5 border border-transparent"
              }`}
            >
              <item.icon className={`h-4 w-4 ${item.color}`} />
              {item.name}
            </a>
          ))}
          <div className="h-px w-full bg-border my-2" />
          <Link
            href="/portal"
            onClick={() => setIsOpen(false)}
            style={{ transitionDelay: isOpen ? `${navLinks.length * 50}ms` : '0ms' }}
            className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 transform ${
              isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            } ${
              isActive("/portal")
                ? "text-accent bg-accent/10 border border-accent/20"
                : "text-foreground/80 hover:text-accent hover:bg-foreground/5 border border-transparent"
            }`}
          >
            Client Portal
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            style={{ transitionDelay: isOpen ? `${navLinks.length * 50}ms` : '0ms' }}
            className={`block mt-6 px-4 py-3 text-base font-semibold text-primary-dark bg-accent rounded-lg text-center transition-all duration-300 transform ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
