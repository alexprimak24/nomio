'use server'


import type { FormFields } from '@/app/types/formSchema'
import { auth, signIn, signOut } from '@/app/_lib/auth'
import { nanoid } from 'nanoid'
import { supabase } from './supabase/supabase'
import { redirect } from 'next/navigation'

export async function signInAction() {
  await signIn('google', { redirectTo: '/profile' })
}

export async function signOutAction() {
  await signOut({ redirectTo: '/menu' })
}

export async function createOrder(orderData: FormFields) {
  
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
    user_id: Number(session?.user.customerId),
  }

  const { error } = await supabase
  .from('orders')
  .insert([
    newOrder,
  ])

  if (error) {
    console.error(error);
    throw new Error('Order can`t be created');
  }

  redirect('/thankyou');
}
