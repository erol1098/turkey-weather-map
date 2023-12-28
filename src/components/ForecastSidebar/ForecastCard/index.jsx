import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';

const ForecastCard = ({ forecast = {} }) => {
  const city = forecast.name || '';
  return (
    <section className='w-[350px] mx-auto flex flex-col items-center justify-start gap-4 mt-8'>
      <CardHeader city={city} />
      <CardBody forecast={forecast} />
      <hr className='w-full border-1 border-slate-200 dark:border-slate-900' />
      <CardFooter forecast={forecast} />
    </section>
  );
};

export default ForecastCard;
