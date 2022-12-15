/**
 * Types for stripe
 * @param {booking} string - Date of the booking
 * @param {price} number - Price of the listing
 */

export interface IStripeContainerProps {
  price: number;
  booking: DatePickerProps['value'] | RangePickerProps['value'] | null;
}
