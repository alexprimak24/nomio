'use client'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import CloseIcon from '@mui/icons-material/Close'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined'
import { Box, Button, IconButton } from '@mui/material'
import Image from 'next/image'

interface DishCartItemProps {
  id: number
  image: string
  name: string
  price: number
  quantity: number
  onRemove: (id: number) => void
  changeDishQuantity: (id: number, newQuantity: number) => void
}

export default function DishCartItem({ id, image, name, price, quantity, onRemove, changeDishQuantity }: DishCartItemProps) {
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
        width: '100vw',
      }}
      className={"max-w-[360px] sm:max-w-[800px] "}
    >
      <div className="flex items-center gap-5">
        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          style={{ borderRadius: 8 }}
        />

        <div className="max-w-[100px]">
          {name}
        </div>
      </div>
      <div>
        <div className="text-center">
          <p className="text-sm">
            $
            {price.toFixed(2)}
          </p>
          <div className="flex">
            <button onClick={() => changeDishQuantity(id, quantity - 1)}>
              <RemoveCircleOutlineOutlinedIcon sx={{ fill: '#FA4A0C' }} />
            </button>
            <p className="font-bold">
              x
              {quantity}
            </p>
            <button onClick={() => changeDishQuantity(id, quantity + 1)}>
            <AddCircleOutlineOutlinedIcon sx={{ fill: '#FA4A0C' }} />
          </button>
          </div>

        </div>
      </div>
      <IconButton onClick={() => onRemove(id)} >
        <CloseIcon/>
      </IconButton>
    </Box>
  )
}
