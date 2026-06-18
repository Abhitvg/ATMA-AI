import { getTranslations, setRequestLocale } from "next-intl/server";
import ClientPage from "./ClientPage";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  return {
    title: "Elite Enterprise AI Solutions | ATMA-AI",
    description: "ATMA-AI delivers elite enterprise AI solutions — custom LLM deployment, enterprise architecture, and neuro-symbolic robotics. Based in New Delhi, India.",
    openGraph: {
      title: "Elite Enterprise AI Solutions | ATMA-AI",
      description: "ATMA-AI delivers elite enterprise AI solutions — custom LLM deployment, enterprise architecture, and neuro-symbolic robotics. Based in New Delhi, India.",
      images: ["/logos/atma-logo.png"],
    },
    alternates: {
      canonical: locale === 'en' ? 'https://atma-ai.co.in/' : `https://atma-ai.co.in/${locale}/`,
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            "@id": "https://atma-ai.co.in/#corporation",
            name: "ATMA Consultancy Services",
            alternateName: "ATMA-AI",
            url: "https://atma-ai.co.in",
            logo: "https://atma-ai.co.in/logos/atma-logo.svg",
            founders: [
              { "@type": "Person", name: "Abhishek Singh" },
              { "@type": "Person", name: "Avadhesh Kumar" },
              { "@type": "Person", name: "Chirag Beniwal" }
            ],
            description: "Elite AI and IT consultancy specializing in custom LLM deployment, enterprise architecture, neuro-symbolic AI research, and edge robotics."
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who founded ATMA-AI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ATMA-AI (ATMA Consultancy Services) was founded by Abhishek Singh (CEO), Avadhesh Kumar (CTO), and Chirag Beniwal (CMO). They are distinguished alumni of JNU and IIT Delhi with deep expertise in enterprise architecture and neuro-symbolic robotics."
                }
              },
              {
                "@type": "Question",
                name: "What services does ATMA-AI provide?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ATMA-AI specializes in Custom LLM Deployment, Enterprise Architecture, Data Science & Analytics, and Neuro-Symbolic Robotics. We build secure, high-performance systems designed for massive scale."
                }
              },
              {
                "@type": "Question",
                name: "Where is ATMA-AI headquartered?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ATMA-AI is headquartered in New Delhi, India. We serve a global client base including clients in India, the US, GB, and AE."
                }
              },
              {
                "@type": "Question",
                name: "How does ATMA-AI approach AI consulting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We apply deep academic rigor and precision engineering. Rather than relying solely on APIs, we train, fine-tune, and deploy custom machine learning pipelines and LLMs tailored directly to enterprise data."
                }
              },
              {
                "@type": "Question",
                name: "What industries does ATMA-AI serve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ATMA-AI serves multiple sectors including E-commerce, EdTech, Civic Tech, Healthcare, and Enterprise IT, delivering robust cloud infrastructures and intelligent predictive models."
                }
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://atma-ai.co.in"
              }
            ]
          })
        }}
      />
      <ClientPage />
    </>
  );
}
