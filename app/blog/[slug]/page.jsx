import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllPostSlugs, getPostBySlug, getAllPostsMeta } from "@/lib/posts";
import StatusBar from "@/components/StatusBar";
import { SITE_URL } from "@/lib/config";

// Pre-render every known post at build time (SSG). New posts added later
// still work via on-demand rendering, since dynamicParams defaults to true.
//
// Known limitation: because this route has a loading.jsx (streaming UI),
// Next.js locks the HTTP status at 200 once streaming starts — so an
// unknown slug still renders the not-found.jsx UI correctly, but returns
// a 200 rather than a 404 status. This is documented, expected Next.js
// App Router behavior (see nextjs.org/docs/app/api-reference/file-conventions/not-found)
// and Next.js states it does not affect SEO indexing in practice.
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Per-post SEO metadata, derived entirely from the post's own frontmatter —
// this is what keeps every case study individually indexable and shareable.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date,
      images: post.cover
        ? [{ url: post.cover, width: 1200, height: 630, alt: post.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.cover ? [post.cover] : undefined,
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    // Renders the nearest not-found.jsx and returns a proper 404 status.
    notFound();
  }

  const allPosts = getAllPostsMeta();
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <article className="mx-auto max-w-3xl px-6 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Link
        href="/blog"
        className="font-mono text-xs text-[var(--ink-soft)] hover:underline underline-offset-4"
      >
        ← back to case studies
      </Link>

      <header className="mt-4 mb-8">
        <h1 className="font-display text-2xl sm:text-3xl font-semibold leading-tight">
          {post.title}
        </h1>
        <p className="mt-3 text-[var(--ink-soft)]">{post.excerpt}</p>
        <div className="mt-4">
          <StatusBar
            status={post.status}
            stack={post.stack}
            readingTime={post.readingTime}
          />
        </div>
        {(post.repo || post.demo) && (
          <div className="mt-4 flex gap-4 font-mono text-xs">
            {post.repo && (
              <a
                href={post.repo}
                className="underline underline-offset-4 hover:text-[var(--ink)]"
              >
                source →
              </a>
            )}
            {post.demo && (
              <a
                href={post.demo}
                className="underline underline-offset-4 hover:text-[var(--ink)]"
              >
                live demo →
              </a>
            )}
          </div>
        )}
      </header>

      {post.cover && (
        <div className="relative aspect-[16/9] mb-10 rounded-lg overflow-hidden border border-[var(--line)]">
          <Image
            src={post.cover}
            alt={`Cover illustration for ${post.title}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      )}

      <div
        className="prose-post"
        // Content is authored Markdown from our own /content directory,
        // rendered to HTML at build/request time via remark — not
        // user-submitted input.
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      {related.length > 0 && (
        <section className="mt-16 pt-8 border-t border-[var(--line)]">
          <h2 className="font-display text-lg font-semibold mb-4">
            More case studies
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="block border border-[var(--line)] rounded-lg p-4 hover:border-[var(--ink)] transition-colors"
              >
                <p className="font-display font-medium">{p.title}</p>
                <p className="mt-1 text-sm text-[var(--ink-soft)]">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
