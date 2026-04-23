import { motion } from 'framer-motion'
import { FaHome } from 'react-icons/fa'

const NotFound = () => {
  const handleGoHome = (e) => {
    e.preventDefault()
    window.location.href = '/#home'
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-[8rem] md:text-[12rem] font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-none"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-gray-400 mb-10"
        >
          Oops! Page not found
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          onClick={handleGoHome}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg shadow-indigo-500/30 text-lg cursor-pointer"
        >
          <FaHome /> Go to Home
        </motion.button>
      </div>
    </motion.div>
  )
}

export default NotFound