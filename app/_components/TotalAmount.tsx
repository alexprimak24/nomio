"use client"
import React from 'react'
import { useCart } from '../_context/CartContext'

function TotalAmount() {
  const {totalAmount} = useCart();
  return (
    <div className="flex gap-2 items-center">
      <p className="font-normal text-lg hidden sm:block">Amount:</p>
      <p className="font-bold">{totalAmount.toFixed(2)}$</p>
    </div>
  )
}

export default TotalAmount
