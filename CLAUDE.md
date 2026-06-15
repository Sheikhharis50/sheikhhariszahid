# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Sheikh Haris Zahid, built with React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion. Deployed on Vercel.

## Commands

```bash
npm run dev      # Start dev server on http://localhost:5173
npm run build    # Type-check then Vite production build → dist/
npm run preview  # Preview production build
npm run lint     # ESLint
```

Running a single page is just navigating to the route, e.g. `http://localhost:5173/about`.

## Architecture

```
src/
  main.tsx               → ReactDOM.createRoot entry, wraps App in BrowserRouter
  App.tsx                → Routes (/, /home, /about, /services, /projects, /certifications, /contact) + AnimatePresence
  index.css              → Tailwind directives + custom utilities (gradient-text, glass, nav-item, skill-bar-container)
  data.ts                → All portfolio content as typed TypeScript constants + interfaces (stats, skillCategories, experiences, services, projects, trustedBy, certifications)
  components/
    Layout.tsx           → Outer shell: ParticleBg + CursorGlow + Navbar sidebar
    Navbar.tsx           → Right-side vertical nav (desktop) / bottom nav (mobile), lucide-react icons, useLocation for active state
    ParticleBg.tsx       → Canvas particle network animation, fixed behind all content
  pages/
    Home.tsx             → Hero, animated counter stats, typewriter title, download resume button, trusted-by logos
    About.tsx            → Skill bars (whileInView fill animation, 4 categories), experience timeline, education, CTA
    Services.tsx         → 3-D tilt service cards + intro text columns
    Projects.tsx         → Project cards with hover effects, tech badge stagger animation
    Certifications.tsx   → Certification cards grid; hexagonal Toptal badge (SVG clip-path); ExternalLink icons from lucide-react
    Contact.tsx          → Controlled form with success state, social links
```

## Static Assets

All static assets live directly under `public/assets/` (no symlink — the legacy root-level `assets/` directory no longer exists):

```
public/assets/
  icons/               → favicon.ico
  images/
    home/              → profile.jpg, trusted-by logos (degree37, neuronus, orangshine, pashione)
    project/           → project1–5 screenshots
  svg/
    about/
      progress_bars/   → SVG icons for frontend/backend skill bars (React, TypeScript, Node.js, etc.)
      progress_bar_03/ → SVG icons for DevOps/tools bars (AWS, Docker, GitHub, etc.)
      progress_bar_04/ → SVG icons for database bars (MongoDB, Redis, Kafka, etc.)
    contact/           → github.svg, linkdin.svg
  pdf/                 → Haris_Zahid_Resume.pdf
```

Reference assets via `/assets/images/...`, `/assets/svg/...`, `/assets/pdf/...`.

## Key Conventions

- **Framer Motion patterns**: use `whileInView` + `viewport={{ once: true }}` for scroll-triggered animations. Use `motion.div` variants with `staggerChildren` for lists. Animated counters use `useMotionValue` + `useTransform` + `animate`.
- **Tailwind gradient text**: apply via the `.gradient-text` utility class (defined in `index.css`), not inline styles.
- **Inline gradient styles**: used for border effects and fill colors that Tailwind can't express in a single class (e.g. the rotating ring, skill bars, gradient borders).
- **Data is in `src/data.ts`**: update portfolio content there; components read from it. All strings that contain apostrophes use double-quoted string literals to avoid TypeScript parse errors.
- **vercel.json** uses a catch-all rewrite to `/index.html` for SPA client-side routing.

## Color Palette

| Token | Value |
|---|---|
| Primary gradient | `from #06b6d4 via #6366f1 to #f339f3` |
| Accent red | `#ef4444` / `#b91c1c` |
| Card background | `#18181b` / `#27272a` (zinc-900 / zinc-800) |
| Body text | `#d4d4d8` (zinc-300) |
