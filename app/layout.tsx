import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono'
})

export const metadata: Metadata = {
  title: 'King of Escobars - Gaming Developer & MMORPG Specialist',
  description: 'Portfolio of Zach Escobar, passionate gamer and developer specializing in MMORPG and Roleplay communities.',
  openGraph: {
    title: 'King of Escobars - Gaming Developer',
    description: 'MMORPG specialist, server administrator, and creative developer.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${spaceMono.variable} font-sans text-foreground`}>
        {children}
      </body>
    </html>
  )
}
