import React from 'react';

const SortList = ({handleSort, curSort, ulStyle}) => {
  return (
    <ul className={`${ulStyle} rounded-lg border-4 border-[#3075f469] z-10 bg-base-200 py-6 absolute top-12 shadow-md -right-[70px] -left-7 transition-transform duration-300 flex flex-col justify-center items-start pl-5 gap-5 text-blue-600 font-normal text-xl`}>
      <li><button onClick={() => handleSort('Asia')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 border-transparent ${curSort === 'Asia' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Asia</button></li>
      <li><button onClick={() => handleSort('Africa')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 border-transparent ${curSort === 'Africa' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Africa</button></li>
      <li><button onClick={() => handleSort('northA')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 border-transparent ${curSort === 'northA' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>North America</button></li>
      <li><button onClick={() => handleSort('southA')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 border-transparent ${curSort === 'southA' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>South America</button></li>
      <li><button onClick={() => handleSort('Antarctica')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 border-transparent ${curSort === 'Antarctica' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Antarctica</button></li>
      <li><button onClick={() => handleSort('Europe')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 border-transparent ${curSort === 'Europe' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Europe</button></li>
      <li><button onClick={() => handleSort('Australia')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 border-transparent ${curSort === 'Australia' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Australia</button></li>
    </ul>
  );
};

export default SortList;