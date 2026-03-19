import React, { useState } from 'react';

const Flag = ({ data }) => {

  let [display, setDisplay] = useState(false);
  let [modalDisplay, setmodalDisplay] = useState(false);

  function modalHandler() {
    setmodalDisplay(!modalDisplay);

  }


  return (
    <>
      <div onClick={() => modalHandler()} onMouseEnter={() => setDisplay(!display)} onMouseLeave={() => setDisplay(!display)} className='relative grid grid-cols-1 items-stretch justify-stretch cursor-pointer'>

        <img className='rounded-xl' src={data.flags.flags.png} alt={data.flags.flags.alt} />

        <div className={`${display ? 'flex' : 'hidden'} absolute w-full p-2 rounded-b-xl text-base-200 bottom-0 bg-[#0000006c] justify-center items-center text-center`}>
          <p>Flag of {data.name.common}</p>
        </div>

      </div>
      <div className={`${modalDisplay ? 'flex' : 'hidden'} fixed z-40 top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 justify-center items-center backdrop-blur-md bg-black/35 p-4`}>
        {/* <div className='p-10 bg-blue-700'>
          <button onClick={() => setmodalDisplay(false)} className='btn border p-5 bg-base-300'>X</button>
          <p>{data.name.common}</p>
        </div> */}
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl transition-all">

            {/* Header / Banner Area */}
            <div className="relative h-32 bg-gradient-to-r from-blue-500 to-[#3075f4]">
              <button
                onClick={() => setmodalDisplay(false)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-hover hover:bg-white/40 hover:scale-110"
              >
                ✕
              </button>
            </div>

            {/* Content Container */}
            <div className="relative px-8 pb-8">
              {/* Flag & Title Section */}
              <div className="relative -mt-16 mb-6 flex flex-col items-center sm:flex-row sm:items-end sm:gap-6">
                <img
                  src={data.flags.flags.svg}
                  alt={data.flags.flags.alt}
                  className="h-32 w-48 rounded-lg border-4 border-white object-cover shadow-lg"
                />
                <div className="mt-4 text-center sm:mt-0 sm:text-left">
                  <h2 className="text-3xl font-bold text-gray-800 leading-tight">{data.name.common}</h2>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">{data.name.official}</p>
                </div>
              </div>

              <hr className="my-6 border-gray-100" />

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase text-blue-600">Capital</span>
                  <span className="text-lg font-medium text-gray-700">{data.capital.capital[0]}</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase text-blue-600">Population</span>
                  <span className="text-lg font-medium text-gray-700">{data.population.population.toLocaleString()}</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase text-blue-600">Region</span>
                  <span className="text-lg font-medium text-gray-700">{data.region.region}</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase text-blue-600">Currency</span>
                  <span className="text-lg font-medium text-gray-700">
                    {Object.values(data.currencies.currencies)[0]?.name} ({Object.values(data.currencies.currencies)[0]?.symbol})
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase text-blue-600">Area</span>
                  <span className="text-lg font-medium text-gray-700">{data.area.area.toLocaleString()} km²</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase text-blue-600">Alpha Code</span>
                  <span className="text-lg font-medium text-gray-700">{data.cca3.cca3}</span>
                </div>
              </div>

              {/* Languages Tag Cloud */}
              <div className="mt-8">
                <span className="text-xs font-semibold uppercase text-blue-600 block mb-2">Spoken Languages</span>
                <div className="flex flex-wrap gap-2">
                  {Object.values(data.languages.languages).map((lang) => (
                    <span key={lang} className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 border border-blue-100">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default Flag;