import type { Metadata } from 'next'
import Header from '@/app/_components/Header'
import { sfPro } from '@/app/_styles/fonts/localfont'
import theme from '@/app/theme'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material/styles'
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
    <html lang="en" className={sfPro.className}>
      <body className="bg-background dark:bg-dark-background text-text-primary dark:text-text-dark-primary flex flex-col min-h-svh relative">
        <AppRouterCacheProvider>
          <Header />
          <div className="grid flex-1 px-8 py-12 justify-center">
            <main className="w-full flex flex-col items-center max-w-7xl mx-auto">
              <ThemeProvider theme={theme}>
                {children}
              </ThemeProvider>
            </main>
          </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
