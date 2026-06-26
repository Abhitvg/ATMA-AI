import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

// ── Generic content helpers ──

type ContentSection = "research" | "blog" | "articles" | "whitepapers";

function getContentDir(section: ContentSection) {
  return path.join(process.cwd(), `src/content/${section}`);
}

export async function getContentPosts(section: ContentSection) {
  const contentDir = getContentDir(section);

  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      return {
        slug: file.replace(".mdx", ""),
        title: data.title,
        date: data.date,
        author: data.author,
        summary: data.summary,
        readingTime: readingTime(content).text,
        tags: data.tags || [],
      };
    });

  return posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export async function getContentPostBySlug(section: ContentSection, slug: string) {
  const contentDir = getContentDir(section);
  const filePath = path.join(contentDir, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  // Extract headings for Table of Contents (h2 and h3)
  const headings = Array.from(content.matchAll(/^(##|###)\s+(.*)$/gm)).map((match) => ({
    level: match[1] === "##" ? 2 : 3,
    text: match[2],
    id: match[2].toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
  }));

  return {
    meta: {
      title: data.title,
      date: data.date,
      author: data.author,
      summary: data.summary,
      readingTime: readingTime(content).text,
      tags: data.tags || [],
    },
    content,
    headings,
  };
}

// ── Backward-compatible wrappers for Research ──

export async function getResearchPosts() {
  return getContentPosts("research");
}

export async function getResearchPostBySlug(slug: string) {
  return getContentPostBySlug("research", slug);
}

// ── Blog ──

export async function getBlogPosts() {
  return getContentPosts("blog");
}

export async function getBlogPostBySlug(slug: string) {
  return getContentPostBySlug("blog", slug);
}

// ── Articles ──

export async function getArticlePosts() {
  return getContentPosts("articles");
}

export async function getArticlePostBySlug(slug: string) {
  return getContentPostBySlug("articles", slug);
}

// ── Whitepapers ──

export async function getWhitepaperPosts() {
  return getContentPosts("whitepapers");
}

export async function getWhitepaperPostBySlug(slug: string) {
  return getContentPostBySlug("whitepapers", slug);
}
