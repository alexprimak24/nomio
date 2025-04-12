import { Box, List, ListItem } from '@mui/material'
import React from 'react'
import { getCategories } from '../_lib/db/queries'

export const metadata = {
  title: 'Menu',
}

async function Page() {
  const categories = await getCategories()

  return (
    <div className="w-full flex flex-col items-center">
      <Box className="w-full max-w-2xl rounded-xl shadow-lg p-2 border border-border dark:border-dark-border bg-background dark:bg-dark-background text-text-primary dark:text-text-dark-primary transition-all duration-300 ease-in-out px-5 py-2 text-center">
        <List className="w-full rounded-md text-center flex items-center justify-center flex-col gap-5">
          {categories.map(category => (
            <ListItem
              sx={{ textAlign: 'center' }}
              key={category.id}
              className={`w-full
          border border-border dark:border-dark-border min-h-16
           px-16 py-4 my-2  text-center
          cursor-pointer transition-all duration-200 ease-in-out rounded-lg
          hover:bg-accent-indigo hover:text-white hover:scale-[1.02] hover:shadow-md
        `}
            >
              {category.name}
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  )
}

export default Page
