import React from 'react';
import Nav from './Nav';
import HeaderTop from './HeaderTop';

function Header(props) {
  return (
    <header className="bg-white">
        <HeaderTop/>
        <Nav categories={props.categories}/>
    </header>
  )
}

export default Header