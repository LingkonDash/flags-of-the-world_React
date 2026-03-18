import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import SearchBar from './SearchBar';
import { X } from 'lucide-react';
import Navigations from './Navigations';

const Navbar = () => {

  const [dropDown, setDropdown] = useState(false);

  const [dropDownNav, setDropdownNav] = useState(false);


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

        <div className="navbar-end hidden md:flex justify-between items-center gap-10">
          <SearchBar></SearchBar>

          <div className='pr-4 hidden xl:flex'>
            <Navigations ulStyle={'flex justify-between items-center gap-10 text-xl font-medium [&_li]:border-4 [&_li]:border-transparent'}></Navigations>
          </div>

          <div className='hidden md:flex xl:hidden navbar-end'>
            <button onClick={() => setDropdownNav(!dropDownNav)} className={`btn bg-base-300 shadow-none cursor-pointer py-1 px-3 rounded-full border-4 border-transparent hover:border-[#3075f469] ${dropDownNav ? 'border-[#3075f469]' : ''}`}>
              {
                dropDownNav
                  ? <X width={'20px'}></X>
                  : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              }

            </button>

            <div className={`absolute top-0 right-5 w-fit bg-base-300 hidden md:flex xl:hidden justify-center items-center pb-5 pl-5 pt-1 transition-transform duration-300 -z-10 shadow-xl rounded-b-lg border-4 text-center border-[#3075f469]
                    ${dropDownNav ? 'translate-y-[65px]' : ' -translate-y-[500px] pointer-events-none'}`}>


              <div className='pr-4'>
                <Navigations ulStyle={'flex flex-col justify-between items-center gap-10 text-xl font-medium [&_li]:border-4 [&_li]:border-transparent'}></Navigations>
              </div>
            </div>

          </div>

        </div>

        {/* Dropdown button */}
        <div className='md:hidden navbar-end'>
          <button onClick={() => setDropdown(!dropDown)} className={`btn bg-base-300 shadow-none cursor-pointer py-1 px-3 rounded-full border-4 border-transparent ${dropDown ? 'border-[#3075f469]' : ''}`}>
            {
              dropDown
                ? <X width={'20px'}></X>
                : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            }

          </button>
        </div>

      </div>

      {/* dropdown menu */}
      <div className={`absolute top-0 left-0 w-full flex flex-col bg-base-300 md:hidden justify-center items-center pb-5 pt-1 transition-transform duration-300 -z-10
                    ${dropDown ? 'translate-y-[65px]' : ' -translate-y-20 pointer-events-none'}`}>

        <SearchBar></SearchBar>

        <div className='pr-4 md:hidden mt-5'>
            <Navigations ulStyle={'flex justify-between items-center gap-10 text-xl font-medium [&_li]:border-4 [&_li]:border-transparent'}></Navigations>
          </div>
      </div>

    </nav>
  );
};

export default Navbar;