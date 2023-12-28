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
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN87+LyHwAGGQJ4TqcChgAAAABJRU5ErkJggg=='
      />
    </div>
  );
};

export default WeatherIcon;
