import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "ATMA Consultancy Services | AI & IT Consultancy — Abhishek Singh, Avadhesh Kumar, Chirag Beniwal | New Delhi",
    template: "%s | ATMA Consultancy & Research",
  },
  description:
    "ATMA Consultancy Services is an elite AI and IT consultancy founded by Abhishek Singh (MTech, JNU), Avadhesh Kumar (MTech, IIT Delhi), and Chirag Beniwal (MTech, JNU). We deliver custom LLM deployment, enterprise architecture, edge AI research, neuro-symbolic robotics, e-commerce solutions, and full-stack web development from New Delhi, India.",
  keywords: [
    "ATMA Consultancy",
    "ATMA Consultancy Services",
    "ATMA AI",
    "ATMA Research",
    "ATMA Consultancy & Research",
    "AI consultancy India",
    "AI consultancy New Delhi",
    "IT consultancy New Delhi",
    "Abhishek Singh consultant",
    "Abhishek Singh JNU",
    "Abhishek Singh MTech",
    "Avadhesh Kumar IIT Delhi",
    "Avadhesh Kumar consultant",
    "Chirag Beniwal JNU",
    "Chirag Beniwal consultant",
    "LLM deployment India",
    "enterprise architecture India",
    "edge AI India",
    "neuro-symbolic AI",
    "AI research India",
    "full stack development New Delhi",
    "e-commerce development India",
    "web development New Delhi",
    "IIT alumni consultancy",
    "JNU alumni consultancy",
    "cloud infrastructure India",
    "cybersecurity consulting India",
    "data science consultancy",
    "AI solutions Saket New Delhi",
    "atma-ai.co.in",
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
    title: "ATMA Consultancy Services | AI & IT Solutions — New Delhi, India",
    description:
      "Founded by IIT Delhi & JNU alumni — Abhishek Singh, Avadhesh Kumar, Chirag Beniwal. Enterprise AI, LLM deployment, edge robotics research, and full-stack development. 50+ projects delivered.",
    images: [
      {
        url: "/logos/atma-logo.svg",
        width: 512,
        height: 512,
        alt: "ATMA Consultancy & Research Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATMA Consultancy & Research | AI & IT Solutions — New Delhi",
    description:
      "IIT & JNU alumni-founded AI consultancy. Custom LLMs, edge AI research, enterprise architecture. 50+ projects delivered from New Delhi, India.",
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
    canonical: "https://atma-ai.co.in",
  },
  category: "technology",
  metadataBase: new URL("https://atma-ai.co.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}
    >
      <head>
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
                    "https://www.instagram.com/abhishek.tvg",
                  ],
                },
                {
                  "@type": "Person",
                  name: "Avadhesh Kumar",
                  jobTitle: "Co-Founder & Lead Engineer",
                  alumniOf: { "@type": "CollegeOrUniversity", name: "Indian Institute of Technology Delhi" },
                  knowsAbout: ["Machine Learning", "Cloud Infrastructure", "EdTech", "Neuro-Symbolic AI"],
                  sameAs: [
                    "https://www.linkedin.com/in/avadhak",
                    "https://www.instagram.com/avadh_ak_",
                  ],
                },
                {
                  "@type": "Person",
                  name: "Chirag Beniwal",
                  jobTitle: "Co-Founder & Tech Lead",
                  alumniOf: { "@type": "CollegeOrUniversity", name: "Jawaharlal Nehru University" },
                  knowsAbout: ["Enterprise Systems", "Data Engineering", "Backend Architecture"],
                  sameAs: [
                    "https://www.linkedin.com/in/chirag-beniwal-08691a1b4",
                    "https://www.instagram.com/chxbeni",
                  ],
                },
                {
                  "@type": "Person",
                  name: "Kumar Pratyay",
                  jobTitle: "Full-Stack Developer",
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
              ],
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              priceRange: "$$",
              numberOfEmployees: { "@type": "QuantitativeValue", minValue: 3 },
              foundingDate: "2024",
              sameAs: [
                "https://www.instagram.com/atma.tvg",
                "https://www.linkedin.com/in/abhisheksingh22141",
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
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
