import FooterItem from './FooterItem';

import {
  WiSunset,
  WiSunrise,
  WiThermometer,
  WiStrongWind,
} from 'weather-icons-react';

const CardFooter = ({ forecast = {} }) => {
  const sunRise = forecast.sys.sunrise || 0;
  const sunSet = forecast.sys.sunset || 0;
  const feelsLike = forecast.main.feels_like || 0;
  const windSpeed = forecast.wind.speed || 0;

  const stack = [
    {
      label: 'Sun Rise',
      icon: <WiSunrise size={48} color='#fde047' />,
      value: new Date(sunRise * 1000).toLocaleTimeString('tr-TR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      label: 'Sun Set',
      icon: <WiSunset size={48} color='#ea580c' />,
      value: new Date(sunSet * 1000).toLocaleTimeString('tr-TR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      label: 'Feels Like',
      icon: <WiThermometer size={48} color='#f97316' />,
      value: `${Math.round(+feelsLike)}°`,
    },
    {
      label: 'Wind',
      icon: <WiStrongWind size={48} color='#38bdf8' />,
      value: `${Math.round(+windSpeed)} m/s`,
    },
  ];

  return (
    <div className='w-full grid grid-cols-2 grid-flow-row gap-2 '>
      {stack.map((item, index) => (
        <FooterItem key={index} item={item} />
      ))}
    </div>
  );
};

export default CardFooter;
