import { MetadataRoute } from 'next';
import { getContentPosts } from '@/lib/mdx';

const locales = ['en', 'hi'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/portfolio', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/research', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.6, changeFrequency: 'yearly' as const },
    { path: '/founders/abhishek-singh', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/founders/avadhesh-kumar', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/founders/chirag-beniwal', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/press', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/articles', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/whitepapers', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  // Generate static route entries
  const staticEntries = routes.flatMap(({ path, priority, changeFrequency }) => {
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

  // Generate dynamic content entries
  const contentSections = [
    { section: 'blog' as const, basePath: '/blog' },
    { section: 'articles' as const, basePath: '/articles' },
    { section: 'whitepapers' as const, basePath: '/whitepapers' },
    { section: 'research' as const, basePath: '/research' },
  ];

  const dynamicEntries = (
    await Promise.all(
      contentSections.map(async ({ section, basePath }) => {
        const posts = await getContentPosts(section);
        return posts.flatMap((post) => {
          const alternates: { languages: Record<string, string> } = { languages: {} };
          locales.forEach((lang) => {
            alternates.languages[lang] = `https://atma-ai.co.in/${lang}${basePath}/${post.slug}`;
          });

          return locales.map((locale) => ({
            url: `https://atma-ai.co.in/${locale}${basePath}/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
            alternates,
          }));
        });
      })
    )
  ).flat();

  return [...staticEntries, ...dynamicEntries];
}
