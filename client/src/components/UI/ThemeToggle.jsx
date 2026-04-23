import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

const ThemeToggle = () => {
  const { toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-navy-600 text-white hover:bg-navy-500"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <div className="w-5 h-5" />
    </motion.button>
  )
}

export default ThemeToggle