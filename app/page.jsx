import Link from "next/link";
import PostCard from "@/components/PostCard";
import LazyAvailability from "@/components/LazyAvailability";
import { getAllPostsMeta } from "@/lib/posts";
import { AUTHOR } from "@/lib/config";
import {
  SkillsSection,
  EducationSection,
  ExperienceSection,
  CertificationsSection,
} from "@/components/ProfileSections";

export default function HomePage() {
  const posts = getAllPostsMeta();

  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* Hero — a terminal window is the one bold move on this page;
          everything else stays quiet so it doesn't compete. */}
      <section className="pt-14 pb-10">
        <div className="rounded-lg border border-[var(--line)] bg-[var(--ink)] text-[var(--paper)] overflow-hidden shadow-sm">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--signal-red)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--signal-amber)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--signal-green)]" />
            <span className="ml-3 font-mono text-xs text-white/50">
              zsh — ~/portfolio
            </span>
          </div>
          <div className="px-5 py-6 sm:px-7 sm:py-8 font-mono text-sm sm:text-base leading-relaxed">
            <p className="text-white/50">$ whoami</p>
            <h1 className="font-display text-2xl sm:text-3xl font-semibold mt-1 mb-3">
              {AUTHOR.name}
            </h1>
            <p className="text-white/50">$ cat role.txt</p>
            <p className="mt-1 mb-3">{AUTHOR.role}</p>
            <p className="text-white/50">$ cat pitch.txt</p>
            <p className="mt-1 mb-5 text-white/85">
              MCA student skilled in C, Java, Python, React, and Node.js — I
              build full-stack apps and ML-powered tools, from e-commerce
              platforms to disease-prediction and sentiment-analysis systems.
              <span className="cursor-blink" aria-hidden="true">
                _
              </span>
            </p>
            <div className="flex flex-wrap gap-3 font-sans">
              <a
                href="#work"
                className="rounded-md bg-[var(--paper)] text-[var(--ink)] px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View case studies
              </a>
              <a
                href="/images/resume.pdf"
                className="rounded-md border border-white/25 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Download résumé
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="work" className="pb-16 scroll-mt-8">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-display text-xl font-semibold">Case studies</h2>
          <Link
            href="/blog"
            className="font-mono text-xs text-[var(--ink-soft)] hover:underline underline-offset-4"
          >
            view all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} priority={i < 2} />
          ))}
        </div>
      </section>

      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <CertificationsSection />

      {/* Lazily-loaded, non-critical widget — demonstrates deferring
    below-the-fold interactivity out of the initial bundle. */}
      <section className="pb-20">
        <LazyAvailability />
      </section>
    </div>
  );
}
