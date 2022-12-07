import { Alert, Col, List, Row, Spin } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useQuery } from '../../lib/api';
import { IListingProps } from '../../sections/Listings/listings.types';
import { BookingCard } from '../BookingCard';

export const HomeListings = () => {
  const [{ loading, data, error }] = useQuery<IListingProps[]>();
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
    <Content className='p-14'>
      <h2 className='text-4xl font-bold mb-10 text-center'>Premium listings</h2>
      <div className='flex items-center justify-between'>
        {data
          ?.sort((a, b) => b.price - a.price)
          .slice(0, 5)
          .map((e) => {
            return <BookingCard {...e} />;
          })}
      </div>
    </Content>
  );
};
