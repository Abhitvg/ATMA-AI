import { getTranslations, setRequestLocale } from "next-intl/server";
import ClientAbout from "./ClientAbout";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  return {
    title: "About ATMA-AI | AI Consultancy in New Delhi, India",
    description: "Learn about ATMA Consultancy Services. We are a long-term AI technology partner specializing in custom LLM deployment, cloud-native infrastructure, and zero-trust cybersecurity implementation.",
    openGraph: {
      title: "About ATMA-AI | AI Consultancy in New Delhi, India",
      description: "Learn about ATMA Consultancy Services. We are a long-term AI technology partner specializing in custom LLM deployment, cloud-native infrastructure, and zero-trust cybersecurity implementation.",
    },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntity: {
              "@type": "ProfessionalService",
              "@id": "https://atma-ai.co.in/#organization",
              name: "ATMA Consultancy Services",
              description: "Elite AI and IT consultancy specializing in custom LLM deployment, enterprise architecture, neuro-symbolic AI research, and edge robotics.",
              image: "https://atma-ai.co.in/logos/atma-logo.svg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "A-2, Yadav Complex, A-block, Saket",
                addressLocality: "New Delhi",
                addressRegion: "Delhi",
                postalCode: "110068",
                addressCountry: "IN"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 28.5245,
                longitude: 77.2108
              },
              founders: [
                { "@type": "Person", name: "Abhishek Singh", jobTitle: "Co-Founder & CEO" },
                { "@type": "Person", name: "Avadhesh Kumar", jobTitle: "Co-Founder & CTO" },
                { "@type": "Person", name: "Chirag Beniwal", jobTitle: "Co-Founder & CMO" }
              ]
            }
          })
        }}
      />
      <ClientAbout />
    </>
  );
}
