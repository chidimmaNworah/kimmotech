import React from 'react'
import Link from 'next/link'
import { Heading3 } from '.'

const Heading2 = () => {
  return (
    <div className='w-full mx-0 gradient-bg mt-20 mb-8'>
    <div className="container w-full mx-auto px-4">
      <div className="flex items-end text-[#101035] font-serif">
        <div className="flex items-center">
          <div className="pt-16 text-center">
            <h5 className="heading_three_text_1 text-1xl mb-4 font-bold">
              WE CREATE SOLUTIONS
            </h5>
            <h2 className="heading_three_text text-4xl mb-3 font-black">CREATING A DIGITAL INTERFACE FOR YOUR BUSINESS CAN BE OVERWHELMING</h2>
            <br />
            <br />
            <p className="text-xl mb-4">
            Because of this, it can be helpful to see some examples of what other people are doing. That way, when you create or even update your website or graphics, you will have some ideas of what to do to ensure that your design does not look or sound like it is from 1995.
            <br />
            <br />
            That is why we created this resource. It is a portfolio of all our track records from around the world. In addition to showcasing the gallery, each design also includes an explanation of what it is all about with links to were you can find more.
            <br />
            We hope we are able to give you the inspiration you need to make your decision. When you are ready, you can <a href='/about' style={{textDecoration: 'none'}}>contact us</a> and let us know of anything, which we will happily help you get it done quickly and easily.          
            <br />
            <br />
            </p>
            <div className="">
              <Link href='/portfolio'>
              <span className="transition duration-500 transform hover:-translate-y-1 inline-block outline outline-white text-lg font-meduim rounded text-white px-2 py-1 cursor-pointer">
                  Discover more
              </span>
              </Link>
        </div>
          </div>
        </div>
      </div>
      <hr className='text-[#101035] mb-10'/>
    </div>
    
    <Heading3 />
    </div>
  )
}

export default Heading2