'use server'

import type { DishInCartObj } from '@/app/_context/CartContext'
import type { FormFields } from '@/app/types/formSchema'
import { auth, signIn, signOut } from '@/app/_lib/auth'
import { nanoid } from 'nanoid'
import { redirect } from 'next/navigation'
import { supabase } from './supabase/supabase'

export async function signInAction() {
  await signIn('google', { redirectTo: '/profile' })
}

export async function signOutAction() {
  await signOut({ redirectTo: '/menu' })
}

export async function createOrder(orderData: FormFields, cartItems: DishInCartObj[]) {
  const session = await auth()
  if (!session || !session.user.customerId)
    throw new Error('You must be logged in')

  const newOrder = {
    public_id: nanoid(8),
    status: 'Received',
    is_paid: orderData.payment_method === 'card',
    payment_method: orderData.payment_method,
    observations: orderData.additional_comments ?? '',
    delivery_date: orderData.delivery_date,
    phone_number: orderData.phone_number,
    user_id: Number(session?.user.customerId),
  }

  const { data, error } = await supabase
    .from('orders')
    .insert([
      newOrder,
    ])
    .select()
    .single()

  if (error) {
    console.error(error)
    throw new Error('Order can`t be created')
  }

  const cartItemsObj = cartItems.map((cartItem) => {
    return { order_id: data.id, dish_id: cartItem.id, quantity: cartItem.quantity }
  })

  const { error: orderItemsErr } = await supabase
    .from('order_items')
    .insert(cartItemsObj)

  if (orderItemsErr) {
    console.error(orderItemsErr)
    throw new Error('Dishes can`t be added to the table')
  }
}
