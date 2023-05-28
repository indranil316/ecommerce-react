import React, {useState} from 'react';
import { useQueryClient, useQuery } from 'react-query';
import {useParams} from 'react-router-dom';

import { ProductImageSlider, ProductDetails, Recommendation, RecentlyViewed, MiniCart} from '../components/Product';
import { Breadcrumbs } from '../components/Search';
import { AppLoading } from '../components/Loaders';

import {queries, cartId} from '../constants';
import {Categories} from '../dummyApi'



function Product(props) {
  const [isMiniCartOpen, setMiniCartOpen] = useState(false);

  const openMiniCart = () => {
    setMiniCartOpen(true);
  }

  const closeMiniCart = () => {
    setMiniCartOpen(false);
  }

  const params = useParams();
  const queryClient = useQueryClient();

  const {isLoading, data, isError} = useQuery(queries.fetchProductById, async ()=>{
    return await Categories.getProductById(params.productId)
  });
  
  if(isLoading){
    return <AppLoading/>
  }
  if(isError){
    return <h1>Error 404! Cannot find product</h1>
  }
  const {productId, productName, productPrice, productImageLink} = data;

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem(cartId)) ?? [];
    cart.push(product);
    localStorage.setItem(cartId,JSON.stringify(cart));
    openMiniCart();
  } 
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
              productId={productId}
              name={productName}
              badge={{ color: 'bg-yellow-500', text: 'New' }}
              ratings={4}
              price={productPrice}
              colors={['#000', '#FFF', '#D8D8D8', '#2A2A2A']}
              sizes={['6', '7', '8', '9', '10']}
              image={productImageLink}
              addToCart = {addToCart}
              openMiniCart={openMiniCart}
            />
             {isMiniCartOpen && (
              <MiniCart
                onClose={closeMiniCart}
                itemCount={0}
                total={0}
              />
            )}
        </div>
        <Recommendation/>
        <RecentlyViewed/>
    </div>

  )
}

export default Product