import React from 'react';

const SortList = ({ handleSort, curSort, ulStyle }) => {
  return (
    <div className={`${ulStyle} rounded-lg border-4 border-[#3075f469] z-10 bg-base-200 py-6 absolute top-12 shadow-md -right-[85px] -left-7 transition-transform duration-300 px-2 flex flex-col justify-center items-start gap-5 font-normal`}>
      <button onClick={() => handleSort('Asia')} className={`cursor-pointer active:scale-95 border-4 border-transparent px-2 hover:bg-base-300 w-full text-left ${curSort === 'Asia' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Population ascending</button>
      <button onClick={() => handleSort('Africa')} className={`cursor-pointer active:scale-95 border-4 border-transparent px-2 hover:bg-base-300 w-full text-left ${curSort === 'Africa' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Population descending</button>
      <button onClick={() => handleSort('northA')} className={`cursor-pointer active:scale-95 border-4 border-transparent px-2 hover:bg-base-300 w-full text-left ${curSort === 'northA' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Name ascending</button>
      <button onClick={() => handleSort('southA')} className={`cursor-pointer active:scale-95 border-4 border-transparent px-2 hover:bg-base-300 w-full text-left ${curSort === 'southA' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Name descending</button>
      <button onClick={() => handleSort('Antarctica')} className={`cursor-pointer active:scale-95 border-4 border-transparent px-2 hover:bg-base-300 w-full text-left ${curSort === 'Antarctica' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Area ascending</button>
      <button onClick={() => handleSort('Europe')} className={`cursor-pointer active:scale-95 border-4 border-transparent px-2 hover:bg-base-300 w-full text-left ${curSort === 'Europe' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Area Descending</button>
      <button onClick={() => handleSort('Australia')} className={`cursor-pointer active:scale-95 border-4 border-transparent px-2 hover:bg-base-300 w-full text-left ${curSort === 'Australia' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Density ascending</button>
    </div>
  );
};

export default SortList;