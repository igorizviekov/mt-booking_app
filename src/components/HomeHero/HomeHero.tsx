import Search from 'antd/es/input/Search';
import { Content } from 'antd/es/layout/layout';
import { HomeHeroCard } from '../HomeHeroCard';

export const HomeHero = () => {
  return (
    <Content className='p-14'>
      <div>
        <h2 className='text-4xl font-bold mb-10'>
          Find a place you will love to stay at
        </h2>
        <Search
          className='w-1/2 shadow-md'
          style={{ borderRadius: '10px' }}
          size='large'
          enterButton
          placeholder='Search "San Fransisco"'
        />
      </div>
      <div className='flex items-center justify-between mt-20'>
        <HomeHeroCard
          title='Dubai'
          image='https://i2.wp.com/www.archute.com/wp-content/uploads/2016/01/beautiful-view-of-burj-khalifa.jpg'
        />
        <HomeHeroCard
          title='Los Angeles'
          image='https://thumbs.dreamstime.com/b/godzina-szczytu-ruch-drogowy-baltimore-maryland-52268675.jpg'
        />
        <HomeHeroCard
          title='London'
          // eslint-disable-next-line max-len
          image='https://images.unsplash.com/photo-1545853332-147d5073187e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        />
        <HomeHeroCard
          title='Torronto'
          image='https://de-academic.com/pictures/dewiki/84/Toronto_-_ON_-_CN_Tower_Illuminiert.jpg'
        />
      </div>
    </Content>
  );
};
