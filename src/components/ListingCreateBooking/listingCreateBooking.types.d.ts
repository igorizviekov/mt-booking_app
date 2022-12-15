/**
 * Types for listing create booking
 * @param {price} number - Price of the listing
 * @param {booking} string - Date of the booking
 * @param {setBooking} function - Set date of the booking
 */

export interface IListingCreateBooking {
  price: number;
  booking: DatePickerProps['value'] | RangePickerProps['value'] | null;
  setBooking: (a: any) => any;
}
