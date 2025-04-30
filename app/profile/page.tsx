import LoginMessage from '@/app/_components/LoginMessage'
import SignOutButton from '@/app/_components/SignOutButton'
import { auth } from '@/app/_lib/auth'
import React from 'react'
import { getOrdersOfSpecificUser } from '../_lib/supabase/queries'

export const metadata = {
  title: 'Profile',
}

async function Page() {
  const session = await auth()
  const firstName = session?.user?.name?.split(' ').at(0)
  const data = await getOrdersOfSpecificUser(Number(session?.user.customerId))
  console.log(data)
  return (
    <>
      {session?.user
        && (
          <div className="flex justify-between items-center w-full">
            <p>
              Welcome,
              {' '}
              {firstName}
            </p>
            <SignOutButton />
          </div>
        )}

      {(!session || !session?.user) && (<LoginMessage />)}
    </>
  )
}

export default Page
