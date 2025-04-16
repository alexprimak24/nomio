/* eslint-disable node/prefer-global/process */
import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

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
  },
  pages: {
    signIn: '/login',
  },
})
