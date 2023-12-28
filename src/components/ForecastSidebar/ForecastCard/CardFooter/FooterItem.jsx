import Image from 'next/image';

const FooterItem = ({ item = {} }) => {
  return (
    <div className='flex items-center justify-center gap-3 shadow-md p-2 rounded-md hover:opacity-80 cursor-pointer  bg-red-500 dark:bg-gray-500'>
      <div className='flex items-center justify-start gap-2'>
        <Image src={item.icon} alt={item.label} width={50} height={50} />
      </div>
      <div className='flex flex-col gap-1'>
        <span className='text-lg font-bold text-white dark:text-slate-900'>
          {item.value}
        </span>
        <span className='text-md font-normal text-white dark:text-slate-900'>
          {item.label}
        </span>
      </div>
    </div>
  );
};

export default FooterItem;
