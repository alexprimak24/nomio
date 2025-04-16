import { CircularProgress } from '@mui/material'
import React from 'react'

function Loading() {
  return (
    <div className="flex items-center justify-center">
      <CircularProgress sx={{ color: '#FA4A0C' }} size="3rem" />
      <p className="text-xl mt-3">Loading category...</p>
    </div>
  )
}

export default Loading
