import React, { use } from 'react';
import Flag from './Flag';

const Flags = ({apiPromise}) => {

  const data = use(apiPromise);
  

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-1 md:gap-2 m-2 rounded-xl mt-10">
      {
        data.countries.map(data => <Flag key={data.cca3.cca3} data={data}></Flag>)
      }
      
    </div>
  );
};

export default Flags;