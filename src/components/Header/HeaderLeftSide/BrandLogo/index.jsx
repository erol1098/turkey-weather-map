import Image from 'next/image';

const BrandLogo = ({ brandLogo = '' }) => {
  return (
    <Image
      src={brandLogo}
      alt='Brand Logo'
      width={40}
      height={40}
      className='rounded-full cursor-pointer'
    />
  );
};

export default BrandLogo;
