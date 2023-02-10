import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle, siteDescription } from '../components/layout'
import Card from '../components/card'
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
      <section className="my-8">
        <p className="text-2xl md:w-3/4 mx-auto font-light">{siteDescription}</p>
      </section>
      <section>
        <div className="grid md:grid-cols-3 gap-6">
          {allProductData.map(({ id, title, price }) => (
            <div key={id}>
              <Link href="/products/[id]" as={`/products/${id}`}>
                <Card grid id={id} title={title} price={price} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
