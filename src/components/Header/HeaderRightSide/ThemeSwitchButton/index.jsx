'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/16/solid';

const ThemeSwitchButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='w-16 h-10 p-2 bg-gray-200 rounded-full dark:bg-slate-600 '
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        console.log('first theme', theme);
      }}
    >
      {theme === 'dark' ? (
        <SunIcon className='w-6 h-6 bg-white text-yellow-400 rounded-full ring ring-white' />
      ) : (
        <MoonIcon className='w-6 h-6 bg-white text-gray-500 rounded-full ring ring-white float-right' />
      )}
    </button>
  );
};

export default ThemeSwitchButton;
