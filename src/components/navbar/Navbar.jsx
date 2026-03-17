import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import SearchBar from './SearchBar';

const Navbar = () => {

  const [dropDown, setDropdown] = useState(false);


  return (
    <nav className='max-w-[1600px] mx-auto'>

      <div className="navbar pt-5 pb-2 px-4 bg-base-300">

        <div className="navbar-start">
          <div className='md:w-[315px] w-[281px] min-w-[281px]'>
            <a href="#">
              <img src={logo} alt="Logo" />
            </a>
          </div>
        </div>

        <div className="navbar-end gap-2 hidden md:flex">
          <SearchBar></SearchBar>
        </div>

        {/* Dropdown button */}
        <button onClick={() => setDropdown(!dropDown)} className='md:hidden navbar-end'>
          <div className='btn bg-base-300 shadow-none cursor-pointer py-1 px-3 rounded-full border-4 border-transparent hover:border-[#3075f469]'>
            {
              dropDown 
              ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3b3b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            }
            
          </div>
        </button>

      </div>

      {/* dropdown menu */}
      <div className={`absolute top-0 left-0 w-full flex bg-base-300 md:hidden justify-center items-center gap-2 pb-5 pt-1 transition-all duration-300 -z-10
                    ${dropDown ? 'translate-y-[65px]' : ' -translate-y-5 pointer-events-none'}`}>

        <SearchBar></SearchBar>
      </div>

    </nav>
  );
};

export default Navbar;