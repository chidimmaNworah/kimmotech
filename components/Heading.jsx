import React from 'react'
import Link from 'next/link'
import {mainDetails} from './Menus'

const Heading2 = () => {
  return (
    <main>
      {mainDetails.map(detail => (
        <div key={detail.heading} className="card">  
          <div className='done'>
            <div className='pl-2'>
              <h5 className='font-normal text-[#E54416] mb-1 text-lg'>{detail.heading}</h5>
              <ul>{detail.list.map(listItems=>(
                <li key={detail.heading + listItems} className='text-sm'>{listItems}</li>
              ))}
              </ul>
            </div>
          </div>
      </div>
      ))}
      
      
    </main>
  )
}

export default Heading2