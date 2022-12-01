import { Avatar, Card, Space, Divider, Carousel, Alert, Spin } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useStoreState } from '../../store/hooks';
import { IListingProps } from '../Listings/listings.types.d';
import { useQuery } from '../../lib/api';
import { ListingCard } from '../../components';

export const User = () => {
  const { authData } = useStoreState((state) => state.auth);
  const [{ loading, data, error }, refetch] = useQuery<IListingProps[]>();

  return (
    <div className='flex items-center justify-center mt-12'>
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
                    return <ListingCard {...e} />;
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
