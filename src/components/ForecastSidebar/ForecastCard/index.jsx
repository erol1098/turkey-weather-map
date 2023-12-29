import CardBody from './CardBody';
import CardError from './CardError';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardLoader from './CardLoader';
import CloseCard from './CloseCard';

const ForecastCard = (props) => {
  const { forecast, loading } = props;

  if (loading) {
    return <CardLoader />;
  }
  return (
    <section className='w-[350px] mx-auto flex flex-col items-center justify-start gap-4 '>
      <CloseCard {...props} />
      {forecast ? (
        <>
          <CardHeader {...props} />
          <CardBody {...props} />
          <hr className='w-full border-1 border-slate-800 dark:border-slate-900' />
          <CardFooter {...props} />
        </>
      ) : (
        <CardError
          title='No data found for this city'
          description=' Please select a city from the map.'
        />
      )}
    </section>
  );
};

export default ForecastCard;
