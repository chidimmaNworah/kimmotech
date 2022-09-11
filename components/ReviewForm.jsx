import React, {useRef, useState, useEffect} from 'react'
import ReviewPopup from './ReviewPopup'
import {submitReviews} from '../services'

const ReviewForm = () => {
  const [buttonPopup, setButtonPopup] = useState(false)
  // const [timedPopup, setTimedPopup] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimedPopup(true)
  //   }, 3000)
  // }, [])

  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const testimonialEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const professionEl = useRef()
  const instagramEl = useRef()
  const twitterEl = useRef()
  const facebookEl = useRef()

  const handletestimonialSubmission = () => {
    setError(false)

    const {value: testimonial} = testimonialEl.current
    const {value: name} = nameEl.current
    const {value: email} = emailEl.current
    const {value: profession} = professionEl.current
    const {value: instagram} = instagramEl.current
    const {value: twitter} = twitterEl.current
    const {value: facebook} = facebookEl.current

    if(!testimonial || !name || !email || !profession ){
      setError(true)
      return
    }

    const testimonialObj = {name, email, testimonial, profession, instagram, twitter, facebook}

    submitReviews(testimonialObj)
      .then((res) =>{
        setShowSuccessMessage(true)
        setTimeout(()=>{
          setShowSuccessMessage(false)
        }, 3000)
      })
  }

  return (
    <div className="flex items-center justify-center my-8">
              <span onClick={() => setButtonPopup(true)} className="transition duration-500 transform hover:-translate-y-1 inline-block bg-[#D72A06] text-lg font-meduim rounded text-white px-4 py-3 cursor-pointer">
                  Write a review
              </span>
              <ReviewPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3 className="text-2xl mb-8 font-normal border-b pb-4">We are happy to hear from you!</h3>
                <div className="grid grid-cols-1 gap-4 mb-4">
                <input 
                  type="text"
                  className ="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                  placeholder="Full Name"
                  name="name"
                  ref={nameEl}
                />
                <input 
                  type="text"
                  className ="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                  placeholder="Email"
                  name="email"
                  ref={emailEl}
                />
                <input 
                  type="text"
                  className ="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                  placeholder="profession"
                  name="Profession"
                  ref={professionEl}
                />
                <div className='flex flex-row space-x-2'>
                <input 
                  type="text"
                  className ="py-2 px-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                  placeholder="Instagram username"
                  name="instagram"
                  ref={instagramEl}
                />
                <input 
                  type="text"
                  className ="py-2 px-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                  placeholder="Twitter username"
                  name="twitter"
                  ref={twitterEl}
                />
                <input 
                  type="text"
                  className ="py-2 px-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                  placeholder="Facebook name"
                  name="facebook"
                  ref={facebookEl}
                />
                </div>
                <textarea
                  name="testimonial" 
                  // id="" cols="30" rows="10"
                  placeholder="Leave a review..."
                  ref={testimonialEl} 
                  className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700">
                </textarea>
                {error && <p className="text-xs text-red-500">All fields are required.</p>}
                <div className="mt-8">
                  <button 
                    className="transition duration-500 ease hover:bg-[#D72A06] hover:text-white inline-block outline outline-offset-2 outline-[#D72A06] text-xl rounded text-[#D72A06] p-2 cursor-pointer"
                    type="button"
                    onClick={handletestimonialSubmission}
                    >Post Review</button>
                    {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">testimonial submitted for review</span>}
                </div>
                </div>
              </ReviewPopup>
    </div>
  )
}

export default ReviewForm