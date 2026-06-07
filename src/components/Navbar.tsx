"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

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

  const t = useTranslations("Navigation");

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("services"), href: "/services" },
    { name: t("research"), href: "/research" },
    { name: t("portfolio"), href: "/portfolio" },
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
              {/* Dark mode logo */}
              <Image
                src="/logos/atma-logo.svg"
                alt="ATMA"
                width={36}
                height={36}
                priority
                className="hidden dark:block object-contain transition-transform duration-300 group-hover:scale-110"
              />
              {/* Light mode logo */}
              <Image
                src="/logos/atma-logo-light.webp"
                alt="ATMA"
                width={36}
                height={36}
                priority
                unoptimized={true}
                className="block dark:hidden object-contain transition-transform duration-300 group-hover:scale-110"
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
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg group ${
                  isActive(link.href)
                    ? "text-accent"
                    : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {link.name}
                {/* Active/Hover Indicator */}
                <span 
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 ${
                    isActive(link.href) ? "w-[20px] bg-accent" : "w-0 bg-foreground/30 group-hover:w-[20px]"
                  }`} 
                />
              </Link>
            ))}
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
            <LanguageSwitcher />
            <ThemeToggle />
            <Link 
              href="/contact"
              className="ml-4 relative overflow-hidden bg-accent text-primary-dark px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:scale-105 active:scale-95 animate-shimmer"
            >
              {t("contact")}
            </Link>
          </div>

          {/* Mobile Toggle & Theme */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
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
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 transform ${
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              } ${
                isActive(link.href)
                  ? "text-accent bg-accent/10 border border-accent/20"
                  : "text-foreground/80 hover:text-accent hover:bg-foreground/5 border border-transparent"
              }`}
            >
              {link.name}
            </Link>
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
            {t("contact")}
          </Link>
        </div>
      </div>
    </nav>
  );
}
