'use client'

import type { ReactNode } from 'react'
import { useLocalStorageState } from '@/app/_hooks/useLocalStorageState'
import { createContext, use, useCallback, useMemo } from 'react'

export interface DishInCartObj {
  id: number
  quantity: number
  image: string
  price: number
  name: string
}

interface CartContextType {
  cartItems: DishInCartObj[]
  cartItemsQuantity: number
  totalAmount: number
  addToCart: (dish: DishInCartObj) => void
  changeDishQuantity: (id: number, newQuantity: number) => void
  //   ALWAYS ADD  A POPUP ASKING WHETHER USER REALLY SURE
  clearCart: () => void
  removeFromCart: (id: number) => void
  checkDishQuantity: (id: number) => number
}

const CartContext = createContext<CartContextType | undefined>(
  undefined,
)

function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useLocalStorageState<DishInCartObj[]>([], 'cartItems')
  const totalAmount = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity, 0)

  const addToCart = useCallback((dish: DishInCartObj) => {
    setCartItems((prevCartItems) => {
      const existingDishIndex = prevCartItems.findIndex(item => item.id === dish.id)

      if (existingDishIndex !== -1) {
        const updatedCart = [...prevCartItems]
        updatedCart[existingDishIndex].quantity += 1
        return updatedCart
      }

      return [...prevCartItems, { ...dish }]
    })
  }, [setCartItems])

  const changeDishQuantity = useCallback((id: number, newQuantity: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity }
      }
      return item
    })

    setCartItems(updatedCart)
  }, [cartItems, setCartItems])

  const clearCart = useCallback(() => {
    setCartItems([])
  }, [setCartItems])

  const removeFromCart = useCallback((id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id)

    setCartItems(updatedCart)
  }, [cartItems, setCartItems])

  const checkDishQuantity = useCallback((id: number) => {
    const dish = cartItems.find(item=>item.id === id)
    return dish ? dish.quantity : 0
  }, [cartItems])

  const value = useMemo(() => ({ cartItems, cartItemsQuantity: cartItems?.length, totalAmount, addToCart, changeDishQuantity, clearCart, removeFromCart, checkDishQuantity }), [addToCart, cartItems, changeDishQuantity, checkDishQuantity, clearCart, removeFromCart, totalAmount])

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
