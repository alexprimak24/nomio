import { getCategoryDishes } from '@/app/_lib/db/queries'
import { slugify } from '@/app/_utils/slugify'
import { Box, List, ListItem } from '@mui/material'
import Link from 'next/link'
import React from 'react'

interface PageProps {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params
  return { title: `${category[0].toUpperCase() + category.slice(1)}` }
}

export const revalidate = 3600;

async function Page({ params }: PageProps) {
  const { category: categoryTitle } = await params
  // console.log(categoryTitle)
  const categoryDishes = await getCategoryDishes(categoryTitle)

  return (
    <Box className="w-full max-w-2xl rounded-xl shadow-lg p-2 border border-border dark:border-dark-border bg-background dark:bg-dark-background text-text-primary dark:text-text-dark-primary transition-all duration-300 ease-in-out px-5 py-2 text-center">
      <List className="w-full rounded-md text-center flex items-center justify-center flex-col gap-5">
        {categoryDishes.map(category => (
          <Link
            href={`/menu/${categoryTitle}/${slugify(category.name)}`}
            key={category.id}
            className={`text-center w-full
              border border-border dark:border-dark-border min-h-16
               px-16 py-4 my-2 
              cursor-pointer transition-all duration-200 ease-in-out rounded-lg
              hover:bg-accent-indigo hover:text-white hover:scale-[1.02] hover:shadow-md
            `}
          >
            <ListItem sx={{ justifyContent: 'center' }}>
              {category.name}
              {' '}
              with price
              {category.price}
              Description:
              {' '}
              {category.description}
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  )
}

export default Page
