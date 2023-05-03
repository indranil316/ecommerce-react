import React, { useEffect, useState } from 'react';
import './scss/index.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { Categories } from './dummyApi';

import Home from './pages/Home';
import Search from './pages/Search';

import Header from './components/Header';
import {AppLoading} from './components/Loaders';

function App() {
  const [categories,setCategories] = useState([]);
  const [appLoading, setAppLoading] = useState(false);
  const [searchRule, setSearchRule] = useState('categoryId=11111')

  useEffect(function(){
    setAppLoading(true);
    Categories.getCategories()
    .then(res=>{
      setCategories(res.categories);
      setAppLoading(false);
    })
    .catch(err=>{
      console.error(err)
      setAppLoading(false);
    })
  },[]);

  
  return (
    <BrowserRouter>
      {
        !appLoading?(
          <div id="app">
            <Header categories={categories} setSearchRule={setSearchRule}/>
            <main className='w-full'>
              <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/shop/:category/:subcategory?' element={<Search searchRule={searchRule}/>}/>
              </Routes>
            </main>
          </div>
        ):<AppLoading/>
      }
    </BrowserRouter>
  )
}

export default App