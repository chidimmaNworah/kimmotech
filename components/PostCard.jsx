import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({post}) => {
  return (
    <div className="shadow-lg rounded-lg p-0 mb-2">
      <Link href={`/post/${post.slug}`} key={post.slug}>
        <div className="home_portfolio h-64">
          <img 
            src={post.featuredImage.url} 
            alt={post.title}
            className="object-fill h-full w-full rounded-lg"
          /> 
          <div>
          <h2 className='font-semibold text-[#D72A06]'>{post.title}</h2>
          <p>{post.excerpt}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard