import React from 'react';
import {Link} from 'react-router-dom';

function PromoBanner() {
  return (
    <div className="bg-black">
        <div className="container mx-auto px-4 py-3 md:flex md:justify-center md:items-center">
            <p className="text-sm text-white">Free shipping on orders over $50</p>
            <Link to="/" className="text-sm text-white underline md:text-base hover:no-underline md:ml-4">Learn More</Link>
        </div>
    </div>
  )
}

export default PromoBanner