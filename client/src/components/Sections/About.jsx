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
    <section id="about" className="py-20 px-4 bg-navy-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-navy-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-navy-900 rounded-2xl p-8 border border-navy-700">
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src="https://img.freepik.com/free-photo/closeup-shot-red-rose-with-dew-top-black_12449485.jpg"
                  alt="Red Rose"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Hi, I'm Nitish Kumar, a first-year student and a passionate Full Stack Developer. I started my journey in 2025 and have been consistently learning and building projects to improve my skills.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                I work with frontend technologies like HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap to create clean and responsive user interfaces. On the backend, I use Node.js, Express.js, and MongoDB to build scalable and functional applications.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                I enjoy solving problems, exploring new technologies, and turning ideas into real-world projects. Currently, I'm focused on strengthening my development skills and gaining hands-on experience through projects and collaborations.
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
                className="bg-navy-900 rounded-xl p-6 text-center hover:bg-navy-700 transition-all border border-navy-700"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-navy-600 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About