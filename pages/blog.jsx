import React, {useState, useEffect} from 'react'
import {Footer, BlogHeader, BlogPostCard, Pagination, BlogPostWidget, BlogFeaturedPostCard} from '../components'
import {getBlogFeaturedPosts, getBlogPosts} from '../services'
import {AiOutlineFolderOpen, AiOutlineUser} from 'react-icons/ai'
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare } from 'react-icons/fa'
import {GiTimeBomb} from 'react-icons/gi'
import moment from 'moment'
import "swiper/css/bundle";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getBlogCategories, getTags } from '../services' 
import Link from 'next/link'
import { BlogFeaturedPosts } from '../sections'


const Home = ({posts}) => {

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(20)

  const [blogposts, setBlogPosts] = useState([]);
  useEffect(() => {
    getBlogPosts().then((result) => {
      setBlogPosts(result);
    });
  }, []);

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexofFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogposts.slice(indexofFirstPost, indexOfLastPost)

  //chang page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // const [searchFilter, setSearchFilter] = useState('')
  // const [executeSearch, {data}] = useLazyQuery(
  //   postsSearchQuery
  // )

  //get categories
  const [categories, setCategories] = useState([]);
    
      useEffect(() => {
        getBlogCategories()
          .then((newCategories) => setCategories(newCategories))
      }, [])

  return (
    <div>
      <BlogHeader />

      <div className='absolute top-0 left-0 w-full'>
        <BlogFeaturedPosts />
      <div className="py-12 bg-gray-100 min-h-screen ">
        <div className="flex flex-col lg:flex-row container mx-auto px-4 items-center justify-center">

          <div className='xl:w-6/12 lg:w-8/12 w-full lg:mx-6 h-full'>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-4 container mx-auto">
            {currentPosts.map((post, index) => (
                <BlogPostCard key={index} post={post.node} />
              ))}
            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={blogposts.length} paginate={paginate} />
          </div>

          <div className='w-full mt-8 lg:mt-0'>
            <div className="bg-white shadow-sm rounded-sm p-4">
              <h1 className="text-xl font-semibold text-gray-700">Social Plugin</h1>
              <div className="flex gap-2">
                <a href="https://www.facebook.com/Kimmotech-100529069435679/" className='w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800'>
                  <i><FaFacebookSquare /></i>
                </a>
                <a href="https://www.instagram.com/kimmotech/" className='w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800'>
                  <i><FaInstagramSquare /></i>
                </a>
                <a href="https://www.youtube.com/channel/UCAS5-1vY1utqRudf_qtZksQ" className='w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800'>
                  <i><FaYoutubeSquare /></i>
                </a>
                <a href="https://www.linkedin.com/company/kimmotech/" className='w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800'>
                  <i><FaLinkedin /></i>
                </a>
                <a href="https://twitter.com/kimmotech" className='w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800'>
                  <i><FaTwitterSquare /></i>
                </a>
              </div>
            </div>

            <BlogPostWidget />
            <BlogFeaturedPostCard />
          </div>
        </div>
      </div>
    <Footer />
    </div>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const posts = (await getBlogPosts()) || []

  return {
    props:{posts}
  }
}


