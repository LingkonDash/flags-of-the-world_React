import { Suspense } from 'react';
import Navbar from './components/navbar/Navbar';
import SortNav from './components/Sort&navigation/SortNav';
import Flags from './components/flags/Flags';


function App() {


  const apiPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json());

  return (
    <>

      <header className='sticky top-0 bg-base-300 z-10'>
        <Navbar></Navbar>
      </header>

      <main className='max-w-[1600px] mx-auto'>
        <SortNav></SortNav>

        <Suspense fallback={<p>Data Loading...</p>}>
          <Flags apiPromise={apiPromise}></Flags>
        </Suspense>
      </main>

      <footer className='max-w-[1600px] mx-auto'>

      </footer>


    </>
  )
}

export default App
