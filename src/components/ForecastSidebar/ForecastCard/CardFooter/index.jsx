import useSetCardFooterStack from '@/hooks/useSetCardFooterStack';

import FooterItem from './FooterItem';

const CardFooter = ({ forecast = {} }) => {
  const stack = useSetCardFooterStack(forecast);

  return (
    <div className='w-full grid grid-cols-2 grid-flow-row gap-2 '>
      {stack.map((item, index) => (
        <FooterItem key={index} item={item} />
      ))}
    </div>
  );
};

export default CardFooter;
