const PageTitle = ({ title = '', subtitle = '' }) => {
  return (
    <div className='flex flex-col self-start md:self-center items-center justify-start gap-2'>
      <h2 className='text-3xl font-semibold text-gray-900 dark:text-gray-100'>
        {title}
      </h2>
      <p className='text-gray-800 dark:text-gray-300'>{subtitle}</p>
    </div>
  );
};

export default PageTitle;
