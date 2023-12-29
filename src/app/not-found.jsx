'use client';
import { useRouter } from 'next/navigation';
import { FaceFrownIcon } from '@heroicons/react/16/solid';

const NotFound = () => {
  const router = useRouter();
  return (
    <section className='flex h-lvh flex-col items-center justify-center gap-3'>
      <FaceFrownIcon className='w-24 h-24 text-red-500 dark:text-gray-400' />
      <h2 className='text-2xl text-center'>Page Not Found</h2>
      <p className='text-lg text-center'>
        The page you are looking for does not exist.
      </p>
      <button
        className='mt-4 rounded-md bg-blue-500 dark:bg-slate-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400 dark:hover:bg-slate-500'
        onClick={() => {
          router.back();
        }}
      >
        <span className='text-lg'>Go back</span>
      </button>
    </section>
  );
};

export default NotFound;
