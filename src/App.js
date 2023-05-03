import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useQuery } from 'react-query';

import './scss/index.scss';

import { Categories } from './dummyApi';

import Home from './pages/Home';
import Search from './pages/Search';

import Header from './components/Header';
import {AppLoading} from './components/Loaders';

import {queries} from './constants';


function App() {
  const [searchRule, setSearchRule] = useState('categoryId=11111')

  const { isLoading, error, data} = useQuery(queries.fetchCategories,()=>{
    return Categories.getCategories()
  })

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