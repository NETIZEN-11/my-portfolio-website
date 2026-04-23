import { motion } from 'framer-motion'
import { FaDownload, FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-pink-900/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-indigo-400 font-medium mb-4"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl md:text-8xl font-extrabold mb-4"
            >
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Nitesh Singh
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl text-gray-400 mb-8"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                First Year CS Student
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Just started my journey in tech. I enjoy building things and learning how things work under the hood. Currently exploring web development and loving every bit of it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg shadow-indigo-500/30"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-10 py-4 glass rounded-full font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2 border border-white/20"
              >
                View Projects <FaDownload />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-6 mt-10 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/NETIZEN-11"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              >
                <FaGithub className="w-5 h-5" />
                <span className="text-sm group-hover:underline">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/nitishkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              >
                <FaLinkedin className="w-5 h-5" />
                <span className="text-sm group-hover:underline">LinkedIn</span>
              </a>
              <a
                href="https://leetcode.com/nitishkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              >
                <FaCode className="w-5 h-5" />
                <span className="text-sm group-hover:underline">LeetCode</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1 flex justify-center"
          >
            <motion.div
              className="relative cursor-pointer"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-2 shadow-2xl"
                whileHover={{
                  boxShadow: '0 0 60px rgba(139, 92, 246, 0.8), 0 0 120px rgba(139, 92, 246, 0.4)',
                  transition: { duration: 0.3 }
                }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center overflow-hidden">
                  <motion.span
                    className="text-8xl md:text-[9rem] font-bold bg-gradient-to-br from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                    whileHover={{
                      scale: 1.1,
                      textShadow: '0 0 40px rgba(139, 92, 246, 0.8)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    NS
                  </motion.span>
                </div>
              </motion.div>
              <motion.div
                className="absolute -inset-8 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"
                whileHover={{
                  opacity: 0.8,
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero