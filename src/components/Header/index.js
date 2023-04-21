import React from 'react';
import Nav from './Nav';
import HeaderTop from './HeaderTop';

function Header() {
  return (
    <header className="bg-white">
        <HeaderTop/>
        <Nav/>
    </header>
  )
}

export default Header