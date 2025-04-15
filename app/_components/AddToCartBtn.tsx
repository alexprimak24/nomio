'use client'

import { useCart } from '@/app/_context/CartContext'
import { Box, Button } from '@mui/material'
import { useState } from 'react'

export interface AddToCartProps {
  dishId: number
  image: string
  price: number
  name: string
}

export default function AddToCart({ dishId, image, price, name }: AddToCartProps) {
  const { cartItems, addToCart, changeDishQuantity, removeFromCart } = useCart()
  const [added, setAdded] = useState(false)
  const [quantity, setQuantity] = useState(0)

  const incQuantity = () => {
    setQuantity(quantity => quantity + 1)
    changeDishQuantity(dishId, quantity + 1)
  }

  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity => quantity - 1)
      changeDishQuantity(dishId, quantity - 1)
    }
    else {
      setAdded(false)
      setQuantity(0)
      removeFromCart(dishId)
    }
  }
  console.log(cartItems)

  const handleAdd = () => {
    setAdded(true)
    incQuantity()
    addToCart({ id: dishId, image, price, name, quantity: 1 })
  }

  return (
    <Box className="max-w-[382px]">
      {!added
        ? (
            <Button sx={{ bgcolor: '#FA4A0C', color: '#FFF' }} variant="contained" className="w-full h-[45px] rounded-2xl" onClick={handleAdd}>
              Add to cart
            </Button>
          )
        : (
            <div className="flex justify-between gap-3 items-center">
              <Button sx={{ borderColor: '#FA4A0C', color: '#FFF' }} variant="outlined" className="w-full" onClick={decQuantity}>
                -
              </Button>
              <p className="mx-1 font-bold">{quantity}</p>
              <Button sx={{ borderColor: '#FA4A0C', color: '#FFF' }} variant="outlined" className="w-full" onClick={incQuantity}>
                +
              </Button>
            </div>
          )}
    </Box>
  )
}
