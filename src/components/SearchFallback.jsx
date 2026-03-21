import React from 'react';

const SearchFallback = () => {
  return (
    <div className="w-full flex text-gray-800 flex-col items-center justify-center py-20 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-base-content">
        No Results Found
      </h2>
      <p className="mt-3 text-sm md:text-base text-base-content/60 max-w-md">
        We couldn’t find any country with that name. Check the spelling or try another country.
      </p>
    </div>
  );
};

export default SearchFallback;