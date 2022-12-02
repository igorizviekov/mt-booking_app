import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '../../lib/api';
import { IListingProps } from '../Listings/listings.types';
import { Alert, Spin, Card, Avatar } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export const Listing = () => {
  const { id } = useParams();
  const [{ loading, data, error }] = useQuery<IListingProps[]>();
  const listingData: undefined | IListingProps = data?.filter(
    (e) => e.id === id,
  )[0];

  const { Meta } = Card;

  const cutString = (str: string, len: number) => {
    return str.length > len ? str.slice(0, len).trim() + '...' : str;
  };

  return (
    <Content className='flex items-center justify-center min-h-max my-12'>
      {error ? (
        <Alert
          message='Error'
          type='error'
          description='Something went wrong, try again later ￣\_(0_o)_/￣'
          showIcon></Alert>
      ) : loading ? (
        <Spin size='large' />
      ) : (
        <div>
          <Card
            cover={
              <Avatar
                shape='square'
                size={500}
                icon={<img src={listingData?.image} />}
              />
            }>
            <Meta
              title={
                <h2
                  className='text-3xl'
                  title={listingData!.title}>
                  {cutString(listingData!.title, 30)}
                </h2>
              }
              description={
                <span className='flex items-center'>
                  <a
                    href={`/listings/${listingData!.location}`}
                    className='text-blue-600 text-bold flex items-center'>
                    <HiOutlineLocationMarker />
                    {listingData!.location}
                  </a>
                  <span className='text-gray-300 mx-2'>|</span>
                  <span title={listingData!.address}>
                    {cutString(listingData!.address, 50)}
                  </span>
                </span>
              }
            />
          </Card>
        </div>
      )}
    </Content>
  );
};
