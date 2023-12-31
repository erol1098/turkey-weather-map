import CurrentTemp from './CurrentTemp';
import WeatherIcon from './WeatherIcon';

const CardBody = ({ forecast = {} }) => {
  return (
    <div className='w-full flex gap-3 items-center justify-between shadow-md p-2 rounded-md hover:opacity-95 bg-teal-700 dark:bg-slate-400'>
      <WeatherIcon
        icon={forecast.weather[0].icon}
        alt={forecast.weather[0].description}
      />
      <CurrentTemp
        temp={forecast.main.temp}
        weather={forecast.weather[0].description}
      />
    </div>
  );
};

export default CardBody;
