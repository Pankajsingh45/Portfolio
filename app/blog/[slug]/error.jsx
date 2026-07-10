"use client";

import { useEffect } from "react";
import Link from "next/link";

// Scoped to this route segment: an error rendering one post falls back to
// this UI while the rest of the site (header, footer, nav) stays intact.
export default function PostError({ error, reset }) {
  useEffect(() => {
    console.error("Post render error:", error);
  }, [error]);

  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="font-mono text-xs text-[var(--signal-red)] mb-3">
        $ status: could not load post
      </p>
      <h1 className="font-display text-2xl font-semibold mb-3">
        This post hit an error
      </h1>
      <p className="text-[var(--ink-soft)] mb-8">
        Try reloading it, or browse the rest of the case studies.
      </p>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={reset}
          className="rounded-md bg-[var(--ink)] text-[var(--paper)] px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Try again
        </button>
        <Link
          href="/blog"
          className="rounded-md border border-[var(--line)] px-4 py-2 text-sm font-medium hover:border-[var(--ink)] transition-colors"
        >
          All case studies
        </Link>
      </div>
    </div>
  );
}
