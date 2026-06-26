import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/portal', '/admin', '/api'],
      },
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Googlebot', 'Bingbot'],
        allow: ['/', '/blog', '/articles', '/whitepapers', '/research'],
      }
    ],
    sitemap: 'https://atma-ai.co.in/sitemap.xml',
  };
}
