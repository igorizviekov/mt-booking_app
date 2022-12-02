/**
 * Types for listings component
 * @param {id} string - ID of the listing
 * @param {title} string - Title of the listing
 * @param {image} string - Image of the listing
 * @param {address} string - Address of the listing item
 * @param {price} number - Price to order/buy listing item
 * @param {numOfGuests} number -Number of guests listing item can contain
 * @param {numOfBeds} number - Number of beds listing item can contain
 * @param {rating} number - Rating of the listing item
 * @param {location} string - Location of the listing item
 * @param {description} string - Description of the listing item
 */

export interface IListingProps {
  id: string;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  rating: number;
  location: string;
  description: string;
}
