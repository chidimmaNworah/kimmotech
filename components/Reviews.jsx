import React, {useState, useEffect} from 'react'
import { getReviews } from '../services'  
import moment from 'moment'

const Reviews = ({review}) => {

  return (
    
    <div className="relative h-80">
    <div className="absolute bg-[#020024] shadow-md inline-block w-full h-80" />
      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
        <h1 className="heading_three_text text-white text-center text-3xl font-black mb-2">"Clients are talking</h1>
        
        <p className="text-white mb-2 font-semibold text-xs">{moment(review.createdAt).format('MMM DD, YYYY')}</p>
        <div className='overflow-auto  mb-8'>
          <p className="heading_three_text_1 text-white font-light text-2xl text-center">"{review.testimonial}"</p>
        </div>
        <div className="flex items-center absolute bottom-0 w-full justify-center">
          <div className="align-middle drop-shadow-lg rounded-full shadow-md pb-2 text-white">
          <ion-icon name="person-sharp"></ion-icon>
          </div>
          <p className="inline align-middle ml-2 font-medium text-white">{review.name}</p>
        </div>
      </div>
    </div>
  )
}

export default Reviews