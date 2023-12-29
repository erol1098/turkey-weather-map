import { ExclamationTriangleIcon } from '@heroicons/react/16/solid';

const CardError = ({ title = '', description = '' }) => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-start gap-4 pt-16'>
      <ExclamationTriangleIcon className='w-24 h-24 text-red-500 dark:text-gray-400' />
      <h2 className='text-2xl font-semibold text-gray-900 dark:text-gray-100'>
        {title}
      </h2>
      <p className='text-gray-600 dark:text-gray-400'>{description}</p>
    </div>
  );
};

export default CardError;
