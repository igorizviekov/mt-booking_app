import React, { useState } from 'react';
import { useQuery } from '../../lib/api/index';
import { IListingProps } from '../Listing/listings.types';
import { Spin, Alert } from 'antd';
import { useParams } from 'react-router-dom';
import { geocoding } from '../../lib/api/geocoding';
import { useEffect } from 'react';
import { BookingCard } from '../../components';
import { Content } from 'antd/es/layout/layout';

interface ListingsProps {
  title: string;
}

export const Listings = () => {
  const [{ loading, data, error }] = useQuery<IListingProps[]>();
  const [listings, setListings] = useState<null | IListingProps[]>(null);
  const location: string | undefined = useParams().location;

  useEffect(() => {
    async function fetchData() {
      if (data && location) {
        return setListings(
          await geocoding.getMatchesForRequest(location, data),
        );
      }

      setListings(data);
    }

    fetchData();
  }, [data]);

  if (error) {
    return (
      <Content className='flex items-center justify-center'>
        <Alert
          message='Error'
          type='error'
          description='Something went wrong, try again later ￣\_(0_o)_/￣'
          showIcon></Alert>
      </Content>
    );
  }

  if (loading) {
    return (
      <Content className='flex items-center justify-center'>
        <Spin size='large' />
      </Content>
    );
  }

  return (
    <>
      {listings ? (
        listings?.length ? (
          listings?.map((e) => <BookingCard {...e} />)
        ) : (
          <h2>no items</h2>
        )
      ) : (
        <Content className='flex items-center justify-center'>
          <Spin size='large' />
        </Content>
      )}
    </>
  );
};
