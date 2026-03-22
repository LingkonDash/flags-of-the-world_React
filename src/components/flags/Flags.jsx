import Flag from './Flag';

const Flags = ({ data }) => {

  // {apiPromise, noSorted, setNosorted, populationUp, nameUp, areaUp, densityUp}


  return (
    <div>
      <div className="w-full mt-4 px-3">
        <div className="flex flex-col">

          <h2 className="text-lg md:text-xl font-bold">
            Total Countries:
            <span className="ml-2 px-2 py-[2px] text-sm font-semibold bg-gray-200 rounded">
              {data.length}
            </span>
          </h2>

          <p className="text-sm text-gray-500">
            Tap any flag to explore details
          </p>

        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-1 md:gap-2 m-2 rounded-xl mt-10">
        {
          data.map(data => <Flag key={data.cca3.cca3} data={data}></Flag>)
        }

      </div>
    </div>
  );
};

export default Flags;