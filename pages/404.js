import Head from 'next/head'
import Layout from '../components/layout'

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404 - Pagina niet gevonden</title>
      </Head>
      <article className="my-8">
      	<h1 className="text-4xl font-extrabold mb-3">Uh oh...</h1>
      	<p>Error 404. De pagina kan helaas niet gevonden worden.</p>
      </article>
    </Layout>
  )
}