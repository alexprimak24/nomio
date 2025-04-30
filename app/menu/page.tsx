import { Box, Button, List, ListItem } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { getCategories } from '../_lib/supabase/queries'

export const metadata = {
  title: 'Menu',
}

export const revalidate = 3600

async function Page() {
  const categories = await getCategories()

  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-800 text-center">
        Welcome to
        {' '}
        <span className="text-orange-primary">Nomio</span>
        {' '}
        🍽️
      </h1>

      <Box className="min-w-[340px] sm:min-w-[550px] rounded-xl shadow-lg p-2 border border-border bg-background text-text-primary transition-all duration-300 ease-in-out px-5 py-3 sm:px-8 sm:py-5 text-center mx-auto mt-6 sm:mt-8">
        <List className="w-full rounded-md text-center flex items-center justify-center flex-col gap-5">
          {categories.map(category => (
            <Link
              href={`/menu/${category.slug}`}
              key={category.id}
              className="text-center w-full border border-border min-h-16 px-16 py-4 my-2 cursor-pointer transition-all duration-200 ease-in-out rounded-lg hover:bg-orange-primary hover:text-white hover:scale-[1.02] hover:shadow-md"
            >
              <ListItem sx={{ justifyContent: 'center' }}>
                {category.name}
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-1 py-2 sm:py-4 max-w-[550px] mx-auto mt-5">
        <p className="text-gray-700 font-medium text-lg sm:text-xl">
          Already have an order?
        </p>
        <input
          type="text"
          placeholder="Enter your order ID"
          className="w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-primary transition-all duration-200 ease-in-out"
        />
      </div>
    </>

  )
}

export default Page
