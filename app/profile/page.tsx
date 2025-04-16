import LoginMessage from '@/app/_components/LoginMessage'
import { auth } from '@/app/_lib/auth'
import React from 'react'

export const metadata = {
  title: 'Profile',
};


async function Page() {
  const session = await auth()
  const firstName = session?.user?.name?.split(" ").at(0)
  return (
    <>
      {session?.user
        ? (
            <p>
              Welcome, {" "}
              {firstName}
            </p>
          )
        : (<LoginMessage />)}
    </>
  )
}

export default Page
