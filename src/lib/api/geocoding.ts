import { IListingProps } from '../../sections/Listings/listings.types.d';

export const geocoding = {
  checkStringIntersection(str1: string, str2: string): boolean {
    const sep = ['/', ',', ' '];
    const reg = sep
      .map((e) => (e.match(/[a-zA-Z0-9]/) ? e : `\\${e}`))
      .join('|');

    const splitStr1 = str1.split(new RegExp(reg)).filter((e) => !!e);
    const splitStr2 = str2.split(new RegExp(reg)).filter((e) => !!e);

    for (const str1El of splitStr1) {
      for (const str2El of splitStr2) {
        if (str1El === str2El) {
          return true;
        }
      }
    }

    return false;
  },

  searchIntersections(
    addresses: Array<any>,
    listings: Array<IListingProps>,
  ): Array<IListingProps> {
    const res: Array<IListingProps> = [];
    for (const listing of listings) {
      for (const address of addresses) {
        if (
          this.checkStringIntersection(listing.address, address.display_name)
        ) {
          res.push(listing);
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
