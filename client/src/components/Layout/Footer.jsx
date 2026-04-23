import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode, SiCodechef } from 'react-icons/si'

const Footer = () => {
  const socialLinks = [
    { icon: FaEnvelope, href: 'mailto:nitesh.p25@medhaviskillsuniversity.edu.in', label: 'Email' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/nitesh-singh-52a167387/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/NETIZEN-11', label: 'GitHub' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/unico_rni11/', label: 'LeetCode' },
    { icon: SiCodechef, href: 'https://www.codechef.com/college/dashboard', label: 'CodeChef' },
  ]

  return (
    <footer className="py-10 bg-navy-900 border-t border-navy-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
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