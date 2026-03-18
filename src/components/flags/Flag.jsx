import React, { useState } from 'react';

const Flag = ({data}) => {

  let [display, setDisplay] = useState(false);
  
  return (
    <div onMouseEnter={() => setDisplay(!display)} onMouseLeave={() => setDisplay(!display)} className='relative grid grid-cols-1 items-stretch justify-stretch cursor-pointer'>

      <img className='rounded-2xl' src={data.flags.flags.png} alt={data.flags.flags.alt} />

      <div className={`${display ? 'flex' : 'hidden'} absolute w-full p-2 rounded-b-2xl text-base-200 bottom-0 bg-[#0000006c] justify-center items-center text-center`}>
        <p>Flag of {data.name.common}</p>
      </div>

    </div>
  );
};

export default Flag;