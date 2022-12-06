import { Avatar, Card } from 'antd';
import { FaUserAstronaut } from 'react-icons/fa';
import React from 'react';
import { IListingBookingProps } from './listingBooking.types.s';

export const ListingBooking: React.FC<IListingBookingProps> = ({
  checkIn,
  checkOut,
  userId,
}) => {
  return (
    <div className='flex justify-center p-4 pb-8'>
      <Card className='w-56 h-56 bg-gray-100'>
        <div className='flex flex-col items-center space-y-4'>
          <Avatar
            className='mx-auto mb-4'
            icon={<FaUserAstronaut size={90} />}
            shape='square'
            size={90}
          />
          <div className='text-xs'>
            Check in:{' '}
            <span className='font-bold'>{checkIn.toDateString()}</span>
          </div>
          <div className='text-xs'>
            Check out:{' '}
            <span className='font-bold'>{checkOut.toDateString()}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};
