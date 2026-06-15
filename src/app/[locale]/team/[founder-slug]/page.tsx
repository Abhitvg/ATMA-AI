import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

const founders = {
  "abhishek-singh": {
    name: "Abhishek Singh",
    role: "Co-Founder & CEO",
    institution: "Jawaharlal Nehru University",
    bio: "Abhishek leads the technical vision at ATMA. With a Master's in Technology from Jawaharlal Nehru University, he brings deep expertise in full-stack web architecture, AI/ML systems integration, and modern DevOps practices.",
    image: "/founders/abhishek.webp",
    linkedin: "https://www.linkedin.com/in/abhisheksingh22141",
    twitter: "https://twitter.com/ATMA_AI",
    github: "https://github.com/Abhitvg",
    knowsAbout: ["AI Systems", "Full-Stack Architecture", "Web Development", "Machine Learning"]
  },
  "avadhesh-kumar": {
    name: "Avadhesh Kumar",
    role: "Co-Founder & CTO",
    institution: "Indian Institute of Technology Delhi",
    bio: "An IITian with a relentless passion for scalable engineering, Avadhesh specializes in machine learning pipelines, cloud-native architectures, and education technology.",
    image: "/founders/avadhesh.webp",
    linkedin: "https://www.linkedin.com/in/avadhak",
    twitter: "https://twitter.com/ATMA_AI",
    github: "https://github.com/ATMA_AI",
    knowsAbout: ["Machine Learning", "Cloud Infrastructure", "EdTech", "Neuro-Symbolic AI"]
  },
  "chirag-beniwal": {
    name: "Chirag Beniwal",
    role: "Co-Founder & CMO",
    institution: "Jawaharlal Nehru University",
    bio: "Chirag brings precision engineering to every project. A JNU alumnus specializing in enterprise data systems, he leads the design and implementation of robust, high-throughput architectures.",
    image: "/founders/chirag.webp",
    linkedin: "https://www.linkedin.com/in/chirag-beniwal-08691a1b4",
    twitter: "https://twitter.com/ATMA_AI",
    github: "https://github.com/ATMA_AI",
    knowsAbout: ["Enterprise Systems", "Data Engineering", "Backend Architecture"]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string; 'founder-slug': string }> }): Promise<Metadata> {
  const { 'founder-slug': slug } = await params;
  const founder = founders[slug as keyof typeof founders];

  if (!founder) {
    return {};
  }

  return {
    title: `${founder.name} - ${founder.role} of ATMA-AI`,
    description: founder.bio,
    openGraph: {
      type: "profile",
      title: `${founder.name} - ${founder.role} of ATMA-AI`,
      description: founder.bio,
      images: [
        {
          url: founder.image,
          width: 800,
          height: 800,
          alt: founder.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${founder.name} - ${founder.role} of ATMA-AI`,
      description: founder.bio,
      creator: "@ATMA_AI",
    },
  };
}

export default async function FounderPage({ params }: { params: Promise<{ locale: string; 'founder-slug': string }> }) {
  const { locale, 'founder-slug': slug } = await params;
  setRequestLocale(locale);

  const founder = founders[slug as keyof typeof founders];

  if (!founder) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: founder.name,
            jobTitle: founder.role,
            description: founder.bio,
            image: {
              "@type": "ImageObject",
              url: `https://atma-ai.co.in${founder.image}`
            },
            worksFor: {
              "@type": "Organization",
              "@id": "https://atma-ai.co.in/#organization",
              name: "ATMA Consultancy Services"
            },
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: founder.institution
            },
            knowsAbout: founder.knowsAbout,
            sameAs: [
              founder.linkedin,
              founder.twitter,
              founder.github
            ].filter(Boolean)
          })
        }}
      />
      <Navbar />
      <main className="flex-grow pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3 aspect-square relative rounded-2xl overflow-hidden border border-accent/20">
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              className="object-cover object-top"
              onError={(e) => { e.currentTarget.src = "/logos/atma-logo.svg"; e.currentTarget.className = "object-contain p-8 opacity-50"; }}
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold font-heading text-primary-light mb-2">{founder.name}</h1>
            <h2 className="text-xl text-accent mb-6">{founder.role} at ATMA-AI</h2>
            
            <p className="text-muted leading-relaxed mb-8 text-lg">
              {founder.bio}
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary-light">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {founder.knowsAbout.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border flex gap-4">
              {founder.linkedin && (
                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
