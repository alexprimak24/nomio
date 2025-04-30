import Link from 'next/link'

export const metadata = {
  title: 'Thank you',
}

export default async function Page({ searchParams }: { searchParams: any }) {
  const orderId = await searchParams.order
  return (
    <div className="mt-4 space-y-6 text-center">
      <h1 className="text-3xl font-semibold">
        Thank you for your order! You your order is
        {' '}
        <Link href={`/order/${orderId}`} className="text-orange-primary">{orderId}</Link>
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
