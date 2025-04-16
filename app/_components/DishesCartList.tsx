'use client'
import React from 'react'
import { useCart } from '../_context/CartContext'
import DishCartItem from './DishCartItem'

function CartDishesList() {
  const { cartItems, changeDishQuantity, clearCart, removeFromCart } = useCart()
  return (
    <div>
      { cartItems.map(cartItem => (
        <DishCartItem
          key={cartItem.id}
          id={cartItem.id}
          image={cartItem.image}
          name={cartItem.name}
          price={cartItem.price}
          quantity={cartItem.quantity}
          onRemove={removeFromCart}
        />
      ))}
    </div>
  )
}

export default CartDishesList
