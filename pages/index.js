import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle, siteDescription } from '../components/layout'
import Card from '../components/card'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
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
          {allPostsData.map(({ id, title, price }) => (
            <div key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <Card grid id={id} title={title} price={price} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
