import React from 'react'
import Items from './Items'
import {products, resources, company, support} from './Menus'

const FooterItems = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 px-5 py-16 text-center'>
        <Items Links={products} title="Products" />
        <Items Links={resources} title="Resources" />
        <Items Links={company} title="Company" />
        <Items Links={support} title="Support" />
    </div>
  )
}

export default FooterItems