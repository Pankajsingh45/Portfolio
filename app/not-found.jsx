import Link from "next/link";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="font-mono text-xs text-[var(--signal-amber)] mb-3">
        $ status: 404
      </p>
      <h1 className="font-display text-2xl font-semibold mb-3">
        Nothing here
      </h1>
      <p className="text-[var(--ink-soft)] mb-8">
        This page doesn&apos;t exist, or it moved. Try the case studies
        instead.
      </p>
      <Link
        href="/"
        className="rounded-md bg-[var(--ink)] text-[var(--paper)] px-4 py-2 text-sm font-medium inline-block hover:opacity-90 transition-opacity"
      >
        Back to home
      </Link>
    </div>
  );
}
