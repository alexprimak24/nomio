import AddToCart from '@/app/_components/AddToCartBtn'
import { getDish } from '@/app/_lib/supabase/queries'
import { Avatar, Box, Container, Divider, List, ListItem, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import React from 'react'

interface PageProps {
  params: Promise<{ dish: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { dish } = await params
  return { title: `${dish[0].toUpperCase() + dish.slice(1)}` }
}

async function Page({ params }: PageProps) {
  const { dish } = await params
  const { id, description, name, price, image, dish_ingredients } = await getDish(dish)

  return (
    <Container maxWidth="lg" className="flex flex-col justify-between items-center gap-8 text-center amd:items-start amd:text-left">
      <Grid container spacing={8}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            className="size-[320px] sm:size-[382px] aspect-square relative rounded-md overflow-hidden shadow-md mx-auto amd:mx-0 border border-red-500"
          >
            <Image
              src={image}
              alt={`Dish: ${name}`}
              fill
              className="object-cover"
            />
          </Box>
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          className="flex flex-col justify-between gap-6 amd:gap-16"
        >
          <div>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              {name}
            </Typography>
            <Typography variant="body1">{description}</Typography>
            <Typography variant="h5" sx={{ mt: 2, color: '#0038FF' }}>
              $
              {price.toFixed(2)}
            </Typography>
          </div>

          <div className="mx-auto amd:mx-0 w-[220px] amd:w-auto">
            <AddToCart dishId={id} name={name} image={image} price={price} />
          </div>
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} className="hidden amd:block" />

      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Ingredients
      </Typography>

      <List sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
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
            <Typography variant="body2" align="center" sx={{ minWidth: '110px' }}>
              {ingredient.ingredients.ingredient}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Container>

  )
}

export default Page
