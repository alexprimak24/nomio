import type { Metadata } from 'next'
import Header from '@/app/_components/Header'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/app/_styles/globals.css'

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// })

export const metadata: Metadata = {
  title: {
    template: '%s | Nomio',
    default: "Welcome to Nomio"
  },
  description: 'The yummiest food that can be delivered!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
