# Portfolio Giveaway — Backend Engineer Portfolio

> [!IMPORTANT]
> ### 🎁 1,500 Subscribers Portfolio Giveaway
> **Make it yours with AI:** give your AI assistant your LinkedIn profile and résumé, then ask it to update [`src/lib/content.ts`](./src/lib/content.ts). The portfolio’s structure stays intact while the projects, experience, skills, links, and contact details become yours.
>
> **Highly SEO-optimized foundation:** canonical URL, `robots.txt`, sitemap, Open Graph and Twitter previews, JSON-LD structured data, and a web manifest are already included.
>
> [**View the live portfolio →**](https://portfolio-giveaway.netlify.app) · [**Watch the giveaway livestream →**](https://www.youtube.com/live/5Dc5UXLDjv8?si=vWxBUtVN8NJQRsOh)

A fast, editorial-style portfolio for a backend engineer focused on production Laravel systems, APIs, payments, search, data, and integrations.

Built as a responsive single-page experience with an accessible dark/light theme, purposeful motion, and a technical work archive instead of generic portfolio cards.

> This portfolio was created as a giveaway to celebrate reaching 1,500 YouTube subscribers. Watch the [giveaway livestream](https://www.youtube.com/live/5Dc5UXLDjv8?si=vWxBUtVN8NJQRsOh).

## Why this exists

This project is both a personal portfolio and a frontend implementation study: how to present backend work with clear hierarchy, real project context, and lightweight interaction design.

It highlights work across commerce, marketplaces, healthcare, fitness, and platform foundations—without fabricated metrics or mock projects.

## Highlights

- Editorial, responsive layout for desktop and mobile
- Dark and light themes with no flash on load
- GSAP and ScrollTrigger motion with reduced-motion support
- Accessible keyboard navigation, focus states, semantic landmarks, and descriptive media
- Data-driven project, experience, capability, and contact sections
- Production-minded asset handling and a lean Vite build
- SEO metadata, Open Graph/Twitter previews, JSON-LD person schema, `robots.txt`, and sitemap

## Tech stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) + ScrollTrigger
- [Lenis](https://lenis.darkroom.engineering/) smooth scrolling

## Run locally

```bash
git clone https://github.com/furqanistic/portfolio-giveaway.git
cd portfolio-giveaway
npm install
npm run dev
```

Open the local URL shown by Vite—normally `http://localhost:5173`.

## Available commands

```bash
npm run dev      # Start the development server
npm run build    # Type-check and create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run Oxlint
```

## Customize the portfolio

The source of truth for name, role, contact details, social links, projects, capabilities, and experience is [`src/lib/content.ts`](./src/lib/content.ts). Update that file first when adapting the portfolio.

Media lives in [`public/`](./public):

- `public/projects/` for project imagery
- `public/about/` for the editorial portrait

Major page sections live in [`src/sections/`](./src/sections/), while reusable interactions and navigation components are in [`src/components/`](./src/components/).

## SEO and deployment

The site includes a canonical URL, social sharing metadata, structured data, a web manifest, [`robots.txt`](./public/robots.txt), and [`sitemap.xml`](./public/sitemap.xml).

The production URL is [portfolio-giveaway.netlify.app](https://portfolio-giveaway.netlify.app). If you deploy this project elsewhere, update its canonical URL and social preview URLs in [`index.html`](./index.html), [`public/robots.txt`](./public/robots.txt), and [`public/sitemap.xml`](./public/sitemap.xml).

Then validate the live URL with [Google Search Console](https://search.google.com/search-console/about), submit the sitemap, and use each social platform’s preview debugger after deployment.

## Project structure

```text
src/
├── components/    # Navigation, theme, motion, and reusable UI
├── lib/           # Content data and shared utilities
├── sections/      # Portfolio page sections
└── App.tsx        # Section order and page composition
public/            # Project images, portrait, favicon, SEO files
```

## Contributing

Issues and focused improvements are welcome. For substantial changes, open an issue first so the direction stays consistent with the portfolio’s editorial and performance goals.

## Contact

Created as a YouTube community giveaway. For the giveaway context, watch the [livestream](https://www.youtube.com/live/5Dc5UXLDjv8?si=vWxBUtVN8NJQRsOh).
