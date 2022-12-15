import { Alert, Spin } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ListingBookings,
  ListingCreateBooking,
  ListingDetails,
  StripeContainer,
} from '../../components';
import { useQuery } from '../../lib/api';
import { IListingProps } from './listings.types.d';
import { NotFound } from '../NotFound';
import { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';

export const Listing = () => {
  const id = useParams().id!;
  const [booking, setBooking] = useState<
    DatePickerProps['value'] | RangePickerProps['value'] | null
  >(null);

  const [{ loading, data, error }] = useQuery<IListingProps[]>();

  const listingData: undefined | IListingProps = data?.filter(
    (e) => e.id === id,
  )[0];

  if (loading) {
    return (
      <Content className='flex items-center justify-center min-h-max my-12'>
        <Spin size='large' />
      </Content>
    );
  }

  if (error) {
    return (
      <Content className='flex items-center justify-center min-h-max my-12'>
        <Alert
          message='Error'
          type='error'
          description='Something went wrong, try again later ￣\_(0_o)_/￣'
          showIcon></Alert>
      </Content>
    );
  }

  return listingData ? (
    <Content className='flex items-center justify-center min-h-max my-12'>
      <div className='flex w-5/6 justify-between'>
        <div className='space-y-10'>
          <ListingDetails
            data={listingData}
            id={id}
          />
          <ListingBookings />
        </div>
        <div className='w-1/3 space-y-10'>
          <ListingCreateBooking
            price={listingData!.price}
            booking={booking}
            setBooking={setBooking}
          />
          <StripeContainer
            booking={booking}
            price={listingData!.price}
          />
        </div>
      </div>
    </Content>
  ) : (
    <NotFound />
  );
};
