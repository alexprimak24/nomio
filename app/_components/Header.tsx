import Navigation from '@/app/_components/Navigation'
import React from 'react'
import Logo from './Logo'
import TotalAmount from './TotalAmount'

function Header() {
  return (
    <div className="px-8 py-5 border-b border-border dark:border-dark-border flex justify-between items-center">
      <Logo />
      <div className="flex justify-between items-center gap-10">
        <TotalAmount />
        <Navigation />
      </div>
    </div>
  )
}

export default Header
