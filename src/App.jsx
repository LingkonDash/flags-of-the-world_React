import { Suspense, useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import SortNav from './components/Sort&navigation/SortNav';
import Flags from './components/flags/Flags';
import Skeleton from './components/skeletons/Skeleton';


function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [defultData, setDefultData] = useState([]);
  const [curSort, setCurSort] = useState('');


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

        setLoading(false);

      })
  }, [])


  return (
    <>

      <header className='sticky top-0 bg-base-300 z-20'>
        <Navbar></Navbar>
      </header>

      <main>

        <section className='max-w-[1600px] mx-auto mt-5 p-5'>
          <SortNav handleSort={handleSort} curSort={curSort}></SortNav>
        </section>

        <section className='max-w-[1600px] mx-auto'>

          {
            loading ? <Skeleton></Skeleton> : <Flags data={data}></Flags>
          }
          {/* <Suspense fallback={<Skeleton></Skeleton>}>
            <Flags data={data} noSorted={noSorted} setNosorted={setNosorted}></Flags>
          </Suspense> */}
        </section>

        <section>

        </section>

      </main>

      <footer className='max-w-[1600px] mx-auto'>

      </footer>


    </>
  )
}

export default App
