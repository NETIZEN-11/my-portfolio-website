import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-navy-900">
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
              className="text-navy-400 font-medium mb-4 text-lg"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl md:text-8xl font-extrabold mb-4 text-white"
            >
              Nitesh Singh
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl text-navy-300 mb-8"
            >
              First Year CS Student
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
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
                href="#projects"
                className="px-10 py-4 bg-navy-600 text-white rounded-lg font-semibold hover:bg-navy-500 transition-all"
              >
                View Projects
              </a>
              <a
                href="#about"
                className="px-10 py-4 border-2 border-navy-600 text-white rounded-lg font-semibold hover:bg-navy-800 transition-all"
              >
                About Me
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
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
              >
                <FaGithub className="w-5 h-5" />
                <span className="text-sm group-hover:underline">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nitesh-singh-52a167387/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
              >
                <FaLinkedin className="w-5 h-5" />
                <span className="text-sm group-hover:underline">LinkedIn</span>
              </a>
              <a
                href="https://leetcode.com/u/unico_rni11/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
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
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-navy-600">
              <img
                src="https://i.ibb.co/0pLRWTYW/PHOTO.jpg"
                alt="Nitesh Singh"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero