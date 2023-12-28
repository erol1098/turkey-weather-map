'use client';
import useGetWeatherData from '@/hooks/useGetWeatherData';
import { CITIES } from './cities';

const Map = () => {
  const { getWeatherData } = useGetWeatherData();

  const handleSelectCity = async (e) => {
    const city = e.target.dataset.cityName || e.target.textContent;
    const data = await getWeatherData(city);
    console.log(data);
  };
  const handleHoverCityName = (e) => {
    const target = e.target.previousSibling;
    target.classList.add('fill-slate-500');
  };

  const handleLeaveCityName = (e) => {
    const target = e.target.previousSibling;
    target.classList.remove('fill-slate-500');
  };

  return (
    <div className='w-full h-svh lg:w-3/4 mx-auto bg-slate-400 dark:bg-slate-600'>
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
              className='fill-slate-300 dark:fill-slate-400 stroke-white transition-all duration-300 ease-out hover:fill-slate-500 cursor-pointer'
              d={city.d}
            />
            <text
              className='cursor-pointer'
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
  );
};

export default Map;
