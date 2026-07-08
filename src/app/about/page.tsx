import ClientAbout from "./ClientAbout";

export async function generateMetadata() {
  const title = "About ATMA Consultancy | Enterprise LLM & Neuro-Symbolic AI in Delhi";
  const description = "Founded by IIT Delhi & JNU alumni, ATMA Consultancy Services is an elite AI strategy firm in New Delhi specializing in custom LLM deployment, enterprise architecture, and advanced ML pipelines.";

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: ["/logos/atma-logo.png"],
    },
    alternates: {
      canonical: 'https://atma-ai.co.in/about',
    },
  };
}

export default function AboutPage() {

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
                { 
                  "@type": "Person", 
                  name: "Abhishek Singh", 
                  jobTitle: "Co-Founder & CEO",
                  sameAs: ["https://www.linkedin.com/in/abhisheksingh22141"]
                },
                { 
                  "@type": "Person", 
                  name: "Avadhesh Kumar", 
                  jobTitle: "Co-Founder & CTO",
                  sameAs: ["https://www.linkedin.com/in/avadhak"]
                },
                { 
                  "@type": "Person", 
                  name: "Chirag Beniwal", 
                  jobTitle: "Co-Founder & CMO",
                  sameAs: ["https://www.linkedin.com/in/chirag-beniwal-08691a1b4"]
                }
              ],
              sameAs: [
                "https://www.linkedin.com/company/atma-research-consultancy",
                "https://www.instagram.com/atma.tvg"
              ],
              knowsAbout: [
                "Enterprise LLM Deployment",
                "Neuro-Symbolic AI",
                "Multi-Agent Orchestration",
                "Edge Robotics",
                "Zero Trust AI Architecture"
              ]
            }
          })
        }}
      />
      <ClientAbout />
    </>
  );
}
