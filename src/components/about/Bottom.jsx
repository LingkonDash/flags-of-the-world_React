import React from 'react';

const Bottom = () => {
  return (
    <div className='max-w-[1600px] mx-auto flex justify-between mt-5 py-6 px-20'>
      <div className='[&_p]:text-xl [&_p]:w-fit [&_p]:cursor-pointer hover:[&_p]:underline space-y-1'>
        <h2 className='text-2xl uppercase mb-8'>Continents</h2>
        <p>Flags of the World</p>
        <p>Africa</p>
        <p>Antarctica</p>
        <p>Asia</p>
        <p>Europe</p>
        <p>North America</p>
        <p>Oceania</p>
        <p>South America</p>
      </div>
      <div className='[&_p]:text-xl [&_p]:w-fit [&_p]:cursor-pointer hover:[&_p]:underline space-y-1'>
        <h2 className='text-2xl uppercase mb-8'>Downloads</h2>
        <p>Vector overview</p>
        <p>Coloring overview</p>
        <p>Emoji overview</p>
        <p>Clip art overview</p>
        <p>Icons overview</p>
        <p>Image overview</p>
      </div>
      <div className='[&_p]:text-xl [&_p]:w-fit [&_p]:cursor-pointer hover:[&_p]:underline space-y-1'>
        <h2 className='text-2xl uppercase mb-8'>U.S. States Downloads</h2>
        <p>U.S. States clip art overview</p>
        <p>U.S. States coloring pages overview</p>
        <p>U.S. States emoji overview</p>
        <p>U.S. States icon overview</p>
        <p>U.S. States image overview</p>
        <p>U.S. States vector overview</p>
      </div>
      <div className='[&_p]:text-xl [&_p]:w-fit [&_p]:cursor-pointer hover:[&_p]:underline space-y-1'>
        <h2 className='text-2xl uppercase mb-8'>Countries of the World</h2>
        <p>African countries</p>
        <p>Asian countries</p>
        <p>European countries</p>
        <p>North American countries</p>
        <p>Pacific Islands</p>
        <p>South American countries</p>
        <p>U.S. States</p>
      </div>
    </div>
  );
};

export default Bottom;