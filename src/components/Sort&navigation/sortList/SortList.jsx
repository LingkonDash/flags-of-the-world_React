import React from 'react';

const SortList = ({ handleSort, curSort, ulStyle }) => {
  return (
    <div className={`${ulStyle} rounded-lg border-4 border-[#3075f469] z-10 bg-base-200 py-6 absolute top-12 shadow-md -right-[85px] -left-7 transition-transform duration-300 px-2 flex flex-col justify-center items-start gap-5 font-normal`}>
      <button onClick={() => handleSort('population-up')} className={`cursor-pointer active:scale-95 border-4 border-transparent px-2 hover:bg-base-300 w-full text-left ${curSort === 'population-up' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Population ascending</button>
      <button onClick={() => handleSort('population-down')} className={`cursor-pointer active:scale-95 border-4 border-transparent px-2 hover:bg-base-300 w-full text-left ${curSort === 'population-down' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Population descending</button>
      <button onClick={() => handleSort('name-up')} className={`cursor-pointer active:scale-95 border-4 border-transparent px-2 hover:bg-base-300 w-full text-left ${curSort === 'name-up' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Name ascending</button>
      <button onClick={() => handleSort('name-down')} className={`cursor-pointer active:scale-95 border-4 border-transparent px-2 hover:bg-base-300 w-full text-left ${curSort === 'name-down' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Name descending</button>
      <button onClick={() => handleSort('area-up')} className={`cursor-pointer active:scale-95 border-4 border-transparent px-2 hover:bg-base-300 w-full text-left ${curSort === 'area-up' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Area ascending</button>
      <button onClick={() => handleSort('area-down')} className={`cursor-pointer active:scale-95 border-4 border-transparent px-2 hover:bg-base-300 w-full text-left ${curSort === 'area-down' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Area Descending</button>
      <button onClick={() => handleSort('all')} className={`cursor-pointer active:scale-95 border-4 border-transparent px-2 hover:bg-base-300 w-full text-left ${curSort === 'all' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Without sorting</button>
    </div>
  );
};

export default SortList;