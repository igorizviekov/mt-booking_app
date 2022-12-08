import { IListingProps } from '../../sections/Listing/listings.types';

/**
 * Types for ListingDetails
 * @param {id} string - Id of the listing
 * @param {data} IListingProps[] - Listing data
 */

export interface IListingDetailsProps {
  id: string;
  data: IListingProps | undefined;
}
