"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setIsOpen(false); }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Research", href: "/research" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  const isActive = (href: string) => pathname === href;

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
              <Image
                src="/logos/atma-logo.svg"
                alt="ATMA"
                width={36}
                height={36}
                priority
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-tight leading-none">ATMA</span>
              <span className="text-[9px] tracking-[0.2em] text-muted uppercase leading-none mt-0.5">Consultancy & Research</span>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                  isActive(link.href)
                    ? "text-accent"
                    : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="ml-4 relative overflow-hidden bg-accent text-primary-dark px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-105 active:scale-95"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-2.5 rounded-lg bg-foreground/5 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — CSS transition, no framer-motion */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-primary-dark/95 backdrop-blur-xl border-t border-border`}
      >
        <div className="px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                isActive(link.href)
                  ? "text-accent bg-accent/10"
                  : "text-foreground/80 hover:text-accent hover:bg-foreground/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block mt-4 px-4 py-3 text-base font-semibold text-primary-dark bg-accent rounded-lg text-center"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
