import React from 'react'
import 'react-ionicons'
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa'

const SocialIcons = () => {
  return (
    <div className="text-[#E53B0F]">
          <a href='https://github.com/chidimmaNworah/kimmotech' target="_blank">
            <span className="p-1 cursor-pointer inline-flex items-center rounded-full bg-white mx-1.5 text-xl hover:text-gray-100 duration-300">
                <FaGithubSquare />
            </span>
          </a>
          <a href='https://www.linkedin.com/company/kimmotech/' target="_blank">
            <span className="p-1 cursor-pointer inline-flex items-center rounded-full bg-white mx-1.5 text-xl hover:text-gray-100 duration-300">
                <FaLinkedin />
            </span>
          </a>
          <a href='https://www.youtube.com/channel/UCAS5-1vY1utqRudf_qtZksQ' target="_blank">
            <span className="p-1 cursor-pointer inline-flex items-center rounded-full bg-white mx-1.5 text-xl hover:text-gray-100 duration-300">
                <FaYoutubeSquare />
            </span>
          </a>
          <a href='https://twitter.com/kimmotech' target="_blank">
            <span className="p-1 cursor-pointer inline-flex items-center rounded-full bg-white mx-1.5 text-xl hover:text-gray-100 duration-300">
                <FaTwitterSquare />
            </span>
          </a>
          <a href='https://www.instagram.com/kimmotech/' target="_blank">
            <span className="p-1 cursor-pointer inline-flex items-center rounded-full bg-white mx-1.5 text-xl hover:text-gray-100 duration-300">
                <FaInstagramSquare />
            </span>
          </a>
          <a href='https://www.facebook.com/Kimmotech-100529069435679/' target="_blank">
            <span className="p-1 cursor-pointer inline-flex items-center rounded-full bg-white mx-1.5 text-xl hover:text-gray-100 duration-300">
                <FaFacebookSquare />
            </span>
          </a>
    </div>
  )
}

export default SocialIcons