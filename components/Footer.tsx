'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart, Code, Zap, Users, Briefcase, MessageSquare } from 'lucide-react'

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', href: '#home', icon: Code },
      { name: 'About', href: '#about', icon: Users },
      { name: 'Projects', href: '#projects', icon: Briefcase },
      { name: 'Contact', href: '#contact', icon: MessageSquare },
    ]
  },
  {
    title: 'Services',
    links: [
      { name: 'Web Development', href: '#services' },
      { name: 'SaaS Solutions', href: '#services' },
      { name: 'Hosting Setup', href: '#services' },
      { name: 'AI Integration', href: '#services' },
    ]
  },
  {
    title: 'Connect',
    links: [
      { name: 'GitHub', href: 'https://github.com/AVII-YADAV', icon: Github },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/webavinashyadav/', icon: Linkedin },
      { name: 'Twitter', href: 'https://twitter.com/yourusername', icon: Twitter },
      { name: 'Email', href: '#', icon: Mail },
    ]
  }
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      
      {/* Top Border Glow */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-primary to-transparent"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-cyber-primary shadow-lg shadow-cyber-primary/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-orbitron font-bold bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent">
                  AVINASH
                </span>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                Transforming ideas into digital reality with cutting-edge technology and innovative solutions.
              </p>
              
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/AVII-YADAV"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-icon"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-cyber-primary" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/webavinashyadav/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-cyber-primary" />
                </motion.a>
                <motion.a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-icon"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-cyber-primary" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1, duration: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-orbitron font-bold text-cyber-primary">
                {section.title}
              </h3>
              
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: sectionIndex * 0.1 + linkIndex * 0.05, duration: 0.5 }}
                  >
                    {link.href.startsWith('#') ? (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-cyber-primary transition-colors duration-300 flex items-center space-x-2 group"
                      >
                        {link.icon && <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />}
                        <span>{link.name}</span>
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyber-primary transition-colors duration-300 flex items-center space-x-2 group"
                      >
                        {link.icon && <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />}
                        <span>{link.name}</span>
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>



        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="border-t border-cyber-primary/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Avinash Yadav. All rights reserved.
              </p>
            </div>

            {/* Made with Love */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-sm"
            >
              <span className="text-gray-400">Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-gray-400">by</span>
              <span className="font-orbitron font-bold bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent neon-text">
                Avinash Yadav
              </span>
            </motion.div>

            {/* Quick Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyber-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-primary to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-cyber-primary shadow-lg shadow-cyber-primary/50"></div>
      </div>
    </footer>
  )
} 