'use client'

import { useCart } from '@/app/_context/CartContext'
import { Box, Button } from '@mui/material'

export interface AddToCartProps {
  dishId: number
  image: string
  price: number
  name: string
}

export default function AddToCart({ dishId, image, price, name }: AddToCartProps) {
  const { cartItems, addToCart, changeDishQuantity, removeFromCart, checkDishQuantity } = useCart()
  const currentQantity = checkDishQuantity(dishId)

  const incQuantity = () => {
    changeDishQuantity(dishId, currentQantity + 1)
  }

  const decQuantity = () => {
    if (currentQantity > 1) {
      changeDishQuantity(dishId, currentQantity - 1)
    }
    else {
      removeFromCart(dishId)
    }
  }
  console.log(cartItems)

  const handleAdd = () => {
    incQuantity()
    addToCart({ id: dishId, image, price, name, quantity: 1 })
  }

  return (
    <Box className="max-w-[382px]">
      {currentQantity === 0
        ? (
            <Button sx={{ bgcolor: '#FA4A0C', color: '#000' }} variant="contained" className="w-full h-[45px] rounded-2xl" onClick={handleAdd}>
              Add to cart
            </Button>
          )
        : (
            <div className="flex justify-between gap-3 items-center">
              <Button sx={{ borderColor: '#FA4A0C', color: '#000' }} variant="outlined" className="w-full" onClick={decQuantity}>
                -
              </Button>
              <p className="mx-1 font-bold">{currentQantity}</p>
              <Button sx={{ borderColor: '#FA4A0C', color: '#000' }} variant="outlined" className="w-full" onClick={incQuantity}>
                +
              </Button>
            </div>
          )}
    </Box>
  )
}
