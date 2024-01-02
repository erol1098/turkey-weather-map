'use client';
import { useState, useEffect, useRef } from 'react';

import { useSpring } from '@react-spring/web';
import { createUseGesture, dragAction, pinchAction } from '@use-gesture/react';

const useGesture = createUseGesture([dragAction, pinchAction]);

const useMapGestures = () => {
  const [mapInteraction, setMapInteraction] = useState(0);

  console.log('mapInteraction', mapInteraction);
  useEffect(() => {
    const handler = (e) => e.preventDefault();
    document.addEventListener('gesturestart', handler);
    document.addEventListener('gesturechange', handler);
    document.addEventListener('gestureend', handler);
    return () => {
      document.removeEventListener('gesturestart', handler);
      document.removeEventListener('gesturechange', handler);
      document.removeEventListener('gestureend', handler);
    };
  }, []);

  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    rotateZ: 0,
  }));
  const ref = useRef();

  useGesture(
    {
      onDrag: ({ pinching, cancel, offset: [x, y], ...rest }) => {
        if (pinching) return cancel();
        api.start({ x, y });
      },
      onPinch: ({
        origin: [ox, oy],
        first,
        movement: [ms],
        offset: [s, a],
        memo,
      }) => {
        if (first) {
          const { width, height, x, y } = ref.current?.getBoundingClientRect();
          const tx = ox - (x + width / 2);
          const ty = oy - (y + height / 2);
          memo = [style.x.get(), style.y.get(), tx, ty];
        }

        const x = memo[0] - (ms - 1) * memo[2];
        const y = memo[1] - (ms - 1) * memo[3];
        // api.start({ scale: s, rotateZ: a, x, y });
        api.start({ scale: s, rotateZ: 0, x, y });

        setMapInteraction((prev) => prev + 1);
        return memo;
      },
    },
    {
      target: ref,
      drag: { from: () => [style.x.get(), style.y.get()] },
      pinch: { scaleBounds: { min: 1, max: 4 }, rubberband: true },
    }
  );

  const zoomIn = () => {
    const scale = style.scale.get() + 0.5;

    setMapInteraction((prev) => prev + 1);
    api.start({ scale });
  };

  const zoomOut = () => {
    const scale = style.scale.get() - 0.5;

    if (scale < 0.9) return;
    setMapInteraction((prev) => prev + 1);
    api.start({ scale });
  };

  const resetMap = () => {
    setMapInteraction((prev) => prev + 1);
    api.start({ x: 0, y: 0, scale: 1, rotateZ: 0 });
  };

  return { ref, style, zoomIn, zoomOut, resetMap, mapInteraction };
};

export default useMapGestures;
