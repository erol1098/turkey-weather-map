import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';

const ForecastCard = (props) => {
  const { forecast, loading } = props;

  if (loading) {
    return (
      <section className='w-[350px] mx-auto flex flex-col items-center justify-start gap-4 '>
        <div className='w-full h-screen flex flex-col items-center justify-center gap-4'>
          <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 dark:border-gray-300'></div>
        </div>
      </section>
    );
  }
  return (
    <section className='w-[350px] mx-auto flex flex-col items-center justify-start gap-4 '>
      {forecast && (
        <>
          <CardHeader {...props} />
          <CardBody {...props} />
          <hr className='w-full border-1 border-slate-800 dark:border-slate-900' />
          <CardFooter {...props} />
        </>
      )}
    </section>
  );
};

export default ForecastCard;
