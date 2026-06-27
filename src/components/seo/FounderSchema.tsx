import React from 'react';

interface FounderSchemaProps {
  name: string;
  slug: string; // e.g. "abhishek-singh"
  role: string;
  jobTitle: string;
  alumniOf: string;
  alumniOfUrl: string;
  description: string;
  knowsAbout: readonly string[];
  linkedin: string;
  instagram?: string;
  image: string; // absolute URL
  worksFor?: {
    name: string;
    url: string;
  };
}

export default function FounderSchema({
  name,
  slug,
  role,
  jobTitle,
  alumniOf,
  alumniOfUrl,
  description,
  knowsAbout,
  linkedin,
  instagram,
  image,
  worksFor = { name: "ATMA Consultancy Services", url: "https://atma-ai.co.in" },
}: FounderSchemaProps) {
  const founderUrl = `https://atma-ai.co.in/founders/${slug}`;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${founderUrl}#person`,
    name,
    jobTitle,
    description,
    url: founderUrl,
    image: {
      "@type": "ImageObject",
      url: image,
      width: 400,
      height: 400,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: alumniOf,
      url: alumniOfUrl,
      "@id": alumniOfUrl,
    },
    worksFor: {
      "@type": "Organization",
      name: worksFor.name,
      url: worksFor.url,
      "@id": `${worksFor.url}/#organization`,
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: `MTech — ${alumniOf}`,
    },
    knowsAbout,
    sameAs: [
      linkedin,
      ...(instagram ? [instagram] : []),
    ].filter(Boolean),
    nationality: {
      "@type": "Country",
      name: "India",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": founderUrl,
    url: founderUrl,
    name: `${name} — ${role} at ATMA Consultancy Services`,
    description,
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntity: {
      "@id": `${founderUrl}#person`,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://atma-ai.co.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://atma-ai.co.in/about",
        },
        {
          "@type": "ListItem",
          position: 3,
          name,
          item: founderUrl,
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}

// ─── Founder Data (single source of truth) ───────────────────────────────────
export const FOUNDERS = {
  abhishek: {
    name: "Abhishek Singh",
    slug: "abhishek-singh",
    role: "Co-Founder & CEO",
    jobTitle: "Co-Founder and Chief Executive Officer",
    alumniOf: "Jawaharlal Nehru University",
    alumniOfUrl: "https://www.jnu.ac.in",
    description:
      "Abhishek Singh is the Co-Founder and CEO of ATMA Consultancy Services, an AI research and IT consultancy based in New Delhi. He holds an MTech from Jawaharlal Nehru University and leads technical vision, full-stack architecture, and AI systems integration across enterprise clients including India Eurasia Research Forum and NCERT.",
    knowsAbout: [
      "Artificial Intelligence",
      "Full-Stack Web Architecture",
      "Next.js",
      "React",
      "DevOps",
      "Machine Learning Systems",
      "Enterprise Architecture",
      "AI Consultancy",
      "LLM Deployment",
    ],
    linkedin: "https://www.linkedin.com/in/abhisheksingh22141",
    instagram: "https://www.instagram.com/abhishek.tvg",
    image: "https://atma-ai.co.in/founders/abhishek.webp",
  },
  avadhesh: {
    name: "Avadhesh Kumar",
    slug: "avadhesh-kumar",
    role: "Co-Founder & CTO",
    jobTitle: "Co-Founder and Chief Technology Officer",
    alumniOf: "Indian Institute of Technology Delhi",
    alumniOfUrl: "https://home.iitd.ac.in",
    description:
      "Avadhesh Kumar is the Co-Founder and CTO of ATMA Consultancy Services. An IIT Delhi MTech alumnus, he leads ATMA's core AI research into neuro-symbolic architectures for GPS-denied edge robotics, deploying on NVIDIA Jetson Orin at sub-15ms latency. He also leads cloud-native infrastructure and machine learning pipeline engineering.",
    knowsAbout: [
      "Neuro-Symbolic AI",
      "Edge Computing",
      "NVIDIA Jetson",
      "Machine Learning",
      "Cloud Infrastructure",
      "Education Technology",
      "Autonomous Systems",
      "Robotics AI",
      "LLM Research",
    ],
    linkedin: "https://www.linkedin.com/in/avadhak",
    instagram: "https://www.instagram.com/avadh_ak_",
    image: "https://atma-ai.co.in/founders/avadhesh.webp",
  },
  chirag: {
    name: "Chirag Beniwal",
    slug: "chirag-beniwal",
    role: "Co-Founder & CMO",
    jobTitle: "Co-Founder and Chief Marketing Officer",
    alumniOf: "Jawaharlal Nehru University",
    alumniOfUrl: "https://www.jnu.ac.in",
    description:
      "Chirag Beniwal is the Co-Founder and CMO of ATMA Consultancy Services. A JNU MTech alumnus, he leads brand strategy, enterprise data systems architecture, and go-to-market execution. He oversees client relationships, marketing, and backend systems design for high-throughput production environments.",
    knowsAbout: [
      "Brand Strategy",
      "Enterprise Data Systems",
      "Backend Architecture",
      "Marketing Technology",
      "B2B Consultancy",
      "Go-to-Market Strategy",
      "High-Throughput Systems",
    ],
    linkedin: "https://www.linkedin.com/in/chirag-beniwal-08691a1b4",
    instagram: "https://www.instagram.com/chxbeni",
    image: "https://atma-ai.co.in/founders/chirag.webp",
  },
} as const;
