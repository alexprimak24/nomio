import logo from '@/public/logo.png'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href="/" className='z-10 flex items-center gap-4'>
      <Image
      src={logo}
      alt="Nomio Logo"
      height="40"
      width="40"
      quality={100}
      />

      <span className='text-xl font-bold'>Nomio</span>
    </Link>
  )
}

export default Logo
