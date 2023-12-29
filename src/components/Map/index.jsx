'use client';
import { useRouter } from 'next/navigation';

import { CITIES } from './cities';

const Map = () => {
  const router = useRouter();

  const handleSelectCity = (e) => {
    const city = e.target.dataset.cityName || e.target.textContent;
    router.push(`/?city=${city.toLocaleLowerCase()}`, undefined, {
      shallow: true,
    });
  };

  const handleHoverCityName = (e) => {
    const target = e.target.previousSibling;
    target.classList.remove('fill-slate-50');
    target.classList.remove('dark:fill-slate-400');
    target.classList.add('fill-red-500');
  };

  const handleLeaveCityName = (e) => {
    const target = e.target.previousSibling;
    target.classList.remove('fill-red-500');
    target.classList.add('fill-slate-50');
    target.classList.add('dark:fill-slate-400');
  };

  return (
    <section className='w-full overflow-x-auto px-8'>
      <div className='min-w-[900px] max-w-[1200px] mx-auto bg-sky-400 dark:bg-slate-600 flex flex-col items-center justify-start gap-6'>
        <div className='flex flex-col self-start md:self-center items-center justify-start gap-2'>
          <h2 className='text-3xl font-semibold text-gray-900 dark:text-gray-100'>
            Forecast Map of Türkiye
          </h2>
          <p className='text-gray-800 dark:text-gray-300'>
            Select a city to see the weather forecast.
          </p>
        </div>
        <svg
          id='svg-turkey-map'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          version='1.1'
          viewBox='0 0 800 350'
        >
          {CITIES.map((city) => (
            <g key={city.id}>
              <path
                id={city.id}
                data-city-name={city.dataCityName}
                title={city.title}
                onClick={handleSelectCity}
                className='fill-slate-50 dark:fill-slate-400 transition-all duration-300 ease-out hover:fill-red-500 cursor-pointer stroke-red-500 dark:stroke-slate-500'
                d={city.d}
              />
              <text
                className='cursor-pointer select-none'
                onClick={handleSelectCity}
                x={city.text.x}
                y={city.text.y}
                fontSize={city.text.fontSize}
                onMouseEnter={handleHoverCityName}
                onMouseLeave={handleLeaveCityName}
              >
                {city.text.text}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </section>
  );
};

export default Map;
