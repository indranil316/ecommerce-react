import React from 'react';
import Accordion from './Accordian';

function Filter() {

  const handleClearFilters = () => {
    console.log("Clearing filters...");
  };

  return (
    <div class="hidden md:block">
      <div className="flex justify-between items-center">
        <span className="text-lg font-medium text-gray-700">Filter by</span>
        <button
          onClick={handleClearFilters}
          className="bg-white text-gray-700 py-2 px-4 rounded-md shadow hover:bg-gray-100 transition-colors"
        >
          Clear Filters
        </button>
      </div>
      <hr className="my-2 border-gray-300" />
      <Accordion name="Sizes" options={[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10]}/>
      <hr className="my-2 border-gray-300" />
      <Accordion name="Width" options={['S','M','L','XL','XXL','XXXL']}/>
    </div>
  )
}

export default Filter