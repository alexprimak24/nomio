'use client'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'
import { Button } from '@mui/material'
import React from 'react'
import { useCart } from '../_context/CartContext'
import DishCartItem from './DishCartItem'

function CartDishesList() {
  const { cartItems, changeDishQuantity, clearCart, removeFromCart } = useCart()

  function handleClearCart() {
    // eslint-disable-next-line no-alert
    if (confirm('Are u sure u wantto clear the cart?'))
      // so by wrapping it into that function we can now use isPending
      clearCart()
  }

  return (
    <>
      {!cartItems.length && <div className="flex text-center justify-center"><h1>Your cart is empty</h1></div> }
      {cartItems.length > 0
        && (
          <>
            {cartItems.map(cartItem => (
              <DishCartItem
                key={cartItem.id}
                id={cartItem.id}
                image={cartItem.image}
                name={cartItem.name}
                price={cartItem.price}
                quantity={cartItem.quantity}
                onRemove={removeFromCart}
                changeDishQuantity={changeDishQuantity}
              />
            ))}
            <Button sx={{ borderColor: '#FA4A0C', color: '#000', borderRadius: '30px' }} variant="outlined" className="w-[140px] h-[45px] rounded-2xl self-end" onClick={handleClearCart} startIcon={<RemoveShoppingCartIcon sx={{ fill: '#000' }} />}>
              Clear cart
            </Button>
          </>
        )}
    </>
  )
}

export default CartDishesList
