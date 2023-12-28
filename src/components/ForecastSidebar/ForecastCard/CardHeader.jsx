'use client';
import { XCircleIcon } from '@heroicons/react/16/solid';

const CardHeader = ({ forecast = {}, closeSidebar = () => {} }) => {
  const city = forecast.name || '';
  return (
    <>
      <div className='w-full flex items-center justify-end'>
        <XCircleIcon
          className='w-10 h-10 text-slate-900 dark:text-slate-300 cursor-pointer hover:opacity-80'
          onClick={closeSidebar}
        />
      </div>
      <h2 className='text-3xl font-extrabold text-slate-900 dark:text-slate-300'>
        {city}
      </h2>
    </>
  );
};

export default CardHeader;
