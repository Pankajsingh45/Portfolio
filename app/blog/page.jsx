import PostCard from "@/components/PostCard";
import { getAllPostsMeta } from "@/lib/posts";
import { SITE_URL } from "@/lib/config";

export const metadata = {
  title: "Blog & Case Studies",
  description:
    "Write-ups on building, optimizing, and deploying real projects — real-time apps, Markdown-powered blogs, Docker, and performance audits.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Blog & Case Studies",
    description:
      "Write-ups on building, optimizing, and deploying real projects.",
    url: `${SITE_URL}/blog`,
  },
};

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <header className="mb-10">
        <p className="font-mono text-xs text-[var(--ink-soft)] mb-2">
          $ ls ./case-studies
        </p>
        <h1 className="font-display text-2xl sm:text-3xl font-semibold">
          Blog &amp; case studies
        </h1>
        <p className="mt-3 text-[var(--ink-soft)] max-w-2xl">
          Each post is a real project with a real problem, the approach I
          took, and what I&apos;d change next time.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
