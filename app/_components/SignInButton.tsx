import Image from 'next/image'
import { signInAction } from '../_lib/actions'

// it is server component because we want all the logic to be on the server
// this is a server component so that we can't have any interactivity there
// so that onClick won't work there
function SignInButton() {
  return (
    // so this is the trick that will work on server components
    <form action={signInAction}>
      <button type="submit" className="border-primary-300 flex items-center gap-6 border px-10 py-4 text-lg font-medium rounded-2xl">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  )
}

export default SignInButton
