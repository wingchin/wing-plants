import Head from 'next/head'
import Layout from '../../components/layout'
import Card from '../../components/card'
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
        <title>{productData.title}</title>
      </Head>
      <article>
          <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="bg-white rounded-lg overflow-hidden shadow-md w-1/2">
            <img className="object-cover object-center" src={`/uploads/${productData.id}.png`} alt={productData.title} />
          </div>
          <div className="w-1/2 pl-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-4xl font-bold">{productData.title}
            </h1>
            <h3 className="text-2xl font-semibold mb-8">&euro; {productData.price}</h3>
            <p className="mb-8 leading-relaxed">{productData.description}</p>
            <button className="snipcart-add-item inline-flex font-semibold bg-orange-200 border-0 py-2 px-6 focus:outline-none hover:bg-orange-300 rounded text-lg" data-item-id={productData.id} data-item-price={productData.price} data-item-image={`/uploads/${productData.id}.png`} data-item-name={productData.title}>In winkelwagen <span className="pl-3">🛒</span></button>
          </div>
        </div>
      </article>
    </Layout>
  )
}