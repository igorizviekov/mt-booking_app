import { List, Skeleton, Avatar } from 'antd';
import React from 'react';
import { IListingProps } from '../../sections/Listing/listings.types';

export const ListingItem: React.FC<IListingProps> = ({
  id,
  title,
  address,
  image,
}) => {
  return (
    <List.Item
      onClick={() => (window.location.href = '/listing/' + id)}
      className='cursor-pointer hover:bg-blue-100'>
      <Skeleton
        avatar
        active
        loading={false}>
        <List.Item.Meta
          key={id}
          title={title}
          description={address}
          avatar={
            <Avatar
              src={image}
              shape='square'
              size={80}
            />
          }
        />
      </Skeleton>
    </List.Item>
  );
};
