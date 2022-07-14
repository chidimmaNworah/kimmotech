import React from 'react'
import Link from 'next/link'

const Heading2 = () => {
  return (
    <div className='w-full mx-0 bg-[#fafafa] mt-20'>
    <div className="container w-full mx-auto px-4">
      <div className="flex mb-20 items-end text-[#4D4D4D] font-serif">
        <div className="flex items-center">
          <div className="mr-5 py-5">
            <h5 className="text-lg mb-4 font-bold">
              WE CREATE SOLUTIONS
            </h5>
            <h2 className="text-4xl mb-3 font-bold text-[#001973]">
              Creating a digital interface for your business can be overwhelming
            </h2>
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
              <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-[#001973] text-lg font-meduim rounded text-white px-2 py-1 cursor-pointer">
                  Discover more
              </span>
              </Link>
        </div>
          </div>
        
          <img src="laptop.jpg" alt="fts" className="heading2"/>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Heading2