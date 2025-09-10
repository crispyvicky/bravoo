import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BRAVOO.IN - Digital Weapons for Modern Businesses',
  description: 'From AI-powered apps to futuristic SaaS, Bravoo crafts tech that feels like a cheat code for your business. Founded by Vignesh Yadav.',
  keywords: 'AI development, SaaS, web development, mobile apps, cloud deployment, Vignesh Yadav',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}