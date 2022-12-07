import { Button } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import { HomeHero, HomeHeroCard } from '../../components';
import { displayErrorMessage } from '../../lib/utils';

export const Home = () => {
  const onSearch = (value: string) => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      window.location.href = '/listing/' + trimmedValue;
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
          <div className='flex justify-between space-x-5'>
            <HomeHeroCard
              href='toronto'
              wide
              title='Toronto'
              image='https://de-academic.com/pictures/dewiki/84/Toronto_-_ON_-_CN_Tower_Illuminiert.jpg'
            />
            <HomeHeroCard
              href='cancun'
              wide
              title='Cancún'
              image='https://worldwidevacationsco.com/images/blog/cancun-best-time-to-travel.jpg'
            />
          </div>
        </div>
      </Content>
    </div>
  );
};
