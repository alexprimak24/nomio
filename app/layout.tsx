import type { Metadata } from 'next'
import Header from '@/app/_components/Header'
import { sfPro } from '@/app/_styles/fonts/localfont'
import theme from '@/app/theme'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import { CartProvider } from './_context/CartContext'
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
      <CartProvider>
        <AppRouterCacheProvider>
          <body className="bg-background text-text-primary flex flex-col min-h-svh relative">
            <Header />
            {/* justify center remove and then setup normal style */}
            <div className="grid flex-1 px-4 py-6 md:px-8 md:py-12 justify-center">
              <main className="w-full flex flex-col items-center max-w-7xl">
                <ThemeProvider theme={theme}>
                  {children}
                </ThemeProvider>
              </main>
            </div>
          </body>
        </AppRouterCacheProvider>
      </CartProvider>
    </html>
  )
}
