import React, { useState } from 'react';
import logo from "./logo.png";
import { Search } from 'lucide-react';

const Navbar = () => {

  const [dropDown, setDropdown] = useState(false);


  return (
    <nav>
      <div className="navbar py-5 px-4">
        <div className="navbar-start">
          <div className='max-w-[315px] min-w-[280px]'>
            <a href="#">
              <img src={logo} alt="Logo" />
            </a>
          </div>
        </div>
        <div className="navbar-end gap-2 hidden md:flex">

          <label className="input shadow-sm focus-within:outline-[#3333] h-8">
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

          <Search className='text-[#3075f4] cursor-pointer' />

        </div>
        {/* Dropdown button */}
        <button onClick={() => setDropdown(!dropDown)} className='md:hidden navbar-end'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </button>
      </div>
      {/* dropdown menu */}
      <div className={`${dropDown ? 'flex' : 'hidden'} md:hidden justify-center items-center gap-2 pb-5 h-8`}>

        <label className="input shadow-sm focus-within:outline-[#3333] h-8">
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

          <Search className='text-[#3075f4] cursor-pointer' />

      </div>
    </nav>
  );
};

export default Navbar;