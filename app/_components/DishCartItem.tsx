'use client'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import Image from 'next/image'

interface DishCartItemProps {
  id: number
  image: string
  name: string
  price: number
  quantity: number
  onRemove: (id: number) => void
}

export default function DishCartItem({ id, image, name, price, quantity, onRemove }: DishCartItemProps) {
  return (
    <Box
      sx={{
        border: '1px solid #ddd',
        borderRadius: 2,
        p: 2,
        mb: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid>
          <Image
            src={image}
            alt={name}
            width={60}
            height={60}
            style={{ borderRadius: 8 }}
          />
        </Grid>

        <Grid size={{ xs: 12 }} spacing={1}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="subtitle1">{name}</Typography>
          </Grid>

          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Typography color="text.secondary">
              Qty:
              {quantity}
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Typography color="text.secondary">
              $
              {price.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <IconButton onClick={() => onRemove(id)}>
        <CloseIcon />
      </IconButton>
    </Box>
  )
}
