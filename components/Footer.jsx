import React from 'react'
import FooterItems from './FooterItems'
import SocialIcons from './SocialIcons'
import {Icons} from './Menus'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600">
        <FooterItems />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
            <span>© 2022 Appy. All rights reserved.</span>
            <span>Terms . Privacy Policy</span>
            <SocialIcons Icons ={Icons} />
        </div>
    </footer>
  )
}

export default Footer