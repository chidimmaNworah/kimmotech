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
      <Head>
        <title>Kimmotech Tech portfolio, covering: Trending Technologies, Software solutions, Tech Blogs, graphics, web design, seo and more </title>
        <link rel="icon" href="/headicon.png" />
      </Head>
    <div className=''>
    <Header />
      
      <div className=''>
        <img src="/videoReplacement.jpg" alt="header" id='headerVideo' />
        {/* <video id='headerVideo' loop={true} autoPlay="autoPlay" muted>
          <source src="/vidfy-african-cheerful-young-stylish-man-and-w_1920x1080.mp4" type="video/mp4"></source>
        </video> */}
        <div className="headText">
        <div className="caption">
          <h1>
          <span className='text-[#FF6300]'>TRUSTED </span>
          SOFTWARE ENGINEERING <br />
          AND IT CONSULTING <br />
          <span className='text-[#FF6300]'> COMPANY</span>
          </h1>
          <div >
            <Link href='#contact' className='headTextBtn'>Contact Us</Link>
            <Link href='/portfolio'className='headTextBtn'>Projects</Link>
          </div>
        </div>
        </div>
      </div>
      <div className='body-section'>
          <Heading className=''/>
          <Reviews />
          <Heading2 />
          <FeaturedPosts />
          <Brands />
          <Heading3 />
          <Contact />
          <Footer />
      </div>
     

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

