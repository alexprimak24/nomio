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
  const data = await getDishesOfOrderByPublicId(orderId)
  console.log(data)
  return (
    <div>
      Hi
    </div>
  )
}

export default Page
