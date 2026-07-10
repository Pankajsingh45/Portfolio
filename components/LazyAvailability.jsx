"use client";

import dynamic from "next/dynamic";

// next/dynamic with ssr:false must be called from inside a Client
// Component in the App Router — this thin wrapper is that boundary.
// The parent page (a Server Component) can import this normally.
const AvailabilityWidget = dynamic(
  () => import("@/components/AvailabilityWidget"),
  {
    ssr: false,
    loading: () => (
      <div className="h-24 rounded-lg border border-dashed border-[var(--line)] animate-pulse" />
    ),
  }
);

export default function LazyAvailability() {
  return <AvailabilityWidget />;
}
