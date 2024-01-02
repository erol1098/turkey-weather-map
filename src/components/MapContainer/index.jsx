'use client';

import useMapGestures from '@/hooks/useMapGestures';
import { animated } from '@react-spring/web';
import MapControls from './MapControls';

const MapContainer = ({ children }) => {
  const { style, api, ref } = useMapGestures();

  return (
    <div className='relative w-full flex flex-col justify-center items-center gap-2 p-4 border-4 rounded-lg bg-sky-400 dark:bg-slate-600'>
      <MapControls api={api} />
      <div className='w-full h-auto flex items-center justify-center overflow-hidden'>
        <animated.div
          ref={ref}
          style={style}
          className='relative w-full will-change-transform cursor-grab touch-none overflow-hidden flex flex-col justify-start items-center select-none'
        >
          {children}
        </animated.div>
      </div>
    </div>
  );
};

export default MapContainer;
