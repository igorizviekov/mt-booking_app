import React, { useState } from 'react';
import { server, useQuery } from '../../lib/api/index';
import { IListingProps } from '../Listing/listings.types';
import { Spin, Row, Col, Alert, Skeleton } from 'antd';
import { useParams } from 'react-router-dom';
import { geocoding } from '../../lib/api/geocoding';
import { useEffect } from 'react';
import { BookingCard } from '../../components';
import { Content } from 'antd/es/layout/layout';

interface ListingsProps {
  title: string;
}

export const Listings: React.FC<ListingsProps> = ({ title }) => {
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

  useEffect(() => {
    console.log(!!listings);
  });

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

  if (loading) {
    return (
      <Content className='flex items-center justify-center min-h-max my-12'>
        <Spin size='large' />
      </Content>
    );
  }
  return (
    <Content className='flex items-center justify-between min-h-max my-12'>
      {listings ? (
        listings.length ? (
          <>
            {listings?.map((e) => {
              return <BookingCard {...e} />;
            })}
          </>
        ) : (
          <h2>no items</h2>
        )
      ) : (
        <Spin size='large' />
      )}
    </Content>
  );
};
