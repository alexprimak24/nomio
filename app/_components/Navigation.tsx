import Cart from '@/app/_components/Cart'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (
    <>
     <Cart/>
      <div className="cursor-pointer relative w-10 h-10">
        {/* TODO: display login buttion if there is not user */}
        <Link href="/profile">
          <Image
            src="/draftAvatar.jpg"
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
