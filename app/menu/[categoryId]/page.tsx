import { getCategoryDishes } from '@/app/_lib/db/queries'
import React from 'react'

// TODO replace with actual category
export const metadata = {
  title: 'Salads',
}

interface PageProps {
    params: Promise<{ categoryId: string }>;
  }
  

async function Page({ params }: PageProps) {
    const { categoryId } = await params;
    // console.log(categoryId)
    const categoryDishes = await getCategoryDishes(categoryId)
    console.log(categoryDishes)
// eslint-disable-next-line no-console
console.log(categoryDishes)
  return (
    <>
     hi
    </>
  )
}

export default Page
