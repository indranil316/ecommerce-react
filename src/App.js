import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchCategories} from './store/slice/categories';

import './scss/index.scss';

import Home from './pages/Home';
import Search from './pages/Search';

import Header from './components/Header';
import {AppLoading} from './components/Loaders';


function App() {
  const [searchRule, setSearchRule] = useState('categoryId=11111')
  const dispath = useDispatch();
  const state = useSelector((state)=>state);
  console.log(state);

  useEffect(function(){
    dispath(fetchCategories());
  },[])

  const { isLoading, error, data} = state.categories;

  if(isLoading) return <AppLoading/>;
  if(error) return <div>error</div>;

  return (
    <BrowserRouter>
      <div id="app">
        <Header categories={data.categories} setSearchRule={setSearchRule}/>
        <main className='w-full'>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/shop/:category/:subcategory?' element={<Search searchRule={searchRule}/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App