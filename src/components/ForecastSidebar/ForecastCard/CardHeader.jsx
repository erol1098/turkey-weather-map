const CardHeader = ({ forecast = {} }) => {
  const city = forecast.cityName.split(' ')[0] || '';

  return (
    <h2 className='text-4xl font-extrabold text-slate-900 dark:text-slate-200'>
      {city}
    </h2>
  );
};

export default CardHeader;
