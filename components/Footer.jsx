import React from 'react'
import FooterItems from './FooterItems'
import SocialIcons from './SocialIcons'

const Footer = () => {
  return (
    <footer className="bg-[#002438] text-gray-600 w-full mx-auto pb-20">
      <FooterItems />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center px-5 text-center pt-2 text-white text-sm pb-8">
            <span className=""><img src="/logo.png" alt="logo" width="300rem" className='pl-5' /></span>
            <span>© 2022 Appy. All rights reserved.</span>
            <span>Terms . Privacy Policy</span>
            <SocialIcons/>
        </div>
    </footer>
  )
}

export default Footer