import Search from 'antd/es/input/Search';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import { HomeHeroCard } from '../HomeHeroCard';
import { HomeHeroProps } from './homeHero.types';

export const HomeHero: React.FC<HomeHeroProps> = ({ onSearch }) => {
  return (
    <Content className='p-14'>
      <div>
        <h2 className='text-4xl font-bold mb-10'>
          Find a place you will love to stay at
        </h2>
        <Search
          className='sm:w-1/2 shadow-md'
          style={{ borderRadius: '10px' }}
          size='large'
          enterButton
          placeholder='Search "San Fransisco"'
          onSearch={onSearch}
        />
      </div>
      <div className='flex items-center md:justify-between mt-20 space-x-5 justify-center'>
        <HomeHeroCard
          href='dubai'
          title='Dubai'
          image='https://i2.wp.com/www.archute.com/wp-content/uploads/2016/01/beautiful-view-of-burj-khalifa.jpg'
        />
        <HomeHeroCard
          classList='hidden xl:block'
          href='los angeles'
          title='Los Angeles'
          image='https://thumbs.dreamstime.com/b/godzina-szczytu-ruch-drogowy-baltimore-maryland-52268675.jpg'
        />
        <HomeHeroCard
          classList='hidden lg:block'
          href='london'
          title='London'
          // eslint-disable-next-line max-len
          image='https://images.unsplash.com/photo-1545853332-147d5073187e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        />
        <HomeHeroCard
          classList='hidden md:block'
          href='toronto'
          title='Toronto'
          image='https://de-academic.com/pictures/dewiki/84/Toronto_-_ON_-_CN_Tower_Illuminiert.jpg'
        />
      </div>
    </Content>
  );
};
