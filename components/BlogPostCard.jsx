import React, {useState, useEffect} from 'react'
import {AiOutlineFolderOpen, AiOutlineUser} from 'react-icons/ai'
import moment from 'moment'
import {getBlogPosts} from '../services'
import Link from 'next/link'
import {GiTimeBomb} from 'react-icons/gi'
import { getBlogCategories, getTags } from '../services' 


const BlogPostCard = ({post}) => {
  const [categories, setCategories] = useState([]);
    
      useEffect(() => {
        getBlogCategories()
          .then((newCategories) => setCategories(newCategories))
      }, [])

  return (
    <div>
    <Link key={post.slug} href={`/blog/${post.slug}`}>
      <div className="bg-white p-2 shadow-sm rounded-sm">
        <a href="#" className="overflow-hidden block">
          <img src={post.featuredImage.url} alt={post.title} className="w-full h-60 object-cover transform hover:scale-110 transition duration-500 cursor-pointer" />
        </a>
        <div className="mt-3">
          <h3 className="text-sm cursor-pointer font-semibold text-gray-700 hover:text-blue-500 transition pb-2">{post.title}</h3>
          <p className='text-xs cursor-pointer'>{post.excerpt}</p>
          <div className="flex mt-3 space-x-3">
          <div className="flex items-center text-gray-400 text-sm">
            <span className="mr-2 text-sx">
              <img src="/headicon.png" alt="author" className='w-4' />
            </span>
            Kimmotech
          </div>
          <div className="flex items-center text-gray-400 text-sm">
          <i className='pr-1 text-xs'><GiTimeBomb /></i>
            <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        </div>
            <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}><p className='px-3 py-1 text-sm border border-gray-200 rounded-sm hover:bg-blue-500 hover:text-white transition cursor-pointer'>{category.name}</p></Link>
            ))}
        </div>
      </div>
      </Link>
      </div>
  )
}

export default BlogPostCard