import React from 'react'
import Link from 'next/link'

const Heading2 = () => {
  return (
    <div className='w-full mx-0 bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url('header1.png')` }} >
    <div className="container w-full mx-auto px-4">
      <div className="flex mb-8 items-center text-black font-serif">
        <div className="flex items-center">
          <div className="py-5 text-center">
            <h5 className="text-2xl mb-4 font-bold">
              WE SOLVE PROBLEMS
            </h5>
            <h2 className="text-5xl mb-3 font-serif font-black text-[#101035]">
              WE ARE A CREATIVE DIGITAL AGENCY
            </h2>
            <br />
            <br />
            <h5 className="text-lg mb-4 font-bold">
              -Our Vision
            </h5>
            <p className="text-xl mb-4">
            Our vision is to make the sophisticated simple. 
            <br />
            Our supreme aim is to introduce simplified solutions to the sophisticated part of your business using the best digital tools with the right approaches.          
            <br />
            <br />
            </p>
            <div className="">
              <Link href='/contact'>
              <span className="transition duration-500 transform hover:-translate-y-1 inline-block outline outline-[#101035] text-lg font-meduim rounded text-[#101035] px-2 py-1 cursor-pointer">
                  Contact Us
              </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Heading2