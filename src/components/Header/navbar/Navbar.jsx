import React, { useState } from 'react';
import globe from "./globe.png";

const Navbar = () => {

  const [dropDown, setDropdown] = useState(false);
  

  return (
    <nav>
      <div className="navbar pt-5 pb-6 pl-6 pr-4 bg-base-100 border-4 border-transparent border-b-gray-400">
        <div className="navbar-start">
          <div className='flex justify-center items-center gap-1'>
            <img className='w-9 brightness-125' src={globe} alt="World Glove" />
            <h1 className='font-semibold text-3xl uppercase'>Counry<span className='text-[#00aeff]'>Flags</span><span className='lowercase'>.com</span></h1>
          </div>
        </div>
        <div className="navbar-end gap-2 hidden md:flex">

          <label className="input bg-gray-600 h-8">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow" placeholder="Search" />
          </label>

          <button className='text-[#00aeff]'><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        {/* Dropdown button */}
        <button onClick={() => setDropdown(!dropDown)} className='md:hidden navbar-end'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </button>
      </div>
      {/* dropdown menu */}
      <div className={`${dropDown ? 'flex' : 'hidden'} justify-center items-center gap-2 pt-5 z-10`}>
        <label className="input bg-gray-600 h-8">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search" />
        </label>

        <button className='text-[#00aeff]'><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </nav>
  );
};

export default Navbar;