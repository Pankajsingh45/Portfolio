export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <div className="font-mono text-xs text-[var(--ink-soft)] mb-6">
        $ loading...
      </div>
      <div className="grid sm:grid-cols-2 gap-6" aria-hidden="true">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-[var(--line)] overflow-hidden animate-pulse"
          >
            <div className="aspect-[16/9] bg-[var(--paper-dim)]" />
            <div className="p-5 space-y-3">
              <div className="h-4 w-3/4 bg-[var(--paper-dim)] rounded" />
              <div className="h-3 w-full bg-[var(--paper-dim)] rounded" />
              <div className="h-3 w-2/3 bg-[var(--paper-dim)] rounded" />
            </div>
          </div>
        ))}
      </div>
      <span className="sr-only" role="status">
        Loading content
      </span>
    </div>
  );
}
