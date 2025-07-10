'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Globe, Code, Database, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'Internship Portal',
    description: 'A comprehensive platform connecting students with industry opportunities. Features real-time notifications, AI-powered matching, and advanced analytics dashboard.',
    image: '/api/placeholder/400/250',
    tech: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'AI/ML'],
    category: 'SaaS Platform',
    liveUrl: '#',
    githubUrl: '#',
    icon: Code,
  },
  {
    title: 'Hosting Aviator',
    description: 'Enterprise-grade hosting management platform with automated deployment, monitoring, and scaling capabilities for high-traffic applications.',
    image: '/api/placeholder/400/250',
    tech: ['React', 'Node.js', 'Docker', 'AWS'],
    category: 'DevOps Tool',
    liveUrl: '#',
    githubUrl: '#',
    icon: Globe,
  },
  {
    title: 'Ola/Uber Clone',
    description: 'Full-stack ride-sharing application with real-time tracking, payment integration, and driver-passenger matching algorithms.',
    image: '/api/placeholder/400/250',
    tech: ['Flutter', 'Firebase', 'Google Maps', 'Stripe'],
    category: 'Mobile App',
    liveUrl: '#',
    githubUrl: '#',
    icon: Zap,
  },
  {
    title: 'AI Chatbot Platform',
    description: 'Intelligent conversational AI platform with natural language processing, multi-language support, and seamless integration APIs.',
    image: '/api/placeholder/400/250',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'Redis'],
    category: 'AI/ML',
    liveUrl: '#',
    githubUrl: '#',
    icon: Database,
  },
  {
    title: 'E-Commerce SaaS',
    description: 'Scalable e-commerce platform with advanced inventory management, analytics, and multi-vendor marketplace capabilities.',
    image: '/api/placeholder/400/250',
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
    category: 'E-Commerce',
    liveUrl: '#',
    githubUrl: '#',
    icon: Code,
  },
  {
    title: 'Real-time Dashboard',
    description: 'Interactive data visualization dashboard with real-time updates, custom widgets, and advanced filtering capabilities.',
    image: '/api/placeholder/400/250',
    tech: ['React', 'D3.js', 'WebSocket', 'MongoDB'],
    category: 'Analytics',
    liveUrl: '#',
    githubUrl: '#',
    icon: Zap,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative solutions that push the boundaries of what's possible in web technology
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="project-card group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <div className="w-full h-full bg-gradient-to-br from-cyber-primary/20 to-cyber-secondary/20 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-cyber-primary" />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-cyber-primary/20 hover:bg-cyber-primary/40 text-white"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-cyber-primary/20 hover:bg-cyber-primary/40 text-white"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-cyber-primary bg-cyber-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-cyber-primary rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-cyber-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-2 h-2 bg-cyber-tertiary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>

                <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-cyber-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-cyber-primary/10 text-cyber-primary border border-cyber-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button
                    variant="neon"
                    size="sm"
                    className="flex-1 text-sm font-orbitron"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="glass"
                    size="sm"
                    className="text-sm font-orbitron"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyber-primary/50 transition-colors duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="neon"
            size="lg"
            className="font-orbitron text-lg px-8 py-4"
            onClick={() => window.open('https://github.com/AVII-YADAV', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 