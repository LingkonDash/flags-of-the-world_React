import React from 'react';

const Skeleton = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-1 md:gap-2 m-2 rounded-xl mt-10">
      {
        Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="bg-gray-300 rounded-xl p-1 animate-pulse">

            <div className="w-full h-32 bg-gray-300 rounded-md"></div>


          </div>
        ))
      }
    </div>
  );
};

export default Skeleton;