import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import Continents from './continent/Continents';
import SortList from './sortList/SortList';

const SortNav = () => {

  const [continents, setContinents] = useState(false);
  const [currentContinent, setCurrentContinent] = useState('');
  const [sort, setSort] = useState(false);
  const [curSort, setCurSort] = useState('');

  const handleSort = (sortName) => {

    if (sortName === 'Asia') setCurSort('Asia');
    if (sortName === 'Africa') setCurSort('Africa');
    if (sortName === 'northA') setCurSort('northA');
    if (sortName === 'southA') setCurSort('southA');
    if (sortName === 'Antarctica') setCurSort('Antarctica');
    if (sortName === 'Europe') setCurSort('Europe');
    if (sortName === 'Australia') setCurSort('Australia');
    console.log(sortName);
  }

  const handleContinent = (continentName) => {
    if (continentName === 'Asia') setCurrentContinent('Asia');
    if (continentName === 'Africa') setCurrentContinent('Africa');
    if (continentName === 'northA') setCurrentContinent('northA');
    if (continentName === 'southA') setCurrentContinent('southA');
    if (continentName === 'Antarctica') setCurrentContinent('Antarctica');
    if (continentName === 'Europe') setCurrentContinent('Europe');
    if (continentName === 'Australia') setCurrentContinent('Australia');
  }


  return (
    <section className='flex justify-between items-center'>

      <div className='relative'>
        <button onClick={() => setSort(!sort)} className={`btn text-xl font-normal cursor-pointer py-1 px-3 shadow-none rounded-full border-4 lg:hover:border-[#3075f469] bg-base-300 ${sort ? 'border-[#3075f469]' : 'border-transparent'}`}>
          Sort <ChevronDown />
        </button>

        <SortList handleSort={handleSort} curSort={curSort} ulStyle={`${sort ? 'translate-x-0' : ' -translate-x-[300px] pointer-events-none opacity-0'}`}></SortList>

      </div>
      <div className='relative'>
        <button onClick={() => setContinents(!continents)} className={`lg:hidden btn text-xl font-normal cursor-pointer py-1 px-3 shadow-none rounded-full border-4 lg:hover:border-[#3075f469] bg-base-300 ${continents ? 'border-[#3075f469]' : 'border-transparent'}`}>
          Continents <ChevronDown />
        </button>
        {/* Defult continent */}
        <Continents handleContinent={handleContinent} currentContinent={currentContinent} ulStyle={'hidden lg:flex pr-5'}></Continents>

        {
          <Continents handleContinent={handleContinent} currentContinent={currentContinent} ulStyle={`lg:hidden flex-col rounded-lg border-4 border-[#3075f469] z-10 bg-base-200 py-6 pl-2 absolute top-12 shadow-md -right-3 left-0 transition-transform duration-300 ${continents ? 'flex' : 'hidden'}`}></Continents>
        }


      </div>
    </section>
  );
};

export default SortNav;