'use client'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  // not sure for now if cssVariables will be needed
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-sfPro)',
  },
})

export default theme
