import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProductsByCategory, fetchProductsByQuery} from '../store/slice/products';
import { Skeleton } from '../components/Common'

import { Breadcrumbs, SearchProductCard, CategoryBanner, Filter } from '../components/Search';

function Search(props) {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state.products);
  const [searchedCategorySlug, setSearchedCategorySlug] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { category, subcategory } = useParams();
  const params = useParams();
  const [searchParams] = useSearchParams();
 
  useEffect(function(){
    if(Object.keys(params).length && params.category){
      setSearchedCategorySlug(params.category)
    }
    else if(searchParams.get("searchKey")){
      setSearchQuery(searchParams.get("searchKey"));
    }
  },[params,searchParams])

  useEffect(function(){
    dispatch(fetchProductsByCategory(searchedCategorySlug));
  },[searchedCategorySlug])

  useEffect(function(){
    dispatch(fetchProductsByQuery(searchQuery));
  },[searchQuery])

  const renderListItems = () => {
    if(state.isLoading === true || state.data===null){
      return [1,2,3,4,5,6].map(key=>{
        return(
          <Skeleton.Card key={key}/>
        )
      })
    }
    if(state.data.data.length===0){
      return <h1>Opps...No products</h1>
    }
    return state.data.data.map(item=>{
      return <SearchProductCard product={item} key={item.productId}/>
    })
  }

  return (
    <div className="bg-white px-[20px] max-w-screen-xl mx-auto">
      <Breadcrumbs links={[category,subcategory]}/>
      <CategoryBanner/>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className='flex w-full'>
            <Filter/>
            <div className="ml-5 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
              {renderListItems()}
            </div>
        </div>

      </div>
    </div>
  )
}

export default Search