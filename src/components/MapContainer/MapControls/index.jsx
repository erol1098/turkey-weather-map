import MapControlButton from './MapControlButton';

const MapControls = ({
  zoomIn = () => {},
  zoomOut = () => {},
  resetMap = () => {},
}) => {
  return (
    <div className='absolute bottom-4 left-4 flex flex-col items-center justify-end gap-1 overflow-hidden z-10 p-1'>
      <MapControlButton text='↻' onClick={resetMap} />
      <MapControlButton text='+' onClick={zoomIn} />
      <MapControlButton text='-' onClick={zoomOut} />
    </div>
  );
};

export default MapControls;
