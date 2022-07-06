import React from 'react'
import 'react-ionicons'

const SocialIcons = ({Icons}) => {
  return (
    <div className="text-blue-500">
        {Icons.map(icon=>(
          <a href={icon.link} target="_blank">
            <span key={icon.name} className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-blue-500 duration-300">
                <ion-icon name={icon.name}></ion-icon>
            </span>
          </a>
        ))}
    </div>
  )
}

export default SocialIcons