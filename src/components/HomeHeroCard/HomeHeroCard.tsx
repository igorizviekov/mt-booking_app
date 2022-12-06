import { IHomeHeroCard } from './homeHeroCard.types';

export const HomeHeroCard: React.FC<IHomeHeroCard> = ({ title, image }) => {
  return (
    <div className='relative h-96 cursor-pointer w-72'>
      <img
        src={image}
        alt='card'
        className='absolute h-96 contrast-50 hover:contrast-100 transition-all duration-700 w-72'
      />
      <div className='absolute z-10 text-white bottom-3 left-3 text-2xl font-bold'>
        {title}
      </div>
    </div>
  );
};
