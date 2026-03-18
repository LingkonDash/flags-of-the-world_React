import { X } from 'lucide-react';
import React, { useState } from 'react';

const Navigations = () => {

  const [dropDown, setDropdown] = useState(false);
  return (
    <>
      <div className='hidden md:flex xl:hidden navbar-end'>
        <button onClick={() => setDropdown(!dropDown)} className='btn bg-base-300 shadow-none cursor-pointer py-1 px-3 rounded-full border-4 border-transparent hover:border-[#3075f469]'>
          {
            dropDown
              ? <X width={'20px'}></X>
              : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          }

        </button>
      </div>
      <div className='pr-4 hidden xl:flex'>
        <ul className='flex justify-between items-center gap-10 text-xl font-medium [&_li]:border-4 [&_li]:border-transparent'>
          <li className='hover:border-b-[#3075f469]'><a href="#">Home</a></li>
          <li className='hover:border-b-[#3075f469]'><a href="#">Blogs</a></li>
          <li className='hover:border-b-[#3075f469]'><a href="#">About Us</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navigations;