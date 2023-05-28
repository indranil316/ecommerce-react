import React, { lazy, Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import banner from '../../assets/images/banner2.jpg';

const LazyImage = lazy(() => import('../Common/LazyImage'));

function HomeContent1() {
  return (
    <section id="hero-content-1" className="relative">
      <Suspense fallback={<Skeleton height={700} />}>
        <LazyImage src={banner} alt="Fashion Trends" />
      </Suspense>
      <div className="absolute inset-0 flex items-center justify-center text-white text-center">
        <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>Shop the Latest Fashion Trends</h1>
          <p className="text-lg md:text-xl mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>Discover our wide selection of clothing and accessories for men and women. From casual wear to formal attire, we've got you covered.</p>
          <Link to="/" className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-200 uppercase font-bold">Shop Now</Link>
        </div>
      </div>
    </section>
  );
}

export default HomeContent1;
