# Sheikh Haris Zahid — Portfolio

Personal portfolio website built with **React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion**.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript |
| Bundler | Vite 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Routing | React Router DOM 6 |
| Deployment | Vercel |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev        # → http://localhost:5173

# Production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
  main.tsx          → App entry point
  App.tsx           → Router + page transitions (AnimatePresence)
  index.css         → Tailwind directives + custom utilities
  data.ts           → All portfolio content (typed constants)
  components/
    Layout.tsx      → Shell: particle background + cursor glow + navbar
    Navbar.tsx      → Vertical sidebar (desktop) / bottom bar (mobile)
    ParticleBg.tsx  → Canvas particle network animation
  pages/
    Home.tsx        → Hero, animated stats, typewriter, trusted-by logos
    About.tsx       → Skill bars, experience timeline, education
    Services.tsx    → 3-D tilt service cards
    Projects.tsx    → Project showcase with hover effects
    Contact.tsx     → Contact form with success state

public/
  assets/           → Symlink to project-root assets/ (images, SVGs, PDF)

assets/             → Static assets (images, SVGs, icons, resume PDF)
```

## Pages

| Route | Description |
|---|---|
| `/home` | Hero with profile, animated stats counter, typewriter title |
| `/about` | Skill progress bars, work experience timeline, education |
| `/services` | Six service cards with 3-D mouse-tilt effect |
| `/projects` | Five featured projects with tech stack badges |
| `/contact` | Contact form + social links |

## Animations

- **Particle network** — canvas-based floating dots with connecting lines
- **Cursor glow** — soft radial gradient follows the mouse
- **Rotating gradient ring** — dual counter-spinning ring around profile photo
- **Count-up stats** — numbers animate from zero on scroll-into-view
- **Typewriter** — title types out character by character
- **Skill bars** — fill left-to-right with staggered delays when scrolled into view
- **3-D card tilt** — service cards rotate on X/Y axis following mouse position
- **Page transitions** — fade/slide between routes via AnimatePresence
- **Tech badge stagger** — project tags pop in sequentially

## Deployment

The project deploys automatically to Vercel on push to `main`. The `vercel.json` rewrites all routes to `index.html` for client-side routing.

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## License

[Unlicense](LICENSE) — public domain.
