import { any } from 'prop-types';
import { useEffect } from 'react';
import { IHomeHeroCard } from './homeHeroCard.types';

export const HomeHeroCard: React.FC<IHomeHeroCard> = ({
  title,
  image,
  wide,
  href,
  classList = '',
}) => {
  useEffect(() => {
    const img = new Image();
    img.src = image;
  }, []);
  return (
    <a
      href={'listings/' + href}
      className={
        'relative cursor-pointer h-96' +
        (wide
          ? ' w-96 sm:w-1/2 '
          : ' w-96 xl:w-1/3 lg:w-1/2 md:w-3/4 sm:w-96') +
        ' ' +
        classList
      }>
      <div>
        <img
          src={image}
          alt='card'
          className='absolute contrast-50 hover:contrast-100 transition-all duration-700 w-full h-96'
        />
        <div className='absolute z-10 text-white bottom-3 left-3 text-2xl font-bold'>
          {title}
        </div>
      </div>
    </a>
  );
};
