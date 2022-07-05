import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import { getReviews } from '../services'
import 'react-ionicons'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getReviews()
      .then((newReviews) => {
        setReviews(newReviews)
        setDataLoaded(true);
      })
}, [])
  // useEffect(() => {
  //   getReviews().then((result) => {
  //     setReviewedPosts(result);
  //     setDataLoaded(true);
  //   });
  // }, []);

  const customLeftArrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-white rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-white rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  );

  return (
    <div className="relative h-72 container mx-auto px-0 mb-8">
      <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemClass="px-4">
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ background: '#fafafa' }} />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-stone-50 via-stone-300 to-stone w-full h-72" />
    {reviews.map((review) => (
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <h1 className="text-4xl font-black">Reviews</h1>
      
      <div className="text-black mb-2">
          <span className="p-2 inline-flex items-center rounded-full text-2xl font-light">
          <ion-icon name="chatbox-ellipses-outline"></ion-icon>
          </span>
      </div>
      <p className="text-[#4D4D4D] lg:mb-5 mb-20 lg:pb-0 pb-20 text-xl font-normal text-center">{review.testimonial}</p>
      <div className="flex flex-col items-center absolute bottom-1 w-full justify-center">
      <p className="align-middle text-black text-[#4D4D4D] font-bold">{review.name}</p>
        <Image
          unoptimized
          alt='hi'
          height="30px"
          width="30px"
          className="align-middle drop-shadow-lg rounded-full"
          src={review.photo.url}
        />
      </div>
      
    </div>
    ))}
    </Carousel>
  </div>
  )
}

export default Reviews