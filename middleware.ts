import { auth } from './app/_lib/auth'

export const middleware = auth

// this is matcher where we specify in which routes that middleware should run
export const config = {
  matcher: ['/profile'],
}
