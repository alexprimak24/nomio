import AddToCart from '@/app/_components/AddToCartBtn'
import { getCategoryDishes } from '@/app/_lib/db/queries'
import { supabase } from '@/app/_lib/supabase'
import { slugify } from '@/app/_utils/slugify'
import { Box, Divider, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PageProps {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params
  return { title: `${category[0].toUpperCase() + category.slice(1)}` }
}

export async function generateStaticParams() {
  const { data } = await supabase.from('categories').select('slug')
  return data?.map(cat => ({ category: cat.slug }))
}

export const revalidate = 3600

async function Page({ params }: PageProps) {
  const { category: categoryTitle } = await params
  // console.log(categoryTitle)
  const categoryDishes = await getCategoryDishes(categoryTitle)

  return (
    <div className={`px-4 py-6 ${
      categoryDishes.length >= 3
        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
        : 'flex justify-center gap-4 flex-wrap flex-col md:flex-row'
    }`}
    >
      {categoryDishes.map(dish => (
        <Box
          key={dish.id}
          sx={{
            border: '1px solid #fff',
            maxWidth: 400,
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: 3,
            m: 'auto',
            p: 3,
          }}
        >
          <Link href={`/menu/${categoryTitle}/${slugify(dish.name)}`}>
            <Box
              className="w-220px aspect-square relative rounded-md mb-2"
            >
              <Image
                src={dish.image}
                alt={`Dish: ${dish.name}`}
                fill
                className="object-cover"
              />
            </Box>

            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {dish.name}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '248px',
                lineHeight: '1.5rem',
                minHeight: '3rem',
              }}
            >
              {dish.description}
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              $
              {dish.price.toFixed(2)}
            </Typography>
            <Divider sx={{ my: 2 }} />
          </Link>
          <AddToCart dishId={dish.id} image={dish.image} price={dish.price} name={dish.name} />
        </Box>
      ))}

    </div>
  )
}

export default Page
