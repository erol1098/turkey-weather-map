const CardLoader = () => {
  return (
    <section className='w-[350px] mx-auto flex flex-col items-center justify-start gap-4 '>
      <div className='w-full h-screen flex flex-col items-center justify-center gap-4'>
        <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 dark:border-gray-300'></div>
      </div>
    </section>
  );
};

export default CardLoader;
