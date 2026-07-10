const STATUS_MAP = {
  deployed: { label: "deployed", color: "var(--signal-green)" },
  live: { label: "live", color: "var(--signal-blue)" },
  shipped: { label: "shipped", color: "var(--signal-amber)" },
};

/**
 * Renders a small CI-style status line, e.g.
 *   ● deployed · Next.js, Socket.IO, Docker · 4 min read
 * This is the portfolio's signature visual motif: every case study
 * is presented like a build log entry, not a generic project card.
 */
export default function StatusBar({ status = "shipped", stack = [], readingTime }) {
  const meta = STATUS_MAP[status] || STATUS_MAP.shipped;

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-[var(--ink-soft)]">
      <span className="inline-flex items-center gap-1.5">
        <span
          aria-hidden="true"
          className="inline-block h-2 w-2 rounded-full"
          style={{ backgroundColor: meta.color }}
        />
        {meta.label}
      </span>
      {stack.length > 0 && (
        <>
          <span aria-hidden="true">·</span>
          <span>{stack.join(", ")}</span>
        </>
      )}
      {readingTime && (
        <>
          <span aria-hidden="true">·</span>
          <span>{readingTime}</span>
        </>
      )}
    </div>
  );
}
