import { Box, List, ListItem } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { getCategories } from '../_lib/db/queries'

export const metadata = {
  title: 'Menu',
}

export const revalidate = 3600

async function Page() {
  const categories = await getCategories()

  return (
    <Box className="w-full max-w-2xl rounded-xl shadow-lg p-2 border border-border dark:border-dark-border bg-background dark:bg-dark-background text-text-primary dark:text-text-dark-primary transition-all duration-300 ease-in-out px-5 py-2 text-center">
      <List className="w-full rounded-md text-center flex items-center justify-center flex-col gap-5">
        {categories.map(category => (
          <Link
            href={`/menu/${category.slug}`}
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
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  )
}

export default Page
