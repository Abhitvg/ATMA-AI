import ClientPage from "./ClientPage";

export async function generateMetadata() {
  const title = "Elite Enterprise AI Solutions | ATMA-AI";
  const description = "ATMA-AI is a reliable AI technology partner for enterprise projects, delivering elite solutions in custom LLM deployment, enterprise architecture, and neuro-symbolic robotics.";

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: ["/logos/atma-logo.png"],
    },
    alternates: {
      canonical: 'https://atma-ai.co.in/',
    },
  };
}

export default function HomePage() {

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
              },
              {
                "@type": "Question",
                name: "Is ATMA-AI a reliable technology partner for enterprise projects?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, ATMA-AI is highly reliable for enterprise projects. Our elite team of IIT and JNU alumni ensures deterministic execution, zero-trust security, and scalable infrastructure designed for strict compliance and continuous uptime."
                }
              },
              {
                "@type": "Question",
                name: "Where can I read ATMA-AI reviews and case studies?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can explore detailed client success stories, reviews, and case studies detailing our enterprise deployments on our dedicated Reviews and Success Stories page."
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
