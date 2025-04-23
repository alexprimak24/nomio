'use client'
import { createTheme } from '@mui/material/styles'
// import type {} from '@mui/x-date-pickers/themeAugmentation'

const theme = createTheme({
  // not sure for now if cssVariables will be needed
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-sfPro)',
  },
  palette: {
    primary: {
      main: '#FA4A0C',
    },  
},
// components: {
//   MuiPickersDay: {
//     styleOverrides: {
//       root: {
//         '&.Mui-selected': {
//           backgroundColor: '#FA4A0C',
//           color: '#fff',
//         },
//         '&.Mui-selected:hover': {
//           backgroundColor: '#FA4A0C',
//         },
//       },
//     },
//   },
// },
})

export default theme
