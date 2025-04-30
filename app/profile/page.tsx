import LoginMessage from '@/app/_components/LoginMessage'
import SignOutButton from '@/app/_components/SignOutButton'
import { auth } from '@/app/_lib/auth'
import React from 'react'
import OrderItem from '../_components/OrderItem'
import { getOrdersOfSpecificUser } from '../_lib/supabase/queries'

export const metadata = {
  title: 'Profile',
}

async function Page() {
  const session = await auth()
  const firstName = session?.user?.name?.split(' ').at(0)
  // const totalAmount = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity, 0)
  const orders = await getOrdersOfSpecificUser(Number(session?.user.customerId))
  return (
    <>
      {session?.user
        && (
          <div className="max-w-[360px] sm:max-w-[800px] w-screen">
            <div className="flex justify-between items-center w-full">
              <p className="text-2xl font-semibold text-gray-800">
                Welcome,
                {' '}
                <span className="text-orange-primary">{firstName}</span>
              </p>
              <SignOutButton />
            </div>
            <div className="mt-8 space-y-4">
              <p className="text-xl font-semibold">Order History:</p>
              {orders.map((order) => {
                const orderAmount = order.order_items.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.dishes.price), 0)

                const orderImages = order.order_items.map(item => item.dishes.image)

                return <OrderItem key={order.public_id} orderId={order.public_id} totalSum={orderAmount} dishImages={orderImages} />
              },
              )}
            </div>
          </div>
        )}

      {(!session || !session?.user) && (<LoginMessage />)}
    </>
  )
}

export default Page
