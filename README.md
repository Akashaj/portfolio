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

The resume download is `public/Akash_Jayakumar_Resume.pdf`.

## Develop
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Theme & motion
- Accent colour is purple (tokens in `app/globals.css`; teal tokens are kept under `data-accent="teal"`).
- Light/dark follows the system, with a toggle in the header. Preview with `?theme=dark`.
- Animations: scroll reveals (`data-reveal`), number count-ups, self-drawing diagrams, a stack marquee, card spotlight and a scroll progress bar.
  All of them are disabled for `prefers-reduced-motion`, and content stays visible without JavaScript.

## Deploy
Push to `main`. Vercel builds and deploys automatically.
