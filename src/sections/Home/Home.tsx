import { Button } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import { HomeHero, HomeHeroCard, HomeListings } from '../../components';
import { displayErrorMessage } from '../../lib/utils';

export const Home = () => {
  const onSearch = (value: string) => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      window.location.href = '/listings/' + trimmedValue;
    } else {
      displayErrorMessage('Error', 'Please enter valid value');
    }
  };
  return (
    <div>
      <HomeHero onSearch={onSearch} />
      <Content className='p-14'>
        <div className='flex items-center flex-col'>
          <h2 className='text-4xl font-bold mb-10'>
            Your guide for all things rental
          </h2>
          <a href='/listings/united%20states'>
            <Button type='primary'>Popular listings in USA</Button>
          </a>
        </div>
      </Content>
      <Content className='p-14'>
        <div className='flex flex-col'>
          <h2 className='text-4xl font-bold mb-10 text-center'>
            Listings of any kind
          </h2>
          <div className='flex space-x-5 justify-center sm:justify-between'>
            <HomeHeroCard
              href='toronto'
              wide
              title='Toronto'
              image={require('../../mock-data/assets/preview/toronto_preview_wide.avif')}
            />
            <HomeHeroCard
              href='cancun'
              classList='hidden sm:block'
              wide
              title='Cancún'
              image={require('../../mock-data/assets/preview/cancun_preview_wide.avif')}
            />
          </div>
        </div>
      </Content>
      <HomeListings />
    </div>
  );
};
