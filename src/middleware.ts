import { NextRequest, NextResponse } from "next/server";

// Subdomain → internal path mapping
const subdomainMap: Record<string, string> = {
  blog: "/blog",
  articles: "/articles",
  whitepaper: "/whitepapers",
};

export default function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const url = request.nextUrl.clone();

  // Enforce HTTPS
  const protocol = request.headers.get("x-forwarded-proto") || request.nextUrl.protocol;
  if (protocol === "http" || protocol === "http:") {
    // Only redirect in production environments (like Vercel) where host doesn't include localhost
    if (!hostname.includes("localhost")) {
      url.protocol = "https:";
      return NextResponse.redirect(url, 301);
    }
  }

  // Redirect legacy locale paths (/en, /hi) to their non-locale equivalents
  if (url.pathname.startsWith("/en") || url.pathname.startsWith("/hi")) {
    const newPathname = url.pathname.replace(/^\/(en|hi)(\/|$)/, "/");
    url.pathname = newPathname;
    return NextResponse.redirect(url, 301);
  }

  // Extract subdomain: "blog.atma-ai.co.in" → "blog"
  let subdomain: string | null = null;

  if (hostname.includes("atma-ai.co.in")) {
    const parts = hostname.split(".");
    // blog.atma-ai.co.in → parts = ["blog", "atma-ai", "co", "in"]
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

    if (!pathname.startsWith(internalPath)) {
      // Rewrite: blog.atma-ai.co.in/some-slug → /blog/some-slug
      url.pathname = `${internalPath}${pathname === "/" ? "" : pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)',]
};
