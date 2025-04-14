'use client'

import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'

interface AddToCartProps {
  dishId: number
//   dishName: string
//   price: number
}

export default function AddToCart({ dishId }: AddToCartProps) {
  const [added, setAdded] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    setQuantity(quantity => quantity + 1)
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity => quantity - 1)
    }
    else {
      setAdded(false)
      setQuantity(0)
    }
  }

  const handleAdd = () => {
    // You can call your cart context, Supabase, or fetch to API route here
    console.log(`Added ${dishId} to cart`)
    setAdded(true)
    increment()
  }

  return (
    <Box>
      {!added
        ? (
            <Button variant="contained" className="w-full h-[45px] rounded-2xl" onClick={handleAdd}>
              Add to cart
            </Button>
          )
        : (
            // <TextField
            //   type="number"
            //   label="Quantity"
            //   value={quantity}
            //   onChange={(e) => {changeAmount(e)}}
            //   fullWidth
            //   size="small"
            //   inputProps={{ min: 1 }}
            // />
            <div className="flex gap-3 items-center">
              <Button variant="outlined" className="w-full" onClick={decrement}>
                -
              </Button>
              <p>{quantity}</p>
              <Button variant="outlined" className="w-full" onClick={increment}>
                +
              </Button>
            </div>
          )}
    </Box>
  )
}
