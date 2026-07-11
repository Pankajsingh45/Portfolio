const SKILLS = [
  "JavaScript (ES6+)",
  "Python",
  "SQL",
  "C",
  "React.js",
  "Next.js",
  "Redux",
  "Context API",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Responsive Design",
  "SSR",
  "Node.js",
  "Express.js",
  "REST APIs",
  "Flask",
  "PostgreSQL",
  "MySQL",
  "Prisma ORM",
  "Git",
  "GitHub",
  "Vercel",
  "Postman",
];

const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    place: "Graphic Era Hill University, Dehradun",
    note: "Aug 2024 – May 2026",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    place: "HNB Garhwal Central University, Srinagar",
    note: "Aug 2021 – Jun 2024",
  },
];

const EXPERIENCE = [
  {
    role: "Frontend Developer Intern",
    company: "Cyntoteck Technology Pvt. Ltd., Dehradun",
    duration: "Feb 2025 – May 2025",
    points: [
      "Gained hands-on experience with frontend and backend technologies including React.js, Next.js, Redux, Node.js, and Express.js.",
      "Independently completed 4 assigned tasks from mentor, building responsive web applications with REST API integration, dynamic routing, and server-side rendering (SSR).",
      "Deployed applications on Vercel with a CI/CD pipeline; collaborated with mentor and team throughout the development lifecycle, debugging and troubleshooting frontend issues.",
    ],
  },
];

const CERTIFICATIONS = [
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Skill Builder",
    date: "January 2025",
  },
  {
    name: "Machine Learning Terminology and Process",
    issuer: "AWS Skill Builder",
    date: "March 2025",
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
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-medium">{edu.degree}</p>
              <p className="font-mono text-xs text-[var(--ink-soft)]">
                {edu.note}
              </p>
            </div>
            <p className="font-mono text-xs text-[var(--ink-soft)] mt-1">
              {edu.place}
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

export function CertificationsSection() {
  return (
    <section id="certifications" className="pb-16 scroll-mt-8">
      <h2 className="font-display text-xl font-semibold mb-6">
        Certifications
      </h2>
      <div className="space-y-3">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.name}
            className="rounded-lg border border-[var(--line)] p-4 flex flex-wrap items-baseline justify-between gap-2"
          >
            <div>
              <p className="font-medium text-sm">{cert.name}</p>
              <p className="font-mono text-xs text-[var(--ink-soft)] mt-0.5">
                {cert.issuer}
              </p>
            </div>
            <p className="font-mono text-xs text-[var(--ink-soft)]">
              {cert.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
