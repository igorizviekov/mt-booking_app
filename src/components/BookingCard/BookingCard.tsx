import { Avatar, Card, Rate } from 'antd';
import React from 'react';
import { displayInfoMessage } from '../../lib/utils';
import { IListingProps } from '../../sections/Listing/listings.types';

export const BookingCard: React.FC<IListingProps> = ({
  id,
  address,
  title,
  price,
  rating,
  checkInDate,
  checkOutDate,
}) => {
  const { Meta } = Card;
  const disabled: boolean = !!(
    checkInDate &&
    checkOutDate &&
    new Date(checkOutDate).getTime() > new Date().getTime()
  );

  const cutString = (str: string, len: number) => {
    return str.length > len ? str.slice(0, len).trim() + '...' : str;
  };

  const clickHandler = () => {
    if (disabled) {
      displayInfoMessage(
        'Can not book this listing!',
        `Sorry, but this listing is already booked by another user till ${checkOutDate}`,
      );
    } else {
      window.location.href = '/listing/' + id;
    }
  };
  return (
    <div className='flex justify-center'>
      <Card
        key={id}
        className={
          'flex flex-col ' +
          (disabled
            ? 'bg-gray-100'
            : 'hover:bg-blue-100 transition-all cursor-pointer duration-300')
        }
        onClick={clickHandler}
        style={{ width: 240 }}
        cover={
          <Avatar
            className='mx-auto mt-5'
            shape='square'
            size={200}
            icon={
              <img src={require(`../../mock-data/assets/listings/${id}.jpg`)} />
            }
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
          <span className='text-lg mt-4'>
            {disabled ? 'Booked!' : `Price: $${price}`}
          </span>
        </div>
      </Card>
    </div>
  );
};
