import {
  Avatar,
  Card,
  Space,
  Divider,
  Carousel,
  Alert,
  Spin,
  List,
} from 'antd';

import { useAppSelector } from '../../store/hooks';
import { IListingProps } from '../Listings/listings.types.d';
import { useQuery } from '../../lib/api';
import { BookingCard } from '../../components';
import { ListingItem } from '../../components/ListingItem';

export const User = () => {
  const { authData } = useAppSelector((state) => state.auth);
  const [{ loading, data, error }] = useQuery<IListingProps[]>();

  return (
    <div className='flex items-center justify-center my-12'>
      <Card className='w-1/2'>
        <Space
          direction='vertical'
          size='large'
          className='flex'>
          <div className='flex justify-center'>
            <Avatar
              size={64}
              icon={<img src={authData.profileObj.imageUrl} />}
            />
          </div>
          <Divider plain>
            <span className='text-2xl'>Details</span>
          </Divider>
          <div>
            <div className='text-lg font-bold'>
              Name: {authData.profileObj.name}
            </div>
            <div className='text-lg font-bold'>
              Email: {authData.profileObj.email}
            </div>
          </div>
          <Divider plain>
            <span className='text-2xl'>Listings</span>
          </Divider>
          <div className='flex items-center justify-center'>
            <List className='w-full'>
              {error ? (
                <Alert
                  message='Error'
                  type='error'
                  description='Something went wrong, try again later ￣\_(0_o)_/￣'
                  showIcon></Alert>
              ) : loading ? (
                <Spin size='large' />
              ) : (
                <List>
                  {data?.map((e) => {
                    return <ListingItem {...e} />;
                  })}
                </List>
              )}
            </List>
          </div>
          <Divider plain>
            <span className='text-2xl'>Bookings</span>
          </Divider>
          <div className='flex items-center justify-center'>
            {error ? (
              <Alert
                message='Error'
                type='error'
                description='Something went wrong, try again later ￣\_(0_o)_/￣'
                showIcon></Alert>
            ) : loading ? (
              <Spin size='large' />
            ) : (
              <div className='w-full bg-blue-900'>
                <Carousel className='p-4 pb-8'>
                  {data?.map((e) => {
                    return <BookingCard {...e} />;
                  })}
                </Carousel>
              </div>
            )}
          </div>
        </Space>
      </Card>
    </div>
  );
};
