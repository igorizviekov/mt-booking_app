import React, { useState } from 'react';
import { server, useQuery } from '../../lib/api/index';
import { IListingProps } from '../Listing/listings.types';
import { Spin, Row, Col, Alert } from 'antd';
import { useParams } from 'react-router-dom';
import { geocoding } from '../../lib/api/geocoding';
import { useEffect } from 'react';
import { BookingCard } from '../../components';

interface ListingsProps {
  title: string;
}

export const Listings: React.FC<ListingsProps> = ({ title }) => {
  const [{ loading, data, error }, refetch] = useQuery<IListingProps[]>();
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
      <Alert
        message='Error'
        type='error'
        description='Something went wrong, try again later ￣\_(0_o)_/￣'
        showIcon></Alert>
    );
  }

  if (loading) {
    return (
      <>
        <Row
          className='my-12'
          justify='space-around'
          align='middle'>
          <Col>
            <Spin size='large' />
          </Col>
        </Row>
      </>
    );
  }
  return (
    <div className='flex flex-wrap'>
      {listings?.map((e) => {
        return <BookingCard {...e} />;
      })}
    </div>
  );
};
