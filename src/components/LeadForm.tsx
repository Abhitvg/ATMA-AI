"use client";

import { useState } from 'react';

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    const qs = new URLSearchParams(window.location.search);
    const utm = {
      source: qs.get('utm_source') ?? '',
      medium: qs.get('utm_medium') ?? '',
      campaign: qs.get('utm_campaign') ?? '',
    };

    const payload = {
      email: data.get('email'),
      name: data.get('name'),
      ...utm,
    };
    
    try {
      await fetch('/api/lead', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload) 
      });
      setSuccess(true);
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="p-6 bg-accent/10 border border-accent/20 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-2">Thanks for reaching out!</h3>
        <p className="text-muted">We will be in touch with you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <div className="flex flex-col gap-2">
        <input 
          name="name" 
          placeholder="Full Name" 
          required 
          disabled={loading}
          className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-foreground placeholder:text-muted/60 focus-ring text-sm"
        />
      </div>
      <div className="flex flex-col gap-2">
        <input 
          type="email" 
          name="email" 
          placeholder="Work Email" 
          required 
          disabled={loading}
          className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-foreground placeholder:text-muted/60 focus-ring text-sm"
        />
      </div>
      <button 
        type="submit" 
        disabled={loading} 
        className="w-full px-6 py-2.5 rounded-lg bg-accent text-primary-dark font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Submitting...' : 'Get in Touch'}
      </button>
    </form>
  );
}
