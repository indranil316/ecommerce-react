import React from 'react';
import { ProductImageSlider, ProductDetails, Recommendation, RecentlyViewed } from '../components/Product';
import { Breadcrumbs } from '../components/Search';

function Product() {
  return (
    <div className='container mx-auto'>
        <Breadcrumbs links={['product','category']} className="mb-5"/>
        <div className='flex row'>
            <ProductImageSlider
                images={[
                    'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    'https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=1600',
                    'https://images.pexels.com/photos/247769/pexels-photo-247769.jpeg?auto=compress&cs=tinysrgb&w=1600',
                ]}
            />
            <ProductDetails
            name="Nike Air Max 90"
            badge={{ color: 'bg-yellow-500', text: 'New' }}
            ratings={4}
            price={129.99}
            colors={['#000', '#FFF', '#D8D8D8', '#2A2A2A']}
            sizes={['6', '7', '8', '9', '10']}
            />
        </div>
        <Recommendation/>
        <RecentlyViewed/>
    </div>

  )
}

export default Product