import LoginMessage from '@/app/_components/LoginMessage'
import SignOutButton from '@/app/_components/SignOutButton'
import { auth } from '@/app/_lib/auth'
import React from 'react'

export const metadata = {
  title: 'Profile',
}

async function Page() {
  const session = await auth()
  const firstName = session?.user?.name?.split(' ').at(0)
  // this is absolutely amazing to just grab it here
  console.log(session?.user.customerId)
  return (
    <>
      {session?.user
        ? (
          <div className='flex justify-between items-center w-full'>
            <p>
              Welcome,
              {' '}
              {firstName}
            </p>
            <SignOutButton />
            </div>
          )
        : (<LoginMessage />)}
    </>
  )
}

export default Page
