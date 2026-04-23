import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from 'react-icons/fa'
import { SiTailwindcss, SiPython } from 'react-icons/si'
import { FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa'
import { SiMongodb, SiExpress } from 'react-icons/si'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const Skills = () => {
  const [ref, isVisible] = useScrollReveal()

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: FaHtml5, color: 'from-orange-500 to-orange-600' },
        { name: 'CSS', icon: FaCss3Alt, color: 'from-blue-500 to-blue-600' },
        { name: 'JavaScript', icon: FaJs, color: 'from-yellow-400 to-yellow-500' },
        { name: 'React', icon: FaReact, color: 'from-cyan-400 to-blue-500' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'from-teal-400 to-emerald-500' },
        { name: 'Bootstrap', icon: FaBootstrap, color: 'from-purple-500 to-purple-700' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: 'from-green-400 to-emerald-500' },
        { name: 'Express.js', icon: SiExpress, color: 'from-gray-400 to-gray-600' },
        { name: 'MongoDB', icon: SiMongodb, color: 'from-green-500 to-green-700' },
      ],
    },
    {
      title: 'Programming',
      skills: [
        { name: 'Python', icon: SiPython, color: 'from-blue-400 to-yellow-500' },
        { name: 'Docker', icon: FaDocker, color: 'from-blue-400 to-blue-600' },
        { name: 'Git', icon: FaGitAlt, color: 'from-orange-500 to-red-500' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies I've been working with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              className="glass rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: catIndex * 0.2 + skillIndex * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg`}>
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-gray-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills