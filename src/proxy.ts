import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

// Subdomain → internal path mapping
const subdomainMap: Record<string, string> = {
  blog: "/blog",
  articles: "/articles",
  whitepaper: "/whitepapers",
};

// next-intl middleware for locale handling
const intlMiddleware = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const url = request.nextUrl.clone();

  // Extract subdomain: "blog.atma-ai.co.in" → "blog"
  let subdomain: string | null = null;

  if (hostname.includes("atma-ai.co.in")) {
    const parts = hostname.split(".");
    // blog.atma-ai.co.in → parts = ["blog", "atma-ai", "co", "in"]
    // atma-ai.co.in → parts = ["atma-ai", "co", "in"]
    if (parts.length > 3) {
      subdomain = parts[0];
    }
  } else if (hostname.includes("localhost")) {
    // For local development: blog.localhost:3000
    const parts = hostname.split(".");
    if (parts.length > 1) {
      subdomain = parts[0];
    }
  } else if (hostname.includes("vercel.app")) {
    // For Vercel preview deployments with subdomains
    const parts = hostname.split(".");
    if (parts.length > 3) {
      subdomain = parts[0];
    }
  }

  // If we matched a subdomain, rewrite to the internal path
  if (subdomain && subdomainMap[subdomain]) {
    const internalPath = subdomainMap[subdomain];
    const pathname = url.pathname;

    // Don't rewrite Next.js internals, API routes, or static assets
    if (
      pathname.startsWith("/_next") ||
      pathname.startsWith("/api") ||
      pathname.startsWith("/logos") ||
      pathname.startsWith("/founders") ||
      pathname.includes(".")
    ) {
      return NextResponse.next();
    }

    // Check if the path already contains the section prefix (avoid double-prefixing)
    const localePattern = /^\/(en|hi)(\/|$)/;
    const cleanPath = pathname.replace(localePattern, "/");

    if (!cleanPath.startsWith(internalPath)) {
      // Rewrite: blog.atma-ai.co.in/some-slug → /blog/some-slug
      url.pathname = `${internalPath}${pathname === "/" ? "" : pathname}`;
      return intlMiddleware(new NextRequest(url, request));
    }
  }

  // For the main domain, just run next-intl middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(hi|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)',]
};
