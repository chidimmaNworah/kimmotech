import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Heading3, Heading2, Heading, Brands, ReviewForm} from '../components'
import {getPosts} from '../services'
import {FeaturedPosts, Reviews} from '../sections'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({posts}) => {
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    
    <div className=''>


      <Head>
        <title>Kimmotech Technologies, Software solutions, Tech Blogs, graphics, web design, seo and more </title>
        <link rel="icon" href="/headicon.png" />
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>

      <Heading />

      <h1 className="text-4xl text-center font-black font-serif mb-10 mt-8 md:px-2"><a href="/portfolio" style={{textDecoration: 'none', color: '#020024'}}>OUR PORTFOLIO</a></h1>

      <FeaturedPosts className="lg:mx-20 lg:px-20 mb-8" />

      <Heading2 className="container mx-auto px-10 mb-8" />

      <Brands />

      <Reviews />

      <ReviewForm />
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

