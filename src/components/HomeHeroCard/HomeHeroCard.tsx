import { IHomeHeroCard } from './homeHeroCard.types';

export const HomeHeroCard: React.FC<IHomeHeroCard> = ({
  title,
  image,
  wide,
  href,
}) => {
  return (
    <a
      href={'listings/' + href}
      className={
        'relative cursor-pointer h-96' + (wide ? ' w-1/2 ' : ' w-1/4')
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
