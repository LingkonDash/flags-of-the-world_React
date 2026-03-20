import React from 'react';

const Continents = ({ handleContinent, currentContinent, ulStyle}) => {
  return (
    <ul className={`${ulStyle} justify-center items-center gap-4 text-blue-600 font-normal text-xl`}>
      <li><button onClick={() => handleContinent('Africa')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 border-transparent ${currentContinent === 'Africa' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Africa</button></li>
      <li><button onClick={() => handleContinent('Americas')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 border-transparent ${currentContinent === 'Americas' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Americas</button></li>
      <li><button onClick={() => handleContinent('Asia')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 border-transparent ${currentContinent === 'Asia' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Asia</button></li>
      <li><button onClick={() => handleContinent('Europe')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 border-transparent ${currentContinent === 'Europe' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Europe</button></li>
      <li><button onClick={() => handleContinent('Oceania')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 border-transparent ${currentContinent === 'Oceania' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Oceania</button></li>
      <li><button onClick={() => handleContinent('All')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 border-transparent ${currentContinent === 'All' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>All continent</button></li>
    </ul>
  );
};

export default Continents;