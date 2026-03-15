import React, { use } from 'react';
import Flag from './Flag';

const Flags = ({apiPromise}) => {

  const data = use(apiPromise);
  

  return (
    <div className='grid grid-cols-5 gap-4 border border-green-500 p-4 mt-10'>
      {
        data.countries.map(data => <Flag key={data.cca3.cca3} data={data}></Flag>)
      }
      
    </div>
  );
};

export default Flags;