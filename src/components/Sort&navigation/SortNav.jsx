import { ChevronDown } from 'lucide-react';
import React from 'react';

const SortNav = () => {
  return (
    <section className='flex justify-between items-center'>
      <div className='btn text-xl font-normal cursor-pointer py-1 px-3 shadow-none rounded-full border-4 border-transparent hover:border-[#3075f469] bg-base-300'>
        <h2> Sort </h2> <ChevronDown />
      </div>
      <div>
        <div className='lg:hidden btn text-xl font-normal cursor-pointer py-1 px-3 shadow-none rounded-full border-4 border-transparent hover:border-[#3075f469] bg-base-300'>
          <h2> Continents </h2> <ChevronDown />
        </div>
        <ul className='hidden lg:flex justify-center items-center gap-5 text-blue-600 font-normal text-xl'>
          <li><p className='hover:text-blue-800 cursor-pointer'>Asia</p></li>
          <li><p className='hover:text-blue-800 cursor-pointer'>Africa</p></li>
          <li><p className='hover:text-blue-800 cursor-pointer'>North America</p></li>
          <li><p className='hover:text-blue-800 cursor-pointer'>South America</p></li>
          <li><p className='hover:text-blue-800 cursor-pointer'>Antarctica</p></li>
          <li><p className='hover:text-blue-800 cursor-pointer'>Europe</p></li>
          <li><p className='hover:text-blue-800 cursor-pointer'>Australia</p></li>
        </ul>
      </div>
    </section>
  );
};

export default SortNav;