import React, {useState, useEffect} from 'react'
import { getBrands } from '../services' 

const Brands = () => {const [brands, setBrands] = useState([]);

    useEffect(() => {
      getBrands()
        .then((newBrands) => setBrands(newBrands))
    }, [])

  return (
    <div className="container w-full mx-auto bg-gradient-to-t from-blue-100 text-[#001973] text-center rounded-t-lg py-10 mb-8">
            <h6 className="pb-1 ">We collaborate with brands and agencies to create memorable experiences.</h6>
            <h4 className="font-bold pb-3">Brands we have worked with along the way</h4>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 px-10 mb-1">
            {brands.map((brand) => (
                <img
                key={brand.name}
                src={brand.brandPhoto.url} 
                alt={brand.name}
                className="object-fill h-full w-full" />
            ))}
            </div>
        </div>
  )
}

export default Brands