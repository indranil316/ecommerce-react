import React from 'react';
import CustomSlider from '../Common/CustomSlider';

const RecentlyViewed = ({products}) => {

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-10 mt-[45px] text-center">Recently Viewed</h2>
      <CustomSlider items={products} />
    </div>
  );
};

export default RecentlyViewed;
