import MapControlButton from './MapControlButton';

const MapControls = ({ api = {} }) => {
  return (
    <div className='absolute bottom-4 left-4 flex flex-col items-center justify-end gap-1 overflow-hidden z-10 p-1'>
      <MapControlButton
        text='↻'
        onClick={() => api.start({ x: 0, y: 0, scale: 1, rotateZ: 0 })}
      />
      <MapControlButton
        text='+'
        onClick={() => {
          api.start({ x: 0, y: 0, scale: 1, rotateZ: 0 });
          api.start({ scale: 2 });
        }}
      />
      <MapControlButton
        text='-'
        onClick={() => {
          api.start({
            x: 0,
            y: 0,
            scale: 1,
            rotateZ: 0,
          });
        }}
      />
    </div>
  );
};

export default MapControls;
