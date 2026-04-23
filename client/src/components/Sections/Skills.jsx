import { motion } from 'framer-motion'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, 
  FaNodeJs, FaGitAlt, FaDocker, FaPython 
} from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const Skills = () => {
  const [ref, isVisible] = useScrollReveal()

  const skills = [
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJs },
    { name: 'React', icon: FaReact },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Bootstrap', icon: FaBootstrap },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Python', icon: FaPython },
    { name: 'Docker', icon: FaDocker },
    { name: 'Git', icon: FaGitAlt },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-navy-600 mx-auto rounded-full" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Technologies I've been working with
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center gap-3 p-6 bg-navy-800 rounded-xl hover:bg-navy-700 transition-all border border-navy-700"
            >
              <skill.icon className="w-12 h-12 text-white" />
              <span className="font-medium text-gray-200 text-sm text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills