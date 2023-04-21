import React from 'react';
import './App.scss';
import {BrowserRouter} from 'react-router-dom';

import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <Header/>
      </div>
    </BrowserRouter>
  )
}

export default App