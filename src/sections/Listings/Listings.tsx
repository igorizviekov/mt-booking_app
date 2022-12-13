import React, { useState } from 'react';
import { useQuery } from '../../lib/api/index';
import { IListingProps } from '../Listing/listings.types';
import { Spin, Alert } from 'antd';
import { useParams } from 'react-router-dom';
import { geocoding } from '../../lib/api/geocoding';
import { useEffect } from 'react';
import { BookingCard, ListingsFilter } from '../../components';
import { Content } from 'antd/es/layout/layout';

export const Listings = () => {
  const [{ loading, data, error }] = useQuery<IListingProps[]>();
  const [searchingPlaces, setSearchingPlaces] = useState<Array<string>>([]);
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
  }, [data, location]);

  useEffect(() => {
    if (listings) {
      setSearchingPlaces(Array.from(new Set(listings?.map((e) => e.location))));
    }
  }, [listings]);

  if (error) {
    return (
      <Content className='flex items-center justify-center p-14'>
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
      <Content className='flex items-center justify-center p-14'>
        <Spin size='large' />
      </Content>
    );
  }

  return (
    <>
      {listings ? (
        listings?.length ? (
          <Content className='flex p-14 flex-col space-y-10'>
            <ListingsFilter
              listings={listings}
              setListingsOrder={setListings}
            />
            {location ? (
              <div className='text-2xl font-bold'>
                Searching in: {searchingPlaces.join(', ')}
              </div>
            ) : null}
            <div className='flex items-center space-x-5'>
              {listings?.map((e) => (
                <BookingCard
                  {...e}
                  key={e.id}
                />
              ))}
            </div>
          </Content>
        ) : (
          <Content className='flex items-center justify-center p-14'>
            <h2>no items</h2>
          </Content>
        )
      ) : (
        <Content className='flex items-center justify-center p-14'>
          <Spin size='large' />
        </Content>
      )}
    </>
  );
};
