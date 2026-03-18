import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const SortNav = () => {
  
  const [continents, setContinents] = useState(false);

  const [sort, setSort] = useState(false);

  return (
    <section className='flex justify-between items-center'>
      <button onClick={() => setSort(!sort)} className={`btn text-xl font-normal cursor-pointer py-1 px-3 shadow-none rounded-full border-4 lg:hover:border-[#3075f469] bg-base-300 ${sort ? 'border-[#3075f469]' : 'border-transparent'}`}>
        Sort <ChevronDown />
      </button>
      <div>
        <button onClick={() => setContinents(!continents)} className={`lg:hidden btn text-xl font-normal cursor-pointer py-1 px-3 shadow-none rounded-full border-4 lg:hover:border-[#3075f469] bg-base-300 ${continents ? 'border-[#3075f469]' : 'border-transparent'}`}>
          Continents <ChevronDown />
        </button>
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