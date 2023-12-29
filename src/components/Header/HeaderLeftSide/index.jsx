'use client';
import { useRouter } from 'next/navigation';

import BrandLogo from './BrandLogo';

const HeaderLeftSide = ({ brand }) => {
  const router = useRouter();
  return (
    <div
      className='flex items-center justify-center gap-3 cursor-pointer'
      onClick={() => router.push('/')}
    >
      <BrandLogo brandLogo={brand.logo} />
      <h1 className='text-xl font-bold text-gray-900 dark:text-gray-100'>
        {brand.name}
      </h1>
    </div>
  );
};

export default HeaderLeftSide;
