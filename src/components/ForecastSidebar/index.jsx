'use client';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import ForecastCard from './ForecastCard';
import useGetWeatherData from '@/hooks/useGetWeatherData';

const ForecastSidebar = ({ city = '' }) => {
  const [openSidebar, setOpenSidebar] = useState(city ? 'flex' : 'hidden');
  const [forecast, setForecast] = useState('');

  const { getWeatherData, loading } = useGetWeatherData();

  const router = useRouter();

  const closeSidebar = () => {
    setOpenSidebar('hidden');
    setForecast('');
    router.push('/', undefined, {
      shallow: true,
    });
  };

  useEffect(() => {
    setOpenSidebar(city ? 'flex' : 'hidden');
    if (city) {
      getWeatherData(city).then((data) => {
        setForecast(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <section
      className={`absolute top-0 right-0 w-[375px] h-full bg-slate-300 dark:bg-slate-900 shadow-xl ${openSidebar} transition-all duration-500 ease-in-out px-2 py-4 select-none`}
    >
      {city && (
        <ForecastCard
          forecast={forecast}
          loading={loading}
          closeSidebar={closeSidebar}
        />
      )}
    </section>
  );
};

export default ForecastSidebar;
