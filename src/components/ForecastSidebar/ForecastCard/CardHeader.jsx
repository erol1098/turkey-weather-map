const CardHeader = ({ city = '' }) => {
  return (
    <h2 className='text-3xl font-extrabold text-slate-200 dark:text-slate-900'>
      {city}
    </h2>
  );
};

export default CardHeader;
