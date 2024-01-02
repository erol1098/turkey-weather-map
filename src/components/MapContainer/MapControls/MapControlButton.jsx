const MapControlButton = ({ text = '', onClick = () => {} }) => {
  return (
    <button
      className='w-8 h-8 text-md font-extrabold rounded-full bg-teal-600 dark:bg-slate-600 text-slate-100 dark:text-slate-200 hover:bg-teal-700 active:bg-teal-900
         border-2 border-gray-900 dark:border-slate-200 transition-all duration-300 ease-out'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MapControlButton;
