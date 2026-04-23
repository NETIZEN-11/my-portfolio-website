import { motion, AnimatePresence } from 'framer-motion'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

const Toast = ({ message, type, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="fixed top-4 right-4 z-50"
      >
        <div className={`flex items-center gap-3 px-6 py-4 rounded-lg glass ${
          type === 'success' ? 'text-green-400' : 'text-red-400'
        }`}>
          {type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
          <span className="font-medium">{message}</span>
          <button onClick={onClose} className="ml-4 hover:opacity-70">×</button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Toast