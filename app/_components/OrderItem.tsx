import Box from '@mui/material/Box'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface OrderItemProps {
  orderId: string
  totalSum: number
  dishImages: string[]
}

function OrderItem({ orderId, totalSum, dishImages }: OrderItemProps) {
  const dishImagesSliced = dishImages.length > 3 ? dishImages.slice(2) : dishImages
  return (
    <li className="list-none w-full">
      <Box
        component={Link}
        href={`/order/${orderId}`}
        sx={{
          'border': '1px solid #e5e7eb',
          'borderRadius': 3,
          'p': 2.5,
          'bgcolor': '#fff',
          'transition': '0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
            transform: 'translateY(-2px)',
          },
        }}
        className="flex justify-between items-center gap-4 flex-wrap md:flex-nowrap"
      >
        {/* Left side: ID + Images */}
        <div className="flex items-center gap-6 min-w-0 flex-wrap">
          {/* Order ID */}
          <div className="text-orange-primary text-base font-semibold font-mono truncate min-w-[70px]">
            #
            {orderId}
          </div>

          {/* Dish Images */}
          <div className="flex items-center gap-2 flex-wrap">
            {dishImagesSliced.map(image => (
              <Image
                key={image}
                src={image}
                alt="Dish image"
                width={56}
                height={56}
                className="rounded-md object-cover shadow-sm border border-gray-100"
              />
            ))}
          </div>
        </div>

        {/* Total Price */}
        <div className="text-gray-600 font-semibold text-right text-lg ml-auto">
          $
          {totalSum.toFixed(2)}
        </div>
      </Box>
    </li>
  )
}

export default OrderItem
