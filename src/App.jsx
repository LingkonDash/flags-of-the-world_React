import { Suspense } from 'react';
import Navbar from './components/navbar/Navbar';
import SortNav from './components/Sort&navigation/SortNav';
import Flags from './components/flags/Flags';
import Skeleton from './components/skeletons/Skeleton';


function App() {


  const apiPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json());

  return (
    <>

      <header className='sticky top-0 bg-base-300 z-20'>
        <Navbar></Navbar>
      </header>

      <main>

        <section className='max-w-[1600px] mx-auto mt-5 p-5'>
          <SortNav></SortNav>
        </section>

        <section className='max-w-[1600px] mx-auto'>
          <Suspense fallback={<Skeleton></Skeleton>}>
            <Flags apiPromise={apiPromise}></Flags>
          </Suspense>
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
