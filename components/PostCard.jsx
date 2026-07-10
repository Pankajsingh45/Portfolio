import Link from "next/link";
import Image from "next/image";
import StatusBar from "./StatusBar";

/**
 * `priority` should only be true for cards visible above the fold
 * (e.g. the first 1-2 cards on the home page) — everything else
 * lazy-loads automatically via next/image's default behavior.
 */
export default function PostCard({ post, priority = false }) {
  return (
    <article className="group border border-[var(--line)] rounded-lg overflow-hidden bg-white/40 hover:border-[var(--ink)] transition-colors">
      <Link href={`/blog/${post.slug}`} className="block">
        {post.cover && (
          <div className="relative aspect-[16/9] bg-[var(--paper-dim)]">
            <Image
              src={post.cover}
              alt={`Cover illustration for ${post.title}`}
              fill
              priority={priority}
              loading={priority ? "eager" : "lazy"}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
              className="object-cover"
            />
          </div>
        )}
        <div className="p-5 flex flex-col gap-3">
          <h3 className="font-display font-semibold text-lg leading-snug group-hover:underline underline-offset-4 decoration-[var(--signal-amber)]">
            {post.title}
          </h3>
          <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
            {post.excerpt}
          </p>
          <StatusBar
            status={post.status}
            stack={post.stack}
            readingTime={post.readingTime}
          />
        </div>
      </Link>
    </article>
  );
}
