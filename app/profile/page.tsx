import LoginMessage from '@/app/_components/LoginMessage'
import { auth } from '@/app/_lib/auth'
import React from 'react'

async function Page() {
  const session = await auth()
  return (
    <>
      {session?.user
        ? (
            <p>
              Welcome
              {session.user.name}
            </p>
          )
        : (<LoginMessage />)}
    </>
  )
}

export default Page
