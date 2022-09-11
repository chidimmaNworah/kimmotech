import React, {useState, useRef} from 'react'
import 'react-ionicons'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import {submitMessage} from '../services'

const contact = () => {

    const [error, setError] = useState(false)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const messageEl = useRef()
    const nameEl = useRef()
    const emailEl = useRef()
  
    const handlemessageSubmission = () => {
      setError(false)
  
      const {value: message} = messageEl.current
      const {value: name} = nameEl.current
      const {value: email} = emailEl.current
  
      if(!message || !name || !email ){
        setError(true)
        return
      }
  
      const messageObj = {name, email, message}
  
      submitMessage(messageObj)
        .then((res) =>{
          setShowSuccessMessage(true)
          setTimeout(()=>{
            setShowSuccessMessage(false)
          }, 3000)
        })
    }

  return (
      <div className='container w-full mx-auto z-10'>
    <div className="flex w-full pt-20 justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-[#020024] w-full max-x-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white">
            <div className="flex flex-col space-y-6 justify-between">
                <div>
                    <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
                    <p className="pt-2 text-gray-300 text-sm">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quos sapiente molestiae optio aliquid aspernatur deserunt blanditiis repellat dolores. Omnis veritatis dolorem quidem ad dolore quod repellendus alias exercitationem saepe.
                    </p>
                </div>
                <div className='flex flex-col space-y-4'>
                    <a href='https://wa.me/message/UW7HLNBIYP6WH1' target="_blank" className="inline-flex space-x-2 items-center no-underline cursor-pointer text-white">
                        <span>Whatsapp</span>
                    </a>
                    <a href="https://t.me/kimmotech" target="_blank" className="inline-flex space-x-2 items-center no-underline cursor-pointer text-white">
                        <span>Telegram</span>
                    </a>
                    <a href="mailto: chidimmanworah12@gmail.com" target="_blank" className="inline-flex space-x-2 items-center no-underline cursor-pointer text-white">
                        <span>Email Us</span>
                    </a>
                    <div><div className="inline-flex space-x-2 items-center no-underline cursor-pointer text-white">
                        <span>FCT, Nigeria</span>
                    </div></div>
                </div>
            </div>
            <div>
                <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
                        <form action="" className="flex flex-col space-y-4">
                            <div>
                                <label for="" className="text-sm">Your name</label>
                            </div>
                            <div>
                                <input type="text" placeholder='your name' name='name' ref={nameEl} className="ring-1 ring-gray-300 w-full rounded-md px-4 p-2 outline-none focus:ring-2 focus:ring-blue-300" />
                            </div>
                            <div>
                                <label for="" className="text-sm">Your email</label>
                            </div>
                            <div>
                                <input type="email" placeholder='your email' name='email' ref={emailEl} className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300" />
                            </div>
                            <div>
                                <label for="" className="text-sm">Message</label>
                                <textarea name='message' ref={messageEl} className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300"></textarea>
                            </div>
                            {error && <p className="text-xs text-red-500">All fields are required.</p>}
                            <button 
                            type="button"
                            onClick={handlemessageSubmission}
                            className="transition duration-500 transform hover:-translate-y-1 inline-block self-end outline outline-[#020024] text-sm rounded text-[#020024] px-2 py-1 cursor-pointer">
                                Send Message
                            </button>
                            {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">message sent</span>}

                        </form>
                    </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default contact