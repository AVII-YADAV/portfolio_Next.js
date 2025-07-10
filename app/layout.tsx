import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Avinash Yadav - Cyberpunk Portfolio',
  description: 'SaaS Architect | Hosting Expert | Full Stack Developer - Cyberpunk themed portfolio showcasing innovative web solutions and cutting-edge technology projects.',
  keywords: 'SaaS, Hosting, Full Stack, Developer, Cyberpunk, Portfolio, Web Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-cyber-darker">
          {children}
        </div>
      </body>
    </html>
  )
} 