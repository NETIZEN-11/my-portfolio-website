import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../UI/ProjectCard'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const Projects = () => {
  const [filter, setFilter] = useState('All')
  const [ref, isVisible] = useScrollReveal()

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB. Features include user authentication, product management, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/NETIZEN-11',
      live: '#',
      category: 'Full Stack'
    },
    {
      title: 'Task Management API',
      description: 'RESTful API for task management with CRUD operations, authentication, and documentation. Built with Node.js and Express using best practices.',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/NETIZEN-11',
      live: '#',
      category: 'Backend'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio with glassmorphism design and smooth animations. Built with React and Tailwind CSS.',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      github: 'https://github.com/NETIZEN-11',
      live: '#',
      category: 'Frontend'
    },
    {
      title: 'Student Management System',
      description: 'Web application to manage student records, attendance, and grades. Built with React for frontend and Node.js backend.',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/NETIZEN-11',
      live: '#',
      category: 'Full Stack'
    },
  ]

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack']

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">Things I've built to learn and grow</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                  : 'glass hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects