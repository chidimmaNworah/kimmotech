import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const BlogFeatured = ({ post }) => (
  <div className="relative h-96">
    <div className="absolute bg-center bg-no-repeat bg-cover inline-block w-full h-96" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
    <div className="absolute bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-96" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white mb-4 text-shadow font-semibold text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
      <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">{post.title}</p>
      <div className="flex items-center absolute bottom-5 w-full justify-center">
        <Image
          unoptimized
          alt='kimmotech'
          height="30px"
          width="30px"
          className="align-middle drop-shadow-lg "
          src='/headicon.png'
        />
        <p className="inline align-middle text-white text-shadow ml-2 font-medium">Kimmotech</p>
      </div>
    </div>
    <Link href={`/blog/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
  </div>
);

export default BlogFeatured;