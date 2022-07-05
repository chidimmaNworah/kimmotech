import Head from 'next/head'
import React from 'react'
import {useRouter} from 'next/router'
import {getPosts, getPostDetails} from '../../services'
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader } from '../../components'

const PostDetails = ({post}) => {
const router = useRouter()
if(router.isFallback){
  return <Loader />
}
  return (
    <div>
      <Head>
        <title>FTS Blog</title>
        <link rel="icon" href="/head_icon.svg" />
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
      </Head>

      <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
      </div>
  )
}

export default PostDetails

export async function getStaticProps({params}) {
  const data = await getPostDetails(params.slug)

  return {
    props:{post: data}
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(({node: {slug}}) => ({params: {slug}})),
    fallback: true
  }
}
