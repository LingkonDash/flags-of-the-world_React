import React from 'react';
import { Suspense } from 'react';
import Flags from './flags/Flags';

const Main = () => {

  const apiPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json());

  return (
    <main>

      <Suspense fallback={<p>Data Loading...</p>}>
        <Flags apiPromise={apiPromise}></Flags>
      </Suspense>

    </main>
  );
};

export default Main;