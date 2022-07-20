import React from 'react'
import FooterItems from './FooterItems'
import SocialIcons from './SocialIcons'
import {Icons} from './Menus'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 container w-full mx-auto">
      <FooterItems />
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center px-5 text-center pt-2 text-gray-400 text-sm pb-8">
            <span className=""><img src="/logo.png" alt="logo" width="100rem" className='pl-5' /></span>
            <span>© 2022 Appy. All rights reserved.</span>
            <span>Terms . Privacy Policy</span>
            <SocialIcons Icons ={Icons} />
        </div>
    </footer>
  )
}

export default Footer