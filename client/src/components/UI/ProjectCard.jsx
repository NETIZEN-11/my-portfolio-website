import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-navy-900 rounded-2xl p-6 hover:bg-navy-700 transition-all duration-300 border border-navy-700"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-lg bg-navy-600 text-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default ProjectCard