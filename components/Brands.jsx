import React, {useState, useEffect} from 'react'
import { getBrands } from '../services' 
import Link from 'next/link';
import { Reviews} from '../sections'

const Brands = () => {const [brands, setBrands] = useState([]);

    useEffect(() => {
      getBrands()
        .then((newBrands) => setBrands(newBrands))
    }, [])

  return (
    <div className='w-full py-10 mb-20 bg-white'>
      <div className="text-center mx-10 text-black">
        <div>
          <h4 className="font-normal py-5 tracking-wide lg:text-5xl md:text-3xl">PARTNERS & CLIENTS</h4>
        </div>
              <div className="brands">
                {brands.map((brand) => (
                  <a key={brand.name} href={brand.slug} target="_blank">
                    <img
                    src={brand.brandPhoto.url} 
                    alt={brand.name}
                    className="object-fill h-full w-52" />
                    </a>
                ))}
                </div>
      </div>
    </div>
  )
}

export default Brands