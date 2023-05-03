import React from 'react';
import {Link} from 'react-router-dom';

function HomeContent1() {
  return (
  <section id="hero-content-1" className="relative bg-cover bg-left h-screen bg-home-banner-1">
    <div className="absolute top-1/2 left-[5%] w-[280px] md:w-[480px]">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop the Latest Fashion Trends</h1>
      <p className="text-lg md:text-xl mb-8">Discover our wide selection of clothing and accessories for men and women. From casual wear to formal attire, we've got you covered.</p>
      <Link to="/" className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-200 uppercase text-bold">Shop Now</Link>
    </div>
  </section>
  )
}

export default HomeContent1