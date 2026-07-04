# Kaveri Singh — Portfolio

A single-page portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.
The visual concept treats the page like the backend systems it's showcasing: a sticky nav
styled as an HTTP response line, a hero built as a live request pipeline (Client → Controller
→ Service → Security → Repository → Database), and project cards laid out like API endpoint docs.

## Before you deploy

Open `lib/data.ts` — everything editable lives there:

- `contact.email`, `contact.github`, `contact.linkedin` — currently placeholders, swap in your real links
- `contact.resumeHref` — points to `/public/Kaveri_Singh_Resume.pdf` (your uploaded resume is already in `public/`)
- `projects[].href` — set each project's real GitHub repo URL (currently `#`)
- everything else (skills, education, certifications, bio) is pulled straight from your resume, edit freely

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy

Push this folder to a GitHub repo and import it in [Vercel](https://vercel.com/new) — no
config needed, it's a standard Next.js app.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom tokens in `tailwind.config.ts`)
- Framer Motion for scroll/entrance animation
- lucide-react for icons
