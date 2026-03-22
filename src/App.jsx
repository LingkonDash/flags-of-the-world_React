import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import SortNav from './components/Sort&navigation/SortNav';
import Flags from './components/flags/Flags';
import Skeleton from './components/skeletons/Skeleton';
import About from './components/bottom/About';
import Bottom from './components/bottom/Bottom';
import Footer from './components/bottom/Footer';
import AboutMe from './components/bottom/AboutMe';
import SearchFallback from './components/SearchFallback';


function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [defultData, setDefultData] = useState([]);
  const [defultDataContinent, setDefultDataContinent] = useState([]);
  const [curSort, setCurSort] = useState('');

  // continent data
  const [currentContinent, setCurrentContinent] = useState('');

  const [searchValue, setSearchvalue] = useState('');
  const [searchData, setSearchData] = useState([]);

  const [showSearch, setShowsearch] = useState(false);

  function searchAction(value) {

    if (value !== '') setShowsearch(true);
    else setShowsearch(false);

    setSearchvalue(value);

  }

  function searchClickHandler(dropdown) {


    if (dropdown) {
      setShowsearch(false);
      return;
    }

    setShowsearch(true);

  }
  function searchBTNClickHandler(cca3) {

    let newSearchData = searchData;

    if (cca3) newSearchData = searchData.filter(obj => obj.cca3.cca3 === cca3);

    setShowsearch(false);

    if (searchValue !== '') setData(newSearchData);

  }

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/name/${searchValue}`)
      .then(res => res.json())
      .then(json => {

        setSearchData(json.countries)

      })
  }, [searchValue])


  //handling continent function
  const handleContinent = (continentName) => {

    setCurSort('');

    if (continentName === 'Asia') {

      const newData = defultData.filter(obj => obj.region.region === 'Asia');

      setData(newData);

      setCurrentContinent('Asia');

    } else if (continentName === 'Africa') {

      const newData = defultData.filter(obj => obj.region.region === 'Africa');

      setData(newData);

      setCurrentContinent('Africa');

    } else if (continentName === 'Americas') {

      const newData = defultData.filter(obj => obj.region.region === 'Americas');

      setData(newData);

      setCurrentContinent('Americas');

    } else if (continentName === 'Oceania') {

      const newData = defultData.filter(obj => obj.region.region === 'Oceania');

      setData(newData);

      setCurrentContinent('Oceania');

    } else if (continentName === 'Europe') {

      const newData = defultData.filter(obj => obj.region.region === 'Europe');

      setData(newData);

      setCurrentContinent('Europe');

    } else if (continentName === 'All') {

      setData(defultDataContinent);

      setCurrentContinent('All');

    }
  }


  // Sorting functions 
  function sorterAscending(arr, path) {
    return [...arr].sort((a, b) => a[path][path] - b[path][path]);
  }
  function sorterDescending(arr, path) {
    return [...arr].sort((a, b) => b[path][path] - a[path][path]);
  }

  function sorterName(arr, order = "asc") {
    return [...arr].sort((a, b) =>
      order === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common)
    );
  }

  // handling sor functions onclick
  const handleSort = (sortName) => {

    if (sortName === 'population-up') {

      const newData = sorterAscending(data, 'population')

      setData(newData);

      setCurSort('population-up')

    } else if (sortName === 'population-down') {

      const newData = sorterDescending(data, 'population')

      setData(newData);

      setCurSort('population-down')

    } else if (sortName === 'name-up') {

      const newData = sorterName(data, 'asc')

      setData(newData);

      setCurSort('name-up')

    } else if (sortName === 'name-down') {

      const newData = sorterName(data, 'desc')

      setData(newData);

      setCurSort('name-down')

    } else if (sortName === 'area-up') {

      const newData = sorterAscending(data, 'area')

      setData(newData);

      setCurSort('area-up')

    } else if (sortName === 'area-down') {

      const newData = sorterDescending(data, 'area')

      setData(newData);

      setCurSort('area-down')

    } else if (sortName === 'all') {

      setData(defultData);

      setCurSort('all')

    }
  }

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/all')
      .then(res => res.json())
      .then(json => {
        setData(json.countries);
        setDefultData(json.countries);
        setDefultDataContinent(json.countries);

        setLoading(false);

      })
  }, [])


  return (
    <>

      <header className='sticky top-0 bg-base-300 z-20'>
        <Navbar searchAction={searchAction} searchData={searchData} showSearch={showSearch} searchClickHandler={searchClickHandler} searchBTNClickHandler={searchBTNClickHandler}></Navbar>
      </header>

      <main>

        <section className='max-w-[1600px] mx-auto mt-5 p-5'>
          <SortNav handleSort={handleSort} curSort={curSort} handleContinent={handleContinent} currentContinent={currentContinent}></SortNav>
        </section>

        <section className='max-w-[1600px] mx-auto'>

          {
            loading ? <Skeleton></Skeleton> : data.length > 0 ? <Flags data={data}></Flags> : <SearchFallback></SearchFallback>
          }
        </section>

        <section id='blog' className='max-w-[1600px] mx-auto mt-10 p-10 md:p-[60px] lg:p-20'>

          <About></About>

        </section>

        <section id='about' className='max-w-[1600px] mx-auto p-10 md:p-[60px] lg:p-20'>

          <AboutMe></AboutMe>

        </section>

        <section className='bg-blue-500 text-white'>

          <Bottom></Bottom>

        </section>

      </main>

      <footer className='max-w-[1600px] mx-auto pb-5 px-5'>

        <Footer></Footer>

      </footer>


    </>
  )
}

export default App
