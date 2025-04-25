import { CircularProgress } from '@mui/material'
import React from 'react'

function Loading() {
  return (
    <>
      <CircularProgress sx={{ color: '#FA4A0C' }} size="3rem" />
      <p className="text-2xl mt-3">Loading cart...</p>
    </>
  )
}

export default Loading
