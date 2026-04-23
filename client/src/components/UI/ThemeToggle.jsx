import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

const colors = [
  'from-purple-500 to-pink-500',
  'from-blue-500 to-cyan-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-amber-500',
  'from-red-500 to-rose-500',
  'from-pink-500 to-rose-400',
  'from-indigo-500 to-violet-500',
  'from-teal-500 to-cyan-500',
  'from-yellow-500 to-amber-400',
  'from-cyan-500 to-blue-400',
]

const ThemeToggle = () => {
  const { toggleTheme } = useTheme()
  const [colorIndex, setColorIndex] = useState(0)

  const handleClick = () => {
    setColorIndex((prev) => (prev + 1) % colors.length)
    toggleTheme()
  }

  return (
    <motion.button
      onClick={handleClick}
      className={`p-3 rounded-full bg-gradient-to-r ${colors[colorIndex]} shadow-lg`}
      whileHover={{
        scale: 1.2,
        boxShadow: '0 0 25px rgba(139, 92, 246, 0.6)',
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.85 }}
      aria-label="Toggle theme"
    >
      <div className="w-5 h-5 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-white shadow-inner" />
      </div>
    </motion.button>
  )
}

export default ThemeToggle