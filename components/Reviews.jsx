import React, {useState, useEffect} from 'react'
import { getReviews } from '../services' 
import moment from 'moment'

const Reviews = ({review}) => {

  return (
    <div className='container w-full mx-auto'>
    <h1 className="text-3xl text-center font-semibold font-serif mb-10 mt-20 md:px-2"><a href="/portfolio" style={{textDecoration: 'none', color: '#001973'}}>Our Clients are talking</a></h1>
    <div className="relative h-80">
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-80" style={{ backgroundImage: `url('reviewsbg.jpg')` }} />
      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
        <div className="flex items-center absolute bottom-5 w-full justify-center">
          <div className="align-middle drop-shadow-lg rounded-full shadow-md pb-2">
          <ion-icon name="person-sharp"></ion-icon>
          </div>
          <p className="inline align-middle text-shadow ml-2 font-medium text-black">{review.name}</p>
        </div>
      <p className="text-black mb-4 text-shadow font-semibold text-xs">{moment(review.createdAt).format('MMM DD, YYYY')}</p>
      <div className='overflow-auto  mb-8'>
      <p className="text-black text-shadow font-light text-xl text-center">"{review.testimonial}"</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Reviews