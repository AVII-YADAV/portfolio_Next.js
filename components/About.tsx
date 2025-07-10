'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Server, Database, Cloud, Zap, Shield } from 'lucide-react'

const skills = [
  { name: 'React/Next.js', icon: Code, color: 'from-cyber-primary to-cyber-secondary' },
  { name: 'Node.js/Express', icon: Server, color: 'from-green-400 to-green-600' },
  { name: 'PostgreSQL/MongoDB', icon: Database, color: 'from-blue-400 to-blue-600' },
  { name: 'AWS/DigitalOcean', icon: Cloud, color: 'from-orange-400 to-orange-600' },
  { name: 'AI/ML Integration', icon: Zap, color: 'from-purple-400 to-purple-600' },
  { name: 'Security & DevOps', icon: Shield, color: 'from-red-400 to-red-600' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Glowing Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-tertiary rounded-full animate-spin-slow opacity-20"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden glass-effect border-2 border-cyber-primary/30">
                <div className="w-full h-full bg-gradient-to-br from-cyber-primary/20 to-cyber-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Code className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-orbitron font-bold text-cyber-primary">Avinash Yadav</h3>
                    <p className="text-gray-400">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-orbitron font-bold text-cyber-primary mb-4">
                Founder & CEO of Hosting Aviator & Aviator Web Solutions
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hi, I'm <span className="text-cyber-primary font-semibold">Avinash Yadav</span>, the Founder & CEO of 
                  <span className="text-cyber-primary font-semibold"> Hosting Aviator</span> and 
                  <span className="text-cyber-primary font-semibold"> Aviator Web Solutions</span> — two innovative ventures 
                  at the intersection of web infrastructure and creative technology.
                </p>
                
                <p>
                  At <span className="text-cyber-primary font-semibold">Hosting Aviator</span>, we provide lightning-fast, 
                  secure, and scalable web hosting services tailored for startups, developers, and SaaS businesses. Our goal 
                  is to simplify complex hosting with automation, modern UI, and WHMCS-style client dashboards — built for the future.
                </p>
                
                <p>
                  With <span className="text-cyber-primary font-semibold">Aviator Web Solutions</span>, we help businesses 
                  take off creatively by building powerful web apps, SaaS platforms, AI-powered tools, internship portals, 
                  chat systems, and stunning frontend experiences using the latest web technologies like React, Next.js, 
                  Tailwind, Firebase, and more.
                </p>
                
                <p>
                  As a founder, I'm driven by innovation, scalability, and speed. I love turning complex backend systems 
                  into beautiful, user-friendly solutions. Whether it's automating hosting infrastructure or developing 
                  AI-integrated chatbots — I believe in building products that deliver impact and elevate user experience.
                </p>
              </div>
            </div>

            {/* Key Specializations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'SaaS Development', desc: 'End-to-end SaaS solutions' },
                { title: 'Hosting & DevOps', desc: 'Scalable infrastructure' },
                { title: 'AI Integration', desc: 'Smart automation & bots' },
                { title: 'Flutter Apps', desc: 'Cross-platform development' },
              ].map((spec, index) => (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="glass-effect p-4 rounded-xl border border-cyber-primary/20 hover:border-cyber-primary/40 transition-colors"
                >
                  <h4 className="font-orbitron font-semibold text-cyber-primary mb-1">
                    {spec.title}
                  </h4>
                  <p className="text-sm text-gray-400">{spec.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-orbitron font-bold text-center mb-8 text-cyber-primary">
            Core Technologies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="skill-pill flex flex-col items-center text-center p-4"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center mb-3`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 