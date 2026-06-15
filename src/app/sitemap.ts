import { MetadataRoute } from 'next';

const locales = ['en', 'hi'];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/portfolio', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/research', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.6, changeFrequency: 'yearly' as const },
    { path: '/team/abhishek-singh', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/team/avadhesh-kumar', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/team/chirag-beniwal', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/press', priority: 0.8, changeFrequency: 'weekly' as const },
  ];

  return routes.flatMap(({ path, priority, changeFrequency }) => {
    // Generate alternates for each locale
    const alternates: { languages: Record<string, string> } = { languages: {} };
    locales.forEach((lang) => {
      alternates.languages[lang] = `https://atma-ai.co.in/${lang}${path}`;
    });

    return locales.map((locale) => ({
      url: `https://atma-ai.co.in/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates,
    }));
  });
}
