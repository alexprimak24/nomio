'use client'

import type { ReactNode } from 'react'
import { createContext, use, useCallback, useMemo, useState } from 'react'

interface DishInCartObj {
  id: number
  qunantity: number
  image: string
  price: number
  name: string
}

interface CartContextType {
  cartItems: DishInCartObj[]
  cartItemsQuantity: number
  addToCart: (dish: DishInCartObj) => void
  changeDishQuantity: (id: number, newQuantity: number) => void
  //   ALWAYS ADD  A POPUP ASKING WHETHER USER REALLY SURE
  clearCart: () => void
  removeFromCart: (id: number) => void
}

const CartContext = createContext<CartContextType | undefined>(
  undefined,
)

function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<DishInCartObj[]>([])

  const addToCart = useCallback((dish: DishInCartObj) => {
    setCartItems(items => [...items, dish])
  },[])

  const changeDishQuantity = useCallback((id: number, newQuantity: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity }
      }
      return item
    })

    setCartItems(updatedCart)
  },[cartItems])

  const clearCart = useCallback(() => {
    setCartItems([])
  },[])

  const removeFromCart = useCallback((id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id)

    setCartItems(updatedCart)
  },[])

  const value = useMemo(() => ({ cartItems, cartItemsQuantity: cartItems?.length, addToCart, changeDishQuantity, clearCart, removeFromCart }), [cartItems, changeDishQuantity, removeFromCart])

  return (
    <CartContext value={value}>
      {children}
    </CartContext>
  )
}
function useCart() {
  const context = use(CartContext)
  if (context === undefined) {
    throw new Error(
      'CartContext was used outside of CartProvider',
    )
  }
  return context
}

export { CartProvider, useCart }
