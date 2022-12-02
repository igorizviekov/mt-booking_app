import { IListingProps } from '../../sections/Listings/listings.types';
import { Card, Avatar, Divider } from 'antd';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useStoreState } from '../../store/hooks';
import { IListingDetailsProps } from './listingDetaild.types';

export const ListingDetails: React.FC<IListingDetailsProps> = ({
  data,
  id,
}) => {
  const { authData } = useStoreState((state) => state.auth);

  const { Meta } = Card;

  const cutString = (str: string, len: number) => {
    return str.length > len ? str.slice(0, len).trim() + '...' : str;
  };
  return (
    <Card
      style={{ width: '500px' }}
      cover={
        <Avatar
          shape='square'
          size={500}
          icon={<img src={data?.image} />}
        />
      }>
      <Meta
        title={
          <h2
            className='text-3xl'
            title={data!.title}>
            {cutString(data!.title, 30)}
          </h2>
        }
        description={
          <span className='flex items-center'>
            <a
              href={`/listings/${data!.location}`}
              className='text-blue-600 flex items-center'>
              <HiOutlineLocationMarker />
              {data!.location}
            </a>
            <span className='text-gray-300 mx-2'>|</span>
            <span title={data!.address}>{cutString(data!.address, 50)}</span>
          </span>
        }
      />
      <Divider />
      <div className='flex items-center'>
        <Avatar
          size={46}
          icon={<img src={authData.profileObj.imageUrl} />}
        />

        <div className='text-2xl ml-4'>{authData.profileObj.name}</div>
      </div>
      <Divider />
      <div className='flex flex-col'>
        <span
          className='text-2xl
        font-semibold
        mb-4'>
          About this space
        </span>
        <span>{data!.description}</span>
      </div>
    </Card>
  );
};
