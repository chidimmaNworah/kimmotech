import React from 'react'
import Link from 'next/link'
import { Heading3 } from '.'

const Heading2 = () => {
  return (
    <div className='container w-full mx-auto gradient-bg mt-20 mb-8'>
    <div className="max-w-4xl w-full mx-auto px-4">
      <div className="flex flex-col items-center text-center text-[#101035]">
        <h1 className="font-semibold text-2xl mb-4">Why Kimmotech</h1>
        <p className="text-normal texl-sm text-gray-400 mb-16">There's several reasons for over hundreds of individuals, teams and business owners choosing Kimmotech. Here's 3 of them.</p>
        <div className="grid grid-cols-3 gap-20 shadow-lg justify-items-center p-4">
          <div className='text-center'>
          <h1 className="text-3xl text-[#FF6300] font-bold" >144</h1>
          <p className="text-normal texl-sm text-gray-400">Happy clients</p>
          </div>
          <div className='text-center'>
          <h1 className="text-2xl text-[#FF6300] font-bold" >24/7</h1>
          <p className="text-normal texl-sm text-gray-400">Support</p>
          </div>
          <div className='text-center'>
          <h1 className="text-2xl text-[#FF6300] font-bold" >113</h1>
          <p className="text-normal texl-sm text-gray-400">Completed projects</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Heading2