const FooterItem = ({ item = {} }) => {
  return (
    <div className='flex items-center justify-center gap-3 shadow-md p-2 rounded-md hover:opacity-95 bg-teal-700 dark:bg-slate-400'>
      <div className='flex items-center justify-start gap-2'>{item.icon}</div>
      <div className='flex flex-col gap-1'>
        <span className='text-lg font-bold text-white dark:text-slate-950'>
          {item.value}
        </span>
        <span className='text-md font-normal text-white dark:text-slate-950'>
          {item.label}
        </span>
      </div>
    </div>
  );
};

export default FooterItem;
