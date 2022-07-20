import React from 'react'
import Link from 'next/link'
import 'react-ionicons'

const Heading2 = () => {
  return (
    <div className="container w-full mx-auto rounded-lg lg:px-8 sm:px-1 font-serif">
        <div className="p-10 text-[#101035] text-center">
            <h3 className='mb-8 lg:text-xl text-md font-bold'>OUR</h3>
            <h1 className='mb-8 lg:text-5xl lg:font-black font-semibold text-2xl'>Core deliverables</h1>
            <p>Favourite tech solutions offers a wide range of Web development  solution services.
                Our services include web design, web development, mobile application development, 
                e-commerce solution, SEO more.
            </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-10 mx-2 lg:text-left text-center">
            <div className=''>
                <div className="text-[#101035] mb-2">
                <span className="p-2 inline-flex rounded-full border text-xl">
                    <ion-icon name="newspaper-outline"></ion-icon>
                </span>
                </div>
                <h1 className="text-[#101035] font-bold text-lg mb-1">Web Design</h1>
                <p className="text-[#101035] text-md mb-2">We work with clients to find out what is needed for your website</p>
            </div>
            <div>
                <div className="text-[#101035] mb-2">
                <span className="p-2 inline-flex items-center rounded-full border text-xl">
                    <ion-icon name="layers-outline"></ion-icon>
                </span>
                </div>
                <h1 className="text-[#101035] font-bold text-lg mb-1">Software Development</h1>
                <p className="text-[#101035] text-md mb-2">We offer software services for any kind of business or industry</p>
            </div>
            <div>
                <div className="text-[#101035] mb-2">
                <span className="p-2 inline-flex rounded-full border text-xl">
                    <ion-icon name="phone-portrait-outline"></ion-icon>
                </span>
                </div>
                <h1 className="text-[#101035] font-bold text-lg mb-1">Digital Marketing</h1>
                <p className="text-[#101035] text-md mb-2">We can target potential clients to your business locally and internationally</p>
            </div>
            <div>
                <div className="text-[#101035] mb-2">
                <span className="p-2 inline-flex rounded-full border text-xl">
                    <ion-icon name="search-outline"></ion-icon>
                </span>
                </div>
                <h1 className=" text-[#101035] font-bold text-lg mb-1">SEO Services</h1>
                <p className="text-[#101035] text-md mb-2">we can drive qualified traffic to your website and maximize ROI with SEO optimization</p>
            </div>
            <div>
                <div className="text-[#101035] mb-2">
                <span className="p-2 inline-flex rounded-full border text-xl">
                    <ion-icon name="bag-handle-outline"></ion-icon>
                </span>
                </div>
                <h1 className="text-[#101035] font-bold text-lg mb-1">E-Commerce</h1>
                <p className="text-[#101035] text-md mb-2">We can help you design and develop end-to-end e-commerce solutions</p>
            </div>
            <div>
                <div className="text-[#101035] mb-2">
                <span className="p-2 inline-flex rounded-full border text-xl">
                    <ion-icon name="server-outline"></ion-icon>
                </span>
                </div>
                <h1 className="text-[#101035] font-bold text-lg mb-1">Everything Business</h1>
                <p className="text-[#101035] text-md mb-2">We deliver maximum team support for your businesses, starting from proposals, through graphics, online integration, consultation, </p>
            </div>
        </div>
    </div>
  )
}

export default Heading2