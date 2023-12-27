import HeaderLeftSide from './HeaderLeftSide';
import HeaderRightSide from './HeaderRightSide';

const Header = () => {
  const brand = {
    name: 'Turkey Weather Map',
    logo: '/logo.png',
  };
  return (
    <header className='bg-white dark:bg-slate-800 h-16 w-full shadow-lg'>
      <div className='lg:container lg:mx-auto flex items-center justify-between px-5 bg-white dark:bg-slate-800 h-full w-full '>
        <HeaderLeftSide brand={brand} />
        <HeaderRightSide />
      </div>
    </header>
  );
};

export default Header;
