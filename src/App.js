import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchCategories} from './store/slice/categories';

import './scss/index.scss';

import Home from './pages/Home';
import Search from './pages/Search';
import Product from './pages/Product';
import Cart from './pages/Cart';

import Header from './components/Header';
import Footer from './components/Footer';
import {AppLoading} from './components/Loaders';



function App() {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state);

  useEffect(function(){
    dispatch(fetchCategories());
  },[])
   const { isLoading, error, data} = state.categories;

  if(isLoading) return <AppLoading/>;
  if(error) return <div>error</div>;

  return (
    <BrowserRouter>
      <div id="app">
        <Header categories={data}/>
        <main className='w-full'>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/shop/:category/:subcategory?' element={<Search/>}/>
            <Route path='/shop' element={<Search/>}/>
            <Route path='/product/:productId' element={<Product/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App