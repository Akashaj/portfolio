# akash-j.vercel.app

Personal portfolio of **Akash Jayakumar**: Staff Software Engineer, mobile architect and full-stack engineer.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4 and Vercel.

## Edit content
Every fact on the site lives in `content/`:

| File | What it holds |
|---|---|
| `content/profile.ts` | headline, summary, metrics, capabilities, leadership, skills, site URL |
| `content/apps.ts` | shipped apps and their store links |
| `content/experience.ts` | roles and education |
| `content/work.ts` | case studies (each one becomes `/work/<slug>`) |

The resume download is `public/Akash_Jayakumar_Resume.pdf` (phone number removed).

## Develop
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Accent colour preview
A floating "Variant" switcher toggles teal and purple (try `?accent=purple`, and `?theme=dark` for the dark theme).
Once you've picked one, set `NEXT_PUBLIC_SHOW_VARIANTS=false` in Vercel, and change the default `data-accent` in `app/layout.tsx`.

## Deploy
Push to `main`. Vercel builds and deploys automatically.
