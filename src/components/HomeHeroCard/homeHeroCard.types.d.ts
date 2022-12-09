/**
 * Types for Home Hero Card
 * @param {image} string - image of the  Home Hero Card
 * @param {title} string - title of the  Home Hero Card
 * @param {wide} boolean - make card wider
 * @param {href} string - set redirect ref
 */

export interface IHomeHeroCard {
  image: string;
  title: string;
  wide?: boolean;
  href: string;
}
