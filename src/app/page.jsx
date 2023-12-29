import { Suspense } from 'react';

import { Home, ForecastSidebar } from '@/components';

const HomePage = async ({ searchParams }) => {
  const city = searchParams.city;

  return (
    <main className='relative sm-container w-full min-h-lvh py-6  bg-sky-400 dark:bg-slate-600'>
      <Suspense>
        <Home />
      </Suspense>
      <Suspense>
        <ForecastSidebar city={city} />
      </Suspense>
    </main>
  );
};

export default HomePage;
