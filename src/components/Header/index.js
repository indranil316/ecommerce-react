import React from 'react';
import Nav from './Nav';
import HeaderTop from './HeaderTop';
import PromoBanner from './PromoBanner';

function Header(props) {
  return (
    <>
      <PromoBanner/>
      <header className="bg-white  max-w-screen-xl mx-auto">
        <HeaderTop categories={props.categories} setSearchRule={props.setSearchRule}/>
        <Nav categories={props.categories} setSearchRule={props.setSearchRule}/>
      </header>
    </>

  )
}

export default Header