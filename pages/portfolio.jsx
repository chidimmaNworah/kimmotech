//import type { NextPage } from 'next'
import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {PostCard, Heading3, Heading2, Pagination, Header, Reviews, Footer} from '../components'
import {getPosts, postsSearchQuery} from '../services'
import {FeaturedPosts} from '../sections'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({posts}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexofFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexofFirstPost, indexOfLastPost)

  //chang page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <Head>
        <title>Kimmotech and technical services</title>
        <link rel="icon" href="/head_icon.svg" />
      </Head>

      <Header />
      <div className='absolute top-0 bg-black pt-20 w-full portfoliobg'>
      <h1 className="text-5xl text-white text-center font-normal my-20">Welcome To Our Portfolio</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 container mx-auto px-10 mb-8">
        <div  className='lg:col-span-12 col-span-1'>
          <div  className='grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
            {currentPosts.slice(0).reverse().map((post) => <PostCard post={post.node} key={post.title}/>)}
          </div>
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props:{posts}
  }
}

