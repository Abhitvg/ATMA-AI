import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FounderSchema, { FOUNDERS } from '@/components/seo/FounderSchema';
import Image from 'next/image';

export default function AvadheshKumarPage() {
  const founder = FOUNDERS.avadhesh;

  return (
    <div className="min-h-screen bg-primary-dark text-foreground flex flex-col">
      <Navbar />
      <FounderSchema {...founder} />
      
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3 aspect-square relative rounded-2xl overflow-hidden bg-primary-deeper">
              <Image 
                src={founder.image} 
                alt={founder.name} 
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
            
            <div className="flex-1 space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary-light font-heading">{founder.name}</h1>
                <p className="text-xl text-accent mt-2 font-mono">{founder.role}</p>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-gray-300">
                  {founder.description}
                </p>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted mb-4">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {founder.knowsAbout.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition">
                  LinkedIn
                </a>
                {founder.instagram && (
                  <a href={founder.instagram} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition">
                    Instagram
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
