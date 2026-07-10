import { getAllPostsMeta } from "@/lib/posts";
import { SITE_URL } from "@/lib/config";

// Next.js recognizes app/sitemap.js and serves it at /sitemap.xml
// automatically — no manual XML to maintain. Every entry here is derived
// from the same post data the blog pages use, so it can never list a post
// that doesn't exist or omit one that does.
export default function sitemap() {
  const posts = getAllPostsMeta();

  const staticRoutes = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const postRoutes = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
