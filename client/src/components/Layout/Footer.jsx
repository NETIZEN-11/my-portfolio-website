import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode, SiCodechef } from 'react-icons/si'

const Footer = () => {
  const socialLinks = [
    { icon: FaEnvelope, href: 'mailto:niteshsingh@gmail.com', label: 'Gmail' },
    { icon: FaInstagram, href: 'https://instagram.com/niteshsingh', label: 'Instagram' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/niteshsingh', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/NETIZEN-11', label: 'GitHub' },
    { icon: SiLeetcode, href: 'https://leetcode.com/niteshsingh', label: 'LeetCode' },
    { icon: SiCodechef, href: 'https://codechef.com/users/niteshsingh', label: 'CodeChef' },
  ]

  return (
    <footer className="py-10 glass border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-6 text-center"
        >
          Nitesh Singh
        </motion.h3>

        <div className="flex items-center justify-center gap-6 flex-wrap">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 relative"
              whileHover={{
                scale: 1.3,
                color: '#c084fc',
                filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.8))',
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer