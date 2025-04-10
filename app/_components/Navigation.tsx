import draftAvatar from '@/public/draftAvatar.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (
    <>
      <Link href="/cart" className="bg-transparent rounded-full flex items-center justify-center w-10 h-10">
        <ShoppingCartOutlinedIcon />
        <p className="mb-5 text-accent-violet dark:text-accent-dark-violet font-light">5</p>
      </Link>
      <div className="cursor-pointer relative w-10 h-10">
        {/* TODO: display login buttion if there is not user */}
        <Link href="/profile">
          <Image
            src={draftAvatar}
            alt="User Logo"
            fill
            quality={100}
            className="rounded-full border-1 border-text-primary dark:border-text-dark-primary"
          />
        </Link>
      </div>
    </>
  )
}

export default Navigation
