import React, { useRef, useState, useEffect }  from 'react'
import {ReviewForm} from '../components'
import { FaFacebookSquare, FaGithubSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'
import {MdOutlineArrowForward} from 'react-icons/md'
import { getReviews } from '../services'  
import { Swiper, SwiperSlide } from "swiper/react";
import moment from 'moment'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews()
      .then((newReviews) => setReviews(newReviews))
  }, [])

  return (
    <div className='reviewsBgBlack'>
      <div><h4 className="font-normal py-5 tracking-wide lg:text-5xl md:text-3xl text-center text-[#D72A06]">CLIENTS REVIEWS <span className='text-white'>ABOUT <br />THE QUALITY OF OUR WORK</span></h4></div>
    <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={10}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640:{
            slidesPerView:2,
            spaceBetween:10
          },
          768:{
            slidesPerView:3,
            spaceBetween:20
          },
          1024:{
            slidesPerView:3,
            spaceBetween:30
          }
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
      {reviews.map((review) => (
      <div key={review.name}>
        <div className="reviewsContainer">
          <div className="content">
            <SwiperSlide><div className="reviewCard">
            
              <div className="reviewCard-content">
                  <div className="image">
                    <img src="/logo.png" alt="" />
                  </div>
                  
                  <div className='media-icons'>
                    <i><a href={`https://www.instagram.com/${review.instagram}`}><FaInstagramSquare /></a></i>
                    <i><a href={`https://www.twitter.com/${review.twitter}`}><FaTwitterSquare /></a></i>
                    <i><a href={`https://www.facebook.com/${review.facebook}`}><FaFacebookSquare /></a></i>
                  </div>

                  <div className="name-profession">
                    <span className="name">{review.name}</span>
                    <span className='profession font-semibold'>{review.profession}</span>
                    <p className="text-gray-400 mb-2 font-semibold text-xs">{moment(review.createdAt).format('MMM DD, YYYY')}</p>
                    <span className="profession">{review.testimonial}</span>
                  </div>

                  <div className={`button ${review.casestudy ? `visible` : `hidden`}`}>
                    <button>view case study<span><MdOutlineArrowForward className='mt-1 text-lg ml-2'/></span></button>
                  </div>
              </div>
              
              </div>
            </SwiperSlide>

          </div>
        </div>
      </div>
      ))}
    </Swiper>
    <ReviewForm />
    </div>
  )
}

export default Reviews