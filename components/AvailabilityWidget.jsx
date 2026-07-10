"use client";

import { useEffect, useState } from "react";

// A live clock is a good candidate for lazy-loading: it needs the client,
// it's below the fold, and it would otherwise force the whole page to
// hydrate before showing anything.
export default function AvailabilityWidget() {
  // Lazy initializer runs once on mount (client-only, since this component
  // is dynamically imported with ssr:false) — avoids calling setState
  // synchronously inside the effect body itself.
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeLabel = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="rounded-lg border border-[var(--line)] px-5 py-4 flex items-center justify-between font-mono text-sm">
      <div className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full bg-[var(--signal-green)]"
        />
        <span>open to new roles</span>
      </div>
      <span className="text-[var(--ink-soft)]" suppressHydrationWarning>
        local time · {timeLabel}
      </span>
    </div>
  );
}
