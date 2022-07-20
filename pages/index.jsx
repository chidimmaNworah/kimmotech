import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Heading3, Heading2, Heading, Brands, ReviewForm} from '../components'
import {getPosts} from '../services'
import {FeaturedPosts, Reviews} from '../sections'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({posts}) => {

  return (
    <div className=''>
    <div className=''>


      <Head>
        <title>Kimmotech Technologies, Software solutions, Tech Blogs, graphics, web design, seo and more </title>
        <link rel="icon" href="/headicon.png" />
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>

      <Heading />

      <h1 className="text-3xl text-center font-black font-serif mb-10 pt-8 md:px-2 py-10"><a href="/portfolio" style={{textDecoration: 'none', color: '#020024'}}>PORTFOLIO</a></h1>

      <FeaturedPosts className="mb-8" />

      <Heading2 />

      <Brands />

      {/* <Reviews /> */}

      <ReviewForm />
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

