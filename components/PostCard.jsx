import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({post}) => {
  return (
    <div className="shadow-lg rounded-lg p-0 mb-8">
      <Link href={`/post/${post.slug}`}>
        <div className="home_portfolio">
          <img 
            src={post.featuredImage.url} 
            alt={post.title}
            className="object-fill h-full w-full rounded-lg"
          /> 
          <div>{post.excerpt}</div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard