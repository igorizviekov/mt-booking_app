import { IListingProps } from '../../sections/Listing/listings.types';

/**
 * Types for ListingDetails
 * @param {listings} IListingProps[] - current listings state
 * @param {setListingsOrder} function - set order of current listings state
 */

export interface IListingFilterProps {
  listings: IListingProps[];
  setListingsOrder: (a: null | IListingProps[]) => any;
}
