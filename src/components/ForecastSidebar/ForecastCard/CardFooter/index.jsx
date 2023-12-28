import FooterItem from './FooterItem';

const CardFooter = ({ forecast = {} }) => {
  const sunRise = forecast.sys.sunrise || 0;
  const sunSet = forecast.sys.sunset || 0;
  const feelsLike = forecast.main.feels_like || 0;
  const windSpeed = forecast.wind.speed || 0;

  const stack = [
    {
      label: 'Sun Rise',
      icon: '/icons/sunrise.svg',
      value: new Date(sunRise * 1000).toLocaleTimeString('tr-TR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      label: 'Sun Set',
      icon: '/icons/sunset.svg',
      value: new Date(sunSet * 1000).toLocaleTimeString('tr-TR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      label: 'Feels Like',
      icon: '/icons/temperature-feels-like.svg',
      value: `${Math.round(+feelsLike)}°`,
    },
    {
      label: 'Wind',
      icon: '/icons/wind.svg',
      value: `${Math.round(+windSpeed)} m/s`,
    },
  ];
  console.log('first', stack);
  return (
    <div className='w-full grid grid-cols-2 grid-flow-row gap-2 '>
      {stack.map((item, index) => (
        <FooterItem key={index} item={item} />
      ))}
    </div>
  );
};

export default CardFooter;
