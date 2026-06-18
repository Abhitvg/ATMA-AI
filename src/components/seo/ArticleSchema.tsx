import React from 'react';

interface ArticleSchemaProps {
  title: string;
  description: string;
  authorName: string;
  authorSlug: "abhishek-singh" | "avadhesh-kumar" | "chirag-beniwal";
  datePublished: string; // ISO 8601
  dateModified?: string;
  slug: string;
  imageUrl?: string;
}

export default function ArticleSchema({
  title,
  description,
  authorName,
  authorSlug,
  datePublished,
  dateModified,
  slug,
  imageUrl = "https://atma-ai.co.in/logos/atma-logo.svg",
}: ArticleSchemaProps) {
  const articleUrl = `https://atma-ai.co.in/en/research/${slug}`;
  const authorUrl = `https://atma-ai.co.in/en/founders/${authorSlug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "@id": articleUrl,
    headline: title,
    description,
    url: articleUrl,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl,
      "@id": `${authorUrl}#person`,
      worksFor: {
        "@type": "Organization",
        name: "ATMA Consultancy Services",
        url: "https://atma-ai.co.in",
        "@id": "https://atma-ai.co.in/#organization",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "ATMA Research Labs",
      url: "https://atma-ai.co.in",
      "@id": "https://atma-ai.co.in/#organization",
      logo: {
        "@type": "ImageObject",
        url: "https://atma-ai.co.in/logos/atma-logo.svg",
        width: 512,
        height: 512,
      },
    },
    image: {
      "@type": "ImageObject",
      url: imageUrl,
    },
    isPartOf: {
      "@type": "Blog",
      name: "ATMA Research Publications",
      url: "https://atma-ai.co.in/en/research",
    },
    about: [
      { "@type": "Thing", name: "Neuro-Symbolic AI" },
      { "@type": "Thing", name: "Edge Computing" },
      { "@type": "Thing", name: "Artificial Intelligence Research" },
    ],
    keywords: [
      "ATMA Research",
      "Neuro-Symbolic AI",
      "Edge Robotics",
      "AI India",
      "IIT Delhi AI Research",
      authorName,
    ].join(", "),
    inLanguage: "en-IN",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "Research",
        item: "https://atma-ai.co.in/en/research",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: articleUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
