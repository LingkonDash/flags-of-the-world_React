import React from 'react';

const Continents = ({ handleContinent, currentContinent, ulStyle}) => {
  return (
    <ul className={`${ulStyle} justify-center items-center gap-5 text-blue-600 font-normal text-xl`}>
      <li><button onClick={() => handleContinent('Asia')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 border-transparent ${currentContinent === 'Asia' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Asia</button></li>
      <li><button onClick={() => handleContinent('Africa')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 border-transparent ${currentContinent === 'Africa' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Africa</button></li>
      <li><button onClick={() => handleContinent('northA')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 border-transparent ${currentContinent === 'northA' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>North America</button></li>
      <li><button onClick={() => handleContinent('southA')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 border-transparent ${currentContinent === 'southA' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>South America</button></li>
      <li><button onClick={() => handleContinent('Antarctica')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 border-transparent ${currentContinent === 'Antarctica' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Antarctica</button></li>
      <li><button onClick={() => handleContinent('Europe')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 border-transparent ${currentContinent === 'Europe' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Europe</button></li>
      <li><button onClick={() => handleContinent('Australia')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 border-transparent ${currentContinent === 'Australia' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Australia</button></li>
    </ul>
  );
};

export default Continents;