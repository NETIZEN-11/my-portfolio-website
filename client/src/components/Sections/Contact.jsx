import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { FaPaperPlane, FaEnvelope, FaUser, FaComment } from 'react-icons/fa'
import Toast from '../UI/Toast'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)
  const [ref, isVisible] = useScrollReveal()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      await axios.post(`${apiUrl}/api/contact`, formData)
      setToast({ message: 'Message sent successfully!', type: 'success' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setToast({ message: 'Failed to send message. Please try again.', type: 'error' })
    } finally {
      setLoading(false)
      setTimeout(() => setToast(null), 3000)
    }
  }

  const inputStyles = "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none transition-colors"

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`${inputStyles} pl-10`}
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`${inputStyles} pl-10`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Message</label>
              <div className="relative">
                <FaComment className="absolute left-3 top-3 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`${inputStyles} pl-10 resize-none`}
                  placeholder="Your message..."
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
              {!loading && <FaPaperPlane />}
            </motion.button>
          </motion.form>
        </div>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </section>
  )
}

export default Contact