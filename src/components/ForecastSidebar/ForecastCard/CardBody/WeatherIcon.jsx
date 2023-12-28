import Image from 'next/image';

const WeatherIcon = ({ icon = '01d', alt = 'd' }) => {
  const src = ` https://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <div className='flex flex-grow place-content-center '>
      <Image src={src} alt={alt} width={140} height={140} />
    </div>
  );
};

export default WeatherIcon;
