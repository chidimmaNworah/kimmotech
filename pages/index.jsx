//import type { NextPage } from 'next'
import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {PostCard, Heading3, Heading2, Pagination, Heading, Reviews} from '../components'
import {getPosts, postsSearchQuery} from '../services'
import {FeaturedPosts} from '../sections'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({posts}) => {
  // const [currentPage, setCurrentPage] = useState(1)
  // const [postsPerPage] = useState(5)

  //get current posts
  // const indexOfLastPost = currentPage * postsPerPage
  // const indexofFirstPost = indexOfLastPost - postsPerPage
  // const currentPosts = posts.slice(indexofFirstPost, indexOfLastPost)

  //chang page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // const [searchFilter, setSearchFilter] = useState('')
  // const [executeSearch, {data}] = useLazyQuery(
  //   postsSearchQuery
  // )

  return (
    
    <div className='mx-auto lg:px-20 lg:mx-20'>


      <Head>
        <title>FTS Blog</title>
        <link rel="icon" href="/headicon.png" />
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

      

          {/* <div className="flex justify-center pb-2">
                    <form action="">
                        <div className="relative items-center text-gray-200">
                        <label class="relative inline-block">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2"><ion-icon name="search-sharp"></ion-icon>
                        </span>
                        <input class="placeholder:italic placeholder:text-slate-400 placeholder:text-gray-200 block bg-transparent w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                        placeholder="Search..." 
                        type="text" 
                        name="search"
                        onChange={(event) => setSearchFilter(event.target.value)}
                        />
                        </label>
                        <button 
                        className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-sm rounded-md text-white px-6 py-2 m-4 cursor-pointer"
                        type="button" 
                        onClick={() => executeSearch({
                          variables: {filter: searchFilter}
                        })}
                        >Search</button>
                        </div>
                        
                    </form>
                    {data && 
                      currentPosts.map((post) => (
                        <PostCard post={post.node} key={post.title}/>
                      ))}
          </div> */}

      <Heading />


      <h1 className="text-5xl text-[#001973] text-center font-bold font-serif mb-10 mt-20 md:px-2">Our Portfolio</h1>

      <FeaturedPosts className="lg:mx-20 lg:px-20 mb-8" />

      {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 container mx-auto px-10 mb-8">
        <div  className='lg:col-span-12 col-span-1'>
          <div  className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
            {posts.filter((item, index) => index < 6).map((post) => <PostCard post={post.node} key={post.title}/>)}
          </div>
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
      </div> */}

      <Heading2 className="container mx-auto px-10 mb-8" />


      <Heading3 />
      {/* <Reviews /> */}
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

