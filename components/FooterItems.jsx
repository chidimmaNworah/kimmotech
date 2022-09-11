import React from 'react'
import Items from './Items'
import {products, resources, company, support} from './Menus'

const FooterItems = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:pr-2 justify-items-center gap-6 text-[#E53B0F] px-5 pb-8 pt-16 items-center text-center text-2xl'>
        <Items Links={products} title="Products" />
        <Items Links={resources} title="Resources" />
        <Items Links={company} title="Company" />
        <Items Links={support} title="Support" />
    </div>
  )
}

export default FooterItems