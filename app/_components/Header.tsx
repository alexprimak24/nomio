import draftAvatar from '@/public/draftAvatar.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

function Header() {
  return (
    <div className="px-8 py-5 border-b border-border dark:border-dark-border flex justify-between items-center">
      <Logo />
      <ul className="flex justify-between items-center gap-10">
        <li className="flex">
          <p className="font-normal text-lg">
            <span className="font-bold hidden sm:block">Amount:</span>
            242$
          </p>
        </li>
        <li>
          <Link href="/cart" className="bg-transparent rounded-full flex items-center justify-center  w-10 h-10">
            <ShoppingCartOutlinedIcon />
            <p className="mb-5 text-accent-violet dark:text-accent-dark-violet font-light">5</p>
          </Link>
        </li>
        <li className="cursor-pointer relative w-10 h-10">
          <Image
            src={draftAvatar}
            alt="User Logo"
            fill
            quality={100}
            className="rounded-full border-1 border-text-primary dark:border-text-dark-primary"
          />
        </li>
      </ul>
    </div>
  )
}

export default Header
