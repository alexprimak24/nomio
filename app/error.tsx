'use client'
// error boundary should always be a client component!!!

// !!!!!! Only render errors will be shown there, not for ex some invalid func calls
// + this is not catches errors that happen in root layout(as logically html and body tag)
// is disappearing if we have an error, so we need to create a separate global error
// and add these tags to make it work there
interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        type="button"
        onClick={reset}
        className="bg-accent-500 text-primary-800 inline-block px-6 py-3 text-lg"
      >
        Try again
      </button>
    </main>
  )
}
