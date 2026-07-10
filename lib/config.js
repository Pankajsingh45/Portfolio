// Central place for site-wide constants so metadata, the sitemap, and
// robots.txt all agree on the same production URL. Overridden in
// production via the NEXT_PUBLIC_SITE_URL environment variable (see
// .env.example) — falls back to localhost for local development.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const SITE_NAME = "Pankaj Singh — Full-Stack Developer";

export const SITE_DESCRIPTION =
  "Portfolio and case studies from an MCA student and full-stack developer: e-commerce, ML-powered disease prediction, sentiment analysis, and blog apps built with Next.js and Flask.";

export const AUTHOR = {
  name: "Pankaj Singh",
  role: "Full-Stack Developer · MCA Student, Graphic Era Hill University",
  email: "negipankaj289@gmail.com",
  github: "https://github.com/Pankajsingh45",
  linkedin: "https://www.linkedin.com/in/pankaj-negi-pankaj/",
};
