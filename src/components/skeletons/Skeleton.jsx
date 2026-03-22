import React from 'react';

const Skeleton = () => {
  return (
    <div>
      <div className="w-full mt-4 px-3 animate-pulse">
        <div className="flex flex-col gap-2">

          <div className="h-6 w-52 bg-gray-300 rounded"></div>

          <div className="h-4 w-60 bg-gray-300 rounded"></div>

        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-1 md:gap-2 m-2 rounded-xl mt-10">
        {
          Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="bg-gray-300 rounded-xl p-1 animate-pulse">

              <div className="w-full h-32 bg-gray-300 rounded-md"></div>


            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Skeleton;