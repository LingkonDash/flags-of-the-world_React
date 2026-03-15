import React, { use } from 'react';
import Flag from './Flag';

const Flags = ({apiPromise}) => {

  const data = use(apiPromise);
  

  return (
    <section className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 rounded-2xl py-4 px-[60px] mt-10'>
      {
        data.countries.map(data => <Flag key={data.cca3.cca3} data={data}></Flag>)
      }
      
    </section>
  );
};

export default Flags;