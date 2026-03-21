import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({searchAction, searchClickHandler, searchBTNClickHandler}) => {
  return (
    <>
      <div className='flex justify-center items-center gap-2'>
        <label className="input shadow-sm outline-[3px] focus-within:outline-[#3075f469] h-8">
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
          <input type="search" className="grow" onClick={() => searchClickHandler()} onChange={(e) => searchAction((e.target.value))} placeholder="Search" />
        </label>

        <button className='btn cursor-pointer py-1 px-2 shadow-none rounded-full border-4 border-transparent hover:border-[#3075f469]'
                onClick={() => searchBTNClickHandler()}
                >
          <Search className='text-[#3075f4]' />
        </button>
      </div>
    </>
  );
};

export default SearchBar;