import { IListingProps } from '../../sections/Listings/listings.types';

/**
 * Types for ListingDetails
 * @param {id} string - Id of the listing
 * @param {data} IListingProps[] - Listing data
 */

export interface IListingDetailsProps {
  id: string | undefined;
  data: IListingProps[] | null;
}
