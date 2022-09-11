import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Heading3, Heading2, Heading, Brands, Contact, ReviewForm, Footer, Header} from '../components'
import {getPosts} from '../services'
import {FeaturedPosts, Reviews} from '../sections'
import "swiper/css/bundle";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'

const Home = ({posts}) => {

  return (
    <div className=''>
    <div className=''>
    <Header />
      <Head>
        <title>Kimmotech Technologies, Software solutions, Tech Blogs, graphics, web design, seo and more </title>
        <link rel="icon" href="/headicon.png" />
      </Head>
      
      <div>
        <video id='headerVideo' loop={true} autoPlay="autoPlay" muted>
          <source src="/vidfy-african-cheerful-young-stylish-man-and-w_1920x1080.mp4" type="video/mp4"></source>
        Your browser does not support the video tag.
        </video>
        <div className="headText">
        <div className="caption">
          <h1>Grow your business and ideas with KimmoTech</h1>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore amet assumenda, laudantium culpa facere consequatur accusamus, aliquid modi nihil itaque placeat dolorum quia in? Modi debitis consectetur iusto quam perspiciatis.
          </p>
          <div >
            <Link href='#contact' className='headTextBtn'>Contact Us</Link>
            <a href='/portfolio'className='headTextBtn'>Projects</a>
          </div>
        </div>
        </div>
      </div>

      <Heading />
      <Reviews />
      <Heading2 />
      <FeaturedPosts />
      <Brands />
      <Heading3 />
      <Contact />

    </div>

    <Footer />
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

