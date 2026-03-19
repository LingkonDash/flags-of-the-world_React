import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import Continents from './continent/Continents';

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
      <div className='relative'>
        <button onClick={() => setContinents(!continents)} className={`lg:hidden btn text-xl font-normal cursor-pointer py-1 px-3 shadow-none rounded-full border-4 lg:hover:border-[#3075f469] bg-base-300 ${continents ? 'border-[#3075f469]' : 'border-transparent'}`}>
          Continents <ChevronDown />
        </button>
        {/* Defult continent */}
        <Continents handleContinent={handleContinent} currentContinent={currentContinent} ulStyle={'hidden lg:flex'}></Continents>

        {
          <Continents handleContinent={handleContinent} currentContinent={currentContinent} ulStyle={`flex lg:hidden flex-col rounded-lg border-4 border-r-transparent border-[#3075f469] z-10 bg-base-200 py-6 absolute top-12 shadow-md -right-7 left-0 transition-transform duration-300 ${continents ? 'translate-x-0' : ' translate-x-[200px] pointer-events-none'} `}></Continents>
        }

        
      </div>
    </section>
  );
};

export default SortNav;