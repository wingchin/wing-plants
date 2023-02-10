import Head from 'next/head'
import Layout from '../../components/layout'
import Card from '../../components/card'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>

          <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">

            <div class="bg-white rounded-lg overflow-hidden shadow-md w-1/2">
              <img className="object-cover object-center" src={`/uploads/${postData.id}.png`} alt={postData.title} />
            </div>
            <div class="w-1/2 pl-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font text-4xl font-bold">{postData.title}
              </h1>
              <h3 class="text-2xl font-semibold mb-8">&euro; {postData.price}</h3>
              <p class="mb-8 leading-relaxed">{postData.description}</p>
              <button class="snipcart-add-item inline-flex font-semibold bg-orange-200 border-0 py-2 px-6 focus:outline-none hover:bg-orange-300 rounded text-lg" data-item-id={postData.id} data-item-price={postData.price} data-item-image={`/uploads/${postData.id}.png`} data-item-name={postData.title}>In winkelwagen <span class="pl-3">🛒</span></button>
            </div>
          </div>

      </article>
    </Layout>
  )
}