import { Suspense, useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import SortNav from './components/Sort&navigation/SortNav';
import Flags from './components/flags/Flags';
import Skeleton from './components/skeletons/Skeleton';


function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  const [curSort, setCurSort] = useState('');

  const handleSort = (sortName) => {

    if (sortName === 'population-up') setCurSort('population-up');
    if (sortName === 'population-down') setCurSort('population-down');
    if (sortName === 'name-up') setCurSort('name-up');
    if (sortName === 'name-down') setCurSort('name-down');
    if (sortName === 'area-up') setCurSort('area-up');
    if (sortName === 'area-down') setCurSort('area-down');
    if (sortName === 'density-up') setCurSort('density-up');
    console.log(sortName);
  }

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/all')
    .then(res => res.json())
    .then(json => {
      setData(json.countries);
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
