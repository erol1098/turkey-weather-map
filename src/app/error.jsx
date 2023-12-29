'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { FaceFrownIcon } from '@heroicons/react/16/solid';

export default function Error({ error, reset }) {
  const router = useRouter();
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className='flex h-lvh flex-col items-center justify-center gap-3'>
      <FaceFrownIcon className='w-24 h-24 text-red-500 dark:text-gray-400' />
      <h2 className='text-2xl text-center'>Something went wrong!</h2>
      <p className='text-lg text-center'>
        We are working on it. Please try again later.
      </p>
      <div className='flex gap-8 items-center justify-center'>
        <button
          className='mt-4 rounded-md bg-blue-500 dark:bg-slate-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400 dark:hover:bg-slate-500'
          onClick={() => {
            router.back();
          }}
        >
          <span className='text-lg'>Go back</span>
        </button>
        <button
          className='mt-4 rounded-md bg-orange-500 dark:bg-slate-600 px-4 py-2 text-sm text-white transition-colors hover:bg-orange-400 dark:hover:bg-slate-500'
          onClick={
            // Attempt to recover by trying to re-render the invoices route
            () => reset()
          }
        >
          <span className='text-lg'>Try again</span>
        </button>
      </div>
    </section>
  );
}
