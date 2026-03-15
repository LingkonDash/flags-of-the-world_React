import React from 'react';
import globe from "../assets/globe.png";

const Navbar = () => {
  return (
    <div className=''>
      <div className=''>
        <img width='40px' src={globe} alt="Globe of world" />
        <h1 className='navbarText'>Country<span className='text-4xl'>flags</span><span className='com'>.com</span></h1>
      </div>
      <div className='btn btn-primary'>
        <input type="text" />
        <span className='text-4xl'><i class="fa-solid fa-magnifying-glass"></i></span>
      </div>
    </div>
  );
};

export default Navbar;