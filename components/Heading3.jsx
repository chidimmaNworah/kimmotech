import React from 'react'
import Link from 'next/link'
import 'react-ionicons'
import {heading3DetailsSolutions, heading3DetailsTechnology, heading3DetailsServiceDelivery} from './Menus'

const Heading2 = () => {
  return (
    <div className='w-full mx-0 bg-[#002438] mt-20 pb-20 snap-mandatory snap-y'>
        <h1 className='snap-center font-normal pt-20 tracking-wide lg:text-5xl md:text-3xl text-center text-white mb-20'>EXTENSIVE BUSINESS, TECHNICAL, <br/> AND PROCESS <span className='text-[#D72A06]'>EXPERTISE</span></h1>
        <h1 className='snap-center font-normal py-4 tracking-wide text-2xl text-center text-gray-400 mb-10'>TECHNOLOGY</h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-8 px-8 mb-20">
        {heading3DetailsTechnology.map(detail => (
        <div key={detail.heading} className=''>
            <div className="h-full outline outline-[#D72A06] py-8 px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-sm duration-300">
                <div className="text-white">
                    <div className="mb-2">
                    <span className="p-2 inline-flex items-center rounded-full border text-xl">
                        <ion-icon name="layers-outline"></ion-icon>
                    </span>
                    </div>
                    <h1 className="font-normal text-lg mb-1">{detail.heading}</h1>
                    <hr className='text-[#D72A06] w-36' />
                    <p className="text-md mb-2">{detail.paragraph}</p>
                </div>
            </div>
        </div>
        ))}
    </div>

    <h1 className='snap-center font-normal py-4 tracking-wide text-2xl text-center text-gray-400 mb-20'>SOLUTIONS</h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-8 px-8 mb-20">
        {heading3DetailsSolutions.map(detail => (
        <div key={detail.heading} className=''>
            <div className="h-full outline outline-[#D72A06] py-8 px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-sm duration-300">
                <div className="text-white">
                    <div className="mb-2">
                    <span className="p-2 inline-flex items-center rounded-full border text-xl">
                    <ion-icon name="newspaper-outline"></ion-icon>
                    </span>
                    </div>
                    <h1 className="font-normal text-lg mb-1">{detail.heading}</h1>
                    <hr className='text-[#D72A06] w-36' />
                    <p className="text-md mb-2">{detail.paragraph}</p>
                </div>
            </div>
        </div>
        ))}
    </div>

    <h1 className='snap-center font-normal py-4 tracking-wide text-2xl text-center text-gray-400 mb-20'>SERVICE DELIVERY </h1>
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 mx-8 px-8 mb-20">
        {heading3DetailsServiceDelivery.map(detail => (
        <div key={detail.heading} className=''>
            <div className="h-full outline outline-[#D72A06] py-8 px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-sm duration-300">
                <div className="text-white">
                    <div className="mb-2">
                    <span className="p-2 inline-flex items-center rounded-full border text-xl">
                    <ion-icon name="newspaper-outline"></ion-icon>
                    </span>
                    </div>
                    <h1 className="font-normal text-lg mb-1">{detail.heading}</h1>
                    <hr className='text-[#D72A06] w-36' />
                    <p className="text-md mb-2">{detail.paragraph}</p>
                </div>
            </div>
        </div>
        ))}
    </div>
    </div>
  )
}

export default Heading2