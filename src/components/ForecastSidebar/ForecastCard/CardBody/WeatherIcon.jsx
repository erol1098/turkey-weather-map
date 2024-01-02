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
        blurDataURL='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIzMiIgc3Ryb2tlLXdpZHRoPSI4IiBzdHJva2U9IiNmMWY1ZjkiIHN0cm9rZS1kYXNoYXJyYXk9IjUwLjI2NTQ4MjQ1NzQzNjY5IDUwLjI2NTQ4MjQ1NzQzNjY5IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2NpcmNsZT4KPCEtLSBbbGRpb10gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+PC9zdmc+'
      />
    </div>
  );
};

export default WeatherIcon;
