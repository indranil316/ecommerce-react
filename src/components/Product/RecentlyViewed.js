import React from 'react';
import CustomSlider from '../Common/CustomSlider';

const RecentlyViewed = () => {
  const recentlyViewedProducts = [
    {
        id: 1,
        name: 'Product 1',
        price: 19.99,
        image: 'https://picsum.photos/200/300?random=1',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 29.99,
        image: 'https://picsum.photos/200/300?random=2',
      },
      {
        id: 3,
        name: 'Product 3',
        price: 14.99,
        image: 'https://picsum.photos/200/300?random=3',
      },
      {
        id: 4,
        name: 'Product 4',
        price: 39.99,
        image: 'https://picsum.photos/200/300?random=4',
      },
      {
        id: 5,
        name: 'Product 5',
        price: 9.99,
        image: 'https://picsum.photos/200/300?random=5',
      },
    // ...add more recently viewed products as needed
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-10 mt-[45px] text-center">Recently Viewed</h2>
      <CustomSlider items={recentlyViewedProducts} />
    </div>
  );
};

export default RecentlyViewed;
