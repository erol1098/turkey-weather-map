import BrandLogo from './BrandLogo';

const HeaderLeftSide = ({ brand }) => {
  return (
    <div className='flex items-center justify-center gap-3'>
      <BrandLogo brandLogo={brand.logo} />
      <h1 className='text-xl font-bold text-gray-900 dark:text-gray-100'>
        {brand.name}
      </h1>
    </div>
  );
};

export default HeaderLeftSide;
