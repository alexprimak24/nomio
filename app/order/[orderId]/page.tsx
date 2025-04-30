import DishItem from '@/app/_components/DishItem'
import { getDishesOfOrderByPublicId } from '@/app/_lib/supabase/queries'
import React from 'react'

interface PageProps {
  params: Promise<{ orderId: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { orderId } = await params
  return { title: `Order ${orderId}` }
}

async function Page({ params }: PageProps) {
  const { orderId } = await params
  const dishes = await getDishesOfOrderByPublicId(orderId)
  const orderAmount = dishes.order_items.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.dishes.price), 0)

  return (
    <div className="w-full flex flex-col gap-8 text-black">
      <h1 className="text-2xl font-bold self-start">
        Order Amount:
        {' '}
        <span className="bg-orange-primary text-white px-3 py-1 rounded-full text-lg">
          {orderAmount.toFixed(2)}
          $
        </span>
      </h1>

      <ul className="grid gap-4 w-full">
        {dishes.order_items.map(dish => (
          <DishItem
            key={dish.id}
            image={dish.dishes.image}
            name={dish.dishes.name}
            quantity={dish.quantity}
            price={dish.dishes.price}
          />
        ))}
      </ul>
    </div>
  )
}

export default Page
