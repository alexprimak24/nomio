import { Box, List, ListItem } from '@mui/material'
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
    <Box className="min-w-[340px] sm:min-w-[550px] rounded-xl shadow-lg p-2 border border-border bg-background text-text-primary transition-all duration-300 ease-in-out px-5 py-3 sm:px-8 sm:py-5 text-center">
      <List className="w-full rounded-md text-center flex items-center justify-center flex-col gap-5">
        {categories.map(category => (
          <Link
            href={`/menu/${category.slug}`}
            key={category.id}
            className={`text-center w-full
              border border-border min-h-16
               px-16 py-4 my-2 
              cursor-pointer transition-all duration-200 ease-in-out rounded-lg
              hover:bg-orange-primary hover:text-white hover:scale-[1.02] hover:shadow-md
            `}
          >
            <ListItem sx={{ justifyContent: 'center' }}>
              {category.name}
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  )
}

export default Page
