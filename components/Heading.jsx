import React from 'react'
import Link from 'next/link'

const Heading2 = () => {
  return (
    <div className='w-full mx-0'>
    <div className="container w-full mx-auto px-4">
      <div className="flex mb-40 items-end text-[#4D4D4D] font-serif">
        <div className="flex items-center">

        <img src="done.png" alt="fts" className="heading1"/>
          <div className="ml-5 py-5 text-right">
            <h5 className="text-lg mb-4 font-bold">
              WE SOLVE PROBLEMS
            </h5>
            <h2 className="text-3xl mb-4 font-bold">
              We are a creative digital agency
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
              <Link href=''>
              <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-[#4D4D4D] text-lg font-meduim rounded text-white px-4 py-3 cursor-pointer">
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