'use client';
import { useState, useEffect } from 'react';

const MapInteractionLoader = ({ mapInteraction = 0 }) => {
  const [resizingMap, setResizingMap] = useState(false);

  useEffect(() => {
    setResizingMap(true);

    const svg = document.getElementById('svg-turkey-map');
    if (svg.classList.contains('min-h-[250px]')) {
      svg.classList.replace('min-h-[250px]', 'min-h-[255px]');
    } else {
      svg.classList.replace('min-h-[255px]', 'min-h-[250px]');
    }

    setTimeout(() => {
      setResizingMap(false);
    }, 300);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapInteraction]);
  return (
    <>
      {resizingMap && (
        <div
          className='absolute top-0 left-0 z-10
            w-full h-full flex justify-center items-center bg-white dark:bg-slate-800 bg-opacity-50 dark:bg-opacity-50'
        >
          <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 dark:border-gray-300'></div>
        </div>
      )}
    </>
  );
};

export default MapInteractionLoader;
