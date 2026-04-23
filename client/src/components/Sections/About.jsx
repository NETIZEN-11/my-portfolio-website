import { motion } from 'framer-motion'
import { FaCode, FaServer, FaPython } from 'react-icons/fa'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const About = () => {
  const [ref, isVisible] = useScrollReveal()

  const highlights = [
    { icon: FaCode, title: 'Frontend', desc: 'HTML, CSS, JavaScript, React, Tailwind, Bootstrap' },
    { icon: FaServer, title: 'Backend', desc: 'Node.js, Express, MongoDB' },
    { icon: FaPython, title: 'Programming', desc: 'Python, Git' },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 border border-white/10">
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Hey there! I'm Nitesh, a first-year Computer Science student who started learning programming in early 2025. What began as curiosity has quickly turned into a genuine passion for building things with code.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Right now, I'm focused on web development — getting comfortable with both the frontend and backend sides. I've been working with React and Node.js, and I'm gradually understanding how everything connects together to make web apps work.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm at the beginning of my journey, and I know there's a lot to learn. But that's exactly what excites me. Every new concept I pick up feels like opening a door to something interesting.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all border border-white/10"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About