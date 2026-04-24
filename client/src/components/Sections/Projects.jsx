import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../UI/ProjectCard'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const Projects = () => {
  const [filter, setFilter] = useState('All')
  const [ref, isVisible] = useScrollReveal()

  const projects = [
    {
      title: 'Panchayat',
      description: 'Full-stack application for managing village/panchayat data with CRUD operations, admin dashboard, and responsive UI for rural governance.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/NETIZEN-11/Panchayat',
      live: '#',
      category: 'Full Stack'
    },
    {
      title: 'AI Home Maintenance App',
      description: 'Smart home maintenance application with AI integration for predicting maintenance needs, scheduling repairs, and tracking home inventory.',
      tech: ['React', 'Node.js', 'MongoDB', 'AI'],
      github: 'https://github.com/NETIZEN-11/ai-home-maintenance-app',
      live: '#',
      category: 'Full Stack'
    },
    {
      title: 'Food Orders',
      description: 'Online food ordering platform with restaurant listings, cart management, order tracking, and seamless checkout experience.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/NETIZEN-11/Food-Orders',
      live: '#',
      category: 'Full Stack'
    },
    {
      title: 'Short URL',
      description: 'URL shortening service that converts long URLs into short, shareable links with click analytics and link management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/NETIZEN-11/SHORT-URL',
      live: '#',
      category: 'Full Stack'
    },
    {
      title: 'Student Management System',
      description: 'Comprehensive system for managing student records, attendance, grades, and communications between teachers and parents.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/NETIZEN-11/Student-management-system',
      live: '#',
      category: 'Full Stack'
    },
  ]

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack']

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-20 px-4 bg-navy-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            Projects
          </h2>
          <div className="w-24 h-1 bg-navy-600 mx-auto rounded-full" />
          <p className="text-gray-300 mt-4">Things I've built to learn and grow</p>
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
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-navy-600 text-white'
                  : 'bg-navy-900 text-gray-300 hover:bg-navy-700 border border-navy-700'
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