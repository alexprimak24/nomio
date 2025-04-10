import type { Metadata } from 'next'
import Header from '@/app/_components/Header'
import { sfPro } from '@/app/_styles/fonts/localfont'
import '@/app/_styles/globals.css'



export const metadata: Metadata = {
  title: {
    template: '%s | Nomio',
    default: 'Welcome to Nomio',
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
      <body className={`${sfPro.className} bg-background dark:bg-dark-background text-text-primary dark:text-text-dark-primary flex flex-col min-h-screen relative`}>
        <Header />
        <div className="grid flex-1 px-8 py-12">
          <main className="max-w-7x mx-auto w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
