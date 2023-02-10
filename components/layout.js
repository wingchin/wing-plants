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
        <meta property="og:image" content={`https://og-image.now.sh/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <nav className="py-5 bg-white">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <Link href="/" className="flex items-center">
              <p className="self-center text-xl font-bold whitespace-nowrap">{siteTitle}</p>
            </Link>
            <Link href="/" className="snipcart-checkout text-sm font-semibold">🛒 Winkelwagen</Link>
        </div>
      </nav>

      <div className="max-w-4xl px-5 mx-auto text-center">
        <header className="my-8">
          {home && (
            <h1 className="text-5xl font-bold">{siteTitle}</h1>
          )}
        </header>

        <main>{children}</main>

        <footer className="my-8">
          <p className="text-xs">
            &copy; 2023 <strong>{siteTitle}</strong> ~ powered by <Link href="https://www.nextjs.org">Next.js</Link>
          </p>
        </footer>
      </div>
    </>
  )
}