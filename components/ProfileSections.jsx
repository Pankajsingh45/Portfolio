const SKILLS = [
  "C",
  "Java",
  "Python",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "Git",
  "Docker",
];

const EDUCATION = [
  {
    degree: "MCA (Master of Computer Applications)",
    place: "Graphic Era Hill University",
    note: "Pursuing",
  },
];

const EXPERIENCE = [
  {
    role: "Web Developer Intern",
    company: "Cynoteck Technology Private Limited",
    duration: "3 months",
    points: [
      "Completed development tasks assigned by mentor using Next.js.",
      "Final month focused on backend: learned and built with Node.js, Express.js, MongoDB, and Mongoose.",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="pb-16 scroll-mt-8">
      <h2 className="font-display text-xl font-semibold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="font-mono text-xs px-3 py-1.5 rounded-md border border-[var(--line)] text-[var(--ink-soft)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="pb-16 scroll-mt-8">
      <h2 className="font-display text-xl font-semibold mb-6">Education</h2>
      <div className="space-y-4">
        {EDUCATION.map((edu) => (
          <div
            key={edu.degree}
            className="rounded-lg border border-[var(--line)] p-5"
          >
            <p className="font-medium">{edu.degree}</p>
            <p className="font-mono text-xs text-[var(--ink-soft)] mt-1">
              {edu.place} · {edu.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="pb-16 scroll-mt-8">
      <h2 className="font-display text-xl font-semibold mb-6">Experience</h2>
      <div className="space-y-4">
        {EXPERIENCE.map((exp) => (
          <div
            key={exp.company}
            className="rounded-lg border border-[var(--line)] p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-medium">{exp.role}</p>
              <p className="font-mono text-xs text-[var(--ink-soft)]">
                {exp.duration}
              </p>
            </div>
            <p className="font-mono text-xs text-[var(--ink-soft)] mt-1 mb-3">
              {exp.company}
            </p>
            <ul className="text-sm text-[var(--ink-soft)] space-y-1 list-disc list-inside">
              {exp.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
