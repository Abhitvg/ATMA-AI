import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ScrollProgress from "@/components/ScrollProgress";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const title = "Scale Enterprise Autonomous AI Agents Securely | ATMA-AI";
  const description = "Deploy secure enterprise autonomous AI agents that drive real ROI. Overcome data debt with custom neural pipelines and zero-trust AI governance from ATMA-AI.";

  return {
    title: {
      default: title,
      template: "%s | ATMA Consultancy & Research",
    },
    description: description,
    keywords: [
      "Enterprise Autonomous AI Agents",
      "Agentic AI",
      "Neural Pipelines",
      "Zero Trust AI",
      "Digital Labor",
      "ATMA Consultancy",
      "ATMA AI",
      "AI consultancy India",
      "Abhishek Singh consultant",
      "LLM deployment India",
      "enterprise architecture India",
      "neuro-symbolic AI",
    ],
    authors: [
      { name: "Abhishek Singh", url: "https://atma-ai.co.in/about" },
      { name: "Avadhesh Kumar", url: "https://atma-ai.co.in/about" },
      { name: "Chirag Beniwal", url: "https://atma-ai.co.in/about" },
    ],
    creator: "ATMA Consultancy Services",
    publisher: "ATMA Consultancy Services",
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: "https://atma-ai.co.in",
      siteName: "ATMA Consultancy & Research",
      title: title,
      description: description,
      images: [
        {
          url: "/logos/atma-logo.png",
          width: 512,
          height: 512,
          alt: "ATMA Consultancy & Research Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/logos/atma-logo.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: 'https://atma-ai.co.in',
    },
    category: "technology",
    manifest: "/manifest.json",
    metadataBase: new URL("https://atma-ai.co.in"),
    other: {
      "geo.region": "IN-DL",
      "geo.placename": "New Delhi",
      "geo.position": "28.5245;77.2108",
      ICBM: "28.5245, 77.2108",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://atma-ai.co.in/#organization",
              name: "ATMA Consultancy Services",
              alternateName: ["ATMA AI", "ATMA Consultancy & Research", "ATMA Research Labs"],
              url: "https://atma-ai.co.in",
              logo: "https://atma-ai.co.in/logos/atma-logo.svg",
              image: "https://atma-ai.co.in/logos/atma-logo.svg",
              dateModified: new Date().toISOString(),
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: [".text-fluid-h2", ".text-fluid-p"]
              },
              description:
                "Elite AI and IT consultancy founded by IIT Delhi & JNU alumni. Specializing in custom LLM deployment, enterprise architecture, neuro-symbolic AI research, and edge robotics. Based in Saket, New Delhi.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "A-2, Yadav Complex, A-block, Saket",
                addressLocality: "New Delhi",
                addressRegion: "Delhi",
                postalCode: "110068",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 28.5245,
                longitude: 77.2108,
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "ceo@atma-ai.co.in",
                contactType: "sales",
                areaServed: ["IN", "US", "GB", "AE"],
                availableLanguage: ["English", "Hindi"],
              },
              founder: [
                {
                  "@type": "Person",
                  name: "Abhishek Singh",
                  jobTitle: "Co-Founder & CEO",
                  alumniOf: { "@type": "CollegeOrUniversity", name: "Jawaharlal Nehru University" },
                  knowsAbout: ["AI Systems", "Full-Stack Architecture", "Web Development", "Machine Learning"],
                  sameAs: [
                    "https://www.linkedin.com/in/abhisheksingh22141",
                  ],
                },
                {
                  "@type": "Person",
                  name: "Avadhesh Kumar",
                  jobTitle: "Co-Founder & CTO",
                  alumniOf: { "@type": "CollegeOrUniversity", name: "Indian Institute of Technology Delhi" },
                  knowsAbout: ["Machine Learning", "Cloud Infrastructure", "EdTech", "Neuro-Symbolic AI"],
                  sameAs: [
                    "https://www.linkedin.com/in/avadhak",
                  ],
                },
                {
                  "@type": "Person",
                  name: "Chirag Beniwal",
                  jobTitle: "Co-Founder & CMO",
                  alumniOf: { "@type": "CollegeOrUniversity", name: "Jawaharlal Nehru University" },
                  knowsAbout: ["Enterprise Systems", "Data Engineering", "Backend Architecture"],
                  sameAs: [
                    "https://www.linkedin.com/in/chirag-beniwal-08691a1b4",
                  ],
                },
                {
                  "@type": "Person",
                  name: "Kumar Pratyay",
                  jobTitle: "Co-Founder & CFO",
                  alumniOf: { "@type": "CollegeOrUniversity", name: "Jawaharlal Nehru University" },
                  knowsAbout: ["Full-Stack Development", "Management", "Computer Science"],
                },
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "Large Language Models",
                "Enterprise Architecture",
                "Cloud Computing",
                "Edge AI",
                "Neuro-Symbolic AI",
                "E-Commerce",
                "Full Stack Development",
                "Cybersecurity",
                "Digital Labor",
                "AI Governance",
                "RAG Pipelines",
                "Vector Databases",
                "Multi-Agent Orchestration",
                "LLM Cost Optimization"
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "AI Consulting Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Enterprise LLM Deployment"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI Agent Orchestration"
                    }
                  }
                ]
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              priceRange: "$$",
              numberOfEmployees: { "@type": "QuantitativeValue", minValue: 3 },
              foundingDate: "2024",
              sameAs: [
                "https://www.instagram.com/atma.tvg",
                "https://www.linkedin.com/company/atma-research-consultancy",
                "https://www.linkedin.com/in/avadhak",
                "https://www.linkedin.com/in/chirag-beniwal-08691a1b4",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "ATMA Consultancy & Research",
              url: "https://atma-ai.co.in",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://atma-ai.co.in/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What are Enterprise Autonomous AI Agents?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Unlike simple chatbots, Enterprise Autonomous AI Agents act as digital labor. They reason through complex tasks, securely interact with enterprise APIs (like SAP or Salesforce), and execute long-running workflows without continuous human prompting."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why is Zero Trust AI important for enterprise deployments?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Zero Trust AI ensures that sensitive enterprise data is never leaked to public models. By deploying single-tenant infrastructure, custom LLMs, and strict Role-Based Access Controls (RBAC), enterprises can automate securely."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does a Neural Pipeline resolve enterprise data debt?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Neural Pipeline cleans and structures siloed enterprise data using Retrieval-Augmented Generation (RAG). This ensures that AI agents make decisions based on accurate, real-time business context rather than outdated training data."
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5024596573466584"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
