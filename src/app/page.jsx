import { Suspense } from 'react';

import { ForecastSidebar, Map } from '@/components';

const HomePage = async ({ searchParams }) => {
  const city = searchParams.city;

  return (
    <main className='relative sm-container w-full min-h-lvh py-12 bg-slate-400 dark:bg-slate-600'>
      <Suspense>
        <Map />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <ForecastSidebar city={city} />
      </Suspense>
    </main>
  );
};

export default HomePage;
