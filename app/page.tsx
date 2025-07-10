'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-cyber-darker">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-cyber-darker bg-stars opacity-30 pointer-events-none"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  )
} 