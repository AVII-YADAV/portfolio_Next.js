'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Server, Cloud, Zap, Smartphone, Shield, Database, Globe } from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies like React, Next.js, and TypeScript.',
    icon: Code,
    features: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'from-cyber-primary to-cyber-secondary',
  },
  {
    title: 'Hosting Setup',
    description: 'Enterprise-grade hosting solutions with automated deployment, monitoring, and scaling capabilities.',
    icon: Server,
    features: ['AWS/DigitalOcean', 'Docker', 'CI/CD', 'Monitoring'],
    color: 'from-green-400 to-green-600',
  },
  {
    title: 'SaaS Development',
    description: 'End-to-end SaaS platforms with subscription management, analytics, and multi-tenant architecture.',
    icon: Cloud,
    features: ['Multi-tenancy', 'Subscription Billing', 'Analytics', 'API Design'],
    color: 'from-blue-400 to-blue-600',
  },
  {
    title: 'AI Chatbot',
    description: 'Intelligent conversational AI with natural language processing and seamless integration capabilities.',
    icon: Zap,
    features: ['NLP', 'Multi-language', 'API Integration', 'Analytics'],
    color: 'from-purple-400 to-purple-600',
  },
  {
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications using Flutter for iOS and Android with native performance.',
    icon: Smartphone,
    features: ['Flutter', 'Firebase', 'Native APIs', 'App Store'],
    color: 'from-orange-400 to-orange-600',
  },
  {
    title: 'DevOps & Security',
    description: 'Comprehensive DevOps practices with security-first approach and automated infrastructure management.',
    icon: Shield,
    features: ['Security Audits', 'Infrastructure as Code', 'Monitoring', 'Backup'],
    color: 'from-red-400 to-red-600',
  },
  {
    title: 'Database Design',
    description: 'Scalable database architecture with optimization, migration strategies, and data security.',
    icon: Database,
    features: ['PostgreSQL', 'MongoDB', 'Redis', 'Optimization'],
    color: 'from-indigo-400 to-indigo-600',
  },
  {
    title: 'API Development',
    description: 'RESTful and GraphQL APIs with comprehensive documentation, testing, and versioning strategies.',
    icon: Globe,
    features: ['REST/GraphQL', 'Documentation', 'Testing', 'Versioning'],
    color: 'from-teal-400 to-teal-600',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 relative overflow-hidden">
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
              Services I Offer
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to transform your business and drive innovation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="service-card group cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-cyber-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={feature}
                    className="flex items-center space-x-2 text-xs text-gray-300"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyber-primary/5 to-cyber-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold text-cyber-primary mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can leverage cutting-edge technology to create innovative solutions 
              that drive your business forward and set you apart from the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button font-orbitron text-lg px-8 py-4">
                Start a Project
              </button>
              <button className="glass-effect hover:bg-cyber-primary/20 text-cyber-primary font-orbitron text-lg px-8 py-4 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 