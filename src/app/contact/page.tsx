"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, MapPin, Phone, Send, ArrowRight, CheckCircle2, Loader2, AlertTriangle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "1e9ff201-4e43-4cc5-9659-d0633180c55a");
    formData.append("subject", "New Inquiry — ATMA Consultancy Website");
    formData.append("from_name", "ATMA Website Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setIsError(false);
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="pt-32 pb-20 relative bg-primary-dark">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-[30%] right-[5%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[150px]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
              <h1 className="text-5xl md:text-6xl font-bold font-heading text-primary-light mb-6 max-w-3xl leading-tight">
                Let&apos;s Build Something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                  Together
                </span>
              </h1>
              <p className="text-xl text-muted max-w-2xl leading-relaxed">
                Whether you need AI integration, enterprise architecture, or a complete digital transformation — we&apos;re here to help.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              
              {/* Contact Info */}
              <AnimatedSection className="lg:col-span-2">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold font-heading text-primary-light mb-6">Get in Touch</h2>
                    <p className="text-muted leading-relaxed mb-8">
                      Have a project in mind? We&apos;d love to hear about it. Reach out and let&apos;s explore how ATMA can bring your vision to life.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 shrink-0">
                        <Mail className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary-light mb-1">Email</p>
                        <a href="mailto:ceo@atma-ai.co.in" className="text-muted hover:text-accent transition-colors text-sm">ceo@atma-ai.co.in</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 shrink-0">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary-light mb-1">Office</p>
                        <p className="text-muted text-sm">A-2, Yadav Complex, A-block,<br />Saket, New Delhi-110068</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 shrink-0">
                        <Phone className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary-light mb-1">Phone</p>
                        <p className="text-muted text-sm">Available upon request</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick stats */}
                  <div className="glass-card rounded-2xl p-6 mt-8">
                    <p className="text-sm font-semibold text-primary-light mb-4">Why Work With Us</p>
                    <ul className="space-y-3">
                      {[
                        "IIT & JNU alumni founding team",
                        "50+ enterprise projects delivered",
                        "End-to-end AI & IT solutions",
                        "98% client retention rate",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm text-muted">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact Form */}
              <AnimatedSection className="lg:col-span-3" delay={0.15}>
                <div className="glass-card rounded-2xl p-8 md:p-10">
                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="inline-flex p-4 rounded-full bg-accent/10 border border-accent/20 mb-6">
                        <CheckCircle2 className="h-10 w-10 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold font-heading text-primary-light mb-3">Message Sent!</h3>
                      <p className="text-muted mb-6">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                      <button
                        onClick={() => { setSubmitted(false); setIsError(false); }}
                        className="text-accent text-sm font-medium hover:underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <h3 className="text-xl font-bold font-heading text-primary-light mb-2">Send Us a Message</h3>
                      <p className="text-muted text-sm mb-6">Fill out the form below and we&apos;ll respond promptly.</p>

                      {isError && (
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                          <AlertTriangle className="h-5 w-5 shrink-0" />
                          <p>Something went wrong. Please try again or email us directly at ceo@atma-ai.co.in</p>
                        </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-primary-light mb-2">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all text-sm"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-primary-light mb-2">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all text-sm"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-primary-light mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all text-sm"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-primary-light mb-2">Service Interest</label>
                        <select
                          name="service"
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all text-sm"
                        >
                          <option value="">Select a service...</option>
                          <option value="AI & GenAI Solutions">AI & GenAI Solutions</option>
                          <option value="Data Science & Analytics">Data Science & Analytics</option>
                          <option value="Enterprise Architecture">Enterprise Architecture</option>
                          <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                          <option value="E-Commerce Development">E-Commerce Development</option>
                          <option value="Research & Edge AI">Research & Edge AI</option>
                          <option value="Other / General Inquiry">Other / General Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-primary-light mb-2">Project Details</label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all text-sm resize-none"
                          placeholder="Tell us about your project, timeline, and any specific requirements..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group w-full flex justify-center items-center gap-2 bg-accent text-primary-dark px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            Sending...
                            <Loader2 className="h-5 w-5 animate-spin" />
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
