import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle, siteDescription } from '../components/layout'
import { getSortedProductData } from '../lib/products'

export async function getStaticProps() {
  const allProductData = getSortedProductData()
  return {
    props: {
      allProductData
    }
  }
}

export default function Home({ allProductData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className="my-12">
        <h1 className="text-5xl font-extrabold mb-3">{siteTitle}</h1>
        <p className="text-2xl md:w-3/4 mx-auto font-light">{siteDescription}</p>
      </header>
      <section className="my-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {allProductData.map(({ id, title, price }) => (
            <div key={id}>
              <Link href="/products/[id]" as={`/products/${id}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img className="w-full" src={`/uploads/${id}.png`} alt={title} />
                  <div className="px-6 py-5">
                    <h2 className="font-extrabold mb-2">{title}</h2>
                    <p className="font-light">&euro; {price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
