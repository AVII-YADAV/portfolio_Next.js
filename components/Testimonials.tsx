'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    avatar: '/api/placeholder/60/60',
    content: 'Avinash transformed our business with his innovative SaaS solution. His technical expertise and attention to detail exceeded our expectations. The platform he built handles thousands of users seamlessly.',
    rating: 5,
    company: 'TechStart Inc.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO, DigitalFlow',
    avatar: '/api/placeholder/60/60',
    content: 'Working with Avinash was a game-changer for our development process. His hosting setup and DevOps practices reduced our deployment time by 80%. Highly recommend for any technical project.',
    rating: 5,
    company: 'DigitalFlow',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, InnovateCorp',
    avatar: '/api/placeholder/60/60',
    content: 'The AI chatbot Avinash developed for our customer service has been incredible. Response times improved dramatically and customer satisfaction scores went up by 40%. Exceptional work!',
    rating: 5,
    company: 'InnovateCorp',
  },
  {
    name: 'David Kim',
    role: 'Founder, StartupXYZ',
    avatar: '/api/placeholder/60/60',
    content: 'Avinash delivered our MVP in record time with outstanding quality. His understanding of modern tech stack and ability to scale solutions is remarkable. A true professional.',
    rating: 5,
    company: 'StartupXYZ',
  },
  {
    name: 'Lisa Thompson',
    role: 'Director of Engineering, ScaleTech',
    avatar: '/api/placeholder/60/60',
    content: 'The database architecture and API design Avinash implemented for our platform is rock-solid. We\'ve grown from 100 to 10,000 users without any performance issues.',
    rating: 5,
    company: 'ScaleTech',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
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
              Client Testimonials
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from the amazing clients who have transformed their businesses with my solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="testimonial-card"
            >
              <div className="text-center">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyber-primary to-cyber-secondary flex items-center justify-center">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyber-primary/20 to-cyber-secondary/20 flex items-center justify-center border-2 border-cyber-primary/30">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonials[currentIndex].name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-orbitron font-bold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-cyber-primary text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="text-cyber-primary hover:bg-cyber-primary/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-cyber-primary scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="text-cyber-primary hover:bg-cyber-primary/10"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '100%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Projects Delivered' },
              { number: '5+', label: 'Years Experience' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="text-center glass-effect p-6 rounded-xl"
              >
                <div className="text-2xl font-orbitron font-bold bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 