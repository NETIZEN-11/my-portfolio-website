import { motion } from 'framer-motion'
import { FaGraduationCap, FaCode, FaPython } from 'react-icons/fa'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const Experience = () => {
  const [ref, isVisible] = useScrollReveal()

  const experiences = [
    {
      role: 'Full Stack Development',
      company: 'Self Learning',
      icon: FaCode,
      description: 'Started my journey in web development. Learning HTML, CSS, JavaScript, React, Node.js, and MongoDB. Building projects to understand how things work end-to-end.',
    },
    {
      role: 'Programming Foundations',
      company: 'University',
      icon: FaPython,
      description: 'First year Computer Science student. Learning the fundamentals of programming, data structures, and algorithms. Python as primary language.',
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-navy-600 mx-auto rounded-full" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Where I'm at and where I'm headed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-navy-800 rounded-2xl p-8 border border-navy-700 hover:border-navy-600 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-navy-600 flex items-center justify-center mb-6">
                <exp.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">{exp.role}</h3>
              <p className="text-navy-400 font-medium mb-4">{exp.company}</p>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience