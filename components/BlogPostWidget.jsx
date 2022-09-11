import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import {GiTimeBomb} from 'react-icons/gi'
import {getRecentBlogPosts, getSimilarBlogPosts} from '../services'


const BlogPostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([])
  useEffect(()=>{
      if(slug){
        getSimilarBlogPosts(categories, slug)
          .then((result)=> setRelatedPosts(result))
      } else {
        getRecentBlogPosts()
          .then((result)=> setRelatedPosts(result))
      }
  }, [slug])


  return (
    <div className="bg-white shadow-sm rounded-sm p-4 mt-8">
              <h1 className="text-xl font-semibold text-gray-700 mb-3">
              {slug ? "Related Topics" : "Trending Topics"}
              </h1>
              {relatedPosts.map((post)=>(
              <div key={post.title} className='space-y-4 mb-3'>
                <a href={`/blog/${post.slug}`} key={post.title} className='flex group'>
                  <div className='flex-shrink-0'>
                    <img src={post.featuredImage.url} className='w-20 h-14 rounded object-cover' alt={post.title} />
                  </div>
                  <div className="flex-grow pl-1">
                    <h5 className="text-sm leading-5 font-semibold group-hover:text-blue-500 transition">
                    <Link href={`/blog/${post.slug}`} key={post.title} >
                        {post.title}
                    </Link>
                    </h5>
                    <div className="flex text-gray-400 text-sm items-center">
                      <i className='pr-1 text-xs'><GiTimeBomb /></i>
                      <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                    </div>
                  </div>
                </a>
              </div>
              ))}
            </div>
  )
}

export default BlogPostWidget