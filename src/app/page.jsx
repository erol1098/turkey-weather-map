import { Suspense } from 'react';

import { Home, ForecastSidebar } from '@/components';

const HomePage = async ({ searchParams }) => {
  const city = searchParams.city;

  return (
    <main>
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
