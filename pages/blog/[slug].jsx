import Head from 'next/head'
import React from 'react'
import {useRouter} from 'next/router'
import {getBlogPosts, getBlogPostDetails} from '../../services'
import { BlogPostDetail, Categories, BlogPostWidget, Author, BlogComments, BlogCommentsForm, Loader, Footer, BlogHeader, BlogFeaturedPostCard } from '../../components'

const BlogPostDetails = ({post}) => {
const router = useRouter()
if(router.isFallback){
  return <Loader />
}
  return (
    <div className='bg-gray-400'>
      <Head>
        <title>FTS Blog</title>
        <link rel="icon" href="/head_icon.svg" />
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>
      <BlogHeader />
      
      <div className='absolute top-20 w-full pt-10'>
        <div className="container mx-auto px-10 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8">
              <BlogPostDetail post={post}  />
              <BlogCommentsForm slug={post.slug} />
              <BlogComments slug={post.slug} />
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky top-8">
                <BlogPostWidget slug={post.slug} categories={post.blogcategories.map((category) => category.slug)} />
                <BlogFeaturedPostCard />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    </div>
  )
}

export default BlogPostDetails

export async function getStaticProps({params}) {
  const data = await getBlogPostDetails(params.slug)

  return {
    props:{post: data}
  }
}

export async function getStaticPaths() {
  const posts = await getBlogPosts()

  return {
    paths: posts.map(({node: {slug}}) => ({params: {slug}})),
    fallback: true
  }
}
