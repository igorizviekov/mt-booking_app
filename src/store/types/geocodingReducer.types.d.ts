export enum GeocodingActionTypes {
  ADD_TO_STORY = 'ADD_TO_STORY',
  REMOVE_FROM_STORY = 'REMOVE_FROM_STORY',
  CLEAR_STORY = 'CLEAR_STORY',
  FETCH_STORY = 'FETCH_STORY',
}

export interface IGeocodingItem {
  place_id: number;
  licence: string;
  powered_by: string;
  osm_type: string;
  osm_id: number;
  boundingbox: {
    '0': string;
    '1': string;
    '2': string;
    '3': string;
  };

  lat: string;
  lon: string;
  display_name: string;
  class: string;
  type: string;
  importance: number;
}

export interface IGeocodingState {
  searchHistory: Array<IGeocodingItem>;
}

export interface IAddToStoryAction {
  type: GeocodingActionTypes.ADD_TO_STORY;
  payload: IGeocodingItem;
}

export interface IRemoveFromStoryAction {
  type: GeocodingActionTypes.REMOVE_FROM_STORY;
  payload: number;
}

export interface IClearStoryAction {
  type: GeocodingActionTypes.CLEAR_STORY;
}

export type IGeocodingAction =
  | IAddToStoryAction
  | IRemoveFromStoryAction
  | IClearStoryAction;
