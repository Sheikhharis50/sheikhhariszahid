import { motion } from 'framer-motion'

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function SkillBar({
  name,
  level,
  icon,
  index,
}: {
  name: string
  level: number
  icon?: string
  index: number
}) {
  return (
    <motion.div variants={fadeUp} className="flex items-center gap-3 group">
      {icon && (
        <img
          src={icon}
          alt={name}
          className="w-6 h-6 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity"
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
        />
      )}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="text-zinc-200 text-sm font-medium">{name}</span>
          <span className="text-zinc-400 text-xs font-mono">{level}%</span>
        </div>
        <div className="skill-bar-container">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background:
                level >= 80
                  ? 'linear-gradient(90deg, #06b6d4, #6366f1)'
                  : level >= 60
                  ? 'linear-gradient(90deg, #6366f1, #a78bfa)'
                  : 'linear-gradient(90deg, #a78bfa, #c4b5fd)',
            }}
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, delay: index * 0.04, ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.div>
  )
}
