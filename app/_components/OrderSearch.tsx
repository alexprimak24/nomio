'use client'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function OrderSearch() {
  const [orderId, setOrderId] = useState('')
  const router = useRouter()

  const handleSearch = () => {
    if (orderId.trim()) {
      router.push(`/order/${orderId.trim()}`)
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-1 py-2 sm:py-4 max-w-[550px] mx-auto mt-5">
      <p className="text-gray-700 font-medium text-lg sm:text-xl">
        Already have an order?
      </p>
      <input
        type="text"
        value={orderId}
        onChange={e => setOrderId(e.target.value)}
        placeholder="Enter your order ID"
        className="w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-primary transition-all duration-200 ease-in-out"
      />
      <button
        type="button"
        className="bg-orange-primary text-white rounded-lg px-5 py-2 text-sm font-medium transition-all duration-200 hover:bg-orange-600 hover:scale-[1.03] shadow-md"
        onClick={handleSearch}
      >
        Find Order
        {' '}
        <PlayArrowOutlinedIcon />
      </button>
    </div>
  )
}

export default OrderSearch
