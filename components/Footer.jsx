import { AUTHOR } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] mt-16">
      <div className="mx-auto max-w-4xl px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs text-[var(--ink-soft)]">
        <p>
          © {new Date().getFullYear()} {AUTHOR.name} · built with Next.js
        </p>
        <div className="flex gap-4">
          <a href={`mailto:${AUTHOR.email}`} className="hover:underline underline-offset-4">
            {AUTHOR.email}
          </a>
          <a href={AUTHOR.linkedin} className="hover:underline underline-offset-4">
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
