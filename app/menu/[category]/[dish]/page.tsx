import { getDish } from '@/app/_lib/db/queries'
import { Avatar, Box, Divider, List, ListItem, Typography } from '@mui/material'
import React from 'react'

interface PageProps {
  params: Promise<{ dish: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { dish } = await params
  return { title: `${dish[0].toUpperCase() + dish.slice(1)}` }
}

export const revalidate = 3600

async function Page({ params }: PageProps) {
  const { dish } = await params
  const {description,name, price, image, dish_ingredients} = await getDish(dish) 

  return (
    <Box
      sx={{
        maxWidth: 400,
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: 3,
        m: 'auto',
        p: 3,
      }}
    >
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          width: '100%',
          height: 220,
          objectFit: 'cover',
          borderRadius: 2,
          mb: 2,
        }}
      />

      <Typography variant="h5" fontWeight="bold" gutterBottom>
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {description}
      </Typography>
      <Typography variant="h6" color="primary" gutterBottom>
        $
        {price.toFixed(2)}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Ingredients
      </Typography>
      <List>
        {dish_ingredients.map(ingredient => (
          <ListItem key={ingredient.ingredients.id} sx={{ pl: 0 }}>
            <Avatar
              src={ingredient.ingredients.image}
              alt={ingredient.ingredients.ingredient}
              sx={{ width: 32, height: 32, mr: 2 }}
            />
            <Typography variant="body2">{ingredient.ingredients.ingredient}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Page
