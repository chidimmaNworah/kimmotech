import React, {useState, useEffect} from 'react'
import { getReviews } from '../services'  
import moment from 'moment'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'
import {MdOutlineArrowForward} from 'react-icons/md'

const Reviews = ({review}) => {

  return (
    
    <div className="reviewsContainer">
      <div className="content">
          <div className="reviewCard">
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
      </div>
    </div>
  )
}

export default Reviews