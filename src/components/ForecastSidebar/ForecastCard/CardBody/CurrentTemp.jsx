const CurrentTemp = ({ temp = '', weather = '' }) => {
  const tempDigits = Math.round(parseFloat(temp));

  return (
    <div className='flex flex-grow flex-col gap-3 items-center justify-start'>
      <h3 className='text-6xl font-semibold text-white dark:text-slate-900'>
        {tempDigits}&deg;
      </h3>
      <p className='capitalize text-xl font-semibold text-white dark:text-slate-900'>
        {weather}
      </p>
    </div>
  );
};

export default CurrentTemp;
