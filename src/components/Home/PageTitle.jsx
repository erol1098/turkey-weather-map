const PageTitle = ({ title = '', subtitle = '' }) => {
  return (
    <div className='flex flex-col items-center justify-center  gap-2 select-none'>
      <h2 className='text-3xl text-center font-semibold text-gray-900 dark:text-gray-100'>
        {title}
      </h2>
      <p className='text-gray-800 dark:text-gray-300'>{subtitle}</p>
    </div>
  );
};

export default PageTitle;
