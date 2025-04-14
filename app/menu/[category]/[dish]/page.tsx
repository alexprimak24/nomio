import AddToCart from '@/app/_components/AddToCart'
import { getDish } from '@/app/_lib/db/queries'
import { Avatar, Box, Container, Divider, List, ListItem, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
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
  const { id, description, name, price, image, dish_ingredients } = await getDish(dish)

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          {/* CHANGE TO NORMAL IMAGE */}
          <Box
            component="img"
            src={image}
            alt={name}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 4,
              boxShadow: 4,
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} className="min-h-full flex flex-col justify-between gap-4">
          <div>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              {name}
            </Typography>
            <Typography variant="body1">
              {description}
            </Typography>
            <Typography variant="h5" color="primary" sx={{ mt: 2 }}>
              $
              {price.toFixed(2)}
            </Typography>
          </div>
          <div className="w-3/4">
          <AddToCart dishId={id} />
          </div>
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Ingredients
      </Typography>

      <List sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {dish_ingredients.map(ingredient => (
          <ListItem
            key={ingredient.ingredients.id}
            sx={{
              width: 'auto',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              p: 0,
            }}
          >
            <Avatar
              src={ingredient.ingredients.image}
              alt={ingredient.ingredients.ingredient}
              sx={{
                width: 64,
                height: 64,
                mb: 1,
                boxShadow: 2,
              }}
            />
            <Typography variant="body2" align="center">
              {ingredient.ingredients.ingredient}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Container>

  )
}

export default Page
