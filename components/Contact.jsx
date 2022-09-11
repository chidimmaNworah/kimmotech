import React, {useState, useRef} from 'react'
import 'react-ionicons'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import {submitMessage} from '../services'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsTelegram} from 'react-icons/bs'
import {FaMailBulk} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'

const Contact = () => {

    const [error, setError] = useState(false)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const messageEl = useRef()
    const nameEl = useRef()
    const emailEl = useRef()
    const companyEl = useRef()
    const phoneEl = useRef()
  
    const handlemessageSubmission = () => {
      setError(false)
  
      const {value: message} = messageEl.current
      const {value: name} = nameEl.current
      const {value: email} = emailEl.current
      const {value: company} = companyEl.current
      const {value: phone} = phoneEl.current
  
      if(!message || !name || !email ){
        setError(true)
        return
      }
  
      const messageObj = {name, email, message, company, phone}
  
      submitMessage(messageObj)
        .then((res) =>{
          setShowSuccessMessage(true)
          setTimeout(()=>{
            setShowSuccessMessage(false)
          }, 3000)
        })
    }

  return (
      <div id='contact' className='w-full z-10 bg-white my-20'>
    <div className="container w-full">
        <div className="flex flex-col space-y-6 md:flex-row lg:space-y-4 w-full max-x-4xl p-8 shadow-lg text-black">
            <div className="flex flex-col space-y-6 justify-between">
                <div>
                    <h1 className="font-bold text-4xl tracking-wide text-[#E53B0F]">Contact Us</h1>
                    <p className="pt-2 text-black text-sm">
                        Share the details of your project - like scope, timeframes, or business challenges you'd like to solve. Our team will carefully study them and then we'll figure out the next move together.
                    </p>
                </div>
                <div className='flex flex-col space-y-4'>
                    <a href='https://wa.me/message/UW7HLNBIYP6WH1' target="_blank" className="inline-flex space-x-2 items-center no-underline cursor-pointer text-black">
                    <IoLogoWhatsapp /><span>Whatsapp</span>
                    </a>
                    <a href="https://t.me/kimmotech" target="_blank" className="inline-flex space-x-2 items-center no-underline cursor-pointer text-black">
                    <BsTelegram /><span>Telegram</span>
                    </a>
                    <a href="mailto: chidimmanworah12@gmail.com" target="_blank" className="inline-flex space-x-2 items-center no-underline cursor-pointer text-black">
                    <FaMailBulk /><span>Email Us</span>
                    </a>
                    <div><div className="inline-flex space-x-2 items-center no-underline cursor-pointer text-black">
                    <HiLocationMarker /><span>FCT, Nigeria</span>
                    </div></div>
                </div>
            </div>
            <div>
                <div className="bg-white shadow-lg p-8 text-gray-600 w-full">
                    <div className=''>
                        <form action="" className="flex flex-col space-y-4 w-full">
                            <div>
                            <div>
                                <label htmlFor="" className="text-sm">Full name</label>
                                <input type="text" placeholder='your name' name='name' ref={nameEl} className="ring-1 ring-gray-300 w-full rounded-md px-4 p-2 outline-none focus:ring-2 focus:ring-blue-300" />
                            </div>

                            <div>
                                <label htmlFor="" className="text-sm">Email address</label>
                                <input type="email" placeholder='your email' name='email' ref={emailEl} className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300" />
                            </div>
                            </div>

                            <div>
                            <div>
                                <label htmlFor="" className="text-sm">Company name</label>
                                <input type="email" placeholder='your company' name='company' ref={companyEl} className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300" />
                            </div>

                            <div>
                                <label htmlFor="" className="text-sm">Phone number</label>
                                <input type="email" placeholder='your phone number' name='phone' ref={phoneEl} className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300" />
                            </div>
                            </div>

                            <div>
                                <label htmlFor="" className="text-sm">Message</label>
                                <textarea name='message' ref={messageEl} className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300"></textarea>
                            </div>
                            {error && <p className="text-xs text-red-500">All fields are required.</p>}
                            <button 
                            type="button"
                            onClick={handlemessageSubmission}
                            className="transition duration-500 transform hover:-translate-y-1 inline-block self-end bg-[#E53B0F] text-sm rounded text-white px-2 py-1 cursor-pointer">
                                Send Message
                            </button>
                            {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">message sent</span>}

                        </form>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact