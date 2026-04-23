import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group glass rounded-2xl p-6 hover:bg-white/20 dark:hover:bg-slate-800/50 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default ProjectCard