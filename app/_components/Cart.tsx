'use client'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Link from 'next/link'
import React from 'react'
import { useCart } from '../_context/CartContext'

function Cart() {
  const { cartItemsQuantity } = useCart()
  return (
    <Link href="/cart" className="bg-transparent rounded-full flex items-center justify-center w-10 h-10">
      <ShoppingCartOutlinedIcon />
      <p className="mb-5 text-accent-violet dark:text-accent-dark-violet font-light">{cartItemsQuantity}</p>
    </Link>
  )
}

export default Cart
