import Head from 'next/head'
import Layout, { siteTitle} from '../../components/layout'
import { getAllProductIds, getProductData } from '../../lib/products'

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllProductIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the product using params.id
  const productData = getProductData(params.id)
  return {
    props: {
      productData
    }
  }
}

export default function Product({ productData }) {
  return (
    <Layout>
      <Head>
        <title>{productData.title} | {siteTitle}</title>
      </Head>
      <article className="my-8">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img className="w-full bg-white rounded-lg overflow-hidden shadow-md" src={`/uploads/${productData.id}.png`} alt={productData.title} />
          </div>
          <div className="md:w-1/2 md:pl-12 pt-8 sm:pt-0 text-left">
            <h1 className="text-4xl font-extrabold">{productData.title}</h1>
            <p className="text-2xl font-light mb-8">&euro; {productData.price}</p>
            <p className="mb-8">{productData.description}</p>
            <button className="snipcart-add-item bg-orange-200 hover:bg-orange-300 font-semibold py-2 px-6 rounded-lg text-lg" data-item-id={productData.id} data-item-price={productData.price} data-item-image={`/uploads/${productData.id}.png`} data-item-name={productData.title}>In winkelwagen <span className="pl-2">🛒</span></button>
          </div>
        </div>
      </article>
    </Layout>
  )
}