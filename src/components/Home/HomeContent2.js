import React from 'react';
import { Link } from 'react-router-dom';

const HomeContent2 = () => {
  return (
    <div className="bg-[#F1F6F9] py-10">
      <div className="max-w-screen-lg mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-[#212A3E] text-2xl md:text-5xl font-bold mb-4 text-center">
          Introducing the new Ethnic Wear Collection.
        </h2>
        <p className="text-[#212A3E] mb-8 text-center md:text-left md:px-4 md:pr-0">
          Discover the vibrant allure of Ethnic Wear! Immerse yourself in a world of captivating colors, intricate designs, and timeless elegance. Our Ethnic Wear Collection is a testament to the rich heritage and cultural diversity that inspires us.
        </p>
        <div className="flex flex-col items-center md:flex-row md:justify-center">
          <Link
            to="/pride-collection"
            className="bg-[#212A3E] text-[#F1F6F9] hover:bg-blue-200 px-4 py-2 rounded-lg mb-4 md:mb-0 md:mr-4"
          >
            SEE THE LATEST ETHNIC WEAR
          </Link>
          <Link
            to="/new-arrivals"
            className="bg-[#394867] text-[#F1F6F9] hover:bg-blue-200 px-4 py-2 rounded-lg"
          >
            SHOP KIDS WEAR
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeContent2;
