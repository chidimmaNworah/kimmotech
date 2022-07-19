import React, {useState, useEffect} from 'react'
import { getBrands } from '../services' 
import Link from 'next/link';

const Brands = () => {const [brands, setBrands] = useState([]);

    useEffect(() => {
      getBrands()
        .then((newBrands) => setBrands(newBrands))
    }, [])

  return (
    <div className="container w-full mx-auto bg-[white] shadow-lg text-center text-[#020024] rounded-t-lg py-10 mb-20">
            <h6 className="pb-1">We collaborate with brands and agencies to create memorable experiences.</h6>
            <h4 className="font-bold pb-3">Brands we have worked with along the way</h4>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 px-10 mb-1">
            
            {brands.map((brand) => (
              <a key={brand.name} href={brand.slug} target="_blank">
                <img
                src={brand.brandPhoto.url} 
                alt={brand.name}
                className="object-fill h-full w-full border border-gray-200" />
                </a>
            ))}
            </div>
        </div>
  )
}

export default Brands