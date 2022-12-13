import { Button, Dropdown, MenuProps } from 'antd';
import { useState } from 'react';
import { IListingFilterProps } from './listingsFilter.types';

export const ListingsFilter: React.FC<IListingFilterProps> = ({
  listings,
  setListingsOrder,
}) => {
  const [sortingType, setSortingType] = useState<string>('none');
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Price: Low to High',
      onClick: () => {
        setSortingType('Price: Low to High');
        const sort = listings.sort((el1, el2) => el1.price - el2.price);
        setListingsOrder(JSON.parse(JSON.stringify(sort)));
      },
    },
    {
      key: '2',
      label: 'Price: High to Low',
      onClick: () => {
        setSortingType('Price: High to Low');
        const sort = listings.sort((el1, el2) => el2.price - el1.price);
        setListingsOrder(JSON.parse(JSON.stringify(sort)));
      },
    },
    {
      key: '3',
      label: 'Rating: High to Low',
      onClick: () => {
        setSortingType('Rating: High to Low');
        const sort = listings.sort((el1, el2) => el2.rating - el1.rating);
        setListingsOrder(JSON.parse(JSON.stringify(sort)));
      },
    },
  ];

  return (
    <Dropdown
      className='max-w-fit'
      menu={{ items }}
      placement='bottomLeft'>
      <div>
        <span>Filter by</span>
        <Button className='ml-2'>{sortingType}</Button>
      </div>
    </Dropdown>
  );
};
