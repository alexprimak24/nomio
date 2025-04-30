'use server'

import type { DishInCartObj } from '@/app/_context/CartContext'
import type { FormFields } from '@/app/types/formSchema'
import type { Order } from '../types/db'
import { auth, signIn, signOut } from '@/app/_lib/auth'
import { customAlphabet } from 'nanoid'
import { supabase } from './supabase/supabase'

export async function signInAction() {
  await signIn('google', { redirectTo: '/profile' })
}

export async function signOutAction() {
  await signOut({ redirectTo: '/menu' })
}

export async function createOrder(orderData: FormFields, cartItems: DishInCartObj[]): Promise<Order | { error: string }> {
  const session = await auth()
  if (!session || !session.user.customerId)
    return { error: 'You must be logged in' }

  if (cartItems.length === 0) {
    return { error: 'Please add some items to the cart' }
  }
  const generatePublicOrderId = customAlphabet('0123456789', 8)
  const newOrder = {
    public_id: generatePublicOrderId(),
    status: 'Received',
    is_paid: orderData.payment_method === 'card',
    payment_method: orderData.payment_method,
    observations: orderData.additional_comments ?? '',
    delivery_date: orderData.delivery_date.toISOString(),
    phone_number: orderData.phone_number,
    user_id: Number(session?.user.customerId),
  }

  const { data: orderDataRes, error: orderError } = await supabase
    .from('orders')
    .insert([
      newOrder,
    ])
    .select()
    .single()

  if (orderError || !orderDataRes) {
    return { error: 'Order can`t be created' }
  }

  const cartItemsObj = cartItems.map((cartItem) => {
    return { order_id: orderDataRes.id, dish_id: cartItem.id, quantity: cartItem.quantity }
  })

  const { error: orderItemsErr } = await supabase
    .from('order_items')
    .insert(cartItemsObj)

  if (orderItemsErr) {
    return { error: 'Dishes can`t be added to the table' }
  }

  return orderDataRes
}
