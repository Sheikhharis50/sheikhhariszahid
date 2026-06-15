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
  main.tsx           → ReactDOM.createRoot entry, wraps App in BrowserRouter
  App.tsx            → Routes (/, /home, /about, /services, /projects, /contact) + AnimatePresence
  index.css          → Tailwind directives + custom utilities (gradient-text, glass, nav-item, skill-bar-container)
  data.ts            → All portfolio content as typed TypeScript constants (stats, skillCategories, experiences, services, projects, trustedBy)
  components/
    Layout.tsx       → Outer shell: ParticleBg + CursorGlow + Navbar sidebar
    Navbar.tsx       → Right-side vertical nav (desktop) / bottom nav (mobile), useLocation for active state
    ParticleBg.tsx   → Canvas particle network animation, fixed behind all content
  pages/
    Home.tsx         → Hero, animated counter stats, typewriter title, download resume button, trusted-by logos
    About.tsx        → Skill bars (whileInView fill animation), experience timeline, education, CTA
    Services.tsx     → 3-D tilt service cards + intro text columns
    Projects.tsx     → Project cards with hover effects, tech badge stagger animation
    Contact.tsx      → Controlled form with success state, social links
```

## Static Assets

`public/assets` is a symlink to `../assets` (the existing asset directory at project root). This lets `/assets/images/...`, `/assets/svg/...`, and `/assets/pdf/...` paths work as-is in both dev and production. **Never move or delete the symlink** — it wires Vite's public dir to the legacy asset tree.

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
