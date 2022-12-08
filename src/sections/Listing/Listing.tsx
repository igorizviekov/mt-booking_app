import { Alert, Spin } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import { useParams } from 'react-router-dom';
import {
  ListingBookings,
  ListingCreateBooking,
  ListingDetails,
} from '../../components';
import { useQuery } from '../../lib/api';
import { IListingProps } from '../Listings/listings.types';
import { NotFound } from '../NotFound';

export const Listing = () => {
  const id = useParams().id!;
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
        <div>
          <ListingDetails
            data={listingData}
            id={id}
          />
          <ListingBookings />
        </div>
        <ListingCreateBooking price={listingData!.price} />
      </div>
    </Content>
  ) : (
    <NotFound />
  );
};
