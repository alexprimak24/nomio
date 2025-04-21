import React from 'react'
import CheckoutForm from '../_components/CheckoutForm'
import { auth } from '../_lib/auth'

async function Page() {
  const session = await auth()
  return (
    <>
      <h1 className="font-bold text-2xl">Complete your order</h1>
      <CheckoutForm
        email={session?.user.email}
        name={session?.user.name}
        customerId={session?.user.customerId}
      />
    </>
  )
}

export default Page
