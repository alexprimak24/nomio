import Box from '@mui/material/Box'
import Image from 'next/image'
import React from 'react'

interface DishItemProps {
  image: string
  name: string
  quantity: number
  price: number
}

function DishItem({ image, name, quantity, price }: DishItemProps) {
  const totalPrice = price * quantity
  return (
    <li className="list-none w-full">
      <Box
        sx={{
          'border': '1px solid #e5e7eb',
          'borderRadius': 4,
          'p': 2,
          'bgcolor': '#ffffff',
          'transition': '0.3s ease',
          '&:hover': {
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            transform: 'scale(1.005)',
          },
        }}
        className="flex items-center justify-between w-screen max-w-[360px] sm:max-w-[800px]"
      >
        <div className="flex items-center gap-6 min-w-0">
          <Image
            src={image}
            alt={name}
            width={72}
            height={72}
            className="rounded-lg shrink-0"
          />
          <div className="flex flex-col">
            <p className="font-medium text-lg truncate">{name}</p>
            <p className="text-sm text-gray-500">
              $
              {totalPrice.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="text-orange-primary font-bold text-lg min-w-[40px] text-right">
          {quantity}
          ×
        </div>
      </Box>
    </li>
  )
}

export default DishItem
