import { XCircleIcon } from '@heroicons/react/16/solid';

const CloseCard = ({ closeSidebar = () => {} }) => {
  return (
    <div className='w-full flex items-center justify-end'>
      <XCircleIcon
        className='w-10 h-10 text-slate-900 dark:text-slate-300 cursor-pointer hover:opacity-80'
        onClick={closeSidebar}
      />
    </div>
  );
};

export default CloseCard;
