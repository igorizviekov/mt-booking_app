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
          image={require('../../mock-data/assets/preview/dubai_preview.jpg')}
        />
        <HomeHeroCard
          classList='hidden xl:block'
          href='los angeles'
          title='Los Angeles'
          image={require('../../mock-data/assets/preview/la_preview.jpg')}
        />
        <HomeHeroCard
          classList='hidden lg:block'
          href='london'
          title='London'
          image={require('../../mock-data/assets/preview/london_preview.jpg')}
        />
        <HomeHeroCard
          classList='hidden md:block'
          href='toronto'
          title='Toronto'
          image={require('../../mock-data/assets/preview/toronto_preview.jpg')}
        />
      </div>
    </Content>
  );
};
