import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const navItems = [
  { path: '/home', label: 'Home', icon: '/assets/svg/nav/home.svg' },
  { path: '/about', label: 'About', icon: '/assets/svg/nav/about.svg' },
  { path: '/services', label: 'Services', icon: '/assets/svg/nav/services.svg' },
  { path: '/projects', label: 'Projects', icon: '/assets/svg/nav/projects.svg' },
  { path: '/contact', label: 'Contact', icon: '/assets/svg/nav/email.svg' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className="md:w-[72px] w-full md:relative fixed bottom-0 z-50 flex-shrink-0">
      <ul className="flex md:flex-col justify-center md:justify-start h-16 md:h-full list-none">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <li
              key={item.path}
              onClick={() => navigate(item.path)}
              className="nav-item group"
            >
              {/* Slide-in tooltip label (desktop only) */}
              <span className="nav-tooltip">{item.label}</span>

              {/* Active / hover indicator */}
              <motion.div
                className="absolute inset-0"
                animate={
                  isActive
                    ? { background: 'linear-gradient(135deg, #b91c1c, #ef4444)' }
                    : { background: 'linear-gradient(135deg, #18181b, #27272a)' }
                }
                whileHover={
                  !isActive
                    ? { background: 'linear-gradient(135deg, #1e1b4b, #312e81)' }
                    : undefined
                }
                transition={{ duration: 0.25 }}
              />

              {/* Right edge accent for desktop */}
              <span className="absolute top-0 right-0 hidden md:block h-full w-0.5 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Icon */}
              <img
                src={item.icon}
                alt={item.label}
                className="relative z-10 w-5 h-5"
              />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
