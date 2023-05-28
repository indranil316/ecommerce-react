import React from 'react';
import Nav from './Nav';
import HeaderTop from './HeaderTop';
import PromoBanner from './PromoBanner';

function Header(props) {
  return (
    <>
      <PromoBanner/>
      <header 
        className="bg-white   shadow-none md:shadow-lg md:ring-2 md:ring-black md:ring-opacity-20"
        style={{
          boxShadow:'0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}  
      >
        <div className='max-w-screen-xl mx-auto'>
          <HeaderTop categories={props.categories} setSearchRule={props.setSearchRule}/>
          <Nav categories={props.categories} setSearchRule={props.setSearchRule}/>
        </div>
      </header>
    </>

  )
}

export default Header