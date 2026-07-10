"use client";

import { useEffect } from "react";
import Link from "next/link";

// app/error.jsx must be a Client Component — it receives the thrown error
// and a reset() function to retry rendering the segment.
export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // In production this is where you'd forward to an error-tracking
    // service (Sentry, etc). Kept as a console log for this project.
    console.error("Unhandled route error:", error);
  }, [error]);

  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="font-mono text-xs text-[var(--signal-red)] mb-3">
        $ status: build failed
      </p>
      <h1 className="font-display text-2xl font-semibold mb-3">
        Something broke on this page
      </h1>
      <p className="text-[var(--ink-soft)] mb-8">
        That&apos;s on this app, not you. You can try again, or head back to the
        home page.
      </p>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={reset}
          className="rounded-md bg-[var(--ink)] text-[var(--paper)] px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-md border border-[var(--line)] px-4 py-2 text-sm font-medium hover:border-[var(--ink)] transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
