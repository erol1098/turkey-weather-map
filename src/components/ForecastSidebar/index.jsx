import { getWeatherData } from '@/libs';
import ForecastCard from './ForecastCard';

const ForecastSidebar = async ({ city = '' }) => {
  const sidebarDisplay = city ? 'flex' : 'hidden';
  const forecast = city ? await getWeatherData(city) : '';

  console.log('forecast', forecast);

  return (
    <section
      className={`absolute top-0 right-0 w-[375px] h-full bg-violet-700 dark:bg-gray-600 shadow-xl ${sidebarDisplay} transition-all duration-500 ease-in-out px-2 py-4`}
    >
      {forecast && <ForecastCard forecast={forecast} />}
    </section>
  );
};

export default ForecastSidebar;
