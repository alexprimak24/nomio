/* eslint-disable node/prefer-global/process */
import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import { createCustomer, getCustomer } from './supabase/queries'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    // this will be called when we try to access profile page, which
    // we protected with middleware
    // so once the user hits /profile, this callback will be called
    // so we have access to auth and request (I just removed as it is not needed there)
    // and we just return true if there is a user
    authorized({ auth }) {
      return !!auth?.user
    },
    // this will run after the user provided credentials but before like finished login
    async signIn({ user }) {
      try {
        const email = user.email ?? null
        const fullName = user.name ?? null
        if (!email || !fullName)
          return false
        // so if we have a guest, all good
        const existingCustomer = await getCustomer(email)

        if (!existingCustomer)
          await createCustomer({ email: user.email!, fullName: user.name! })

        return true
      }
      catch {
        return false
      }
    },
    // we can get guestId from any place we want from here which is super convenient
    async session({ session }) {
      const guest = await getCustomer(session.user.email)
      session.user.customerId = String(guest?.id)
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
})
