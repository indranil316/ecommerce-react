import React, { useEffect, useState } from 'react';
import CustomSlider from '../Common/CustomSlider';
import { getRecentlyViewedAsync } from '../../libs';

const RecentlyViewed = ({productId}) => {
  const [products, setProducts] = useState([]);

  useEffect(function(){
    getRecentlyViewedAsync(productId)
    .then(data=>{
      setProducts(data);
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

  if(products.length===0){
    return null;
  }
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-10 mt-[45px] text-center">Recently Viewed</h2>
      <CustomSlider items={products} />
    </div>
  );
};

export default RecentlyViewed;
