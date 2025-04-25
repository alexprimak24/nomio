import React from 'react'
import CheckoutForm from '../_components/CheckoutForm'
import { auth } from '../_lib/auth'

export const metadata = {
  title: 'Checkout',
}

async function Page() {
  const session = await auth()
  return (
    <>
      <h1 className="font-bold text-2xl mb-4">Complete your order</h1>
      <CheckoutForm
        email={session?.user.email ?? ''}
        name={session?.user.name ?? ''}
      />
    </>
  )
}

export default Page
