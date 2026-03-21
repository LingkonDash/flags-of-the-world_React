import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import SearchBar from './SearchBar';
import { X } from 'lucide-react';
import Navigations from './Navigations';

const Navbar = ({ searchAction, searchData, showSearch, searchClickHandler, searchBTNClickHandler }) => {

  const [dropDown, setDropdown] = useState(false);

  const [dropDownNav, setDropdownNav] = useState(false);

  // Md dropDown handler 
  function dropdownHandler() {

    setDropdown(!dropDown);

    searchClickHandler(true);

  }


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
          <SearchBar searchAction={searchAction} searchBTNClickHandler={searchBTNClickHandler} ></SearchBar>

          <div className='pr-4 hidden xl:flex'>
            <Navigations ulStyle={'flex justify-between items-center gap-10 text-xl font-medium [&_li]:border-4 [&_li]:border-transparent'}></Navigations>
          </div>

          <div className='hidden md:flex xl:hidden navbar-end'>

            {/* Md dropdown btn  */}
            <button onClick={() => setDropdownNav(!dropDownNav)} className={`btn bg-base-300 shadow-none cursor-pointer py-1 px-3 rounded-full border-4 hover:border-[#3075f469] ${dropDownNav ? 'border-[#3075f469]' : 'border-transparent'}`}>
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
          <button onClick={() => dropdownHandler()} className={`btn bg-base-300 shadow-none cursor-pointer py-1 px-3 rounded-full border-4 ${dropDown ? 'border-[#3075f469]' : 'border-transparent'}`}>
            {
              dropDown
                ? <X width={'20px'}></X>
                : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            }

          </button>
        </div>

      </div>

      {/* dropdown menu */}
      <div className={`absolute top-0 left-1/2 w-[357px] -translate-x-1/2 flex border-4 border-t-transparent px-5 rounded-b-xl border-blue-300 flex-col bg-base-300 md:hidden justify-center items-center pb-5 pt-1 transition-transform duration-300 -z-10
                    ${dropDown ? 'translate-y-[65px]' : ' -translate-y-20 pointer-events-none'}`}>

        <SearchBar searchAction={searchAction} searchBTNClickHandler={searchBTNClickHandler}></SearchBar>

        <div className='pr-4 md:hidden mt-5'>
          <Navigations ulStyle={'flex justify-between items-center gap-10 text-lg font-medium [&_li]:border-4 [&_li]:border-transparent'}></Navigations>
        </div>
      </div>

      {/* Search action */}
      <div className={`absolute left-1/2 top-0 -translate-x-1/2 lg:w-[650px] xl:w-[750px] w-[357px] md:w-[450px] bg-base-300 rounded-b-xl border-4 border-blue-300 border-t-0 shadow-lg flex-col p-5 transition-transform duration-300 -z-10 translate-y-[130px] md:translate-y-[65px] max-h-64 overflow-y-auto space-y-2
        ${showSearch ? 'flex' : 'hidden'}`}>

        {
          searchData?.length > 0 ? (
            searchData.map(obj => (
              <div
                onClick={() => searchBTNClickHandler(obj?.cca3?.cca3)}
                key={obj?.cca3?.cca3}
                className="flex items-center gap-3 px-4 py-2 hover:bg-blue-200 bg-base-200 cursor-pointer transition-colors duration-150 rounded-md"
              >
                {/* Flag */}
                <img
                  src={obj?.flags?.flags?.png}
                  alt={obj?.name?.common}
                  className="w-7 h-6 object-cover rounded-sm"
                />

                {/* Country Info */}
                <div className="flex flex-col leading-tight">
                  <h2 className="text-sm font-medium">
                    {obj?.name?.common}
                  </h2>
                  <p className="text-xs opacity-60">
                    {obj?.region?.region}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center gap-3 px-4 py-2 bg-base-200 rounded-md">
              <p className="text-center text-sm opacity-60 py-3">
                No results found
              </p>
            </div>
          )
        }

      </div>

    </nav>
  );
};

export default Navbar;