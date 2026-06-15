import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Frequently Asked Questions | ATMA-AI",
    description: "Answers to the most common questions about ATMA-AI, our founders, services, and AI consulting process.",
    openGraph: {
      title: "Frequently Asked Questions | ATMA-AI",
      description: "Answers to the most common questions about ATMA-AI, our founders, services, and AI consulting process.",
    },
  };
}

const faqs = [
  {
    q: "Who founded ATMA-AI?",
    a: "ATMA-AI was founded by Abhishek Singh (CEO), Avadhesh Kumar (CTO), and Chirag Beniwal (CMO). They are distinguished alumni of JNU and IIT Delhi."
  },
  {
    q: "What does ATMA-AI do?",
    a: "ATMA-AI is an elite AI and IT consultancy. We build and deploy custom enterprise architecture, tailored Large Language Models (LLMs), and neuro-symbolic AI systems for businesses."
  },
  {
    q: "Who is Abhishek Singh?",
    a: "Abhishek Singh is the Co-Founder and CEO of ATMA-AI. He brings visionary leadership and deep expertise in full-stack architecture and AI systems integration."
  },
  {
    q: "What is Abhishek Singh's background?",
    a: "Abhishek Singh holds a Master's degree from Jawaharlal Nehru University. He has successfully architected systems for government institutions and large e-commerce enterprises."
  },
  {
    q: "Who is Avadhesh Kumar?",
    a: "Avadhesh Kumar is the Co-Founder and CTO of ATMA-AI. He specializes in scalable machine learning pipelines and cloud-native infrastructure."
  },
  {
    q: "What is Avadhesh Kumar's background?",
    a: "Avadhesh Kumar is an alumnus of the Indian Institute of Technology (IIT) Delhi. He is known for building highly scalable platforms, including major educational tech initiatives."
  },
  {
    q: "Who is Chirag Beniwal?",
    a: "Chirag Beniwal is the Co-Founder and CMO of ATMA-AI. He bridges the gap between enterprise strategy and complex technical systems."
  },
  {
    q: "What is Chirag Beniwal's background?",
    a: "Chirag Beniwal holds a Master's degree from Jawaharlal Nehru University. His background is rooted in robust data engineering and high-throughput backend architecture."
  },
  {
    q: "What is Custom LLM Deployment?",
    a: "Custom LLM Deployment involves training and fine-tuning Large Language Models specifically on a company's private data, ensuring high accuracy, security, and relevance."
  },
  {
    q: "How does ATMA-AI handle Enterprise Architecture?",
    a: "We design cloud-native, high-availability backend systems capable of processing millions of requests with zero downtime, focusing on rigorous scalability and security."
  },
  {
    q: "What is Neuro-Symbolic AI?",
    a: "Neuro-Symbolic AI combines the learning capabilities of neural networks with the logical reasoning of symbolic AI, creating models that are both powerful and highly explainable."
  },
  {
    q: "Where is ATMA-AI located?",
    a: "ATMA-AI is headquartered in Saket, New Delhi, India. We operate globally, serving clients across the US, UK, UAE, and India."
  },
  {
    q: "Does ATMA-AI build web applications?",
    a: "Yes. Our full-stack development team builds end-to-end web and mobile applications using modern frameworks like Next.js, React, and Node.js."
  },
  {
    q: "How does ATMA-AI approach Data Security?",
    a: "We implement Zero-Trust architecture, rigorous penetration testing, and compliance-first security measures to protect enterprise data and AI models."
  },
  {
    q: "How can I partner with ATMA-AI?",
    a: "You can reach out to us at ceo@atma-ai.co.in or use the contact form on our website to schedule an initial architecture consultation."
  }
];

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(faq => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a
              }
            }))
          })
        }}
      />
      <Navbar />
      <main className="flex-grow pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-light mb-12 text-center">
          Frequently Asked Questions
        </h1>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl">
              <h2 className="text-xl font-bold font-heading text-primary-light mb-3">{faq.q}</h2>
              <p className="text-muted leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
