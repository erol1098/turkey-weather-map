const Footer = () => {
  return (
    <footer className='w-full h-16 flex flex-wrap items-center justify-center gap-1 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 px-4'>
      <div className='flex items-center justify-center gap-1'>
        <span className='text-slate-600 dark:text-slate-100 font-semibold text-md'>
          &copy; {new Date().getFullYear()}
        </span>
        <span className='flex items-center justify-center gap-1'>
          <a
            className='text-blue-600  dark:text-blue-100 font-semibold text-md'
            href='https://github.com/erol1098/turkey-weather-map'
            target='_blank'
          >
            MeteoMap Türkiye
          </a>
        </span>
      </div>
      <div className='flex items-center justify-center gap-1'>
        <span className='text-slate-600 dark:text-slate-100 font-semibold text-md'>
          by
        </span>
        <a
          className='text-slate-600 dark:text-slate-100 font-bold text-md'
          href='https://www.linkedin.com/in/erol-mahmutoglu/'
          target='_blank'
        >
          Erol Mahmutoğlu
        </a>
      </div>
    </footer>
  );
};

export default Footer;
