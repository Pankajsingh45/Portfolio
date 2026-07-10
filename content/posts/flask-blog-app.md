---
title: "Blogging Website Using Flask"
excerpt: "A blogging website that gives information about the latest AI updates, built with Python and Flask."
date: "2026-03-22"
status: "shipped"
stack: ["Python", "Flask", "HTML"]
cover: "/images/flask-blog.svg"
repo: "https://github.com/Pankajsingh45/Blogging-website-using-Flask"
demo: ""
---

## What it does

A blogging website focused on a specific niche — keeping readers updated on the latest developments in AI — built with Python and Flask on the backend and server-rendered HTML templates on the front end.

## Why Flask for this

Flask is a good fit for a content-first site like a blog: it's a small, unopinionated framework, so routing posts, rendering templates with Jinja, and serving pages stays simple without pulling in more than the project actually needs.

## Core pieces

- **Routes** — Flask routes for the post list and individual post pages.
- **Templates** — server-rendered HTML via Jinja templates, keeping pages simple and fast to load.
- **Content focus** — posts curated around one topic (AI updates) rather than a general-purpose blog, which keeps the site's voice and audience clear.

## What I'd improve next

Turning static/hard-coded posts into content managed through a simple admin route or a Markdown-file-based system (similar to the Next.js blog approach) would make adding new posts faster, and adding basic SEO meta tags per page would help posts get found through search.

## Try it

Source code is on GitHub: [Pankajsingh45/Blogging-website-using-Flask](https://github.com/Pankajsingh45/Blogging-website-using-Flask).
