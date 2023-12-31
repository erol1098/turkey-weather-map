import { Map } from '..';
import MapContainer from '../MapContainer';
import PageTitle from './PageTitle';

const Home = () => {
  return (
    <section className='w-full min-h-lvh px-2 lg:px-8 bg-slate-100 dark:bg-slate-700 flex flex-col items-center justify-start gap-5 pt-6'>
      <PageTitle
        title='Weather Map of Türkiye'
        subtitle='Select a city to see the weather forecast.'
      />
      <MapContainer>
        <Map />
      </MapContainer>
    </section>
  );
};

export default Home;
