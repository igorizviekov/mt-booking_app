import { Avatar, Card, Rate } from 'antd';
import React from 'react';
import { IListingProps } from '../../sections/Listing/listings.types';

export const BookingCard: React.FC<IListingProps> = ({
  id,
  address,
  image,
  title,
  price,
  rating,
}) => {
  const { Meta } = Card;

  const cutString = (str: string, len: number) => {
    return str.length > len ? str.slice(0, len).trim() + '...' : str;
  };
  return (
    <div className='flex justify-center'>
      <Card
        key={id}
        className='flex flex-col hover:bg-blue-100'
        onClick={() => (window.location.href = '/listing/' + id)}
        hoverable
        style={{ width: 240 }}
        cover={
          <Avatar
            className='mx-auto mt-5'
            shape='square'
            size={200}
            icon={<img src={image} />}
          />
        }>
        <Meta
          title={cutString(title, 20)}
          description={cutString(address, 25)}
        />
        <div className='mt-8 flex flex-col h-16'>
          <Rate
            value={rating}
            disabled
          />
          <span>Price: ${price}$</span>
        </div>
      </Card>
    </div>
  );
};
