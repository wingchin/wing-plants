import Head from 'next/head'
import Link from 'next/link'

export const siteTitle = 'Wing Plants 🕊🪴'
export const siteDescription = 'Planten webshop gemaakt als assessment voor PLNTS'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteDescription} />
      </Head>
      <header className="py-5 bg-orange-200">
        <nav className="flex justify-between items-center mx-auto max-w-screen-xl px-4">
          <Link href="/" className="text-xl font-extrabold whitespace-nowrap">{siteTitle}</Link>
          <Link href="/" className="snipcart-checkout bg-orange-300 hover:bg-orange-400 py-1 px-2 rounded-lg text-sm font-semibold">
            Winkelwagen
            <span className="pl-2">🛒</span>
          </Link>
        </nav>
      </header>

      <div className="max-w-4xl px-5 mx-auto text-center">
        <main>{children}</main>
      </div>

      <footer className="py-3 my-5">
        <p className="text-xs text-center">
          &copy; 2023 <strong>{siteTitle}</strong> ~ powered by <Link href="https://www.nextjs.org">Next.js</Link>
        </p>
      </footer>
    </>
  )
}