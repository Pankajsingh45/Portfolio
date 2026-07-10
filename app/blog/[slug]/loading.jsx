export default function PostLoading() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14 animate-pulse" aria-hidden="true">
      <div className="h-3 w-32 bg-[var(--paper-dim)] rounded mb-8" />
      <div className="h-8 w-4/5 bg-[var(--paper-dim)] rounded mb-4" />
      <div className="h-4 w-full bg-[var(--paper-dim)] rounded mb-2" />
      <div className="h-4 w-2/3 bg-[var(--paper-dim)] rounded mb-8" />
      <div className="aspect-[16/9] bg-[var(--paper-dim)] rounded-lg mb-8" />
      <div className="space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-3 w-full bg-[var(--paper-dim)] rounded" />
        ))}
      </div>
      <span className="sr-only" role="status">
        Loading post
      </span>
    </div>
  );
}
