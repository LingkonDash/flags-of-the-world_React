import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const SortNav = () => {

  const [continents, setContinents] = useState(false);
  const [currentContinent, setCurrentContinent] = useState('');

  const handleContinent = (continentName) => {
    if (continentName === 'Asia') setCurrentContinent('Asia');
    if (continentName === 'Africa') setCurrentContinent('Africa');
    if (continentName === 'northA') setCurrentContinent('northA');
    if (continentName === 'southA') setCurrentContinent('southA');
    if (continentName === 'Antarctica') setCurrentContinent('Antarctica');
    if (continentName === 'Europe') setCurrentContinent('Europe');
    if (continentName === 'Australia') setCurrentContinent('Australia');
  }

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
          <li><button onClick={() => handleContinent('Asia')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 bg-base-300 border-transparent ${currentContinent === 'Asia' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Asia</button></li>
          <li><button onClick={() => handleContinent('Africa')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 bg-base-300 border-transparent ${currentContinent === 'Africa' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Africa</button></li>
          <li><button onClick={() => handleContinent('northA')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 bg-base-300 border-transparent ${currentContinent === 'northA' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>North America</button></li>
          <li><button onClick={() => handleContinent('southA')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 bg-base-300 border-transparent ${currentContinent === 'southA' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>South America</button></li>
          <li><button onClick={() => handleContinent('Antarctica')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 bg-base-300 border-transparent ${currentContinent === 'Antarctica' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Antarctica</button></li>
          <li><button onClick={() => handleContinent('Europe')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 bg-base-300 border-transparent ${currentContinent === 'Europe' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Europe</button></li>
          <li><button onClick={() => handleContinent('Australia')} className={`hover:text-blue-800 cursor-pointer active:scale-95 border-4 bg-base-300 border-transparent ${currentContinent === 'Australia' ? 'border-b-[#3075f469]' : 'border-b-transparent'}`}>Australia</button></li>
        </ul>
      </div>
    </section>
  );
};

export default SortNav;