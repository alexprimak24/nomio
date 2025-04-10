import localFont from 'next/font/local'

export const sfPro = localFont({
  src: [
    {
      path: './sf-pro-display-light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './sf-pro-display-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './sf-pro-display-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './sf-pro-display-black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: "--font-sfPro"
})
