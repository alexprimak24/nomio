import SignInButton from '@/app/_components/SignInButton'
import React from 'react'

export const metadata = {
  title: 'Login',
}

function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold text-center">
        Sign in to access your guest area
      </h2>
      <SignInButton />
    </div>
  )
}

export default Page
