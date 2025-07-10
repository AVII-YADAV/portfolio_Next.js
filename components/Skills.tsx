'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95, color: 'from-blue-400 to-blue-600' },
      { name: 'Next.js', level: 90, color: 'from-black to-gray-800' },
      { name: 'TypeScript', level: 88, color: 'from-blue-500 to-blue-700' },
      { name: 'Tailwind CSS', level: 92, color: 'from-cyan-400 to-cyan-600' },
      { name: 'Framer Motion', level: 85, color: 'from-purple-400 to-purple-600' },
      { name: 'Vue.js', level: 80, color: 'from-green-400 to-green-600' },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 90, color: 'from-green-500 to-green-700' },
      { name: 'Express.js', level: 88, color: 'from-gray-400 to-gray-600' },
      { name: 'Python', level: 85, color: 'from-yellow-400 to-yellow-600' },
      { name: 'FastAPI', level: 82, color: 'from-green-400 to-green-600' },
      { name: 'Laravel', level: 78, color: 'from-red-400 to-red-600' },
      { name: 'GraphQL', level: 80, color: 'from-pink-400 to-pink-600' },
    ]
  },
  {
    category: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 88, color: 'from-blue-400 to-blue-600' },
      { name: 'MongoDB', level: 85, color: 'from-green-400 to-green-600' },
      { name: 'Redis', level: 82, color: 'from-red-400 to-red-600' },
      { name: 'MySQL', level: 80, color: 'from-blue-500 to-blue-700' },
      { name: 'Elasticsearch', level: 75, color: 'from-yellow-400 to-yellow-600' },
    ]
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      { name: 'AWS', level: 85, color: 'from-orange-400 to-orange-600' },
      { name: 'Docker', level: 88, color: 'from-blue-400 to-blue-600' },
      { name: 'Kubernetes', level: 75, color: 'from-blue-500 to-blue-700' },
      { name: 'DigitalOcean', level: 82, color: 'from-blue-400 to-blue-600' },
      { name: 'CI/CD', level: 85, color: 'from-green-400 to-green-600' },
      { name: 'Terraform', level: 70, color: 'from-purple-400 to-purple-600' },
    ]
  },
  {
    category: 'Mobile & AI',
    skills: [
      { name: 'Flutter', level: 85, color: 'from-blue-400 to-blue-600' },
      { name: 'React Native', level: 80, color: 'from-blue-500 to-blue-700' },
      { name: 'TensorFlow', level: 75, color: 'from-orange-400 to-orange-600' },
      { name: 'OpenAI API', level: 82, color: 'from-green-400 to-green-600' },
      { name: 'Firebase', level: 88, color: 'from-yellow-400 to-yellow-600' },
    ]
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', level: 90, color: 'from-orange-400 to-orange-600' },
      { name: 'VS Code', level: 95, color: 'from-blue-400 to-blue-600' },
      { name: 'Figma', level: 75, color: 'from-purple-400 to-purple-600' },
      { name: 'Postman', level: 85, color: 'from-orange-400 to-orange-600' },
      { name: 'Jira', level: 80, color: 'from-blue-400 to-blue-600' },
    ]
  }
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="glass-effect p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-orbitron font-bold text-cyber-primary mb-6">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                      duration: 0.5 
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="relative group"
                  >
                    <div className="glass-effect p-4 rounded-xl border border-cyber-primary/20 hover:border-cyber-primary/40 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium text-white group-hover:text-cyber-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-cyber-primary font-orbitron">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, 
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold text-cyber-primary mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying at the forefront. 
              I continuously explore new frameworks, tools, and methodologies to deliver 
              the best possible solutions for my clients.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '50+', label: 'Projects Completed' },
                { number: '20+', label: 'Technologies Mastered' },
                { number: '100%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-orbitron font-bold bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 