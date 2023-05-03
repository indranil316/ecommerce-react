import React from 'react';
import plpBanner from '../../assets/images/plp-banner.jpg';

function CategoryBanner() {
  return (
    <div className="bg-white border my-5">
        <div className="mx-auto  md:flex md:justify-between md:items-center">
            <div className="md:w-1/2">
                <img src={plpBanner} alt="Product image" className="object-cover w-full h-full"/>
            </div>
            <div className="md:w-1/2 md:text-center p-12">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Browse Our Products</h1>
                <p className="text-lg text-gray-600">Find the perfect product for you from our wide selection of items.</p>
            </div>
        </div>
    </div>
  )
}

export default CategoryBanner