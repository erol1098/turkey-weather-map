'use client';
import TurkeyMap from 'turkey-map-react';

const Map = () => {
  return (
    <TurkeyMap
      hoverable={true}
      onClick={({ plateNumber, name }) =>
        console.log('Clicked on ' + plateNumber + ' - ' + name + '!')
      }
      showTooltip={true}
    />
  );
};

export default Map;
