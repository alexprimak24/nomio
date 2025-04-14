import AddToCart from '@/app/_components/AddToCart'
import { getCategoryDishes } from '@/app/_lib/db/queries'
import { slugify } from '@/app/_utils/slugify'
import { Box, Button, Divider, List, ListItem, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

interface PageProps {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params
  return { title: `${category[0].toUpperCase() + category.slice(1)}` }
}

export const revalidate = 3600

async function Page({ params }: PageProps) {
  const { category: categoryTitle } = await params
  // console.log(categoryTitle)
  const categoryDishes = await getCategoryDishes(categoryTitle)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              component="img"
              src={dish.image}
              alt={dish.name}
              sx={{
                width: '100%',
                height: 220,
                objectFit: 'cover',
                borderRadius: 2,
                mb: 2,
              }}
            />

            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {dish.name}
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: '248px' }}>
              {dish.description}
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              $
              {dish.price.toFixed(2)}
            </Typography>
            <Divider sx={{ my: 2 }} />
          </Link>
          <AddToCart dishId={dish.id} />
        </Box>
      ))}

    </div>
  )
}

export default Page
