import React from 'react';
import { Button, Card, DatePicker, DatePickerProps, Divider } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import { IListingCreateBooking } from './listingCreateBooking.types.d';

export const ListingCreateBooking: React.FC<IListingCreateBooking> = ({
  price,
  booking,
  setBooking,
}) => {
  const onChange = (
    value: DatePickerProps['value'] | RangePickerProps['value'],
  ) => {
    setBooking(value);
  };

  const onSubmit = () => {
    alert(booking);
  };

  return (
    <Card className='h-80'>
      <div className='flex flex-col justify-between items-center'>
        <div className='text-3xl'>
          <span className='font-bold'>${price}</span>/day
        </div>
        <Divider />
        <form
          className='flex items-center flex-col'
          onSubmit={onSubmit}>
          <div className='text-xl font-bold'>Stay time</div>
          <DatePicker.RangePicker
            className='mt-4'
            showTime={{ format: 'HH:mm' }}
            format='YYYY-MM-DD HH:mm'
            onChange={onChange}
          />
          <Divider />
          <Button onClick={onSubmit}>Request to book</Button>
        </form>
      </div>
    </Card>
  );
};
