const MapControlButton = ({ text = '', onClick = () => {} }) => {
  return (
    <button
      className='w-8 h-8 text-md font-extrabold rounded-full bg-slate-50 dark:bg-slate-400 text-slate-600 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-100 border-2 border-slate-600 dark:border-slate-100 transition-all duration-300 ease-out'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MapControlButton;
