# Portfolio — Pankaj Singh

A fresher-level portfolio built with Next.js (App Router, JavaScript/JSX — no TypeScript). Case studies are written in Markdown and rendered as dynamic blog pages, with per-page SEO metadata, an auto-generated sitemap and robots.txt, image optimization, lazy loading, and error/loading boundaries. Includes a production Dockerfile and Vercel config.

## Projects featured

Case studies live as Markdown files in `content/posts/`, one per project:

- `ecommerce.md` — [Ecommerce](https://github.com/Pankajsingh45/Ecommerce)
- `med-predict.md` — [Med-Predict-Disease-System](https://github.com/Pankajsingh45/Med-Predict-Disease-System)
- `sentiment-analysis.md` — [Sentiment-](https://github.com/Pankajsingh45/Sentiment-)
- `nextjs-blog-app.md` — [nextjs-BlogAPp](https://github.com/Pankajsingh45/nextjs-BlogAPp)
- `flask-blog-app.md` — [Blogging-website-using-Flask](https://github.com/Pankajsingh45/Blogging-website-using-Flask)

**To add another project**, drop a new `.md` file into `content/posts/` with the same frontmatter shape (see any existing file) — it will automatically appear on the home page, the blog listing, get its own SEO-tagged page, and be added to the sitemap. No other code changes needed.

**Edit content:** each `.md` file's body was written based on the repo descriptions from your GitHub profile — go in and adjust the specifics (exact libraries, model type, dataset, etc.) to match what you actually built, since I don't have access to your repos' internal code or READMEs.

**Update these placeholders** in `lib/config.js`: your real email and LinkedIn URL (currently placeholders).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

Copy `.env.example` to `.env.local` and set your real domain once you know it:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

This value feeds the sitemap, robots.txt, canonical URLs, and Open Graph tags — it must be set correctly **before** `next build` runs, since `NEXT_PUBLIC_*` variables are inlined into the build at build time.

## Production build

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Import the repo at https://vercel.com/new.
3. Add the `NEXT_PUBLIC_SITE_URL` environment variable in the Vercel project settings (Settings → Environment Variables), set to your eventual `https://<project>.vercel.app` URL (or custom domain).
4. Deploy. Vercel builds Next.js projects natively — no Docker needed here.

After the first deploy, if you add a custom domain, update `NEXT_PUBLIC_SITE_URL` to match and redeploy so the sitemap/canonical URLs point to the right place.

## Deploying with Docker (VPS or any container host)

Build the image, passing your real site URL as a build arg:

```bash
docker build --build-arg NEXT_PUBLIC_SITE_URL=https://your-domain.com -t portfolio .
```

Run it:

```bash
docker run -p 3000:3000 portfolio
```

The app will be available on port 3000. In production, put this behind a reverse proxy (Nginx/Caddy) that terminates TLS and forwards to the container.

The Dockerfile uses a 3-stage build (`deps` → `builder` → `runner`) and Next.js's `output: "standalone"` mode (see `next.config.mjs`), so the final image only contains the pruned runtime dependencies actually needed — no dev dependencies, no full `node_modules`, no source maps.

## What's covered, and where

| Requirement                   | Where                                                                                                                                                  |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Dynamic blog/case-study pages | `app/blog/[slug]/page.jsx`, content in `content/posts/*.md`                                                                                            |
| Dynamic metadata & SEO        | `generateMetadata()` in `app/blog/[slug]/page.jsx` and `app/blog/page.jsx`; base tags in `app/layout.jsx`                                              |
| Sitemap generation            | `app/sitemap.js` → served at `/sitemap.xml`                                                                                                            |
| Robots.txt                    | `app/robots.js` → served at `/robots.txt`                                                                                                              |
| Image optimization            | `next/image` in `components/PostCard.jsx` and `app/blog/[slug]/page.jsx`                                                                               |
| Lazy loading                  | `next/dynamic` + `ssr:false` for the below-the-fold widget (`components/LazyAvailability.jsx`); `next/image` lazy-loads non-priority images by default |
| Error boundaries              | `app/error.jsx` (global), `app/blog/[slug]/error.jsx` (scoped to a single post)                                                                        |
| Loading boundaries            | `app/loading.jsx` (global), `app/blog/[slug]/loading.jsx` (scoped to a single post)                                                                    |
| Docker                        | `Dockerfile`, `.dockerignore`                                                                                                                          |
| Vercel deployment             | `vercel.json` (cache headers); otherwise zero-config                                                                                                   |
| Environment config            | `.env.example`, `lib/config.js`                                                                                                                        |

## Known limitation (documented, not a bug)

Visiting an unknown post URL (e.g. `/blog/does-not-exist`) correctly shows the not-found page, but the HTTP status stays `200` rather than `404`. This is documented, expected Next.js App Router behavior: any route with a `loading.jsx` streams its response, and once streaming starts the status code is locked in at `200` — see [Next.js docs on not-found.js](https://nextjs.org/docs/app/api-reference/file-conventions/not-found). Next.js states this does not affect SEO indexing in practice.

# screenshots

<img width="1337" height="633" alt="image" src="https://github.com/user-attachments/assets/1cafb4ab-a8c9-4756-a0eb-06f27a598d86" />

<img width="1303" height="576" alt="image" src="https://github.com/user-attachments/assets/68462bd9-01e1-4648-8cfd-fd28fdb6c0c0" />

<img width="1109" height="518" alt="image" src="https://github.com/user-attachments/assets/440889ba-9dfd-4cf0-a6e5-c50968e4d543" />



