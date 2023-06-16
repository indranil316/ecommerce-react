import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProductById} from '../store/slice/product';
import { ProductImageSlider, ProductDetails, Recommendation, RecentlyViewed, MiniCart} from '../components/Product';
import { Breadcrumbs } from '../components/Search';
import { AppLoading } from '../components/Loaders';

import {queries, cartId} from '../constants';

function Product(props) {
  const dispatch = useDispatch();
  const state = useSelector(state=> state.product);
  const [productId, setProductId] = useState(null);
  const [isMiniCartOpen, setMiniCartOpen] = useState(false);
  const params = useParams();

  const openMiniCart = () => {
    setMiniCartOpen(true);
  }

  const closeMiniCart = () => {
    setMiniCartOpen(false);
  }


  useEffect(function(){
    if(params.productId){
      setProductId(params.productId);
    }
  },[params])

  useEffect(function(){
    dispatch(fetchProductById(productId))
  },[productId])
  
  const {isLoading, data, error} = state;

  if(isLoading){
    return <AppLoading/>
  }
  if(!data){
    return <h1>Error 404! Cannot find product</h1>
  }

  const {id, name, price, image, assets, variant_groups, related_products} = data;

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem(cartId)) ?? [];
    cart.push(product);
    localStorage.setItem(cartId,JSON.stringify(cart));
    openMiniCart();
  } 
  console.log(state)
  return (
    <div className='container mx-auto'>
        <Breadcrumbs links={['product','category']} className="mb-5"/>
        <div className='flex row'>
            <ProductImageSlider
                images={assets}
            />
            <ProductDetails
              productId={id}
              name={name}
              badge={{ color: 'bg-yellow-500', text: 'New' }}
              ratings={4}
              price={price.formatted}
              image={image.url}
              variant_groups={variant_groups}
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
        <Recommendation products={related_products}/>
        <RecentlyViewed products={related_products}/>
    </div>
  )
}

export default Product