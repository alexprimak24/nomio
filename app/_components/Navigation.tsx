import Cart from '@/app/_components/Cart'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import IconButton from '@mui/material/IconButton'
import Link from 'next/link'
import React from 'react'
import { auth } from '../_lib/auth'

async function Navigation() {
  const session = await auth()
  console.log(session)
  return (
    <>
      <Cart />
      <div className="cursor-pointer relative size-9">
        {/* TODO: display login buttion if there is not user */}
        {session?.user?.image
          ? (
              <Link href="/profile">
                <img
                  src={session.user.image}
                  alt={session.user.name || 'User Logo'}
                  className="rounded-full border-1 border-text-primary h-9"
                  referrerPolicy="no-referrer"
                />
              </Link>
            )
          : <IconButton><LoginOutlinedIcon sx={{ fill: '#FA4A0C' }} /></IconButton>}
      </div>
    </>
  )
}

export default Navigation
