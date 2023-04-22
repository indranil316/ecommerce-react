import React, { useEffect, useState } from 'react';
import './scss/index.scss';
import {BrowserRouter} from 'react-router-dom';

import { Categories } from './dummyApi'

import Header from './components/Header';
import {AppLoading} from './components/Loaders';

function App() {
  const [categories,setCategories] = useState([]);
  const [appLoading, setAppLoading] = useState(false);

  useEffect(function(){
    setAppLoading(true);
    Categories.get()
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
            <Header categories={categories}/>
          </div>
        ):<AppLoading/>
      }
    </BrowserRouter>
  )
}

export default App