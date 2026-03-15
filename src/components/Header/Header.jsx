import React from 'react';
import Navbar from './navbar/Navbar';
import SortNav from './Sort&navigation/SortNav';

const Header = () => {
  return (
    <header>
      <Navbar></Navbar>
      <SortNav></SortNav>
    </header>
  );
};

export default Header;