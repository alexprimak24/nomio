import Link from 'next/link'

export const metadata = {
  title: 'Thank you',
}

export default function Page() {
  return (
    <div className="mt-4 space-y-6 text-center">
      <h1 className="text-3xl font-semibold">
        Thank you for your order!
      </h1>
      <Link
        href="/profile"
        className="inline-block text-xl underline"
      >
        Manage your orders &rarr;
      </Link>
    </div>
  )
}
