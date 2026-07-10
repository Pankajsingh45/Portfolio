import Link from "next/link";
import { AUTHOR } from "@/lib/config";

export default function Header() {
  return (
    <header className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-semibold text-lg tracking-tight"
        >
          {AUTHOR.name}
        </Link>
        <nav className="flex items-center gap-6 font-mono text-sm">
          <Link href="/#work" className="hover:underline underline-offset-4">
            work
          </Link>
          <Link href="/blog" className="hover:underline underline-offset-4">
            blog
          </Link>
          <Link
            href={AUTHOR.github}
            className="hover:underline underline-offset-4"
          >
            github
          </Link>
        </nav>
      </div>
    </header>
  );
}
