import React, { useRef, useState, useEffect }  from 'react'
import {ReviewForm, Reviews} from '../components'
import { getReviews } from '../services' 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import moment from 'moment'



const Reviewer = () => {
  const [reviews, setReviews] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getReviews().then((result) => {
      setReviews(result);
      setDataLoaded(true);
    });
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
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
    <div className='reviewsBgBlack'>
      <div><h4 className="font-normal py-5 tracking-wide lg:text-5xl md:text-3xl text-center text-[#D72A06]">CLIENTS REVIEWS <span className='text-white'>ABOUT <br />THE QUALITY OF OUR WORK</span></h4></div>
 
        
      <div className="w-full py-10">
      
      <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemClass="px-2">
        {dataLoaded && reviews.map((review, index) => (
          <Reviews key={index} review={review} />
        ))}
      </Carousel>
      
    </div>
    <ReviewForm />
    </div>
  )
}

export default Reviewer