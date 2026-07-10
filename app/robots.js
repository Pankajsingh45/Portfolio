import { SITE_URL } from "@/lib/config";

// Next.js recognizes app/robots.js and serves it at /robots.txt automatically.
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Reserved prefix for unpublished/draft posts, kept out of the index.
        disallow: ["/draft"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
