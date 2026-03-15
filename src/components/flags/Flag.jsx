import React from 'react';

const Flag = ({data}) => {
  
  return (
    <div className='grid grid-cols-1 items-stretch justify-stretch'>
      <img className='rounded-2xl' src={data.flags.flags.png} alt={data.flags.flags.alt} />
    </div>
  );
};

export default Flag;