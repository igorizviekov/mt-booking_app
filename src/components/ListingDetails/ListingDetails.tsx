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
  const listingData: undefined | IListingProps = data?.filter(
    (e) => e.id === id,
  )[0];

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
              className='text-blue-600 flex items-center'>
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
        <span>{listingData!.description}</span>
      </div>
    </Card>
  );
};
