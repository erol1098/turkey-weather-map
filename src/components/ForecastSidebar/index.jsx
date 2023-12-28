import { getWeatherData } from '@/libs';

const ForecastSidebar = async ({ city = '' }) => {
  const sidebarDisplay = city ? 'flex' : 'hidden';
  const forecast = city ? await getWeatherData(city) : {};

  console.log('forecast', forecast);

  return (
    <section
      className={`absolute top-0 right-0 w-[375px] h-full bg-zinc-100 dark:bg-zinc-400 shadow-xl ${sidebarDisplay} transition-all duration-500 ease-in-out`}
    >
      <h1>ForecastSidebar</h1>
    </section>
  );
};

export default ForecastSidebar;
