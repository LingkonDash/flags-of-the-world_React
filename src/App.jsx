import './App.css'
import Navbar from './components/navbar/Navbar'
import Flags from './components/flags/Flags'
import { Suspense } from 'react';

const apiPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json());

function App() {

  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={<p>Data Loading...</p>}>
        <Flags apiPromise={apiPromise}></Flags>
      </Suspense>

    </>
  )
}

export default App
