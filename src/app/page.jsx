import { Suspense } from 'react';

import { Home, ForecastSidebar } from '@/components';

const HomePage = async ({ searchParams }) => {
  const city = searchParams.city;

  return (
    <>
      <Suspense>
        <Home />
      </Suspense>
      <Suspense>
        <ForecastSidebar city={city} />
      </Suspense>
    </>
  );
};

export default HomePage;
