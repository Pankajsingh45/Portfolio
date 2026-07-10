import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

/**
 * Returns lightweight metadata for every post, sorted newest first.
 * Does NOT parse markdown body -> HTML, keeping the listing page cheap.
 */
export function getAllPostsMeta() {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(POSTS_DIR, filename);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      status: data.status || "shipped",
      stack: data.stack || [],
      cover: data.cover || null,
      repo: data.repo || null,
      demo: data.demo || null,
      readingTime: stats.text,
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

/** Returns every slug, used by generateStaticParams for SSG. */
export function getAllPostSlugs() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

/** Returns full post data, including body rendered to HTML, for a single slug. */
export async function getPostBySlug(slug) {
  const fullPath = path.join(POSTS_DIR, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  const processed = await remark().use(remarkHtml).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    status: data.status || "shipped",
    stack: data.stack || [],
    cover: data.cover || null,
    repo: data.repo || null,
    demo: data.demo || null,
    readingTime: stats.text,
    contentHtml,
  };
}
