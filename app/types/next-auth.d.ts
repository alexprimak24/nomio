// eslint-disable-next-line unused-imports/no-unused-imports
import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      name?: string | null
      email?: string | null
      image?: string | null
      customerId?: string | null
    }
  }
}
