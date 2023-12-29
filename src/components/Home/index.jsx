import { Map } from '..';
import PageTitle from './PageTitle';

const Home = () => {
  return (
    <section className='w-full overflow-x-auto px-8'>
      <div className='min-w-[900px] max-w-[1200px] mx-auto bg-sky-400 dark:bg-slate-600 flex flex-col items-center justify-start gap-6'>
        <PageTitle
          title='Forecast Map of Türkiye'
          subtitle='Select a city to see the weather forecast.'
        />
        <Map />
      </div>
    </section>
  );
};

export default Home;
