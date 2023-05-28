import React from 'react';
import CustomSlider from '../Common/CustomSlider';

const Recommendation = () => {
    const products = [
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
        {
          id: 6,
          name: 'Product 6',
          price: 49.99,
          image: 'https://picsum.photos/200/300?random=6',
        },
        {
          id: 7,
          name: 'Product 7',
          price: 24.99,
          image: 'https://picsum.photos/200/300?random=7',
        },
        {
          id: 8,
          name: 'Product 8',
          price: 34.99,
          image: 'https://picsum.photos/200/300?random=8',
        },
        {
          id: 9,
          name: 'Product 9',
          price: 17.99,
          image: 'https://picsum.photos/200/300?random=9',
        },
        {
          id: 10,
          name: 'Product 10',
          price: 54.99,
          image: 'https://picsum.photos/200/300?random=10',
        },
      ];
      

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-10 mt-[45px] text-center">Product Recommendations</h2>
      <CustomSlider items={products} />
    </div>
  );
};

export default Recommendation;
