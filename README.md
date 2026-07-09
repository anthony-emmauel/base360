# Base360 — Hero Page

**Live site:** https://visionary-pegasus-d7362a.netlify.app/

Landing page hero section for Base360, built as a take-home assessment for Flex & Base360.

Base360 unifies every conversation across social/DM/SMS/email, automates the busywork, and turns leads into sales. This page recreates the marketing hero: headline, CTA, trust bar, and a full-scale product UI panel showing the inbox experience.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`, theme tokens via `@theme` in `src/index.css`)
- [lucide-react](https://lucide.dev/) for icons

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to http://localhost:5173).

Other scripts:

```bash
npm run build    # type-check + production build
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Capture mode

For HTML-to-Figma capture, append `?static=true` to the URL. This pauses the animated background thread lines at a resting frame without removing them (adds a `capture-mode` class to `<body>`). Turn it off for normal viewing.
