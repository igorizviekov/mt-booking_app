import { IListingProps } from '../../sections/Listing/listings.types';

export const geocoding = {
  getItemCountry(item: string): string {
    return item.split(', ')[item.split(', ').length - 1];
  },
  checkStringIntersection(str1: string, str2: string): boolean {
    const splitStr1 = str1.split(', ').filter((e) => !!e);
    const splitStr2 = str2.split(', ').filter((e) => !!e);

    for (const str1El of splitStr1) {
      for (const str2El of splitStr2) {
        if (str1El.toLowerCase() === str2El.toLocaleLowerCase()) {
          return true;
        }
      }
    }

    return false;
  },

  async searchIntersections(
    addresses: Array<any>,
    listings: Array<IListingProps>,
  ): Promise<Array<IListingProps>> {
    const res: Array<IListingProps> = [];
    for (const listing of listings) {
      for (const address of addresses) {
        if (
          this.checkStringIntersection(listing.address, address.display_name)
        ) {
          if (
            res.length &&
            this.getItemCountry(res[res.length - 1].address) !==
              this.getItemCountry(address.display_name)
          ) {
            continue;
          } else {
            res.push(listing);
          }
        }
      }
    }

    return Array.from(new Set(res));
  },

  async getMatchesForRequest(
    request: string,
    listings: Array<IListingProps>,
  ): Promise<Array<IListingProps>> {
    const searchStr = request.split(' ').join('+');
    const URL = 'https://geocode.maps.co/search?q=' + searchStr;
    const addressRequest = await fetch(URL);
    const addressesByRequest = await addressRequest.json();

    return this.searchIntersections(addressesByRequest, listings);
  },
};
