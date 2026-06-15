import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, User, Briefcase, FolderOpen, Mail, Award } from 'lucide-react'

const navItems = [
  { path: '/home', label: 'Home', Icon: Home },
  { path: '/about', label: 'About', Icon: User },
  { path: '/services', label: 'Services', Icon: Briefcase },
  { path: '/projects', label: 'Projects', Icon: FolderOpen },
  { path: '/certifications', label: 'Certifications', Icon: Award },
  { path: '/contact', label: 'Contact', Icon: Mail },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)

  return (
    <nav className="md:w-[72px] w-full md:relative fixed bottom-0 z-50 flex-shrink-0">
      <ul className="flex md:flex-col justify-center md:justify-start h-16 md:h-full list-none">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          const isHovered = hoveredPath === item.path
          return (
            <li
              key={item.path}
              onClick={() => navigate(item.path)}
              onMouseEnter={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(null)}
              className="nav-item group"
            >
              {/* Slide-in tooltip label (desktop only) */}
              <span className="nav-tooltip">{item.label}</span>

              {/* Active / hover indicator */}
              <motion.div
                className="absolute inset-0"
                animate={
                  isActive
                    ? { background: 'linear-gradient(135deg, #312e81, #4338ca)' }
                    : isHovered
                    ? { background: 'linear-gradient(135deg, #1e1b4b, #312e81)' }
                    : { background: 'linear-gradient(135deg, #18181b, #27272a)' }
                }
                transition={{ duration: 0.25 }}
              />

              {/* Right edge accent for desktop */}
              <span className="absolute top-0 right-0 hidden md:block h-full w-0.5 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Icon */}
              <item.Icon
                size={20}
                className={`relative z-10 transition-colors duration-200 ${
                  isActive ? 'text-violet-300' : 'text-zinc-400 group-hover:text-white'
                }`}
              />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
