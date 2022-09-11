import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => {
  return(
  <div className="relative h-80 w-full mx-auto rounded-lg">
    <div className="absolute bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-full" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
    <div className="" />
        <div className="">
          <Image
            unoptimized
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle drop-shadow-lg rounded-full"
            src={post.author.photo.url}
          />
       </div>
      <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
      <div>
 </div>
 </div>
 )
};

export default FeaturedPostCard;