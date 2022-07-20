import React from 'react'

const Items = ({Links, title}) => {
  return (
    <ul className='pl-0 ml-0'>
        <h1 className='mb-1 font-semibold'>{title}</h1>
        {
            Links.map((link)=>(
                <li key={link.name} className=''>
                    <a className='text-gray-400 hover:text-blue-400 duration-300 text-sm cursor-pointer leading-6 no-underline align-middle' 
                    href={link.link}>{link.name}</a>
                </li>
            ))
        }
    </ul>
  )
}

export default Items