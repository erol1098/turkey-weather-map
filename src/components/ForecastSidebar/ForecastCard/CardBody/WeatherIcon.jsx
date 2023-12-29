import Image from 'next/image';

const WeatherIcon = ({ icon = '01d', alt = 'icon' }) => {
  const src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div className='flex flex-grow place-content-center'>
      <Image
        className='rounded-full'
        src={src}
        alt={alt}
        width={140}
        height={140}
        placeholder='blur'
        blurDataURL='/icons/loader.svg'
      />
    </div>
  );
};

export default WeatherIcon;
