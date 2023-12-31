'use client';
import { useRouter } from 'next/navigation';

import { handleHoverCityName, handleLeaveCityName } from './hoverCity';
import { CITIES } from './cities';

const Map = () => {
  const router = useRouter();

  const handleSelectCity = (e) => {
    const city = e.target.dataset.cityName || e.target.textContent;
    router.push(`/?city=${city.toLocaleLowerCase()}`, undefined, {
      shallow: true,
    });
  };

  return (
    <svg
      id='svg-turkey-map'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      version='1.1'
      viewBox='0 0 800 350'
      className='max-w-[1200px] min-h-[250px] w-full h-fit'
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
  );
};

export default Map;
