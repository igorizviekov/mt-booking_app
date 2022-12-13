import { Card, Carousel } from 'antd';
import { ListingBooking } from '../ListingBooking/ListingBooking';

export const ListingBookings = () => {
  return (
    <Card style={{ width: '500px', height: '370px' }}>
      <div className='flex flex-col items-center'>
        <span
          className='text-2xl
        font-semibold'>
          Bookings
        </span>
        <Carousel className='bg-blue-800 w-80 mt-4 rounded-md'>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((e) => (
            <ListingBooking
              key={e}
              checkIn={new Date()}
              checkOut={new Date()}
              userId='1339'
            />
          ))}
        </Carousel>
      </div>
    </Card>
  );
};
