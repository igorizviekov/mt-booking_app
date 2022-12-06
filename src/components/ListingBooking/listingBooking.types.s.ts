/**
 * Types for ListingBooking
 * @param {checkIn} string - Check in date
 * @param {checkOut} IListingProps[] - Check out date
 * @param {userId} IListingProps[] - User id
 */

export interface IListingBookingProps {
  checkIn: Date;
  checkOut: Date;
  userId: string;
}
